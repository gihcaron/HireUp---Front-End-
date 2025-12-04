import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export const config = {
  matcher: [
    "/",               
    "/dashboard/:path*", 
    "/vagas/:path*", 
    "/perfil/:path*", 
    "/admin/:path*", 
  ],
};

export default function middleware(req) {
  const token = req.cookies.get("token")?.value;

  // Caso não tenha token → redireciona para login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Valida o JWT
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next(); // tudo ok
  } catch (error) {
    // Token inválido → remove cookie e joga para login
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.set("token", "", { maxAge: 0 });
    return res;
  }
}