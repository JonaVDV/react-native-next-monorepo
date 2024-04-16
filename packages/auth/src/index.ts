// import NextAuth from "next-auth";

// import { authConfig } from "./config";

// export type { Session } from "next-auth";

// const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth(authConfig);

// export { GET, POST, auth, signIn, signOut };

import { validateRequest } from "./validateRequest"
import { signup } from "./signup"
import { login } from "./login"
import { logout } from "./logout"
import type { Session, User} from 'lucia'

export { validateRequest as auth, signup, login, logout, type Session, type User}