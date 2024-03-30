import React from "react";
import { PiCellSignalFullLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { revalidatePath } from "next/cache";

import { data_Status } from "../../../lib/data";
import { Selected_Member_Registration } from "../../../lib/lib";

const randomAvatarLink = () => {
  const url =
    "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/";
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return url + randomNumber.toString() + ".png";
};

export default function SearchMemberRow({ member, handle_radioChanged }: any) {
  async function show_Selected_Member_Registration(e: any) {
    const memberID = e.target.value;
    console.log(memberID);
    console.log(Selected_Member_Registration(memberID));
  }

  return (
    <div className="relative border-0 w-full h-[140px] space-0 flex flex-col p-0 ">
      <label className="flex flex-col">
        <input
          type="radio"
          value={member.tMasterID}
          className="peer hidden"
          name="framework"
          onChange={(e) => show_Selected_Member_Registration(e)}
        />

        <div
          className="flex items-center justify-between px-4 py-2 rounded-xl border h-[140px] 
         hover:bg-slate-100 
         cursor-pointer text-sm border-gray-200 group 
         peer-checked:border-blue-300
         peer-checked:bg-yellow-100
         "
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg> */}

          <div className="flex flex-row p-1 space-x-4 w-full border-0">
            <div className="w-[50px] border-0">
              <img
                src={randomAvatarLink()}
                alt="user photo"
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col w-full space-y-1 border-0">
              <div className="flex flex-row">
                <span className="text-base text-left inline-block w-full font-semibold">
                  {member.Fname} {member.Lname}
                </span>
              </div>

              <div className="flex flex-row">
                <span className=" text-slate-400   px-1 h-[20px] border-0 grid place-items-center">
                  <CiPhone />
                </span>{" "}
                <span className="text-sm text-left opacity-60 inline-block  border-0 w-full">
                  {member.PhoneHome}
                </span>
                <span className=" text-slate-400 py-0  px-1  h-[20px] border-0 grid place-items-center">
                  <PiCellSignalFullLight />
                </span>{" "}
                <span className="text-sm text-left opacity-60 inline-block w-full border-0">
                  {member.Cell}
                </span>
              </div>

              <div className="flex flex-row ">
                <span className=" text-slate-400 py-0 w-[30px] border-0 grid place-items-center">
                  <AiOutlineHome />
                </span>{" "}
                <span className="text-sm text-left opacity-60 inline-block w-full border-0">
                  {member.Address} , {member.City}, {member.Prov}
                </span>
              </div>

              <div className="flex flex-row  space-x-2 pt-2">
                {data_Status &&
                  data_Status.map((status: any, key: number) => {
                    const status_fullTitle = status.fullTitle;
                    const status_title = status.title;
                    const status_clr = status.clr.toString().trim();
                    const status_fieldTitle = status.fieldTitle;

                    return (
                      <>
                        {member[status_fieldTitle] ? (
                          <span
                            className={`rounded-full border border-slate-200 bg-white text-${status_clr}-500 text-xs font-semibold w-[50px] h-[20px] grid place-items-center `}
                          >
                            {status_title}
                          </span>
                        ) : null}
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}
