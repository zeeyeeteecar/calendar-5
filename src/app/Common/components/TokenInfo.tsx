"use client";
import React from "react";
import axios from "axios";

export default function TokenInfo({ _keyValue }: any) {
  const [userAuthInfo, setUserAuthInfo] = React.useState();

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/getUserAuthInfo");
    // const response:any = await fetch(
    //   "http://localhost:3000/api/users/getUserAuthInfo"
    // );
    console.log("response.data===", response ? response.data.data : "empty");
    //console.log("typeof =  ", response.data.data);
    setUserAuthInfo(response ? response.data.data : {});
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);

  const keyTitle: string = _keyValue.toString();

  return <div>{userAuthInfo && userAuthInfo[keyTitle]}</div>;
}
