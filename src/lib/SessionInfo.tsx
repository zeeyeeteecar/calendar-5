
import React, { useEffect } from "react";
import axios from "axios";

// export default function SessionInfo() {
//   const [userAuthInfo, setUserAuthInfo] = React.useState();

//   const getUserDetails = async () => {
//     const response = await axios.get("/api/users/getUserAuthInfo");
//     console.log("response.data===", response.data);
//     console.log("typeof =  ", response.data.data);
//     setUserAuthInfo(response.data.data);
//   };

//   useEffect(() => {
//     getUserDetails();
//   }, []);

//   return <div>{JSON.stringify(userAuthInfo)}</div>;
// }

export default async function SessionInfo() {


  
    const response = await fetch("http://localhost:3000/api/users/getUserAuthInfo");
    
    console.log("response.data===", response);
    console.log("typeof =  ", response);

  


  return response;
}
