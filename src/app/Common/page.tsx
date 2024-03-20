"use client";
import React from "react";
import { Route } from "next";
import Link from "next/link";

export default function SessionExpired() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-gray-50 px-16 py-14">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-200 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
            Congratuation!!!
          </h3>
          <p className="w-[230px] text-center font-normal text-gray-600">
            Your session has expired, <br />
            Please log in again
          </p>
          <Link href="/login" ><button className=" w-[150px] mx-auto mt-10 block font-bold text-xl rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center  text-orange-100 outline-8 hover:outline hover:duration-300">
            Login 
          </button></Link>
        </div>
      </div>
    </>
  );
}
