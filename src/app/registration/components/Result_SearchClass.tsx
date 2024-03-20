import React from "react";
import moment from "moment";
import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/db";
import { RegistrationStatus } from "@/app/lib/data";

export default function SearchClass({
  //globe_MemberSearchResult,
  globe_SelectedMember_RegisterInfo,
  globe_SelectedMember_RegisterInfo_test,
  _handle_RegistrationInvoicePreview,
}: any) {
  console.log(
    globe_SelectedMember_RegisterInfo ? globe_SelectedMember_RegisterInfo : null
  );

  return (
    <form
      className="h-full flex flex-col space-y-2"
      action={_handle_RegistrationInvoicePreview}
    >
      <div className="h-[600px]  overflow-visible overflow-y-auto">
        {globe_SelectedMember_RegisterInfo &&
          globe_SelectedMember_RegisterInfo.map(
            (registerInfo: any, key: number) => {
              const eventInfo = registerInfo.tEvents
                ? registerInfo.tEvents
                : null;
              const memberInfo = registerInfo.tMaster
                ? registerInfo.tMaster
                : null;
              const memberFName = memberInfo.Fname;
              const memberLName = memberInfo.Lname;

              const memberID = registerInfo.MemberID;

              const registerOnHold = registerInfo.PreHold;

              const eventID = eventInfo && eventInfo.Event_ID;
              const eventTitle = eventInfo && eventInfo.Event_Title;
              const eventStart_Date = eventInfo && eventInfo.Start_Date;
              const eventEnd_Date = eventInfo && eventInfo.End_Date;
              const eventStart_Time = eventInfo && eventInfo.Start_Time;
              const eventEnd_Time = eventInfo && eventInfo.End_Time;
              const eventFee = eventInfo && eventInfo.Event_Fee;

              return (
                <div
                  key={key}
                  className="border-0 m-2 flex flex-row p-2 space-x-2 hover:bg-yellow-50 hover:cursor-pointer"
                >
                  <div className="w-[30px] border-0">
                    {registerOnHold ? (
                      <input
                        type="checkbox"
                        name={"checkbox"}
                        className="w-[25px] h-[25px] border-0 border-gray-50 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 outline-none"
                        value={eventID.toString()}
                      />
                    ) : null}
                  </div>
                  <div className="border-0">
                    {" "}
                    {registerOnHold ? (
                      <span className="rounded-full bg-pink-100 text-pink-500 text-xs font-semibold inline-block w-[80px] text-center">
                        on hold
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-100 text-green-500 text-xs font-semibold inline-block w-[80px] text-center">
                        Registered
                      </span>
                    )}
                    <span className="mx-2 inline-block border-0 w-[210px]">
                      {eventTitle}
                    </span>
                    {eventFee ? (
                      <span className="mx-2 text-blue-600">
                        <i className="text-xs text-slate-300 w-[15px] inline-block">
                          $
                        </i>
                        {eventFee}
                      </span>
                    ) : (
                      ""
                    )}
                    {/* {memberID}   {registerOnHold} */}
                    <div className="space-x-1">
                      <span className=" border-0 text-slate-300 text-xs text-center w-[90px] inline-block">
                        # :{eventID}
                      </span>
                      <span className="text-sm text-slate-400">
                        {eventStart_Date}
                      </span>
                      <span> -- </span>
                      <span className="text-sm text-slate-400">
                        {eventEnd_Date}
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="w-[90px] inline-block"></span>
                      <span className="text-sm text-slate-400">
                        {moment(eventStart_Time, "hh:mm:ss").format("hh:mm a")}
                      </span>
                      <span> -- </span>
                      <span className="text-sm text-slate-400">
                        {moment(eventEnd_Time, "hh:mm:ss").format("hh:mm a")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>

      <div className="border-0 flex flex-grow flex-col">
        <div className="border-0 rounded-md p-2 w-full mx-auto max-w-2xl">
          {/* <h4 className="text-xl lg:text-xl font-semibold">
            Member Registratrion Fee
          </h4> */}

          <div>
            {RegistrationStatus.map((regStatus: any, key: number) => {
              return (
                <div key={key} className="border-0 p-1">
                  <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-1 hover:bg-indigo-300 cursor-pointer ">
                    <input
                      type="radio"
                      name="radio_RegistrationStatus"
                      className="h-6 w-6"
                      value={regStatus.statusFee}
                      // checked={regStatus.defaultChecked}
                    />
                    <i className="pl-2">
                      <span className="text-xs">$ </span>
                      <span className=" inline-block w-[50px] font-bold">
                        {regStatus.statusFee}{" "}
                      </span>

                      <span>{regStatus.status}</span>
                    </i>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button
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

            <span>Invoice Preview</span>
          </button>
        </div>
      </div>
    </form>
  );
}
