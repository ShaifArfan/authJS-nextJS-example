export { auth as middleware } from "@/auth/authSetup";

console.log("hello from middleware");

export const config = {
  // matcher: ["/((?!api|/|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/my-account"],
};
