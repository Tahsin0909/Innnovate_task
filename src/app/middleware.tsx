import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
    return NextResponse.redirect(new URL('/home', request.url))
};

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
}

export default middleware;