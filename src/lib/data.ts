import React, { Component } from "react";

import { CiCalendar } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { FaRegRegistered } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

export const data_Status = [
  { fullTitle: "Board", title: "Board", clr: "red", fieldTitle: "Board" },
  {
    fullTitle: "Participant",
    title: "Part",
    clr: "blue",
    fieldTitle: "Participant",
  },
  {
    fullTitle: "Affiliate",
    title: "Affi",
    clr: "indigo",
    fieldTitle: "Affiliate",
  },
  {
    fullTitle: "Volunteer",
    title: "Vol",
    clr: "gray",
    fieldTitle: "Volunteer",
  },
  {
    fullTitle: "Voting Member",
    title: "Vote",
    clr: "pink",
    fieldTitle: "VotingMbr",
  },
  {
    fullTitle: "L-Voting Member",
    title: "L-Vote",
    clr: "hotpink",
    fieldTitle: "VotingMbr_Life",
  },
  { fullTitle: "CSG", title: "CSG", clr: "green", fieldTitle: "CSG" },
  { fullTitle: "Staff", title: "Staff", clr: "orange", fieldTitle: "Staff" },
  {
    fullTitle: "Donor",
    title: "Donr",
    clr: "red",
    fieldTitle: "Status_Donor",
  },
];

export const data_MainMenu = [
  {
    itemTitle: "Log In",
    itemLink: "/login",
    query: { name: "test" },
    itemBgColor: "bg-blue-500",
  },
  {
    itemTitle: "Log Out",
    itemLink: "/logout",
    query: { name: "test" },
    itemBgColor: "bg-red-500",
  },
  {
    itemTitle: "Member",
    itemLink: "/members",
    query: { name: "test" },
    itemBgColor: "bg-yellow-500",
  },
  {
    itemTitle: "Calendar",
    itemLink: "/calendar",
    query: { name: "test" },
    itemBgColor: " bg-green-500",
  },
  {
    itemTitle: "Sign Up",
    itemLink: "/signup",
    query: { name: "test" },
    itemBgColor: " bg-cyan-500",
  },
];

export const data_SideNavBar = [
  {
    title: "Calendar",
    link: "/calendar",
    IconComponent: CiCalendar,
  },
  {
    title: "Members",
    link: "/members",
    IconComponent: SlPeople,
  },
  {
    title: "Registration",
    link: "/registration",
    IconComponent: FaRegRegistered,
  },
  {
    title: "Log Out",
    link: "/logout",
    IconComponent: CiStar,
  },
  {
    title: "Important",
    link: "#",
    IconComponent: CiStar,
  },
  { title: "Sent", link: "#", IconComponent: CiCalendar },
  {
    title: "Drafts",
    link: "#",
    IconComponent: CiCalendar,
  },
  {
    title: "Spam",
    link: "#",
    IconComponent: CiCalendar,
  },
];

export const MyComponent = {
  CiCalendar: CiCalendar,
  SlPeople: SlPeople,
};

export const RegistrationStatus = [
  { status: "none", statusFee: 0, defaultChecked: true },
  { status: "New Registration", statusFee: 10, defaultChecked: false },
  { status: "Renewal ", statusFee: 5, defaultChecked: false },
  { status: "Voting Member", statusFee: 20, defaultChecked: false },
  { status: "Lifetime V-Member ", statusFee: 200, defaultChecked: false },
];
