import React from "react";
import { prisma } from "../lib/db";
import moment from "moment";
import axios from "axios";

export const SessionInfo = async () => {
  //"use server"
  const response = await axios.get("/api/users/getUserAuthInfo");
  console.log("response.data===", response.data);
  console.log("typeof =  ", response.data.data);
  return response;
};

//==========================================================
export const fetch_Login = async (username: string, password: string) => {
  try {
    const result = await prisma.tAdmin.findMany({
      where: {
        Login: username,
        Password: password,
      },
    });
    return await result;
  } catch (error) {
    console.log("Error while login... cannot find any user");
  }
};

//==========================================================
export const fetch_Admin = async () => {
  const result = await prisma.tAdmin.findMany({
    //take: 2,
  });
  //globe_data_EventTypes = EventTypesData;
  return await result;
};

//==========================================================

export const fetch_EventTypes = async () => {
  const EventTypesData = await prisma.tEventType.findMany({
    select: { ID: true, EventType: true, EventColor: true },
    //take: 2,
  });
  //globe_data_EventTypes = EventTypesData;
  return await EventTypesData;
};

//==========================================================

export function getAllExtendedSelectedMonthDays(
  startDate: string,
  endDate: string
): string[] {
  let date = [];

  //////////////// unshift previous month days/////////////////

  const weekdayNumberOfStartDate = moment(startDate).day();

  for (let i = 1; i <= weekdayNumberOfStartDate; i++) {
    date.unshift(moment(startDate).add(-i, "days").format("YYYY-MM-DD"));
  }

  //////////////// list selected month dayss/////////////////
  while (moment(startDate) <= moment(endDate)) {
    date.push(startDate);
    startDate = moment(startDate).add(1, "days").format("YYYY-MM-DD");
  }

  //////////////// add next  month dayss/////////////////
  const weekdayNumberOfEndDate = moment(endDate).day();
  for (let i = 1; i <= 6 - weekdayNumberOfEndDate; i++) {
    date.push(moment(endDate).add(i, "days").format("YYYY-MM-DD"));
  }

  return date;
}

/// =======getAllExtendedSelectedMonthDays======================

export async function fetch_DayEvents(monthDay: string) {
  const weekdayNumberOfMonthDay = moment(monthDay).day();

  const eventsData: any = await prisma.tEvents.findMany({
    where: {
      OR: [
        {
          AND: [
            {
              Start_Date: { lte: monthDay },
              End_Date: { gte: monthDay },
              Event_Weekday: {
                contains: (weekdayNumberOfMonthDay + 1).toString(),
              },
              Event_TypeCode: "o2b2",
            },
          ],
        },

        {
          AND: [
            {
              Start_Date: { lte: monthDay },
              End_Date: { gte: monthDay },
              Event_Weekday: {
                contains: (weekdayNumberOfMonthDay + 1).toString(),
              },
              Event_TypeCode: "RoomBooking",
              ShowInCalendar: "Yes",
            },
          ],
        },
        // {

        //   EventsOtherDay: {
        //     some: { EventOtherDate: monthDay.toString() + " 00:00:00" },
        //   },
        // },
      ],
    },

    //
    // },
    // ],

    // select: {
    //   Event_ID: true,
    //   Start_Date: true,
    //   Event_Title: true,
    //   Event_TypeCode: true,
    //   Event_Weekday: true,

    //   tEventsOtherDays: {
    //     select: {
    //       ID: true,
    //       Event_ID: true,
    //       EventOtherDate: true,
    //     },
    //   },
    // },

    orderBy: {
      Start_Time: "asc",
    },
  });
  // return await barragesData;
  const events = await eventsData;
  return events;
}

//==========================================================
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
