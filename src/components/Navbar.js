import Link from "next/link";
import Image from "next/image";

const navigationGroups = [
  {
    label: "Profil",
    links: [
      { label: "Tentang Kami", href: "/about#profil" },
      { label: "Visi & Misi", href: "/about#visi-misi" },
      { label: "Sejarah", href: "/about#sejarah" },
      { label: "Kepemimpinan", href: "/about#kepemimpinan" },
    ],
  },
  {
    label: "Sekolah Kami",
    links: [
      { label: "Fasilitas", href: "/about#fasilitas" },
      { label: "Lingkungan Belajar", href: "/about#lingkungan-belajar" },
      { label: "Ekstrakurikuler", href: "/about#ekstrakurikuler" },
    ],
  },
  {
    label: "Akademik",
    links: [
      { label: "Kurikulum SMA", href: "/#program" },
      { label: "PAUD", href: "/#jenjang-lainnya", note: "Segera hadir" },
      { label: "SD", href: "/#jenjang-lainnya", note: "Segera hadir" },
      { label: "SMP", href: "/#jenjang-lainnya", note: "Segera hadir" },
    ],
  },
  {
    label: "Lainnya",
    links: [
      { label: "Pendaftaran Murid", href: "/pendaftaran" },
      { label: "Berita & Acara", href: "/berita" },
    ],
  },
];

function BrandMark() {
  return (
    <Image
      src="https://static.wixstatic.com/media/c51c21_cb2009e574174d08bdf4852d8ba0d232~mv2.png/v1/fill/w_217,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Main%20Logo%20SLH%20-%20Horizontal%20-%20Color.png"
      alt="Logo Sekolah Lentera Harapan"
      width={217}
      height={61}
      priority
      unoptimized
      className="h-10 w-auto max-w-[min(52vw,217px)] object-contain sm:h-12"
    />
  );
}

function MenuLink({ item }) {
  return (
    <Link
      href={item.href}
      className="flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-sm font-medium text-emerald-950 transition hover:bg-emerald-50 hover:text-emerald-800"
    >
      {item.label}
      {item.note ? (
        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
          {item.note}
        </span>
      ) : null}
    </Link>
  );
}

function DropdownMenu({ group }) {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-2 py-4 text-sm font-medium text-white/90 transition hover:text-amber-300 [&::-webkit-details-marker]:hidden">
        {group.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className="h-3.5 w-3.5 transition group-open:rotate-180"
        >
          <path
            d="m4 6 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="absolute left-0 top-full z-20 hidden min-w-60 rounded-xl border border-emerald-950/10 bg-white p-2 shadow-xl shadow-emerald-950/15 group-open:block">
        {group.links.map((item) => (
          <MenuLink key={item.label} item={item} />
        ))}
      </div>
    </details>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-emerald-950 text-emerald-100">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-2 text-[11px] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-xs lg:px-12">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-emerald-100/80">
            <a
              href="https://maps.google.com/?q=Jl.+Mentawai+No.+201,+Tangerang,+15139,+Indonesia"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <span aria-hidden="true">⌖</span> Jl. Mentawai No. 201 Tangerang, 15139, Indonesia
            </a>
            <a
              href="mailto:info@lentera.sch.id"
              className="transition hover:text-white"
            >
              <span aria-hidden="true">✉</span> info@lentera.sch.id
            </a>
          </div>
          <Link
            href="/pendaftaran"
            className="w-fit font-semibold tracking-wide text-amber-300 transition hover:text-amber-200"
          >
            [PPDB 2026/2027 DIBUKA] <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="bg-emerald-900 text-white shadow-md shadow-emerald-950/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link href="/" className="flex min-w-0 items-center py-3">
            <BrandMark />
          </Link>

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-6 lg:flex"
          >
            <Link
              href="/"
              className="text-sm font-medium text-white/90 transition hover:text-amber-300"
            >
              Beranda
            </Link>
            {navigationGroups.map((group) => (
              <DropdownMenu key={group.label} group={group} />
            ))}
            <Link
              href="/pendaftaran"
              className="ml-1 rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-200"
            >
              Daftar Sekarang
            </Link>
          </nav>

          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Buka menu navigasi</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav
              aria-label="Navigasi seluler"
              className="absolute right-0 top-14 max-h-[80vh] w-[min(88vw,24rem)] overflow-y-auto rounded-2xl border border-emerald-950/10 bg-white p-3 text-emerald-950 shadow-xl shadow-emerald-950/20"
            >
              <Link
                href="/"
                className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-emerald-50"
              >
                Beranda
              </Link>
              {navigationGroups.map((group) => (
                <details
                  key={group.label}
                  className="group border-t border-slate-100"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                    {group.label}
                    <span
                      aria-hidden="true"
                      className="text-emerald-700 transition group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <div className="pb-2 pl-2">
                    {group.links.map((item) => (
                      <MenuLink key={item.label} item={item} />
                    ))}
                  </div>
                </details>
              ))}
              <Link
                href="/pendaftaran"
                className="mt-2 block rounded-full bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-emerald-950"
              >
                Daftar Sekarang
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
