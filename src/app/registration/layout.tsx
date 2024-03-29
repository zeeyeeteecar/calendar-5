import Script from "next/script";
import "./styles/styles.css";
import "./styles/jquery-ui.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://code.jquery.com/jquery-3.6.0.js" />
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" />
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
