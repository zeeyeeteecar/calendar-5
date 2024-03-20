"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg: string) => toast(msg);

export default function Modal_Event_Edit({
  visible,
  handleOnClose,
  event,
  admins,
  handle_DeleteEvent,
}: any) {
  
  if (!visible) return null;

  const handle_Delete_Event_local = (eventID: string) => {


    var confirmation = confirm("Want to delete?");
    if (confirmation) {
      handle_DeleteEvent(eventID); //Logic to delete the item
      handleOnClose();
      notify("Event Delete successfully.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-[1000px] h-[700px]">
        <div className="border-0 text-right">
          <button onClick={handleOnClose} className="h-[30px] w-[50px]">
            X
          </button>
        </div>
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Welcome back
        </h1>
        <p className="text-center text-gray-700 mb-5">Sign in</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="email@example.com"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button>
          <button
            //onClick={()=>handle_AddNewEvent(eventAddInfo)}
            onClick={() => handle_Delete_Event_local(event.Event_ID.toString())}
            //onClick={()=>notify()}
            //onClick={(e)=>{console.log(eventAddInfo)}}
            className=" bg-yellow-100 d px-2 =py-1 w=[100px]} h-[40px] px-5 py-2 bg-gray-700 text-red-500 rounded"
          >
            Delete {event.Event_ID}
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
