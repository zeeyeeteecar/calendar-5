import React from "react";
import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/db";

import Result_SearchClass from "./components/SearchClass";
import SearchMember from "./components/SearchMember";
import Invoice_Preview from "./components/Invoice_Preview";
import SelectPayment from "./components/SelectPayment";

import "./styles/styles.css"

let globe_MemberSearchResult: any = null;
let globe_Selected_MemberInfo: any = null;
let globe_SelectedMember_RegisterInfo: any = null;
let globe_RegistrationInfo: any = { memberInfo: null, eventsInfo: null };



//====================================================
async function handle_SearchMember(
  Fname: string,
  Lname: string,
  MemberID: string
) {
  "use server";
  // const Fname = data.get("Fname")?.valueOf().toString();
  // //const Fname = "tom";
  // const Lname = data.get("Lname")?.valueOf().toString();
  // const MemberID = data.get("MemberID")?.valueOf();

  // if (typeof Fname !== "string" || Fname.length === 0) {
  //   throw new Error("Invalid title");
  // }

  globe_MemberSearchResult = await prisma.tMaster.findMany({
    where: {
      Fname: { contains: Fname },
      Lname: { contains: Lname },
      tMasterID: MemberID ? Number(MemberID) : undefined,
    },
  });

  //redirect("/");
  globe_Selected_MemberInfo = null;
  revalidatePath("/");
  //console.log("globe_MemberSearchResult", globe_MemberSearchResult);
}

///========================================================
// async function handle_radioChanged(formData: FormData) {
//   "use server";
//   const memberID = formData.get("memberID");
//   console.log(memberID);
//   globe_Selected_MemberInfo = await prisma.tMaster.findFirst({
//     where: {
//       tMasterID: Number(memberID),
//       tEvents: { some: { MemberID: Number(memberID) } },
//     },
//     include: { tEvents: { include: { tEvents: true } } },
//     orderBy: [{ tMasterID: "asc" }],
//   });

//   revalidatePath("/");
//   console.log("uniqueMemberSearch", globe_Selected_MemberInfo);
// }

// ///========================================================
async function handle_radioChanged(formData: FormData) {
  "use server";
  const memberID = formData.get("memberID");

  console.log("memberID", memberID);
  globe_SelectedMember_RegisterInfo = await prisma.tMemberRegEvent.findMany({
    where: {
      MemberID: Number(memberID),
      tEvents: { Start_Date: { gte: new Date("2024-01-01") } },
    },
    include: { tEvents: {}, tMaster: {} },

    orderBy: { EventID: "desc" },
    //take: 3,
  });

  // globe_RegistrationInfo = globe_SelectedMember_RegisterInfo.
  //   ? globe_SelectedMember_RegisterInfo.tMaster
  //   : null;

  console.log(
    "globe_SelectedMember_RegisterInfo",
    globe_SelectedMember_RegisterInfo
  );
  revalidatePath("/");
}

///========================================================
async function SelectedMember_RegisterInfo_test() {
  "use server";
  const result = await prisma.tMemberRegEvent.findMany({
    where: {
      MemberID: 613,
    },
    include: { tEvents: {} },
    orderBy: [{ EventID: "desc" }],
  });
  return await result;
}

// ///========================================================
async function _handle_RegistrationInvoicePreview(formData: FormData) {
  "use server";

  const registrationStatus = formData.get("radio_RegistrationStatus");
  const selectedEvents = formData.getAll("checkbox");

  console.log(registrationStatus);
  console.log(selectedEvents);
  console.log(formData);

  globe_RegistrationInfo.eventsInfo = formData;
}

///===================================================================================

export default async function registration() {
  return (
    <div className="w-min-screen h-full flex flex-row p-4  border-0 border-red-300">
      <div className=" w-3/12 h-min-full border-0 m-0 ">
        <SearchMember
          globe_MemberSearchResult={globe_MemberSearchResult}
          globe_Selected_MemberInfo={globe_Selected_MemberInfo}
          handle_SearchMember={handle_SearchMember}
          handle_radioChanged={handle_radioChanged}
        />
      </div>
      <div className="w-4/12 border p-1">
        <Result_SearchClass
          // globe_MemberSearchResult={globe_MemberSearchResult}
          globe_SelectedMember_RegisterInfo={
            await globe_SelectedMember_RegisterInfo
          }
          globe_SelectedMember_RegisterInfo_test={
            await SelectedMember_RegisterInfo_test()
          }
          _handle_RegistrationInvoicePreview={
            _handle_RegistrationInvoicePreview
          }
        />
      </div>

      {/* <div className="w-5/12 border-2 p-1 ">
        <Invoice_Preview globe_RegistrationInfo={globe_RegistrationInfo} />
        <div>{JSON.stringify(await SelectedMember_RegisterInfo_test())}</div>
        <div>{JSON.stringify(globe_SelectedMember_RegisterInfo)}</div>
      </div> */}

      <div className="w-5/12 border-2 p-1 ">
        <div>
          <SelectPayment globe_RegistrationInfo={globe_RegistrationInfo} />
        </div>
        <div>DFADF</div>
        {/* <div>{JSON.stringify(await SelectedMember_RegisterInfo_test())}</div> */}
        <div>{JSON.stringify(globe_SelectedMember_RegisterInfo)}</div>
      </div>
    </div>
  );
}
