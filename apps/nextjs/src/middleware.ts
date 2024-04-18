import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type {NextRequest} from "next/server";

const AUTH_EXCLUDE = ["/auth"]

// Or like this if you need to do something here.
export default async function middleware(request: NextRequest) {
  // empty
  const pathName = request.nextUrl.pathname;
  const origin = request.nextUrl.origin;

  if(AUTH_EXCLUDE.includes(pathName)){
    return NextResponse.next();
  }

  const verify = await fetch(`${origin}/api/auth/verify-session`, {
    headers: {
      Cookie: cookies().toString(),
    }
  })

  const verifySession = await verify.json() as {valid: boolean};

  if(!verifySession.valid){
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }

  return NextResponse.next();
}

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
