import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Home | Kannan Ravindran",
};

export default function Page() {
  return <HomePageClient />;
}
