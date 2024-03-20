import { PiTrashThin } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { MdGirl } from "react-icons/md";
import { MdBoy } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { PiCellSignalFullLight } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { CiGps } from "react-icons/ci";
import LoadingSpinner from "../../Common/components/LoadingSpinner";

import moment from "moment";

import React from "react";
import Link from "next/link";
import { prisma } from "../../lib/db";

import Modal_Member_Edit from "./Modal_Member_Edit";

import { data_Status } from "../../lib/data";

const randomAvatarLink = () => {
  const url =
    "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/";
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return url + randomNumber.toString() + ".png";
};

export default async function Member_Blcok_SearchList({
  globe_MemberSearchKeywords,
}: any) {
  console.log(globe_MemberSearchKeywords);
  const tMasterID: string = globe_MemberSearchKeywords.tMasterID;
  const Fname: string = globe_MemberSearchKeywords.Fname;
  const Lname: string = globe_MemberSearchKeywords.Lname;
  const Company: string = globe_MemberSearchKeywords.Company;
  const Address: string = globe_MemberSearchKeywords.Address;
  const PhoneHome: string = globe_MemberSearchKeywords.PhoneHome;

  let members: any = null;

  if (!tMasterID && !Fname && !Lname && !Address && !PhoneHome) {
  } else {
    members = await prisma.tMaster.findMany({
      where: {
        tMasterID: tMasterID ? Number(tMasterID) : undefined,
        Fname: { contains: Fname },
        Lname: { contains: Lname },
        Company: { contains: Company },
        Address: { contains: Address },
        PhoneHome: { contains: PhoneHome },
      },
    });
  }

  const countResult = members ? members.length : 0;

  return (
    <div className=" overflow-y-auto max-h-[800px] rounded-lg border border-gray-300 shadow-md m-5">
      {!members && <LoadingSpinner />}
      {/* <div>{JSON.stringify(members)}</div> */}

      <div className="w-full border-collapse bg-white text-left text-sm text-gray-500 p-0">
        <div className="bg-gray-50 border-0  rounded-lg  flex flex-row fixed w-auto z-10  ">
          <div className="px-2 py-4 font-medium text-gray-900 w-[100px] border-0">
            <span className=" text-slate-300">Total:</span>
            <span className=" text-blue-600 text-lg"> {countResult}</span>
          </div>
          <div className="px-6 py-4 font-medium text-gray-900 w-[200px]  border-0">
            Name
          </div>
          <div className="px-6 py-4 font-medium text-gray-900 w-[200px]">
            Company
          </div>
          <div className="px-6 py-4 font-medium text-gray-900 w-[100px]">
            Gender
          </div>
          <div className="px-6 py-4 font-medium text-gray-900  w-[150px]">
            DoB
          </div>
          <div className="px-6 py-4 font-medium text-gray-900  w-[200px]">
            Phone / Cell
          </div>
          <div className="px-6 py-4 font-medium text-gray-900  w-[300px]">
            Address
          </div>

          {data_Status.map((status: any, key: number) => {
            return (
              <>
                <div
                  key={key}
                  className="px-0 py-4 font-medium text-gray-900  w-[50px] text-center justify-center border-0 "
                >
                  <span
                    style={{ color: status.clr }}
                    className="border-l-[1px] border-slate-200 w-full h-[25px] justify-center  text-center align-middle flex "
                  >
                    {status.title}
                  </span>
                </div>
              </>
            );
          })}

          <div className="px-6 py-4 font-medium text-gray-900">Team</div>
          <div className="px-6 py-4 font-medium text-gray-900">Team</div>
        </div>

        {/************ blank row********** */}
        <div className="bg-gray-50 border-0 flex flex-row h-[50px] "></div>
        {/************ blank row********** */}

        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {members &&
            members.map((member: any, key: number) => {
              return (
                <>
                  <div
                    key={key}
                    className=" group hover:bg-gray-50 flex flex-row h-[75px]"
                  >
                    <div className="flex flex-row gap-3 px-6 py-4 font-normal text-gray-900 border-0 w-[300px]">
                      <div className="relative h-10 w-10">
                        <img
                          className="h-full w-full rounded-full object-cover object-center"
                          src={randomAvatarLink()}
                          alt=""
                        />
                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                      </div>
                      <div className="text-sm border-0">
                        <div className="flex flex-row font-medium text-gray-700">
                          <span className=" min-w-[100px]  border-0 mr-2 font-bold">
                            {member.Fname} {member.Lname}
                          </span>
                          <span></span>
                        </div>
                        <div className="text-gray-400 border-0">
                          <span className="text-slate-300">ID: </span>
                          {member.tMasterID}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-7 w-[200px] border-0  ">
                      {member.Company}
                    </div>

                    <div className="px-6 py-7 w-[100px] border-0  ">
                      <Gender gender={member["Gender"]} />
                    </div>

                    <div className="px-6 py-6 w-[150px] border-0">
                      {/* <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        Active
                      </span> */}
                      <span>
                        {member.DoB
                          ? moment.utc(member.DoB).format("YYYY-MM-DD")
                          : ""}
                      </span>
                    </div>

                    <div className="  px-1 py-4 flex flex-col w-[200px]">
                      <div className="flex flex-row">
                        <span className=" text-slate-400 py-1 w-[20px] border-0">
                          <CiPhone />
                        </span>{" "}
                        {member.PhoneHome}
                      </div>
                      <div className="flex flex-row">
                        <span className=" text-slate-400 py-1 w-[20px] border-0">
                          <PiCellSignalFullLight />
                        </span>{" "}
                        {member.Cell}
                      </div>
                    </div>

                    <div className="px-1 py-4 flex flex-row w-[300px]">
                      {/* <div className="w-[20px] h-full border-2 inline-block align-text-bottom "><CiGps /></div> */}
                      <Link
                        className="hover:text-red-400 flex flex-col"
                        target="_blank"
                        href={
                          "http://maps.google.com/?q=" +
                          member.Address.replace("#", "") +
                          " " +
                          member.City +
                          " " +
                          member.Prov +
                          " " +
                          member.PostalCode
                        }
                      >
                        <div>
                          <span> {member.Address}</span>
                        </div>
                        <div className=" text-neutral-300">
                          <span className=" inline-block min-w-[70px]">
                            {" "}
                            {member.City}{" "}
                          </span>{" "}
                          <span className=" inline-block min-w-[25px]">
                            {" "}
                            {member.Prov}{" "}
                          </span>{" "}
                          <span> {member.PostalCode} </span>
                        </div>
                      </Link>
                    </div>

                    {data_Status.map((status: any, key: number) => {
                      return (
                        <>
                          <div className="px-0 py-7 w-[50px] border-0  justify-center text-center flex">
                            <span
                              className="border-l-[1px] border-slate-2
                            00 w-full h-[25px] justify-center  text-center align-middle flex "
                            >
                              {member[status.fieldTitle] ? (
                                <CiFaceSmile color={status.clr} size="20" />
                              ) : (
                                ""
                              )}
                            </span>
                          </div>
                        </>
                      );
                    })}

                    {/* <div className="px-6 py-4">
                      <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                          Design
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                          Product
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                          Develop
                        </span>
                      </div>
                    </div> */}

                    <div className="px-7 py-5 border-0 flex flex-row">
                      <Modal_Member_Edit />
                      <div className="flex justify-end gap-4 border-0 text-gray-100 group-hover:text-gray-400 hover:cursor-pointer hover:text-red-400 mx-2">
                        <PiTrashThin size={30} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

function Gender({ gender }: any) {
  if (gender === "M") {
    return (
      <>
        <MdBoy size={30} color="DeepSkyBlue" />
      </>
    );
  }

  if (gender === "F") {
    return (
      <>
        <MdGirl size={30} color="HotPink" />
      </>
    );
  }

  return (
    <div className="ml-2">
      <FaQuestion size={15} color="gray" />
    </div>
  );
}
