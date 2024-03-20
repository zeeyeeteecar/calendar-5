"use client";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage({ params }: any) {
  const router = useRouter();
  const [userAuthInfo, setUserAuthInfo] = React.useState();

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/getUserAuthInfo");
    console.log("response.data===", response.data);
    console.log("typeof =  ", response.data.data);
    setUserAuthInfo(response.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("Logout successful");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error);
      //toast.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-300 ">
      {" "}
      <label className="text-center text-slate-500 text-2xl my-2  w-[300px] ">
        profile
      </label>
      <label className="text-center text-slate-500 text-2xl my-2  w-[300px] ">
        {JSON.stringify(userAuthInfo)}
      </label>
    
      <button
        className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
