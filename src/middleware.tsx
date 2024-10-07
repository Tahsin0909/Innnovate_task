import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
    console.log(request.url);
    return NextResponse.redirect(new URL('/', request.url))
};

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/blogs', '/about']
}

export default middleware;