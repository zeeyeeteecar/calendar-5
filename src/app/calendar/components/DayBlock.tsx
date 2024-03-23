import React from "react";
import moment from "moment";
import { prisma } from "../../../lib/db";
import { revalidatePath } from "next/cache";

import EventDetail from "./EventDetail";
import Modal_Event_AddNew from "./Modal/Modal_Event_AddNew";

export default async function DayEvents({
  monthDay,
  eventTypes,
  admins,
  selectedMonthYear_Events,
  loginSession,
}: any) {
  // const dayEvents = await fetch_DayEvents(monthDay);

  const currentDateEvents = fun_currentDateEvents(
    selectedMonthYear_Events,
    monthDay
  );

  async function handle_AddNewEvent(eventAddInfo: any) {
    "use server";

    console.log(eventAddInfo);
    await prisma.tEvents.create({
      data: {
        Date_Added: moment(new Date()).format("YYY-MM-DD"),
        Start_Date: eventAddInfo.Start_Date,
        End_Date: eventAddInfo.End_Date,
        Start_Time: eventAddInfo.Start_Time,
        End_Time: eventAddInfo.End_Time,
        Event_Title: eventAddInfo.Event_Title,
        Event_Fee: Number(eventAddInfo.Event_Fee),
        Event_Details: eventAddInfo.Event_Title,
        Activity_Room: eventAddInfo.Activity_Room,
        Board_Room: eventAddInfo.Board_Room,
        Resource_Room: eventAddInfo.Resource_Room,
        Computer_Lab: eventAddInfo.Computer_Lab,
        Event_Weekday: eventAddInfo.Event_Weekday,
        Event_Type: eventAddInfo.Event_Type,
        Event_TypeCode: "o2b2",
        PersonInCharge: eventAddInfo.PersonInCharge,
        //PersonAdmin: eventAddInfo.PersonAdmin,
        Poster: eventAddInfo.Poster,
        StatHoliday:
          eventAddInfo.Event_Type === "Stat Holiday" ? "Stat Holiday" : null,
        PersonOperate: eventAddInfo.PersonOperate,

        tEventsOtherDays: {
          createMany: {
            data: [
              { EventOtherDate: eventAddInfo.EventsOtherDays[0] },
              { EventOtherDate: eventAddInfo.EventsOtherDays[1] },
              { EventOtherDate: eventAddInfo.EventsOtherDays[2] },
              { EventOtherDate: eventAddInfo.EventsOtherDays[3] },
              { EventOtherDate: eventAddInfo.EventsOtherDays[4] },
            ],
          },
        },
      },
    });

    //console.log("Free pizza!");
    revalidatePath("/");
  }

  async function handle_DeleteEvent(eventID: string) {
    "use server";
    await prisma.tEvents.delete({
      where: {
        Event_ID: Number(eventID),
      },
    });

    //console.log("Free pizza!");
    revalidatePath("/");
  }

  async function handle_EditEvent(eventID: string) {
    "use server";
    // console.log("eventAddInfooo", eventAddInfo);
    await prisma.tEvents.create({
      data: {
        // Start_Date: eventAddInfo.Start_Date,
        // End_Date: eventAddInfo.End_Date,
        // Start_Time: new Date(),
        // End_Time: new Date(),
        // Event_Weekday: "1234567",
        // Event_Title: eventAddInfo.Event_Title,
        // Event_Details: eventAddInfo.Event_Title,
        // Event_Type: eventAddInfo.Event_Type,
        // Event_TypeCode: "o2b2",
      },
    });

    //console.log("Free pizza!");
    revalidatePath("/");
  }

  return (
    <>
      {/* <div className="border-2">
        {currentDateEvents.length} = {dayEvents.length}
      </div> */}
      
      <div className="w-full min-h-[300px] border-[1px]">
        <div className="border-0 flow-root bg-slate-100 ">
          <div className="float-left px-3">{moment(monthDay).format("DD")}</div>
          <div className="float-right border-[0px] text-white hover:bg-red-200 hover:cursor-pointer hover:text-red-600">
            <Modal_Event_AddNew
              monthDay={monthDay}
              eventTypes={eventTypes}
              admins={admins}
              handle_AddNewEvent={handle_AddNewEvent}
              loginSession={loginSession}
            />
          </div>
        </div>
        {currentDateEvents &&
          currentDateEvents.map((event: any, key: number) => {
            return (
              <>
                <EventDetail
                  event={event}
                  key={key}
                  eventTypes={eventTypes}
                  admins={admins}
                  handle_DeleteEvent={handle_DeleteEvent}
                  handle_EditEvent={handle_EditEvent}
                  loginSession={loginSession}
                />
              </>
            );
          })}
      </div>
    </>
  );
}

//=============================================

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

//=================================================
const fun_currentDateEvents = (
  selectedMonthYear_Events: any,
  monthDay: string
) => {
  const returnValue =
    selectedMonthYear_Events &&
    selectedMonthYear_Events.filter(
      (x: any) =>
        (utcFormat(x.Start_Date) <= monthDay &&
          utcFormat(x.End_Date) >= monthDay &&
          x.Event_Weekday.toString().includes(
            (moment(monthDay).day() + 1).toString()
          ) &&
          (x.Event_TypeCode === "o2b2" ||
            (x.Event_TypeCode === "RoomBooking" &&
              x.ShowInCalendar === "Yes"))) ||
        x.tEventsOtherDays.find((y: any) => moment(y.EventOtherDate).zone(0).format("YYYY-MM-DD") == monthDay)
      // .EventOtherDate == monthDay.toString() + " 00:00:00"
    );
  return returnValue;
};
