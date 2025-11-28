import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const url = req.nextUrl;
  const token = req.cookies.get("token")?.value;
  const pathname = url.pathname;
  const setSecurityHeaders = (res) => {
    try {
      res.headers.set("X-Frame-Options", "DENY");
      res.headers.set("X-Content-Type-Options", "nosniff");
      res.headers.set("Referrer-Policy", "no-referrer");
      res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
      const csp = "default-src 'self'; img-src 'self' data: https:; media-src 'self' https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'strict-dynamic'; connect-src 'self' https:";
      res.headers.set("Content-Security-Policy", csp);
    } catch {}
    return res;
  };

  if (pathname === "/Pages/login") {
    if (token) {
      const inicioUrl = new URL("/dashboard/inicio", url);
      return setSecurityHeaders(NextResponse.redirect(inicioUrl));
    }
    return setSecurityHeaders(NextResponse.next());
  }

  try {
    if (!token) {
      const loginUrl = new URL("/Pages/login", url);
      return setSecurityHeaders(NextResponse.redirect(loginUrl));
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "");
    const { payload } = await jwtVerify(token, secret);
    if (payload?.rol !== "admin") {
      const unauthUrl = new URL("/dashboard/unauthorized", url);
      return setSecurityHeaders(NextResponse.redirect(unauthUrl));
    }
    return setSecurityHeaders(NextResponse.next());
  } catch (e) {
    const loginUrl = new URL("/Pages/login", url);
    return setSecurityHeaders(NextResponse.redirect(loginUrl));
  }
}

export const config = {
  matcher: ["/dashboard/admin/:path*", "/Pages/login"],
};
