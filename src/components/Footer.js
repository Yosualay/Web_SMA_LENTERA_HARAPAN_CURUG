import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-12">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="https://static.wixstatic.com/media/c51c21_cb2009e574174d08bdf4852d8ba0d232~mv2.png/v1/fill/w_217,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Main%20Logo%20SLH%20-%20Horizontal%20-%20Color.png"
              alt="Logo Sekolah Lentera Harapan"
              width={217}
              height={61}
              unoptimized
              className="h-10 w-auto max-w-[min(75vw,217px)] object-contain sm:h-12"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-emerald-100/70">
            Ruang belajar yang menyalakan potensi, menumbuhkan karakter, dan
            menginspirasi setiap anak untuk membawa harapan bagi sesama.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Jelajahi
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-emerald-100/75">
            <li>
              <Link className="transition hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/about">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/berita">
                Berita Sekolah
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Hubungi Kami
          </h2>
          <address className="mt-5 space-y-3 text-sm not-italic leading-6 text-emerald-100/75">
            <p>Jl. Mentawai No. 201 Tangerang, 15139, Indonesia</p>
            <p>
              <a
                className="transition hover:text-white"
                href="mailto:info@lentera.sch.id"
              >
                info@lentera.sch.id
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-emerald-100/55 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© 2026 Sekolah Lentera Harapan. Hak cipta dilindungi.</p>
          <p>Mendidik dengan hati, menyalakan masa depan.</p>
        </div>
      </div>
    </footer>
  );
}
