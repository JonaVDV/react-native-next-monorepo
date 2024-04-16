import { Lucia } from "lucia";
import { db } from "@acme/db";
import {PrismaAdapter} from '@lucia-auth/adapter-prisma'

declare module "lucia" {
  interface Register {
    lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}

export interface DatabaseUserAttributes {
  username: string;
}

const adapter = new PrismaAdapter(db.session, db.user)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
    }
  }
})