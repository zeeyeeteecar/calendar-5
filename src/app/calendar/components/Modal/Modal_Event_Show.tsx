"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg: string) => toast(msg);

export default function Modal_Event_Show({
  visible,
  handleOnClose,
  event,
  admins,
}: any) {
  if (!visible) return null;

  // const handle_Delete_Event_local = (eventID: string) => {
  //   var confirmation = confirm("Want to delete?");
  //   if (confirmation) {
  //     handle_DeleteEvent(eventID); //Logic to delete the item
  //     handleOnClose();
  //     notify("Event Delete successfully.");
  //   }
  // };

  return (
    <>
      <div className="  bg-yellow-100 p-2 rounded w-[400px] h-[300px] border-2 text-left ">
        <h1 className="font-semibold text-left text-xl text-gray-700">
          ID: {event.Event_ID}
        </h1>

        <h1 className=" text-xl"> Title: </h1>
        <p className="text-left text-gray-700 mb-5">{event.Event_Title}</p>
        <p className="text-left text-gray-700 mb-5">
          Title: {event.Start_Date.toString()}
        </p>
        <p className="text-left text-gray-700 mb-5">
          Title: {event.End_Date.toString()}
        </p>
        <p className="text-left text-gray-700 mb-5">
          Title: {event.Start_Time}
        </p>
        <p className="text-left text-gray-700 mb-5">Title: {event.End_Time}</p>

        <div className="text-left">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button>
          <button
            //onClick={()=>handle_AddNewEvent(eventAddInfo)}
            // onClick={() => handle_Delete_Event_local(event.Event_ID.toString())}
            //onClick={()=>notify()}
            //onClick={(e)=>{console.log(eventAddInfo)}}
            className=" bg-yellow-100 d px-2 =py-1 w=[100px]} h-[40px] px-5 py-2 bg-gray-700 text-red-500 rounded"
          >
            Delete {event.Event_ID}
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
}
