"use client";
import React from "react";
import { revalidatePath } from "next/cache";
import { prisma } from "../../../lib/db";
import SearchMemberRow from "./SearchMemberRow";

///=====================================================================
export default function SearchMember({
  globe_MemberSearchResult,
  globe_Selected_MemberInfo,
  handle_SearchMember,
  handle_radioChanged,
}: any) {
  const handle_SearchMember_local = async (formData: FormData) => {
    const Fname = formData.get("Fname")?.valueOf().toString();
    const Lname = formData.get("Lname")?.valueOf().toString();
    const MemberID = formData.get("MemberID")?.valueOf().toString();

    if (!Fname && !Lname && !MemberID) {
      alert("Please enter 'First Name' or 'Last Name' or 'Member ID' !!! ");
    }

    await handle_SearchMember(Fname, Lname, MemberID);
  };

  return (
    <div className="flex flex-col w-full h-full border-green-400 border-0 space-y-2 p-1 ">
      {/* <header className="w-full border-0 text-center p-1 text-lg">
        SearchMember
      </header> */}

      <form
        action={handle_SearchMember_local}
        className="space-x-0 flex flex-col border-0 p-1 space-y-2 "
      >
        <input
          type="text"
          name="Fname"
          className="border border-slate-300 rounded px-2 py-1 w-min-full h-[40px]"
          placeholder="First Name"
          value="tom"
        ></input>
        <input
          type="text"
          name="Lname"
          className="border border-slate-300 rounded px-2 py-1 w-min-full h-[40px]"
          placeholder="Last Name"
        ></input>
        <input
          type="text"
          name="MemberID"
          className="border border-slate-300 rounded px-2 py-1 w-min-full h-[40px]"
          placeholder="MemberID"
        ></input>
        <button
          type="submit"
          className=" bg-yellow-100 d px-2 py-1 w-min-full h-[40px] hover:bg-blue-100 "
        >
          Search Member
        </button>
      </form>

      <form
        action={handle_radioChanged}
        className="w-full h-[750px] border-0 border-red-500 p-0"
      >
        <div className="flex flex-col flex-1  border-0 p-2  w-full   flex-grow">
          <div className="h-[600px] border-0 border-red-500 overflow-y-scroll space-y-2 px-2 ">
            {globe_MemberSearchResult &&
              globe_MemberSearchResult.map((member: any, key: number) => {
                return (
                  <div key={key}>
                    <SearchMemberRow
                      member={member}
                      handle_radioChanged={handle_radioChanged}
                    />
                  </div>
                );
              })}

            <div>
              {/* <button
                type="submit"
                className=" w-[300px] p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  inline-flex items-center"
              >
                <svg
                  className="w-5 h-5 mx-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>

                <span>Search Class</span>
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
