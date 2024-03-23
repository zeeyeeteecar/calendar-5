import React from "react";
import { prisma } from "../../../lib/db";
import moment from "moment";
import { formatDate } from "../../../lib/lib";

import DayBlock from "./DayBlock";
import {
  fetch_EventTypes,
  fetch_Admin,
  getAllExtendedSelectedMonthDays,
} from "../../../lib/lib";

export default async function MonthBlock({
  selectedYear,
  selectedMonth,
}: {
  selectedYear: string;
  selectedMonth: string;
}) {
  const year_month = selectedYear.toString() + " " + selectedMonth.toString();
  const startOfMonth = moment(year_month).startOf("month").format("YYYY-MM-DD");
  const endOfMonth = moment(year_month).endOf("month").format("YYYY-MM-DD");

  const firstDayOfMonthBlock = getAllExtendedSelectedMonthDays(
    startOfMonth,
    endOfMonth
  )[0];

  const lastDayOfMonthBlock = getAllExtendedSelectedMonthDays(
    startOfMonth,
    endOfMonth
  )[getAllExtendedSelectedMonthDays(startOfMonth, endOfMonth).length - 1];

  const selectedMonthYear_Events = await fetch_selectedMonthYear_Events(
    firstDayOfMonthBlock,
    lastDayOfMonthBlock
  );

  //console.log("selectedMonthYear_Events", selectedMonthYear_Events);

  const eventTypes = await fetch_EventTypes();
  const admins = await fetch_Admin();

  return (
    <>
      <div>{JSON.stringify(selectedMonthYear_Events)}</div>
      {/* <div>
        {startOfMonth} - {endOfMonth}
      </div>
      <div>
        {firstDayOfMonthBlock} == {lastDayOfMonthBlock}
      </div> */}
      {/* <div>{selectedMonthYear_Events.length}==</div> */}
      {/* <div>{JSON.stringify(selectedMonthYear_Events)}</div> */}
      {/* <div>{JSON.stringify(eventTypes)}</div> */}

      <div className="grid grid-cols-7 gap-0 border-2 p-1">
        {getAllExtendedSelectedMonthDays(startOfMonth, endOfMonth) &&
          getAllExtendedSelectedMonthDays(startOfMonth, endOfMonth).map(
            (monthDay: any, key: number) => {
              return (
                <>
                  <DayBlock
                    monthDay={monthDay}
                    admins={admins}
                    eventTypes={eventTypes}
                    selectedMonthYear_Events={selectedMonthYear_Events}
                  />
                </>
              );
            }
          )}
      </div>
    </>
  );
}

//=======================================

const fetch_selectedMonthYear_Events = async (
  _firstDayOfMonthBlock: string,
  _lastDayOfMonthBlock: string
) => {
  const eventsData: any = await prisma.tEvents.findMany({
    where: {
      OR: [
        {
          Start_Date: { lte: formatDate(_firstDayOfMonthBlock) },
          End_Date: { gte: formatDate(_firstDayOfMonthBlock) },
          // Event_Weekday: {
          //   contains: (weekdayNumberOfMonthDay + 1).toString(),
          // },
          OR: [
            {
              Event_TypeCode: "RoomBooking",
              ShowInCalendar: "Yes",
            },
            {
              Event_TypeCode: "o2b2",
            },
          ],
        },
        {
          Start_Date: { lte: formatDate(_lastDayOfMonthBlock) },
          End_Date: { gte: formatDate(_lastDayOfMonthBlock) },
          //   contains: (weekdayNumberOfMonthDay + 1).toString(),
          // },
          OR: [
            {
              Event_TypeCode: "RoomBooking",
              ShowInCalendar: "Yes",
            },
            {
              Event_TypeCode: "o2b2",
            },
          ],
        },
        {
          Start_Date: { gte: formatDate(_firstDayOfMonthBlock) },
          End_Date: { lte: formatDate(_lastDayOfMonthBlock) },
          // Event_Weekday: {
          //   contains: (weekdayNumberOfMonthDay + 1).toString(),
          // },
          OR: [
            {
              Event_TypeCode: "RoomBooking",
              ShowInCalendar: "Yes",
            },
            {
              Event_TypeCode: "o2b2",
            },
          ],
        },

        {
          tEventsOtherDays: {
            some: {
              AND: [
                {
                  EventOtherDate: {
                    gte: formatDate(_firstDayOfMonthBlock),
                  },
                },
                {
                  EventOtherDate: {
                    lte: formatDate(_lastDayOfMonthBlock),
                  },
                },
              ],
            },
          },
        },
      ],
    },

    // select:  {
    //     tEventsOtherDays: {
    //       some: { EventOtherDate: monthDay.toString() + " 00:00:00" },
    //     },
    //   },

    //
    // },
    // ],

    select: {
      Event_ID: true,
      Date_Added: true,
      Start_Date: true,
      End_Date: true,
      Start_Time: true,
      End_Time: true,
      Event_Title: true,
      Event_Fee: true,
      Event_Details: true,
      Activity_Room: true,
      Board_Room: true,
      Resource_Room: true,
      Computer_Lab: true,
      SC_Room: true,
      Event_Location: true,
      Big_Event: true,
      Event_Weekday: true,
      Event_Type: true,
      Event_TypeCode: true,
      Event_Type_ID: true,
      ShowInCalendar: true,
      PersonInCharge: true,
      PersonAdmin: true,
      Poster: true,
      StatHoliday: true,
      FlexTimeType: true,
      FlexTimeLunch: true,
      PersonOperate: true,
      tEventsOtherDays: {
        select: {
          ID: true,
          Event_ID: true,
          EventOtherDate: true,
        },
      },
    },

    orderBy: {
      Start_Time: "asc",
    },
    //take: 5,
  });
  const events = await eventsData;
  return events;
};

//========================================
