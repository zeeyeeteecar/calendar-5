"use client";
import React, { useState } from "react";

import moment from "moment";
import Modal_Event_Edit_Delete from "./Modal/Modal_Event_Edit_Delete";
import Modal_Event_Show from "./Modal/Modal_Event_Show";

export default function EventDetail({
  event,
  key,
  eventTypes,
  admins,
  handle_DeleteEvent,
  handle_EditEvent,
  loginSession,
}: {
  event: any;
  key: number;
  eventTypes: any;
  admins: any;
  handle_DeleteEvent: (eventID: string) => void;
  handle_EditEvent: (eventID: string) => void;
  loginSession:any
}) {
  const [showModal_Edit, setShowModal_Edit] = useState(false);
  const [showModal_Show, setShowModal_Show] = useState(false);

  const handleOnClose = () => setShowModal_Edit(false);

  const eventColor = getEventColor(event.Event_Type, eventTypes);

  const start_Time = event.Start_Time
    ? moment(event.Start_Time, "HH:mm").format("HH:mm")
    : "";
  const end_Time = event.Start_Time
    ? moment(event.End_Time, "HH:mm").format("HH:mm")
    : "";

  return (
    <>
      <div
        key={key}
        className={"text-base font-light flex flex-row border-0 "}
        style={{ color: eventColor }}
        onClick={() => setShowModal_Edit(true)}
      >
        <div className={"w-[120px] border-0 "}>
          {start_Time}-{end_Time}
        </div>
        <div className="w-[200px] ">
          <div
            className="border-0 hover:underline hover:cursor-pointer  static"
            onMouseEnter={() => setShowModal_Show(true)}
            onMouseLeave={() => setShowModal_Show(false)}
          >
            {event.Event_Title}
          </div>
          <div className=" absolute  ">
            <Modal_Event_Show
              handleOnClose={handleOnClose}
              visible={showModal_Show}
              event={event}
              admins={admins}
              handle_DeleteEvent={handle_DeleteEvent}
            />
          </div>
        </div>
      </div>
      <div>
        <Modal_Event_Edit_Delete
          handleOnClose={handleOnClose}
          visible={showModal_Edit}
          event={event}
          admins={admins}
          handle_DeleteEvent={handle_DeleteEvent}
        />
      </div>
    </>
  );
}

///=================================

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

//================================
function utc_Time(time: Date) {
  const hr = new Date(time).getUTCHours();
  const mm = new Date(time).getUTCMinutes();

  if (!time) {
    return "";
  }
  return hr.toString().padStart(2, "0") + ":" + mm.toString().padStart(2, "0");
}

//===================================
const getEventColor = (event_Type_Title: string, eventTypes: any) => {
  const result =
    eventTypes &&
    eventTypes.find(
      (element: any) => element.EventType.toString() === event_Type_Title
    );

  return result && result.EventColor;
};
