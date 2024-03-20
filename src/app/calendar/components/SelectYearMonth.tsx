"use client";
import React from "react";
import moment from "moment";
import { revalidatePath } from "next/cache";
import { useEffect, useState, useTransition } from "react";

type ChangeMonth_Props = {
  handle_AddNewMember: (_firstName: string, _lastName: string) => void;
};

export default function SelectYearMonth({
  handle_SelectMonthYear,
  defaultCurrentYear,
  defaultCurrentMonth,
}: {
  defaultCurrentYear: string;
  defaultCurrentMonth: string;
  handle_SelectMonthYear: (
    selectedYear: string,
    selectedMonth: string
  ) => Promise<void>;
}) {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const [isPending, startTransition] = useTransition();

  const onChange_Month = (event: any) => {
    setSelectedMonth(event.target.value);
  };

  const onChange_Year = (event: any) => {
    setSelectedYear(event.target.value);
  };

  //console.log("selectedYear==",selectedYear + " - " +  selectedMonth);

  const submitHandler = () => {
    // startTransition(() => {
    handle_SelectMonthYear(selectedYear, selectedMonth);
    // });
  };

  const handle_PreMonth = () => {
    handle_SelectMonthYear(selectedYear, selectedMonth);
  };

  return (
    <div>
      <div className="flex flex-row">
        <button onClick={handle_PreMonth} className="w-[200px]  border-2">
          \\---
        </button>
        <Dropdown_SelectYear
          onChange_Year={onChange_Year}
          defaultCurrentYear={defaultCurrentYear}
        />
        <Dropdown_SelectMonth
          onChange_Month={onChange_Month}
          defaultCurrentMonth={defaultCurrentMonth}
        />
        <button onClick={submitHandler} className="w-[200px]  border-2">
          click
        </button>
      </div>
    </div>
  );
}

//////===========================================

const Dropdown_SelectMonth = ({ onChange_Month, defaultCurrentMonth }: any) => {
  return (
    <>
      <select
        onChange={onChange_Month}
        className=" w-[200px] border-2"
        defaultValue={defaultCurrentMonth}
      >
        {/* <option
          value={defaultCurrentMonth}
          defaultValue={defaultCurrentMonth}
          selected
          className="bg-orange-100"
        >
          {defaultCurrentMonth.toString()} --{" "}
          {moment((defaultCurrentMonth + 1).toString(), "M").format("MMMM")}
        </option> */}
        {[...Array(12)].map((e, i) => (
          <option value={moment((i + 1).toString(), "M").format("MM")} key={i}>
            {(i + 1).toString()} --{" "}
            {moment((i + 1).toString(), "M").format("MMMM")}
          </option>
        ))}
      </select>
    </>
  );
};

//////===========================================
const Dropdown_SelectYear = ({ onChange_Year, defaultCurrentYear }: any) => {
  const maxYear = parseInt(defaultCurrentYear) + 5;

  return (
    <>
      <select
        onChange={onChange_Year}
        className="w-[200px] border-2"
        defaultValue={defaultCurrentYear}
      >
        {/* <option
          value={defaultCurrentYear}
          defaultValue={defaultCurrentYear}
          selected
          className="bg-orange-100"
        >
          {defaultCurrentYear}
        </option> */}
        {[...Array(12)].map((e, i) => (
          <option value={(maxYear - i).toString()} key={i}>
            {(maxYear - i).toString()}
          </option>
        ))}
      </select>
    </>
  );
};
