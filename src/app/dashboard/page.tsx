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

import axios from "axios";
import SideNavbar from "./components/Dashboard_SideNavbar";
import Header from "./components/Dashboard_Header";
import LeftColumn from "./components/Dashboard_LeftColumn";
import RightColumn from "./components/Dashboard_RightColumn";



export default async function Home() {


  return (
    <div className="flex">
      <div></div>

      <SideNavbar />
      <div className="flex-1 md:flex h-screen relative">
        <Header />
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
