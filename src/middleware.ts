import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn: boolean = false;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let headers = new Headers(request.headers);

  const token = request.cookies.get("token")?.value || undefined;

  //if (pathname.startsWith("/_next")) return NextResponse.next();

  console.log("token==", token);
  console.log(request.nextUrl);
  console.log(request.url);

  if (token === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;

//   const isPublicPath =
//     path === "/login" ||
//     path === "/signup" ||
//     path === "/verifyemail" ||
//     path === "/dashboard";

//   const token = request.cookies.get("token")?.value || false;

//   if (isPublicPath && token) {
//     return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
//   }

//   //if (!isPublicPath && !token) {

//   if (isPublicPath && !token) {
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }

//   console.log("Middleware!!");
//   console.log("token==", token);
//   console.log("isPublicPath==", isPublicPath);
//   console.log("isPublicPath && token", isPublicPath && !token);

//   //return NextResponse.next();
// }

// See "Matching Paths" below to learn more
export const config = {
  //matcher: ["/", "/dashboard", "/login", "/signup", "/verifyemail"],
  matcher: ["/((?!_next/static|favicon.ico|login|api).*)"],
};
