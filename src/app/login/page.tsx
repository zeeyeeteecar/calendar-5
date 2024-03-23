"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { Axios, AxiosError } from "axios";
import { toast } from "react-hot-toast";

export default function SigninPage() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "email3",
    password: "pass3",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/login", user);
      console.log("Login successfully", response.data);
      //toast.success("Login successfully");
      router.push("/dashboard");
    } catch (error) {
      const err = error as AxiosError;
      console.log("err.message", err.message)
if (err.message==="Request failed with status code 401")
    { alert("Login failed: -- User Not Exists");}

    if (err.message==="Request failed with status code 402")
    { alert("Login failed: -- Wrong Password");}

      //toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div
      className="flex items-center justify-center min-h-screen py-2 bg-slate-500 font-extralight 
    bg-[url('https://source.unsplash.com/random/900×700/?fruit')] bg-center bg-no-repeat bg-cover"
    >
      <div className="h-30 w-[500px] border-0 flex flex-col p-10 space-y-6 rounded-3xl">
        <label className="text-center text-white text-4xl font-bold my-2  w-[300px] ">
          {loading ? "Processing" : "O2B2  Login"}
        </label>

        <input
          className="p-4 border border-tray-300 text-slate-600 font-normal text-lg rounded-lg mb-4  focus:outline-none focus:border-gray-600 w-[300px]"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="email"
        ></input>

        <input
          className="p-4 border border-tray-300 rounded-lg text-slate-600 font-normal text-lg mb-4 focus:outline-none focus:border-gray-600 w-[300px]"
          id="password"
          type="text"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="password"
        ></input>

        <button
          className="p-4 border border-tray-300 rounded-lg mb-4 text-slate-50 bg-slate-400 focus:outline-none focus:border-gray-600 hover:bg-slate-800 w-[300px]"
          onClick={onLogin}
        >
          {buttonDisabled ? "Login Here" : "Login Here"}
        </button>

        <Link href="/signup">
          <button className="p-4 border border-tray-300 rounded-lg mb-4 text-slate-50 bg-slate-400 focus:outline-none focus:border-gray-600 hover:bg-slate-800 w-[300px]">
            Go to Sign Up Page
          </button>
        </Link>
      </div>
    </div>
  );
}
