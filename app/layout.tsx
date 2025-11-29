import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Kannan Ravindran | Web Developer & UI Designer",
  description:
    "Portfolio of Kannan Ravindran, a dedicated web developer and creative UI designer crafting engaging web experiences.",
  openGraph: {
    title: "Kannan Ravindran | Web Developer & UI Designer",
    description:
      "Portfolio of Kannan Ravindran, a dedicated web developer and creative UI designer crafting engaging web experiences.",
    type: "website",
    url: "https://rkannan.space",
    siteName: "Kannan Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
