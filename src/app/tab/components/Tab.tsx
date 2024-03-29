
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import "../styles/styles.css";
import "../styles/jquery-ui.css";

// import "jquery-ui.css";

export default function Tab() {
  const id = "demo";
  return (
    <div>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        src="https://aribudin.github.io/tailmater/src/js/tailmater.js"
        strategy="lazyOnload"
      />
      <Script
        type="text/javascript"
        id="hs-script-loader"
        src="https://code.jquery.com/jquery-3.6.0.js"
        strategy="beforeInteractive"
      />

      <Script
        type="text/javascript"
        id="hs-script-loader"
        src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        strategy="beforeInteractive"
      />

      <Script
        type="text/javascript"
        id="hs-script-loader"
        src="/my.js"
        // onLoad={() => {
        //   console.log("Onload fires as you would expect");
        // }}
      />

      <div id={id}></div>
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
