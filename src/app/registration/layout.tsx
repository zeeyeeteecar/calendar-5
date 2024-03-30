import Script from "next/script";
import "./styles/styles.css";
import "./styles/jquery-ui.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
