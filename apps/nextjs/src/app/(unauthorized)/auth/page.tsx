import { auth } from "@acme/auth";
import { redirect } from "next/navigation";
import SignUpForm from "~/app/_components/signup-form";


export default async function AuthPage() {

  const session = await auth();

  if (session.user) {
    redirect("/");
  }

  return (
    <div>
      <h1>Auth Page</h1>
      <SignUpForm />
    </div>
  );
}