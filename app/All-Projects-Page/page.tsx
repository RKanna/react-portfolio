import type { Metadata } from "next";
import AllProjectsClient from "../AllProjectsClient";

export const metadata: Metadata = {
  title: "All Projects | Kannan Ravindran",
};

export default function AllProjectsPage() {
  return <AllProjectsClient />;
}
