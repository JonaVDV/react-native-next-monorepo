import { cookies } from "next/headers";
import { lucia } from "./config";
import { validateRequest } from "./validateRequest";
import { redirect } from "next/navigation";

export async function logout() {
  "use server";
  // clear lucia session
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/login")
}
