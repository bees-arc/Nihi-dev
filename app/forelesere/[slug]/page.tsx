import { faculty } from "@/lib/data";
import { notFound } from "next/navigation";
import FacultyDetailClient from "@/components/FacultyDetailClient";

export function generateStaticParams() {
  return faculty.map((f) => ({ slug: f.slug }));
}

export default async function FacultyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = faculty.find((f) => f.slug === slug);
  if (!person) return notFound();

  return <FacultyDetailClient person={person} />;
}
