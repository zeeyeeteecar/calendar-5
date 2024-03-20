// import React from "react";
// import { prisma } from "../../lib/db";
// import Member_Blcok_List from "./Member_Blcok_List";
// import Members_Block_SearchBar from "./Members_Block_SearchBar";

// export default function Members_Block() {
//   async function handle_Search_Members(data: FormData) {
//     "use server";

//     const Fname = data.get("Fname")?.valueOf();

//     // if (typeof barrageContent !== "string" || barrageContent.length === 0) {
//     //   throw new Error("Invalid title");
//     // }

//     const Search_Members_Results: any = await prisma.tMaster.findMany({
//       where: { Fname: Fname },
//       take: 10,
//     });

//     globe_Search_Members_Results = await Search_Members_Results;
//     // revalidatePath("/");

//     console.log("Fname", Fname);
//     console.log(Search_Members_Results)
//   }

//   console.log(globe_Search_Members_Results);

//   return (
//     <>
//       <Members_Block_SearchBar
//         //globe_Search_Members_Results={globe_Search_Members_Results}
//         handle_Search_Members={handle_Search_Members}
//       />
//       <Member_Blcok_List></Member_Blcok_List>
//       <div>fff{JSON.stringify(globe_Search_Members_Results)}</div>
//     </>
//   );
// }

import React from "react";

export default function Members_Block() {
  return <div>Members_Block</div>;
}
