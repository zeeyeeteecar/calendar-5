"use client";
import Reac from "react";
import { IoPersonAddOutline } from "react-icons/io5";

import { DebounceInput } from "react-debounce-input";
//import { revalidatePath, revalidateTag } from "next/cache";

export default function Members_Block_SearchBar({
  handle_Search_Members,
  handle_Search_Members_Debounce,
}: any) {
  // const [searchKeywords, setSearchKeywords] = React.useState({
  //   Fname: "",
  //   Lname: "",
  //   Address: "",
  //   PhoneHome: "",
  // });

  // const selectForm = useRef(null);
  // const handleSubmit = () => {
  //   selectForm.current.submit();
  // };

  let searchKeywords = {
    tMasterID: "",
    Fname: "",
    Lname: "",
    Company: "",
    Address: "",
    PhoneHome: "",
  };

  function handle_Search_Members_Debounce_Local_tMasterID(e) {
    searchKeywords = {
      ...searchKeywords,
      tMasterID: e.target.value.toString(),
    };
    console.log(searchKeywords);
    //handle_Search_Members_Debounce(searchKeywords);
  }

  function handle_Search_Members_Debounce_Local_Fname(e) {
    searchKeywords = { ...searchKeywords, Fname: e.target.value.toString() };
    console.log(searchKeywords);
    //handle_Search_Members_Debounce(searchKeywords);
  }

  function handle_Search_Members_Debounce_Local_Company(e) {
    searchKeywords = { ...searchKeywords, Company: e.target.value.toString() };
    console.log(searchKeywords);
    //handle_Search_Members_Debounce(searchKeywords);
  }

  function handle_Search_Members_Debounce_Local_Lname(e) {
    searchKeywords = { ...searchKeywords, Lname: e.target.value.toString() };
    console.log(searchKeywords);
    //handle_Search_Members_Debounce(searchKeywords);
  }

  function handle_Search_Members_Debounce_Local_Address(e) {
    searchKeywords = {
      ...searchKeywords,
      Address: e.target.value.toString(),
    };
    console.log(searchKeywords);
    //handle_Search_Members_Debounce(searchKeywords);
  }

  function handle_Search_Members_Debounce_Local_PhoneHome(e) {
    searchKeywords = {
      ...searchKeywords,
      PhoneHome: e.target.value.toString(),
    };
    console.log(searchKeywords);
    //handle_Search_Members_Debounce(searchKeywords);
  }

  // function handle_Search_Members_Debounce_Local_Fname(e) {
  //   setSearchKeywords({ ...searchKeywords, Fname: e.target.value.toString() });
  //   console.log(searchKeywords)
  ////   //handle_Search_Members_Debounce(searchKeywords);
  // }

  // function handle_Search_Members_Debounce_Local_Lname(e) {
  //   setSearchKeywords({ ...searchKeywords, Lname: e.target.value.toString() });
  ////   handle_Search_Members_Debounce(searchKeywords);
  // }

  // function handle_Search_Members_Debounce_Local_Address(e) {
  //   setSearchKeywords({
  //     ...searchKeywords,
  //     Address: e.target.value.toString(),
  //   });
  ////   handle_Search_Members_Debounce(searchKeywords);
  // }

  // function handle_Search_Members_Debounce_Local_PhoneHome(e) {
  //   setSearchKeywords({
  //     ...searchKeywords,
  //     PhoneHome: e.target.value.toString(),
  //   });
  ////   handle_Search_Members_Debounce(searchKeywords);
  // }

  return (
    <div className="mx-auto  w-full border-0">
      <form
        className="flex items-center"
        // ref={selectForm}
        action={handle_Search_Members}
      >
        <div className="relative w-full flex flex-row space-x-5 ">
          {/* <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div> */}

          <DebounceInput
            id="tMasterID"
            name="tMasterID"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full pl-4 p-2.5"
            minLength={2}
            debounceTimeout={1000}
            onChange={(e) => {
              handle_Search_Members_Debounce_Local_tMasterID(e);
            }}
            placeholder="Member ID"
          />

          <DebounceInput
            id="Fname"
            name="Fname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full pl-4 p-2.5"
            minLength={2}
            debounceTimeout={1000}
            onChange={(e) => {
              handle_Search_Members_Debounce_Local_Fname(e);
            }}
            placeholder="First Name"
            defaultValue="Tom"
            value=""
          />

          <DebounceInput
            id="Lname"
            name="Lname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full pl-4 p-2.5"
            minLength={2}
            debounceTimeout={1000}
            //onChange={(event) => setValue(event.target.value)}
            onChange={(e) => handle_Search_Members_Debounce_Local_Lname(e)}
            //handle_Search_Members_Debounce_Local_Lname(e);

            placeholder="Last Name"
          />

          <DebounceInput
            id="Company"
            name="Company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full pl-4 p-2.5"
            minLength={2}
            debounceTimeout={1000}
            //onChange={(event) => setValue(event.target.value)}
            onChange={(e) => handle_Search_Members_Debounce_Local_Company(e)}
            //handle_Search_Members_Debounce_Local_Lname(e);

            placeholder="Company"
          />

          <DebounceInput
            id="Address"
            name="Address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full pl-4 p-2.5"
            minLength={2}
            debounceTimeout={1000}
            //onChange={(event) => setValue(event.target.value)}
            onChange={(e) => {
              handle_Search_Members_Debounce_Local_Address(e);
            }}
            placeholder="Address"
            value="86"
          />

          <DebounceInput
            id="PhoneHome"
            name="PhoneHome"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full pl-4 p-2.5"
            minLength={2}
            debounceTimeout={1000}
            //onChange={(event) => setValue(event.target.value)}
            onChange={(e) => {
              handle_Search_Members_Debounce_Local_PhoneHome(e);
            }}
            placeholder="PhoneHome"
          />

          {/* <input
              type="text"
              id="Fname"
              name="Fname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 "
              placeholder="Search"
              required
            /> */}
        </div>
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

          <span>Search</span>
        </button>
      </form>
    </div>
  );
}


