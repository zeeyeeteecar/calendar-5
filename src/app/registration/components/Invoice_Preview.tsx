import React from "react";

export default function Invoice_Preview({ globe_RegistrationInfo }: any) {
  const memberInfo = globe_RegistrationInfo.memberInfo;
  const eventsInfo = globe_RegistrationInfo.eventsInfo;

  const registrationStatus =
    eventsInfo && eventsInfo.get("radio_RegistrationStatus");
  const selectedEvents = eventsInfo && eventsInfo.getAll("checkbox");

  return (
    <div className="w-full border">
      
      <li>{registrationStatus}</li>
      <li>{JSON.stringify(selectedEvents)}</li>
      <li>{JSON.stringify(memberInfo)}</li>

    </div>
  );
}
