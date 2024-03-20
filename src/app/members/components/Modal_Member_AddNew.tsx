"use client";
import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";

import { data_Status } from "../../lib/data";
import { close } from "fs";

const initialState = {
  Fname: "",
  Lname: "",
  DoB: "",
  Gender: "",
  PhoneHome: "",
  Cell: "",
  Email: "",
  Email2: "",
  Company: "",
  Family: "",
  Disability: "",
  Address: "",
  Address2: "",
  City: "",
  Prov: "",
  PostalCode: "",
  Title: "",
  Notes: "",
  DateofReg: "",
  RenewalDate: "",

  Board: false,
  Participant: false,
  Affiliate: false,
  Volunteer: false,
  VotingMbr: false,
  VotingMbr_Life: false,
  CSG: false,
  Staff: false,
  Status_Donor: false,
};

export default function Modal_Member_AddNew({
  handle_addNewMember,
}: {
  handle_addNewMember: (member_AddNew_Data: any) => void;
}) {
  const [showModal, setShowModal] = React.useState(false);

  const [member_AddNew_Data, setMember_AddNew_Data] = React.useState(
    initialState
  );

  function closeModal() {
    setShowModal(false);
    setMember_AddNew_Data({ ...initialState });
  }

  async function handle_addNewMember_Local() {
    console.log("successful", member_AddNew_Data);

    //setMember_AddNew_Data({ ...initialState });

    await handle_addNewMember(member_AddNew_Data);
  }

  return (
    <>
      <button
        type="button"
        className=" w-[250px] p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  inline-flex items-center"
        onClick={() => setShowModal(true)}
      >
        <span className="mx-4">
          <IoPersonAddOutline size={20} />
        </span>

        <span>Add New Member</span>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-0  ">
            <form
              className="space-y-6"
              // onSubmit={handle_addNewMember_Local}
              // method="POST"
            >
              <div className="relative my-6 mx-auto w-[1300px] h-[800px] ">
                {/*content*/}
                <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full h-full bg-slate-50 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-2xl font-semibold">Add New Member</h3>

                    <button
                      className="w-[70px]  border-emerald-700 border-[0px] hover:bg-emerald-100 active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={() => closeModal()}
                    >
                      <span className="bg-transparent text-black opacity-50 h-6 w-6 text-l block outline-none focus:outline-none">
                        close
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex flex-row border-0 w-full">
                    {/* =========  1st column =================================== */}

                    <div className=" border-0 flex flex-col md:w-2/5 space-y-3">
                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          First Name
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            id="Login"
                            name="Login"
                            type="input"
                            autoComplete="Login"
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            value={member_AddNew_Data.Fname}
                            onChange={(e) =>
                              setMember_AddNew_Data((Fname: any) => ({
                                ...member_AddNew_Data,
                                Fname: e.target.value,
                              }))
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Last Name
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Lname}
                            onChange={(e) =>
                              setMember_AddNew_Data((Lname: any) => ({
                                ...member_AddNew_Data,
                                Lname: e.target.value,
                              }))
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          DoB
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="date"
                            value={member_AddNew_Data.DoB}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                DoB: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Gender
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Gender}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Gender: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          PhoneHome
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.PhoneHome}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                PhoneHome: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Cell
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Cell}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Cell: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Email
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="email"
                            value={member_AddNew_Data.Email}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Email: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Email2
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="email"
                            value={member_AddNew_Data.Email2}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Email2: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Company
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Company}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Company: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Family
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Family}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Family: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Disability
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Disability}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Disability: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>
                    </div>
                    {/* =========  2nd column =================================== */}
                    <div className=" border-0 flex flex-col md:w-2/5 space-y-3">
                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Address
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Address}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Address: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Address2
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Address2}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Address2: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          City
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.City}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                City: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Province
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Prov}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Prov: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Postal Code
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.PostalCode}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                PostalCode: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Title
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            value={member_AddNew_Data.Title}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Title: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Notes:
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <textarea
                            required
                            id="Event_Details"
                            value={member_AddNew_Data.Notes}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                Notes: e.target.value,
                              })
                            }
                            className="w-full h-[130px] rounded-md border border-[#ffffff] bg-white py-1 px-4 text-base font-medium text-[#6B7280] outline-none placeholder-gray-300  focus:border-[#6A64F1] "
                            placeholder="Write your thoughts ... ..."
                          ></textarea>
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Reg Date:
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="date"
                            value={member_AddNew_Data.DateofReg}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                DateofReg: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>

                      <div className="flex flex-row border-0 space-x-3">
                        <span className="border-0 w-[130px] flex item-center justify-end text-left my-auto text-slate-500">
                          Renewal Date:
                        </span>
                        <span className="border-0 w-[250px] flex  justify-left text-left">
                          <input
                            className="appearance-none border-[1px] border-gray-200 rounded w-full py-2 px-4 text-sky-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="date"
                            value={member_AddNew_Data.RenewalDate}
                            onChange={(e) =>
                              setMember_AddNew_Data({
                                ...member_AddNew_Data,
                                RenewalDate: e.target.value,
                              })
                            }
                          />
                        </span>
                      </div>
                    </div>
                    {/* =========  3rd column =================================== */}
                    <div className=" border-2 flex flex-col md:w-1/5">
                      <StatusList
                        member_AddNew_Data={member_AddNew_Data}
                        setMember_AddNew_Data={setMember_AddNew_Data}
                      />
                    </div>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => closeModal()}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handle_addNewMember_Local()}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            id="background"
            className="h-scren opacity-30 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      ) : null}
    </>
  );
}

//==============================================================================

const StatusList = ({ member_AddNew_Data, setMember_AddNew_Data }: any) => {
  return (
    <div className="flex flex-col p-3 space-y-1">
      <div className="flex flex-row hover:bg-white p-3 m-3 border-b-[1px] border-blue-400 text-blue-700">
        Member Status
      </div>
      {data_Status.map((status: any, key: number) => {
        return (
          <div
            key={key}
            className="flex flex-row hover:bg-white hover:border- p-2"
          >
            <label
              className=" border-0 w-[30px] ms-3.5 text-sm text-gray-600 dark  h-full flex items-center justify-end text-left m-auto"
              text-slate-500
            >
              <input
                type="checkbox"
                className="w-[25px] h-[25px] border-0 border-gray-50 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 outline-none"
                value={status.fieldTitle}
                checked={member_AddNew_Data[status.fieldTitle]}
                onChange={(e) =>
                  setMember_AddNew_Data({
                    ...member_AddNew_Data,
                    [status.fieldTitle]: e.target.checked,
                  })
                }
              />
            </label>
            <label className=" border-0 ms-3.5 text-sm text-slate-500 text-grark w-[200px] h-full flex items-center justify-start m-auto">
              {status.fullTitle}
            </label>
          </div>
        );
      })}
    </div>
  );
};
