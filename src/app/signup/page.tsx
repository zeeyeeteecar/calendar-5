"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { Axios, AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { loadBindings } from "next/dist/build/swc";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/signup", user);
      console.log("SignUp successfully", response.data);
      toast.success("Sign Up successfully");
      router.push("/login");
    } catch (err) {
      const error = err as AxiosError;
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-300 font-extralight">
      <label className="text-center text-slate-500 text-2xl my-2  w-[300px] ">
        {loading ? "Processing" : "Sign Up"}
      </label>

      <input
        className="p-2 border border-tray-300 rounded-lg mb-4 text-gray-600   focus:outline-none focus:border-gray-600 w-[300px]"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
        placeholder="username"
      ></input>

      <input
        className="p-2 border border-tray-300 rounded-lg mb-4 text-gray-600 focus:outline-none focus:border-gray-600 w-[300px]"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="password"
      ></input>

      <input
        className="p-2 border border-tray-300 rounded-lg mb-4 text-gray-600 focus:outline-none focus:border-gray-600 w-[300px]"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="email"
      ></input>

      <button
        className="p-2 border border-tray-300 rounded-lg mb-4 text-gray-600 text-slate-50 bg-slate-400 focus:outline-none focus:border-gray-600 hover:bg-slate-800 w-[300px]"
        onClick={onSignup}
      >
        {buttonDisabled ? "No Sign Up" : "Sign Up"}
      </button>

      <Link href="/login">
        <button className="p-2 border border-tray-300 rounded-lg mb-4 text-gray-600 text-slate-50 bg-slate-400 focus:outline-none focus:border-gray-600 hover:bg-slate-800 w-[300px]">
          Go to Login Page
        </button>
      </Link>
    </div>
  );
}
