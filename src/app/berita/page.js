import BeritaCard from "../../components/BeritaCard";
import { beritaSekolah } from "./beritaData";

export const metadata = {
  title: "Berita Sekolah",
  description:
    "Ikuti kegiatan, pencapaian, dan cerita terbaru dari komunitas Sekolah Lentera Harapan.",
};

export default function BeritaPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Cerita dan kabar sekolah
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
            Berita Lentera
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-emerald-100/75 sm:text-base">
            Ikuti perjalanan belajar, karya, dan momen kebersamaan dari
            komunitas Sekolah Lentera Harapan.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-5">
          <p className="text-sm text-slate-600">
            Menampilkan{" "}
            <span className="font-semibold text-emerald-950">
              {beritaSekolah.length} cerita
            </span>
          </p>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-800">
            Tahun ajaran 2026
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beritaSekolah.map((berita) => (
            <BeritaCard key={berita.id} {...berita} />
          ))}
        </div>
      </section>
    </>
  );
}
