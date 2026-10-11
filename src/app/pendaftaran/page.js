import Link from "next/link";

export const metadata = {
  title: "Pendaftaran Murid",
  description:
    "Informasi Penerimaan Peserta Didik Baru 2026/2027 Sekolah Lentera Harapan.",
};

const langkahPendaftaran = [
  {
    nomor: "01",
    judul: "Hubungi tim sekolah",
    isi: "Sampaikan jenjang yang diminati dan tanyakan informasi penerimaan murid.",
  },
  {
    nomor: "02",
    judul: "Kenali lingkungan belajar",
    isi: "Jadwalkan percakapan atau kunjungan agar keluarga mengenal sekolah lebih dekat.",
  },
  {
    nomor: "03",
    judul: "Dapatkan panduan berikutnya",
    isi: "Tim sekolah akan menjelaskan informasi dan tahapan pendaftaran yang berlaku.",
  },
];

export default function PendaftaranPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Penerimaan murid baru
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Mari mulai perjalanan belajar yang penuh harapan.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-100/75">
            PPDB tahun ajaran 2026/2027 telah dibuka. Hubungi tim Sekolah Lentera
            Harapan untuk mendapatkan informasi jenjang, proses, dan
            jadwal penerimaan.
          </p>
          <a
            href="mailto:info@lentera.sch.id?subject=Informasi%20PPDB%202026%2F2027"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-amber-300 px-7 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-200"
          >
            Hubungi Tim Pendaftaran <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Langkah awal
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-emerald-950 sm:text-4xl">
            Proses yang dimulai dengan percakapan.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Setiap keluarga memiliki pertanyaan dan kebutuhan yang berbeda.
            Tim kami siap membantu menjelaskan pilihan dan informasi penerimaan
            secara langsung.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {langkahPendaftaran.map((langkah) => (
            <article
              key={langkah.nomor}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <p className="text-sm font-semibold tracking-[0.14em] text-amber-600">
                {langkah.nomor}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-emerald-950">
                {langkah.judul}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {langkah.isi}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f6f3]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Kami siap membantu
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Jl. Mentawai No. 201 Tangerang, 15139, Indonesia · info@lentera.sch.id
            </p>
          </div>
          <Link
            href="/about"
            className="text-sm font-semibold text-emerald-900 transition hover:text-emerald-700"
          >
            Tentang sekolah <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
