import React from "react";
import SessionInfo  from "@/lib/SessionInfo";
import axios from "axios";
import TokenInfo from "../../Common/components/TokenInfo"


export default async function Header() {

  console.log("SessionInfo", SessionInfo)

  

  return (
    <div className="bg-red-200 absolute h-20 w-full flex justify-between">
      <div><TokenInfo _keyValue={"username"} /> <TokenInfo _keyValue={"id"} /><TokenInfo _keyValue={"password"} /></div>
      <div>Header Start</div>
      {/* <div>{JSON.stringify(SessionInfo())}</div> */}
      <div>Header End</div>
    </div>
  );
}
