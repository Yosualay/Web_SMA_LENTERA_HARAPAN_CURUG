import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { beritaSekolah } from "../beritaData";

export function generateStaticParams() {
  return beritaSekolah.map((berita) => ({ id: berita.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const berita = beritaSekolah.find((item) => item.id === id);

  if (!berita) {
    return { title: "Berita tidak ditemukan" };
  }

  return {
    title: berita.title,
    description: berita.excerpt,
  };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const berita = beritaSekolah.find((item) => item.id === id);

  if (!berita) {
    notFound();
  }

  return (
    <article>
      <header className="bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-100/75 transition hover:text-amber-300"
          >
            <span aria-hidden="true">←</span> Semua berita
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            {berita.date}
          </p>
          <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            {berita.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-100/75">
            {berita.excerpt}
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={berita.image}
            alt={berita.title}
            fetchPriority="high"
            width={1600}
            height={1000}
            unoptimized
            className="max-h-[560px] w-full object-cover grayscale transition duration-300 hover:grayscale-0"
          />
        </div>
        <div className="mx-auto max-w-3xl py-10 sm:py-14">
          <div className="space-y-6 text-base leading-8 text-slate-700">
            {berita.content.map((paragraf) => (
              <p key={paragraf}>{paragraf}</p>
            ))}
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:border-emerald-900 hover:bg-emerald-50"
            >
              <span aria-hidden="true">←</span> Kembali ke Berita
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
