import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { SponsorsPageClient } from "@/components/SponsorsPageClient";

type SponsorsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: SponsorsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const { sponsorsPage } = getDictionary(locale);
  return {
    title: sponsorsPage.metaTitle,
    description: sponsorsPage.metaDescription,
  };
}

export default async function SponsorsPage({ params }: SponsorsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <SponsorsPageClient />;
}
