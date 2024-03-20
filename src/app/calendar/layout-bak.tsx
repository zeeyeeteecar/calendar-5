// // import { authOptions } from "@/auth-options";
// // import { getServerSession } from "next-auth";
// // import { SessionProvider } from "./SessionProvider";
// // import type { ReactNode } from "react";
// // import AppLayout from "./AppLayout";

// export default async function PrivateLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const session = await getServerSession(authOptions);
//   return (
//     <SessionProvider session={session}> //
//       <AppLayout>{children}</AppLayout>
//     </SessionProvider>
//   );
// }