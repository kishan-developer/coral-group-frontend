import { verticals } from "@/app/data/verticals";
import VerticalDetailClient from "@/app/Components/Shared/VerticalDetailClient";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Coral Foundation | Pillars of Social Transformation",
  description: "Coral Foundation is dedicated to education, clean water initiatives, and vocational training for underprivileged communities.",
};

export default function FoundationPage() {
  const vertical = verticals.find((v) => v.slug === "coral_foundation");
  if (!vertical) notFound();
  return <VerticalDetailClient vertical={vertical} />;
}
