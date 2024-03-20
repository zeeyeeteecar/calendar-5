import React from "react";
import { prisma } from "../../lib/db";
import { revalidatePath } from "next/cache";

import Modal_Member_AddNew from "./Modal_Member_AddNew";

async function handle_addNewMember(member_AddNew_Data: any) {
  "use server";
  console.log("server successful", member_AddNew_Data);

  await prisma.tMaster.create({
    data: {
      Fname: member_AddNew_Data.Fname,
      Lname: member_AddNew_Data.Lname,
      DoB: member_AddNew_Data.DoB,
      Gender: member_AddNew_Data.Gender,
      PhoneHome: member_AddNew_Data.PhoneHome,
      Cell: member_AddNew_Data.Cell,
      Email: member_AddNew_Data.Email,
      Email2: member_AddNew_Data.Email2,
      Company: member_AddNew_Data.Company,
      Family: member_AddNew_Data.Family,
      Disability: member_AddNew_Data.Disability,
      Address: member_AddNew_Data.Address,
      Address2: member_AddNew_Data.Address2,
      City: member_AddNew_Data.City,
      Prov: member_AddNew_Data.Prov,
      PostalCode: member_AddNew_Data.PostalCode,
      Title: member_AddNew_Data.Title,
      Notes: member_AddNew_Data.Notes,
      DateofReg: member_AddNew_Data.DateofReg,
      RenewalDate: member_AddNew_Data.RenewalDate,

      Board: member_AddNew_Data.Board,
      Participant: member_AddNew_Data.Participant,
      Affiliate: member_AddNew_Data.Affiliate,
      Volunteer: member_AddNew_Data.Volunteer,
      VotingMbr: member_AddNew_Data.VotingMbr,
      VotingMbr_Life: member_AddNew_Data.VotingMbr_Life,
      CSG: member_AddNew_Data.CSG,
      Staff: member_AddNew_Data.Staff,
      Status_Donor: member_AddNew_Data.Status_Donor,
    },
  });

  //console.log("Free pizza!");
  revalidatePath("/");
}

export default async function Member_AddNew() {
  return (
    <>
      <Modal_Member_AddNew handle_addNewMember={handle_addNewMember} />
    </>
  );
}
