import { verticals } from "@/app/data/verticals";
import VerticalDetailClient from "@/app/Components/Shared/VerticalDetailClient";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Coral Greens Buildtech | Premium Real Estate Development in Varanasi | Sustainable Construction",
  description: "Coral Greens Buildtech is a leading real estate developer in Varanasi, specializing in premium residential projects like Coral Skyline and Coral Studios. Experience sustainable construction, modern architecture, and innovative urban development with Khalid Ansari's vision for excellence.",
  keywords: "Coral Greens Buildtech, real estate Varanasi, residential projects, Coral Skyline, Coral Studios, sustainable construction, premium apartments, modern housing, property development Varanasi, investment properties, luxury homes",
};

export default function BuildtechPage() {
  const vertical = verticals.find((v) => v.slug === "coral_greens_buildtech");

  if (!vertical) {
    notFound();
  }

  return <VerticalDetailClient vertical={vertical} />;
}
