"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import "../styles/styles.css";
import "../styles/jquery-ui.css";

export default function Invoice_Preview({ globe_RegistrationInfo }: any) {
  const memberInfo = globe_RegistrationInfo.memberInfo;
  const eventsInfo = globe_RegistrationInfo.eventsInfo;

  const registrationStatus =
    eventsInfo && eventsInfo.get("radio_RegistrationStatus");
  const selectedEvents = eventsInfo && eventsInfo.getAll("checkbox");

  return (
    <div className="w-full border">
      <Head>
        <title>registration</title>
        <script src="https://code.jquery.com/jquery-3.6.0.js" />
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" />
        <script src="/static/my.js" />
      </Head>

      <Script
        type="text/javascript"
        id="hs-script-loader"
        // src="https://code.jquery.com/jquery-3.6.0.js"
        src="/static/jquery-3.6.0.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log("Onload fires jquery-3.6.0.js as you would expect");
        }}
      />

      <Script
        type="text/javascript"
        id="hs-script-loader"
        // src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        src="/static/jquery-ui.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log("Onload fires jquery-ui.js as you would expect");
        }}
      />

      <Script
        type="text/javascript"
        id="hs-script-loader"
        src="/static/my.js"
        onLoad={() => {
          console.log("Onload fires as you would expect");
        }}
      />

      <li>{registrationStatus}</li>
      <li>{JSON.stringify(selectedEvents)}</li>
      <li>{JSON.stringify(memberInfo)}</li>

      <div id="demo"></div>
      <div id="tabs">
        <ul>
          <li>
            <a href="#tabs-1">Nunc tincidunt</a>
          </li>
          <li>
            <a href="#tabs-2">Proin dolor</a>
          </li>
          <li>
            <a href="#tabs-3">Aenean lacinia</a>
          </li>
        </ul>
        <div id="tabs-1">
          <p>
            Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus.
          </p>
        </div>
        <div id="tabs-2">
          <p>
            Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida
          </p>
        </div>
        <div id="tabs-3">
          <p>
            Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti.
          </p>
        </div>
      </div>
    </div>
  );
}
