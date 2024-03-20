import moment from "moment";

import { revalidatePath } from "next/cache";
import WeekdaysName from "./components/WeekdaysName";
import MonthBlock from "./components/MonthBlock";
import SelectYearMonth from "./components/SelectYearMonth";

import UseMousePosition from "./components/UseMousePosition";

let globe_selectedYear: string = "";
let globe_selectedMonth: string = "";


export default async function page() {


  const defaultCurrentYear: string = moment().year().toString();
  const defaultCurrentMonth: string = (moment().month() + 1)
    .toString()
    .padStart(2, "0");

  globe_selectedYear = globe_selectedYear
    ? globe_selectedYear
    : defaultCurrentYear;
  globe_selectedMonth = globe_selectedMonth
    ? globe_selectedMonth
    : defaultCurrentMonth;

  // globe_data_EventTypes = await fetch_EventTypes();

  //fetch_selectedMonthYear_events(currentYear, currentMonth)

  const handle_SelectMonthYear = async (
    _selectedYear: string,
    _selectedMonth: string
  ) => {
    "use server";
    globe_selectedYear = _selectedYear;
    globe_selectedMonth = _selectedMonth;

    // console.log("globe_selectedYear---", globe_selectedYear);
    // console.log("globe_selectedMonth---", globe_selectedMonth);
    revalidatePath("/calendar");
  };
  //console.log("data_EventTypes////////", globe_data_EventTypes);

  return (
    <>
      <div className="flex flex-row">
        <label>useMousePosition:==</label>
        <UseMousePosition />
      </div>
      <div>
        {defaultCurrentYear}-{defaultCurrentMonth}-
      </div>
      <div>
        <SelectYearMonth
          handle_SelectMonthYear={handle_SelectMonthYear}
          defaultCurrentYear={defaultCurrentYear}
          defaultCurrentMonth={defaultCurrentMonth}
        />
      </div>
      <div>
        <WeekdaysName />
      </div>
      <div>
        {" "}
        <MonthBlock
          selectedYear={globe_selectedYear}
          selectedMonth={globe_selectedMonth}
        />{" "}
      </div>
      {/* <div>{JSON.stringify(posts)}==</div> */}
      <div className="h-[200px] w-full border-10"></div>
    </>
  );
}

//=========================================
