import { verticals } from "@/app/data/verticals";
import VerticalDetailClient from "@/app/Components/Shared/VerticalDetailClient";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Coral Fashion Emporio | Luxury Couture & Artisanal Heritage",
  description: "Coral Fashion Emporio brings elite global brands and custom couture to the heart of the modern consumer.",
};

export default function FashionPage() {
  const vertical = verticals.find((v) => v.slug === "coral_fashion_emporio");
  if (!vertical) notFound();
  return <VerticalDetailClient vertical={vertical} />;
}
