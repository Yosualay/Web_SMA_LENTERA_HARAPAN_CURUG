import Link from "next/link";
import Image from "next/image";

const fasilitas = [
  "Ruang kelas yang nyaman dan mendukung kolaborasi",
  "Perpustakaan sebagai ruang eksplorasi dan literasi",
  "Laboratorium sains dan ruang kreativitas",
  "Area olahraga serta ruang terbuka hijau",
];

const program = [
  {
    judul: "Pembelajaran Berbasis Proyek",
    isi: "Siswa menghubungkan pengetahuan lintas bidang melalui proyek yang relevan dan bermakna.",
  },
  {
    judul: "Pengembangan Karakter",
    isi: "Kepedulian, integritas, tanggung jawab, dan rasa hormat dilatih dalam keseharian.",
  },
  {
    judul: "Seni, Olahraga, dan Minat",
    isi: "Ruang untuk bereksplorasi, berlatih, dan mengembangkan kemampuan di luar kelas.",
  },
];

export const metadata = {
  title: "Tentang Kami",
  description:
    "Kenali profil, visi, misi, fasilitas, dan program unggulan Sekolah Lentera Harapan.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_0.8fr] md:items-end lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Tentang kami
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Tempat setiap potensi menemukan arah.
            </h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-emerald-100/75">
            Sekolah Lentera Harapan adalah komunitas belajar yang mengutamakan
            pertumbuhan, karakter, dan kolaborasi untuk menyiapkan generasi
            pembawa harapan.
          </p>
        </div>
      </section>

      <section
        id="profil"
        className="scroll-mt-32 mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24"
      >
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src="https://static.wixstatic.com/media/c51c21_92f3235fb0d04d0d876514ab1c853a2d~mv2.png/v1/crop/x_70,y_128,w_1742,h_1014/fill/w_996,h_580,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Proses%20Pendaftaran.png"
            alt="Siswa belajar bersama di dalam kelas"
            width={1400}
            height={1000}
            unoptimized
            className="h-full min-h-[320px] w-full object-cover grayscale transition duration-300 hover:grayscale-0"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Profil sekolah
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-emerald-950 sm:text-4xl">
            Belajar dengan hati, melangkah dengan percaya diri.
          </h2>
          <p className="mt-6 text-sm leading-8 text-slate-600">
            Sekolah Lentera Harapan hadir sebagai lingkungan pendidikan yang
            aman, inklusif, dan mendorong setiap siswa menjadi pembelajar
            sepanjang hayat. Kami menggabungkan proses akademik yang kuat dengan
            pengalaman nyata, pembentukan karakter, serta hubungan yang erat
            antara sekolah, keluarga, dan masyarakat.
          </p>
          <p className="mt-4 text-sm leading-8 text-slate-600">
            Dengan pendampingan guru yang mengenal dan menghargai keunikan setiap
            anak, siswa didorong untuk bertanya, berani mencoba, dan bertanggung
            jawab atas proses belajarnya.
          </p>
        </div>
      </section>

      <section id="sejarah" className="scroll-mt-32 bg-[#f4f6f3]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24">
          <article className="rounded-2xl bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Sejarah singkat
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-emerald-950">
              Berawal dari sebuah keyakinan.
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              Sekolah Lentera Harapan bertumbuh dari kepedulian para pendidik
              dan keluarga yang ingin menghadirkan ruang belajar yang lebih
              dekat, hangat, dan penuh kesempatan. Sejak membuka pintu bagi
              angkatan pertama, sekolah terus berkembang bersama komunitasnya
              dengan satu tujuan: membantu anak-anak menemukan cahaya dan
              harapan di dalam dirinya.
            </p>
          </article>
          <article
            id="visi-misi"
            className="scroll-mt-32 rounded-2xl bg-emerald-950 p-8 text-white sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Visi kami
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Menjadi komunitas pembelajar yang menginspirasi generasi pembawa
              harapan.
            </h2>
            <div className="mt-9 h-px w-full bg-white/15" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Misi kami
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-emerald-50/80">
              <li>
                <span className="mr-2 text-amber-300">—</span>
                Menghadirkan pembelajaran yang bermakna, menantang, dan inklusif.
              </li>
              <li>
                <span className="mr-2 text-amber-300">—</span>
                Membentuk karakter yang berintegritas dan peduli terhadap sesama.
              </li>
              <li>
                <span className="mr-2 text-amber-300">—</span>
                Membangun kemitraan yang kuat dengan keluarga dan masyarakat.
              </li>
              <li>
                <span className="mr-2 text-amber-300">—</span>
                Mendorong siswa menggunakan pengetahuan untuk memberi dampak baik.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section
        id="kepemimpinan"
        className="scroll-mt-32 bg-white"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Kepemimpinan
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-emerald-950">
              Bertumbuh melalui kolaborasi.
            </h2>
          </div>
          <p className="text-sm leading-8 text-slate-600">
            Kepemimpinan di Sekolah Lentera Harapan dijalankan dengan semangat
            melayani dan bekerja bersama. Tim sekolah, guru, murid, dan keluarga
            berkolaborasi membangun lingkungan belajar yang aman, bertanggung
            jawab, dan terus berkembang.
          </p>
        </div>
      </section>

      <section
        id="fasilitas"
        className="scroll-mt-32 mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Fasilitas
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-emerald-950">
            Ruang untuk bertumbuh.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Fasilitas sekolah dirancang untuk mendukung pengalaman belajar yang
            beragam, aktif, dan nyaman.
          </p>
          <ul className="mt-7 space-y-4">
            {fasilitas.map((item) => (
              <li
                key={item}
                id={item.startsWith("Ruang kelas") ? "lingkungan-belajar" : undefined}
                className="scroll-mt-32 flex gap-3 text-sm leading-6 text-slate-700"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-950/10 bg-[#f4f6f3] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Program unggulan
          </p>
          <div className="mt-6 divide-y divide-emerald-950/10">
            {program.map((item, index) => (
              <article
                key={item.judul}
                id={item.judul === "Seni, Olahraga, dan Minat" ? "ekstrakurikuler" : undefined}
                className="scroll-mt-32 py-5 first:pt-0 last:pb-0"
              >
                <p className="text-xs font-semibold text-amber-600">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-semibold text-emerald-950">
                  {item.judul}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.isi}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Kunjungi kami
            </p>
            <h2 className="mt-3 text-2xl font-medium text-white">
              Mari bertumbuh bersama Lentera.
            </h2>
            <p className="mt-2 text-sm leading-7 text-emerald-100/75">
              Jl. Mentawai No. 201 Tangerang, 15139, Indonesia
            </p>
          </div>
          <Link
            href="mailto:info@lentera.sch.id"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-100"
          >
            Hubungi Sekolah <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
