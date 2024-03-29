import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
          strategy="beforeInteractive"
        ></script>
        <script
          src="https://code.jquery.com/jquery-3.6.0.js"
          strategy="beforeInteractive"
        ></script>
        <script src="/static/my.js" strategy="beforeInteractive"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
          strategy="beforeInteractive"
        ></script>
        <script
          src="https://code.jquery.com/jquery-3.6.0.js"
          strategy="beforeInteractive"
        ></script>
        <script src="/static/my.js" strategy="beforeInteractive"></script>

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
      </body>
    </Html>
  );
}
