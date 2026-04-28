import Image from "next/image";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(53,32,90,0.8)] backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/pt-kepoo-solusi-indonesia-logo.webp"
            alt="PT KEPOO SOLUSI INDONESIA Logo"
            width={120}
            height={44}
            className="h-8 w-auto"
          />
        </div>

        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              placeholder="Cari Game atau Voucher"
              className="h-9 w-full rounded-lg bg-[rgba(134,111,149,0.8)] pl-9 pr-4 text-sm text-white placeholder:text-white/60 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-[rgba(134,111,149,0.8)] px-3 py-1.5 text-sm text-white">
            <Image
              src="/images/image.svg"
              alt="Indonesia flag"
              width={20}
              height={20}
              className="h-5 w-5 rounded-full"
            />
            <span>ID / IDR</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto flex h-10 items-center justify-between border-t border-white/10 px-4">
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-[#4cabd7]"
          >
            <TopupIcon />
            Topup
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            <ReceiptIcon />
            Cek Transaksi
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-white/80 hover:text-white"
          >
            <ArrowIcon />
            Masuk
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-white/80 hover:text-white"
          >
            <UserAddIcon />
            Daftar
          </a>
        </div>
      </nav>
    </header>
  );
}

function TopupIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="30">
      <rect x="80" y="160" width="352" height="290" rx="60" />
      <path d="M256 60v100M175 340h162" strokeLinecap="round" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M14 8H8M16 12H8M13 16H8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
    </svg>
  );
}

function UserAddIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  );
}
