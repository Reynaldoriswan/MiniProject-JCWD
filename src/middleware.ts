"use server"
import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'
// import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'

// 1. Specify protected and public routes
const protectedRoutes = ['/post', '/product']
const publicRoutes = ['/login', '/']

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const authToken = cookies().get('authToken')?.value as any
    console.log("authToken => ", authToken)
    let session = null
    if (authToken) {
        session = await jose.jwtVerify(authToken, new TextEncoder().encode("yourSecretKey"))
    }


    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.payload?.email) {

        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 6. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.payload?.email &&
        !req.nextUrl.pathname.startsWith('/post')
    ) {
        return NextResponse.redirect(new URL('/post', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}