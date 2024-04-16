import { db } from "@acme/db";
import { authValidator } from "@acme/validators";
import { Argon2id } from "oslo/password";
import { lucia } from "./config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation.js";

interface ActionResult {
  error: string
}

export async function login(_: any, formData: FormData): Promise<ActionResult> {
  "use server";

  const result = authValidator.safeParse(formData);

  if (!result.success) {
    return { error: result.error.message };
  }


  const { username, password } = result.data;

  const existingUser = await db.user.findFirst({
    where: {
      username,
    }
  });

  if (!existingUser) {
    return { error: "Invalid username or password" };
  }

  const validPassword = await new Argon2id().verify(existingUser.password, password);

  if (!validPassword) {
    return { error: "Invalid username or password" };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/");
}