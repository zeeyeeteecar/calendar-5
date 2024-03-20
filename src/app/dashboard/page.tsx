// "use client";
// import React from "react";
// import { useSession } from "next-auth/react";
// //import { getServerSession } from "next-auth";
// //import { authOptions } from "../api/auth/[...nextauth]/route";

// export default async function dashboard() {
//   const { data: session, status } = useSession();
//   //const session: any = await getServerSession(authOptions);

//   console.log("session", session);

//   return (
//     <>
//       <div>{session.user.Login}</div>
//       <div>dashboard</div>
//     </>
//   );
// }

import SideNavbar from "./components/Dashboard_SideNavbar";
import Header from "./components/Dashboard_Header";
import LeftColumn from "./components/Dashboard_LeftColumn";
import RightColumn from "./components/Dashboard_RightColumn";

export default function Home() {



  return (
    <div className="flex">
      <div>
        {/* <LoginSessionInfo /> */}
      </div>
      {/* <LoginSessionInfo /> */}
      <SideNavbar />
      <div className="flex-1 md:flex h-screen relative">
        <Header />
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
