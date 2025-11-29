"use client";

import type { ReactNode } from "react";
import Navbar from "../src/components/Navbar.component";
import Footer from "../src/components/Footer.component";
import { ProjectProvider } from "../src/Context/Projects.Context.jsx";

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProjectProvider>
      <Navbar />
      {children}
      <Footer />
    </ProjectProvider>
  );
}
