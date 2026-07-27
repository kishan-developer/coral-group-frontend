import { notFound } from "next/navigation";
import { verticals } from "@/app/data/verticals";
import VerticalDetailClient from "@/app/Components/Shared/VerticalDetailClient";

export function generateStaticParams() {
  return verticals.map((v) => ({
    slug: v.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const vertical = verticals.find((v) => v.slug === params.slug);
  if (!vertical) return { title: "Vertical Not Found" };

  return {
    title: `${vertical.title} | Coral Group`,
    description: vertical.description,
  };
}

export default function VerticalPage({ params }: { params: { slug: string } }) {
  const vertical = verticals.find((v) => v.slug === params.slug);

  if (!vertical) {
    notFound();
  }

  return <VerticalDetailClient vertical={vertical} />;
}
