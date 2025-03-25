"use client"
import "./globals.scss";
import App from "./routing/page";
export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <App/> */}
        {children}
      </body>
    </html>
  );
}
