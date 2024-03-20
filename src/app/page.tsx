import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data_MainMenu } from "@/lib/data";

export default function page() {
  return (
    <div className=" bg-slate-500 h-screen w-screen grid  place-items-center">
      <nav className="flex sm:justify-center space-x-5 bg-slate-200 p-10 rounded-3xl ">
        {data_MainMenu.map((item: any, key: number) => {
          return (
            <Link
            key={key}
            href={item.itemLink}
            className="rounded-lg border border-slate-300  px-1 py-1 text-slate-700  text-3xl font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            <div
              className={"flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg w-[200px " + " " + item.itemBgColor
             }              
              
            >
              <svg
                className="absolute bottom-0 left-0 mb-8"
                viewBox="0 0 375 283"
                fill="none"
                style={{ transform: " scale(1.5)", opacity: "0.1" }}
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div
                  className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style={{
                    background: "radial-gradient(black, transparent 60%)",
                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                    opacity: "0.2",
                  }}
                ></div>
                <Image
                  className="relative w-40"
                  src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6 space-y-3">
                {/* <span className="block opacity-75 -mb-1">Indoor</span> */}
                <span className="block font-semibold text-xl">
                  {item.itemTitle}
                </span>
                {/* <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  $36.00
                </span> */}
              </div>
            </div>
          </Link>
          );
        })}
      </nav>
    </div>
  );
}
