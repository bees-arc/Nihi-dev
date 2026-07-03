import { programs } from "@/lib/data";
import { notFound } from "next/navigation";
import ProgramDetailClient from "@/components/ProgramDetailClient";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return notFound();

  return <ProgramDetailClient program={program} />;
}
