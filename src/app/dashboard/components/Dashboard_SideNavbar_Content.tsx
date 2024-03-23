"use client";

import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { data_SideNavBar } from "../../../lib/data";
//import TokenInfo from "../../Common/components/TokenInfo";

import { MyComponent } from "../../../lib/data";

export default function Dashboard_SideNavbar_Content() {
  const router = useRouter();

  return (
    <div className="flex-col w-[200px] bg-gray-200 h-screen">
      <div className="w-full bg-white shadow-xl rounded-lg flex custom-scrollbar">
        <div className="w-64 px-4">
          <div className="h-16 flex items-center">
            <Link
              href="#"
              className="h-10 mx-auto bg-blue-500 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150"
            >
              {/* <TokenInfo _keyValue={"username"} />
              <TokenInfo _keyValue={"id"} /> */}
              
            </Link>
          </div>
          <div className="px-2 pt-4 pb-8 border-r border-gray-300">
            <ul className="space-y-2">
              {data_SideNavBar &&
                data_SideNavBar.map((data: any, key: number) => {
                  const IconComponent = data["IconComponent"];

                  return (
                    <div key={key}>
                      <li key={key}>
                        <Link
                          className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
                          href={data.link}
                        >
                          <span className="flex items-center space-x-2">
                            {IconComponent && <IconComponent />}
                            <span>{data.title}</span>
                          </span>
                        </Link>
                      </li>
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="flex-1 px-2"></div>
      </div>
    </div>
  );
}
