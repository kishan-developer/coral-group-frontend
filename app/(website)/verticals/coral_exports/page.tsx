import { verticals } from "@/app/data/verticals";
import VerticalDetailClient from "@/app/Components/Shared/VerticalDetailClient";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Coral Exports | Global Trade & Logistics Excellence",
  description: "Coral Exports facilitates seamless global trade with a focus on construction materials, textiles, and electronics across 25+ countries.",
};

export default function ExportsPage() {
  const vertical = verticals.find((v) => v.slug === "coral_exports");
  if (!vertical) notFound();
  return <VerticalDetailClient vertical={vertical} />;
}
