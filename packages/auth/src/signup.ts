import type ActionResult from "next/types";
import { generateId } from "lucia";
import { cookies } from "next/headers";

import { db } from "@acme/db";
import { authValidator } from "@acme/validators";
import { lucia } from "./config";
import { Argon2id } from "oslo/password";
import { redirect } from "next/navigation";


export async function signup(
  _: any,
  formData: FormData,
): Promise<typeof ActionResult> {
  "use server";

  const result = authValidator.safeParse(formData);

  if (!result.success) {
    throw new Error("Invalid form data");
  }

  const { username, password } = result.data;

  const hashedPassword = await new Argon2id().hash(password);

  const userId = generateId(15);

  // create lucia session
  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id);

  
  // set nextjs session cookie
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return redirect("/")
}
