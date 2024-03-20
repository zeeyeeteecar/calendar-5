"use client";
import React, { useEffect, useState, useRef, createRef } from "react";
import { useSession } from "next-auth/react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

let globe_startDate: Date | "" = new Date();

const notify = (msg: string) => toast(msg);

type EventAddInfo_Prop = {
  Start_Date: string;
  End_Date: string;
  Start_Time: string | "";
  End_Time: string | "";
  Event_Title: string | "";
  Event_Fee: number | "";
  Event_Details: string | "";
  Activity_Room: string | "";
  Board_Room: string | "";
  Resource_Room: string | "";
  Computer_Lab: string | "";
  SC_Room: string | "";
  Event_Weekday: string | "";
  Event_Type: string | "";
  Event_TypeCode: string | "";
  ShowInCalendar: string | "";
  PersonInCharge: string | "";
  PersonAdmin: string | "";
  Poster: string | "";
  StatHoliday: string | "";
  PersonOperate: string | "";

  EventsOtherDays: string[];
};

export default function Modal_Event_AddNew({
  monthDay,
  eventTypes,
  admins,
  handle_AddNewEvent,
  loginSession,
}: {
  monthDay: string;
  eventTypes: any;
  admins: any;
  handle_AddNewEvent: (eventAddInfo: any) => void;
  loginSession: any;
}) {
  //console.log("session", loginSession);

  const [showModalAddNew, setShowModalAddNew] = useState(false);
  const handleOnClose = () => setShowModalAddNew(false);

  const initDate = monthDay;
  // const selectedDate = new Date(
  //   moment(eventAddInfo.Start_Date).add(1, "days").format("YYYY-MM-DD")
  // );
  //const [startDate, setStartDate] = useState<Date | "">(new Date(initDate));

  const [eventAddInfo, setEventAddInfo] = useState<EventAddInfo_Prop>({
    Start_Date: initDate,
    End_Date: initDate,
    Start_Time: "",
    End_Time: "",
    Event_Title: "",
    Event_Fee: 0,
    Event_Details: "",
    Activity_Room: "",
    Board_Room: "",
    Resource_Room: "",
    Computer_Lab: "",
    SC_Room: "",
    Event_Weekday: "",
    Event_Type: "",
    Event_TypeCode: "o2b2",
    ShowInCalendar: "",
    PersonInCharge: "",
    PersonAdmin: "",
    Poster: loginSession?.user.Login,
    StatHoliday: "",
    PersonOperate: "",

    EventsOtherDays: new Array(5).fill(""),
  });

  //console.log(eventAddInfo);

  return (
    <div>
      <div className="w-[30px] text-center justify-center" onClick={() => setShowModalAddNew(true)}>
        +
      </div>
      <Modal_Event_AddNew_Content
        handleOnClose={handleOnClose}
        visible={showModalAddNew}
        eventAddInfo={eventAddInfo}
        setEventAddInfo={setEventAddInfo}
        eventTypes={eventTypes}
        admins={admins}
        handle_AddNewEvent={handle_AddNewEvent}
        // handle_onChange_Sun_To_Sat={handle_onChange_Sun_To_Sat}
      />
      <Toaster />
    </div>
  );
}

//---------------------------------------------------------------

function Modal_Event_AddNew_Content({
  visible,
  handleOnClose,
  eventAddInfo,
  setEventAddInfo,
  eventTypes,
  admins,
  handle_AddNewEvent,
}: // handle_onChange_Sun_To_Sat,
any) {
  if (!visible) return null;

  const handle_AddNewEvent_local = (eventAddInfo: any) => {
    console.log(eventAddInfo);
    handle_AddNewEvent(eventAddInfo);
    handleOnClose();
    notify("Event Added successfully.");
  };

  //console.log(eventAddInfo.Start_Time+":00")

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gray-100 p-[20px] rounded w-[1000px] h-[800px] flex flex-col ">
        <div className="border-0 text-right flow-root h-[50px]">
          <h1 className=" float-left  font-semibold text-center text-xl text-blue-700">
            Add New Event
          </h1>

          <button
            onClick={handleOnClose}
            className="h-[30px] w-[50px] float-right text-gray-400 hover:text-blue-900 "
          >
            CLOSE
          </button>
        </div>

        <div className="border-0 space-x-0 space-y-4 p-4 h-full">
          <div className="border-2 w-100% flow-root  space-x-2 px-3  ">
            <div className=" w-[400px] border-2 flex flex-row float-left ">
              <div className="flex flex-row w-[135px] h-100%  border-0 px-2">
                <label className=" border-0 border-red-50 w-full h-full mb-3  flex items-center justify-end font-medium text-[#07074D]">
                  Event Type:
                </label>
              </div>
              <div className=" h-100% border-0 flex flex-row space-x-2 ">
                <Dropdown_Event_Type
                  eventAddInfo={eventAddInfo}
                  setEventAddInfo={setEventAddInfo}
                  eventTypes={eventTypes}
                />
              </div>
            </div>

            <div className="flex flex-row border-0  w-[400px] float-right ">
              <div className="w-full h-100%  border-2 px-2 ">
                <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                  Poster: {eventAddInfo.Poster}
                </label>
              </div>
            </div>
          </div>

          <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className="w-[150px] h-100%  border-0 ">
              <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                Date:
              </label>
            </div>
            <div className="w-full h-100% border-0 flex flex-row space-x-4">
              <input
                type="date"
                name="start_date"
                id="start_date"
                value={moment(eventAddInfo.Start_Date).format("YYYY-MM-DD")}
                className="w-full rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) =>
                  setEventAddInfo((eventAddInfo: any) => ({
                    ...eventAddInfo,
                    Start_Date: e.target.value,
                  }))
                }
              />
              <input
                type="date"
                name="end_date"
                id="end_date"
                value={moment(eventAddInfo.End_Date).format("YYYY-MM-DD")}
                className="w-full rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) =>
                  setEventAddInfo((eventAddInfo: any) => ({
                    ...eventAddInfo,
                    End_Date: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className="w-[150px] h-100%  border-0 ">
              <label
                
                className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]"
              >
                Time:
              </label>
            </div>
            <div className="w-full h-[40px] border-0  gap-4">
              <DatePicker
                id="Start_Time"
                selected={eventAddInfo.Start_Time}
                onChange={(Start_Time) =>
                  setEventAddInfo((eventAddInfo: any) => ({
                    ...eventAddInfo,
                    Start_Time: Start_Time,
                  }))
                }
                placeholderText="Start Time"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={10}
                timeCaption="Start Time"
                dateFormat="h:mm aa"
              />

              <DatePicker
                id="End_Time"
                selected={eventAddInfo.End_Time}
                onChange={(End_Time) =>
                  setEventAddInfo((eventAddInfo: any) => ({
                    ...eventAddInfo,
                    End_Time: End_Time,
                  }))
                }
                placeholderText="End Time"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={10}
                timeCaption="End Time"
                dateFormat="h:mm aa"
              />
            </div>
          </div> */}

          <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className="w-[150px] h-100%  border-0 ">
              <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                Time:
              </label>
            </div>

            <div className="w-full h-100% border-0 flex flex-row space-x-4">
              <Input_Event_Time
                eventAddInfo={eventAddInfo}
                setEventAddInfo={setEventAddInfo}
              />
            </div>
          </div>

          <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className="w-[150px] h-100%  border-0 ">
              <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                Title:
              </label>
            </div>

            <div className="w-full h-100% border-0 flex flex-row space-x-4">
              <input
                required
                type="text"
                id="Event_Details"
                value={eventAddInfo.Event_Title}
                onChange={(e) =>
                  setEventAddInfo((eventAddInfo: any) => ({
                    ...eventAddInfo,
                    Event_Title: e.target.value,
                  }))
                }
                className="w-full rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300  focus:border-[#6A64F1] focus:shadow-md "
                placeholder="Write your thoughts ... ..."
              ></input>
            </div>
          </div>

          <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className="w-[150px] h-100%  border-0 ">
              <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                Detail:
              </label>
            </div>

            <div className="w-full h-100% border-0 flex flex-row space-x-4">
              <textarea
                required
                id="Event_Details"
                value={eventAddInfo.Event_Details}
                onChange={(e) =>
                  setEventAddInfo((eventAddInfo: any) => ({
                    ...eventAddInfo,
                    Event_Details: e.target.value,
                  }))
                }
                className="w-full h-[100px] rounded-md border border-[#ffffff] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300  focus:border-[#6A64F1] focus:shadow-md "
                placeholder="Write your thoughts ... ..."
              ></textarea>
            </div>
          </div>

          <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className="w-[150px] h-100%  border-0 ">
              <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                Week Day:
              </label>
            </div>
            <div className="w-full h-100% border-0 flex flex-row space-x-2">
              <Checkbox_Sun_To_Sat
                eventAddInfo={eventAddInfo}
                setEventAddInfo={setEventAddInfo}
              />
            </div>
          </div>

          <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className="w-[150px] h-100%  border-0 ">
              <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                Venue:
              </label>
            </div>
            <div className="w-full h-100% border-0 flex flex-row space-x-2">
              <Checkbox_Venue
                eventAddInfo={eventAddInfo}
                setEventAddInfo={setEventAddInfo}
                admins={admins}
              />
            </div>
          </div>

          <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className="w-[150px] h-100%  border-0 ">
              <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                Other Days:
              </label>
            </div>
            <div className="w-full h-100% border-0 flex flex-row gap-x-2 overflow-auto ">
              <OtherDaysList
                eventAddInfo={eventAddInfo}
                setEventAddInfo={setEventAddInfo}
                admins={admins}
              />
            </div>
          </div>

          <div className="border-0 w-100% flex flex-row space-x-2 px-3 ">
            <div className=" flex flex-row w-full border-0">
              <div className="w-[135px] h-100%  border-0 px-2">
                <label className=" border-0 border-red-50 w-full h-full mb-3  flex items-center justify-end font-medium text-[#07074D]">
                  In Charge:
                </label>
              </div>
              <div className=" h-100% border-0 flex flex-row space-x-2">
                <Dropbox_PersonInCharge
                  eventAddInfo={eventAddInfo}
                  setEventAddInfo={setEventAddInfo}
                  admins={admins}
                />
              </div>
            </div>

            <div className="flex flex-row border-0 w-[400px]">
              <div className="w-[150px] h-100%  border-0 px-2 ">
                <label className=" border-0 border-red-50 w-full h-full mb-3 block flex items-center justify-end font-medium text-[#07074D]">
                  Fee:
                </label>
              </div>
              <div className="w-full h-100% border-0 flex flex-row space-x-2">
                <input
                  required
                  type="number"
                  min="0"
                  id="Event_Fee"
                  value={eventAddInfo.Event_Fee}
                  onChange={(e) =>
                    setEventAddInfo((eventAddInfo: any) => ({
                      ...eventAddInfo,
                      Event_Fee: e.target.value,
                    }))
                  }
                  className="w-[100px]]rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300  focus:border-[#6A64F1] focus:shadow-md "
                  placeholder="Fee for activity/class"
                ></input>
              </div>
            </div>
          </div>

          <div className="border-0 w-full  space-x-2 px-3 ">
            <div className=" h-100% border-0 space-x-2 flex md:flex md:flex-grow flex-row justify-end ">
              <button
                //onClick={()=>handle_AddNewEvent(eventAddInfo)}
                onClick={() => handle_AddNewEvent_local(eventAddInfo)}
                //onClick={()=>notify()}
                //onClick={(e)=>{consol.log(eventAddInfo)}}
                className="w-[150px] border-[0px] rounded-md hover:bg-purple-300 hover:text-purple-800 hover:border-purple-900 hover:border-[0px] bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Add New
              </button>
              <button
                //onClick={()=>handle_AddNewEvent(eventAddInfo)}
                onClick={handleOnClose}
                //onClick={()=>notify()}
                //onClick={(e)=>{consol.log(eventAddInfo)}}
                className="w-[150px] border-[0px] rounded-md hover:bg-purple-300 hover:text-purple-800 hover:border-purple-900 hover:border-[0px] bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//////===========================================
// const Dropdown_Select_EventType = ({ setEventAddInfo, eventTypes }: any) => {
//   return (
//     <>
//       <select
//         onChange={(e) => setEventAddInfo.Event_Type(.target.value)}
//         className="w-full h-[40px] border-3"
//       >
//         <option
//           value=""
//           defaultValue=""
//           disabled
//           className="bg-orange-100 h-[40px]"
//         >
//           ---- Pls select ----
//         </option>
//         {eventTypes &&
//           eventTypes.map((e: any, key: number) => (
//             <option
//               key={key}
//               value={.EventType}
//               style={{ color: .EventColor }}
//               className=" h-[40px]"
//             >
//               {.EventType}
//             </option>
//           ))}
//       </select>
//     </>
//   );
// };

//////===========================================

function utcFormat(date: Date) {
  const YYYY = new Date(date).getUTCFullYear();
  const MM = new Date(date).getUTCMonth() + 1;
  const DD = new Date(date).getUTCDate();
  return (
    YYYY.toString() +
    "-" +
    MM.toString().padStart(2, "0") +
    "-" +
    DD.toString().padStart(2, "0")
  );
}
//====================================================
const Dropdown_Event_Type = ({
  eventAddInfo,
  setEventAddInfo,
  eventTypes,
}: any) => {
  return (
    <div key={eventTypes.ID}>
      <select
        key={eventTypes.ID}
        onChange={(e) =>
          setEventAddInfo((Event_Type: string) => ({
            ...eventAddInfo,
            Event_Type: e.target.value,
          }))
        }
        className=" rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md"
        
      >
        <option
          value=""
          defaultValue=""
          disabled
          className=" block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
        >
          ---- Pls select ----
        </option>
        {eventTypes &&
          eventTypes.map((e: any, key: number) => (
            <option
              key={key}
              value={e.EventType}
              style={{ color: e.EventColor }}
              className=" h-[40px]"
            >
              {e.EventType}
            </option>
          ))}
      </select>
    </div>
  );
};

//---------------------------------------------------------------------------------------

const Input_Event_Time = ({ eventAddInfo, setEventAddInfo }: any) => {
  return (
    <>
      <input
        type="time"
        name="start_time"
        id="start_time"
        value={eventAddInfo.Start_Time}
        className="w-full rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md"
        onChange={(e) => {
          setEventAddInfo((eventAddInfo: any) => ({
            ...eventAddInfo,
            Start_Time: e.target.value + ":00",
          }));
        }}
      />

      <input
        type="time"
        name="end_time"
        id="end_time"
        value={eventAddInfo.End_Time}
        className="w-full rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md"
        onChange={(e) =>
          setEventAddInfo((eventAddInfo: any) => ({
            ...eventAddInfo,
            End_Time: e.target.value + ":00",
          }))
        }
      />
    </>
  );
};

function Checkbox_Sun_To_Sat({ eventAddInfo, setEventAddInfo }: any) {
  function handle_onChange_Sun_To_Sat(e: any) {
    let weekday: string[] = eventAddInfo.Event_Weekday.split("");

    if (e.target.checked) {
      weekday.push(e.target.value);
    } else {
      weekday = weekday.filter((item) => item !== e.target.value);
    }

    weekday.sort();
    setEventAddInfo((eventAddInfo: any) => ({
      ...eventAddInfo,
      //Event_Weekday: allchecked.join(""),
      Event_Weekday: weekday.join(""),
    }));
  }

  const weekdays: string[] = [];
  const array_weekdays = Array.from(Array(7).keys());

  return (
    <>
      {array_weekdays &&
        array_weekdays.map((weekdayIndex: number, key: number) => {
          return (
            <li
              key={key}
              className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:border-gray-50 dark:text-white"
            >
              <div className="relative flex items-start w-full">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] border-0 border-gray-50 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    value={(weekdayIndex + 1).toString()}
                    onChange={(e) => handle_onChange_Sun_To_Sat(e)}
                  />
                </div>
                <label className="ms-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                  {moment().day(weekdayIndex).format("ddd")}
                </label>
              </div>
            </li>
          );
        })}
    </>
  );
}

//-------------------------------------------------------------------------------

const Dropbox_PersonInCharge = ({
  eventAddInfo,
  setEventAddInfo,
  admins,
}: any) => {
  return (
    <select
      onChange={(e) =>
        setEventAddInfo((PersonInCharge: string) => ({
          ...eventAddInfo,
          PersonInCharge: e.target.value,
        }))
      }
      className="rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300 focus:border-[#6A64F1] focus:shadow-md"
    >
      <option value="" defaultValue="" disabled className=" mx-2">
        ---- Pls select ----
      </option>
      {admins &&
        admins
          .filter((admin: any) => {
            return admin.BoardStaff === "Staff" && admin.UserActivate === "on";
          })
          .map((admin: any, key: number) => (
            <option key={key} value={admin.StaffFName} className=" h-[40px]">
              {admin.ID} - {admin.StaffFName} - {admin.StaffLName}
            </option>
          ))}
    </select>
  );
};

//=============================================================
function Checkbox_Venue({ eventAddInfo, setEventAddInfo }: any) {
  const venues: any = [
    { title: "Activity Room", field: "Activity_Room" },
    { title: "Board Room", field: "Board_Room" },
    { title: "Computer Lab", field: "Computer_Lab" },
    { title: "Resource Room", field: "Resource_Room" },
  ];

  function handle_onChange_Select_Venue(e: any) {
    if (e.target.checked) {
      setEventAddInfo((eventAddInfo: any) => ({
        ...eventAddInfo,
        [e.target.value]: "yes",
      }));
    } else {
      setEventAddInfo((eventAddInfo: any) => ({
        ...eventAddInfo,
        [e.target.value]: "",
      }));
    }
  }

  return (
    <>
      {venues &&
        venues.map((venue: any, key: number) => {
          return (
            <li
              key={key}
              className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg  first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:border-gray-50 dark:text-white
              "
            >
              <div className="relative flex items-start w-full space-x-0 gap-2 ">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] border-gray-50 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-100 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    value={venue.field}
                    onChange={(e) => handle_onChange_Select_Venue(e)}
                  />
                </div>
                <label className="ms-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
                  {venue.title}
                </label>
              </div>
            </li>
          );
        })}
    </>
  );
}

//=============================================================
function OtherDaysList({ eventAddInfo, setEventAddInfo }: any) {
  const array_eventOtherDays: string[] = eventAddInfo.EventsOtherDays;

  // const [otherDaysValue, setOtherDaysValue] = React.useState(
  //   new Array(array_eventOtherDays.length).fill(null)
  // );

  const otherDaysValue: string[] = new Array(array_eventOtherDays.length).fill(
    ""
  );

  //  const [inputValues,setInputValues]=React.useState<string[]>(new Array(array_eventOtherDays.length).fill(null))
  //const array_inputRef: any = [];

  // for (let i = 0; i < array_eventOtherDays.length; i++) {
  //   array_inputRef.push(createRef());
  // }

  // const inputRef_0: any = createRef();
  // const inputRef_1 = useRef(null);

  function handle_OnChange_OtherDays(e: any) {
    const newOtherDaysValue = eventAddInfo.EventsOtherDays.map(
      (c: string, i: number) => {
        console.log(i.toString(), e.target.name);
        if (i.toString() === e.target.name) {
          // Increment the clicked counter
          return e.target.value;
        } else {
          // The rest haven't changed
          return c;
        }
      }
    );

    setEventAddInfo((EventsOtherDays: string[]) => ({
      ...eventAddInfo,
      EventsOtherDays: newOtherDaysValue,
    }));

    //console.log(newOtherDaysValue);

    // if (e.target.value) {
    //   otherDays.push(e.target.value);
    // } else {
    //   venues = venues.filter((item) => item !== e.target.value);
    // }
    // venues.sort();
    // setEventAddInfo((eventAddInfo: any) => ({
    //   ...eventAddInfo,
    //   //Event_Weekday: allchecked.join(""),
    //   Event_Weekday: venues.join(""),
    // }));
  }
  //console.log(eventAddInfo.EventsOtherDays);

  return (
    <>
      {array_eventOtherDays &&
        array_eventOtherDays.map((otherDay: string, key: number) => {
          return (
            <div
              key={key}
              className="w-full h-100% border-0 flex flex-row space-x-4"
            >
              <input
                key={key}
                type="date"
                //ref={array_inputRef[key]}
                name={key.toString()}
                id="date"
                value={eventAddInfo.EventsOtherDays[key]}
                //value={otherDaysValue[key]}
                className="w-full rounded-md border border-[#ffffff] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none placeholder-gray-100 focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => handle_OnChange_OtherDays(e)}
              />
            </div>
          );
        })}
    </>
  );
}
