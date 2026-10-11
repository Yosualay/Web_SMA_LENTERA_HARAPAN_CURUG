import Image from "next/image";
import Link from "next/link";
import BeritaCard from "../components/BeritaCard";
import { beritaSekolah } from "./berita/beritaData";

const bidangPembelajaran = [
  {
    nomor: "01",
    judul: "Studi Alkitab",
    deskripsi:
      "Fondasi spiritual dan moral melalui pengenalan kisah Alkitab serta penerapan nilai kebaikan dalam kehidupan sehari-hari.",
    gambar:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=85",
    alt: "Buku terbuka untuk pembelajaran dan refleksi",
  },
  {
    nomor: "02",
    judul: "Sains & Teknologi",
    deskripsi:
      "Fisika, Kimia, dan Biologi dipelajari lewat eksperimen dan pengamatan, dilengkapi literasi digital serta pemahaman algoritma.",
    gambar:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    alt: "Peralatan eksperimen di laboratorium sains",
  },
  {
    nomor: "03",
    judul: "Kompetensi Literasi",
    deskripsi:
      "Bahasa Indonesia dan Inggris dikembangkan melalui analisis teks kritis, penulisan esai, diskusi, dan media multimodal.",
    gambar:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    alt: "Siswa menulis dan menuangkan gagasan",
  },
  {
    nomor: "04",
    judul: "Kompetensi Numerasi",
    deskripsi:
      "Konsep matematika diterapkan dalam analisis data, grafik, dan topik lanjutan seperti kalkulus untuk menyelesaikan masalah.",
    gambar:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=85",
    alt: "Catatan dan perhitungan matematika",
  },
  {
    nomor: "05",
    judul: "Pengembangan Seni",
    deskripsi:
      "Seni rupa, musik, tari, dan teater menjadi wadah ekspresi kreatif, apresiasi budaya, serta pengembangan rasa percaya diri.",
    gambar:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    alt: "Perlengkapan seni untuk kegiatan kreatif",
  },
  {
    nomor: "06",
    judul: "IPS & Pancasila",
    deskripsi:
      "Murid mempelajari kebinekaan, isu sosial global, toleransi, dan tanggung jawab sebagai warga negara yang berempati.",
    gambar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    alt: "Sekelompok teman berdiskusi dan bekerja bersama",
  },
];

const faq = [
  {
    pertanyaan: "Bagaimana pendekatan kurikulum di SMA SLH?",
    jawaban:
      "Kurikulum menggabungkan standar nasional, penguatan karakter berbasis nilai spiritual, dan keterampilan abad ke-21. Murid belajar melalui pemahaman konsep, diskusi, praktik, dan proyek yang relevan.",
  },
  {
    pertanyaan: "Apakah ada pendampingan masuk perguruan tinggi?",
    jawaban:
      "Ya. Sekolah menyediakan bimbingan karier dan peminatan akademik sejak kelas 11 untuk membantu murid mengenali kekuatan, mengeksplorasi pilihan studi, dan mempersiapkan langkah menuju perguruan tinggi.",
  },
  {
    pertanyaan: "Bagaimana bentuk proyek interdisipliner murid?",
    jawaban:
      "Murid bekerja dalam kelompok lintas mata pelajaran untuk menyelidiki persoalan nyata, misalnya isu lingkungan atau sosial. Mereka mengumpulkan dan menganalisis data, merancang solusi, lalu mempresentasikan hasilnya.",
  },
];

export default function Home() {
  const beritaTerbaru = beritaSekolah.slice(0, 3);

  return (
    <>
      <section className="relative isolate min-h-[650px] overflow-hidden bg-emerald-950">
        <Image
          src="https://static.wixstatic.com/media/c51c21_ed3582bf1b8e402d96b084190b7507cb~mv2.jpg/v1/fill/w_1901,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c51c21_ed3582bf1b8e402d96b084190b7507cb~mv2.jpg"
          alt="Suasana belajar di lingkungan sekolah"
          fetchPriority="high"
          loading="eager"
          width={2200}
          height={1400}
          unoptimized
          className="absolute inset-0 -z-20 h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/25" />
        <div className="mx-auto flex min-h-[650px] w-full max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-sm">
              <span className="h-px w-10 bg-amber-300" />
              Sekolah Lentera Harapan
            </p>
            <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Pendidikan
              <br />
              Sekolah Menengah <span className="font-serif italic text-amber-300">Atas</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Membentuk generasi pembelajar seumur hidup yang berkarakter kokoh,
              unggul secara akademik, dan siap berkontribusi bagi masyarakat.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#program"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-7 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-200"
              >
                Pelajari Kurikulum <span aria-hidden="true">↓</span>
              </Link>
              <Link
                href="/pendaftaran"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Informasi Pendaftaran
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/55 lg:flex">
            <span className="h-px w-14 bg-white/40" />
            Belajar · Bertumbuh · Berdampak
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Filosofi pendidikan
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-emerald-950 sm:text-4xl">
            Prestasi tumbuh bersama karakter dan kepedulian.
          </h2>
          <div className="mt-6 h-px w-16 bg-amber-500" />
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Pendidikan SMA di Lentera Harapan tidak hanya berfokus pada capaian
            akademik. Kami menumbuhkan karakter, kepemimpinan, dan spiritualitas
            agar murid siap menghadapi tantangan sekaligus memberi dampak baik.
          </p>
          <p>
            Keluarga adalah mitra utama kami dalam mendampingi tumbuh kembang
            murid. Melalui komunikasi dan kolaborasi yang terbuka, sekolah dan
            orang tua membangun lingkungan yang konsisten untuk setiap anak.
          </p>
          <Link
            href="/about#profil"
            className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-emerald-900 transition hover:gap-3"
          >
            Kenali komunitas sekolah <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-[#f4f6f3]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-12 lg:py-20">
          <div className="overflow-hidden rounded-2xl bg-slate-200">
            <Image
              src="https://static.wixstatic.com/media/c51c21_54b7ee16de99420d85a66510baa83ef4~mv2.jpg/v1/fill/w_660,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c51c21_54b7ee16de99420d85a66510baa83ef4~mv2.jpg"
              alt="Murid bekerja sama dalam kegiatan belajar"
              width={1400}
              height={1000}
              unoptimized
              className="aspect-[1.25/1] h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
            />
          </div>
          <div className="md:pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Arah dan masa depan
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-emerald-950 sm:text-4xl">
              Pilihan belajar yang mengenali potensi.
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Di kelas 11 dan 12, pendampingan terarah membantu murid memahami
              minat dan kekuatannya, memilih jalur peminatan, serta merencanakan
              studi ke jenjang perguruan tinggi. Percakapan karier, eksplorasi
              pilihan studi, dan refleksi diri menjadi bagian dari persiapan
              yang berkelanjutan.
            </p>
            <Link
              href="/pendaftaran"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition hover:gap-3"
            >
              Diskusikan perjalanan belajar <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Cara belajar kami
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Pertanyaan nyata. Kolaborasi nyata.
            </h2>
            <p className="mt-5 text-sm leading-8 text-emerald-100/75">
              Pembelajaran berbasis proyek (PBL) menghubungkan berbagai disiplin
              ilmu untuk membantu murid menyelidiki dan menyelesaikan persoalan
              nyata di sekitar mereka.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["01", "Mengidentifikasi masalah"],
              ["02", "Mengumpulkan dan menganalisis data"],
              ["03", "Berkolaborasi menyusun solusi"],
              ["04", "Mempresentasikan hasil proyek"],
            ].map(([nomor, langkah]) => (
              <div
                key={nomor}
                className="rounded-xl border border-white/15 bg-white/[0.04] p-5"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-amber-300">
                  {nomor}
                </span>
                <p className="mt-3 text-sm font-medium text-white">{langkah}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="scroll-mt-32">
        <div className="mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 lg:px-12 lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Kurikulum SMA
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-emerald-950 sm:text-4xl">
            Tujuh bidang untuk membentuk pembelajar yang utuh.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Setiap bidang membuka cara pandang yang berbeda. Bersama-sama,
            pengalaman belajar ini melatih pengetahuan, keterampilan, karakter,
            dan kepedulian.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-2 lg:px-12 lg:pb-24">
          {bidangPembelajaran.map((bidang, index) => (
            <article
              key={bidang.nomor}
              className={`group grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-2 ${
                index === 6 ? "lg:col-span-2 lg:grid-cols-[1fr_1fr]" : ""
              }`}
            >
              <div
                className={`overflow-hidden bg-slate-100 ${
                  index % 2 === 1 ? "sm:order-2" : ""
                } ${index === 6 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={bidang.gambar}
                  alt={bidang.alt}
                  width={1200}
                  height={900}
                  unoptimized
                  className="h-full min-h-56 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-amber-600">
                  BIDANG {bidang.nomor}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-emerald-950 sm:text-2xl">
                  {bidang.judul}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {bidang.deskripsi}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="jenjang-lainnya" className="scroll-mt-32 bg-[#f4f6f3]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Jenjang lainnya
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              Informasi pada halaman ini berfokus pada program SMA Sekolah
              Lentera Harapan. Informasi jenjang PAUD, SD, dan SMP akan
              tersedia melalui kanal sekolah.
            </p>
          </div>
          <a
            href="mailto:info@lentera.sch.id"
            className="shrink-0 text-sm font-semibold text-emerald-900 hover:text-emerald-700"
          >
            Tanyakan kepada kami →
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Pertanyaan umum
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-emerald-950 sm:text-4xl">
            Yang ingin Anda ketahui.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faq.map((item, index) => (
            <details key={item.pertanyaan} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left font-semibold text-emerald-950 [&::-webkit-details-marker]:hidden">
                <span className="flex gap-4">
                  <span className="text-xs font-semibold tracking-wider text-amber-600">
                    0{index + 1}
                  </span>
                  {item.pertanyaan}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl font-normal text-emerald-700 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl pl-9 text-sm leading-7 text-slate-600">
                {item.jawaban}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f6f3]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Cerita dari sekolah
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-emerald-950 sm:text-4xl">
                Kabar terbaru
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition hover:gap-3"
            >
              Semua berita <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beritaTerbaru.map((berita) => (
              <BeritaCard key={berita.id} {...berita} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
