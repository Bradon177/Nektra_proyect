import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const url = req.nextUrl;
  const token = req.cookies.get("token")?.value;
  const pathname = url.pathname;

  if (pathname === "/Pages/login") {
    if (token) {
      const inicioUrl = new URL("/dashboard/inicio", url);
      return NextResponse.redirect(inicioUrl);
    }
    return NextResponse.next();
  }

  try {
    if (!token) {
      const loginUrl = new URL("/Pages/login", url);
      return NextResponse.redirect(loginUrl);
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "");
    const { payload } = await jwtVerify(token, secret);
    if (payload?.rol !== "admin") {
      const unauthUrl = new URL("/dashboard/unauthorized", url);
      return NextResponse.redirect(unauthUrl);
    }
    return NextResponse.next();
  } catch (e) {
    const loginUrl = new URL("/Pages/login", url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/dashboard/admin/:path*", "/Pages/login"],
};
