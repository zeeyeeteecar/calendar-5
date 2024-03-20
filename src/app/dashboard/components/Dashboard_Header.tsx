import React from "react";
import SessionInfo  from "@/lib/SessionInfo";
import axios from "axios";


export default async function Header() {

  console.log("SessionInfo", SessionInfo)

  return (
    <div className="bg-red-200 absolute h-20 w-full flex justify-between">
      <div>Header Start</div>
      {/* <div>{JSON.stringify(SessionInfo())}</div> */}
      <div>Header End</div>
    </div>
  );
}
