import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login'
    }, 
    callbacks: {
        authorized({auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isOnLoginPage = nextUrl.pathname === '/login';
            //console.log("pathname", nextUrl.pathname);

            if (!isLoggedIn && !isOnLoginPage) {
                return Response.redirect(new URL('/login', nextUrl));
            }

            return true;
        }
    },
    providers: [],
} satisfies NextAuthConfig;