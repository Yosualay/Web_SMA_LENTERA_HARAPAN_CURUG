import Link from "next/link";
import Image from "next/image";

export default function BeritaCard({ id, title, date, excerpt, image }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
      <Link
        href={`/berita/${id}`}
        className="block overflow-hidden bg-slate-100"
        aria-label={`Baca berita: ${title}`}
      >
        <Image
          src={image}
          alt={title}
          loading="lazy"
          width={1200}
          height={800}
          unoptimized
          className="aspect-[1.55/1] w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
        />
      </Link>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-emerald-800/70">
          {date}
        </p>
        <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-emerald-950">
          <Link
            href={`/berita/${id}`}
            className="transition hover:text-emerald-700"
          >
            {title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {excerpt}
        </p>
        <Link
          href={`/berita/${id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition group-hover:gap-3"
        >
          Baca Selengkapnya
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
