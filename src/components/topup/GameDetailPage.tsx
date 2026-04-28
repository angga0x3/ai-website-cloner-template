"use client";

import Image from "next/image";
import { useState } from "react";
import { type GameInfo, type NominalItem, formatPrice } from "./GameData";

function NominalCard({
  item,
  selected,
  onSelect,
}: {
  item: NominalItem;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={item.outOfStock}
      className={`group relative flex min-h-[85px] cursor-pointer gap-4 rounded-xl border p-3 text-left transition-all ${
        selected
          ? "border-[#4cabd7] bg-[rgba(76,171,215,0.15)]"
          : "border-transparent bg-[rgba(53,32,90,0.5)] hover:bg-[rgba(53,32,90,0.7)]"
      } ${item.outOfStock ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-sm font-medium text-white">{item.name}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-bold text-[#4cabd7]">
            {formatPrice(item.price)}
          </span>
          {item.originalPrice && (
            <span className="text-xs text-white/40 line-through">
              {formatPrice(item.originalPrice)}
            </span>
          )}
        </div>
        {item.soldCount && (
          <p className="mt-0.5 text-xs text-white/40">
            {item.soldCount}
            {item.outOfStock && " - Out of Stock"}
          </p>
        )}
      </div>
      {item.discount && (
        <div className="absolute right-2 top-2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
          Disc {item.discount}
        </div>
      )}
      {item.badge && (
        <div className="absolute right-2 top-2 rounded bg-[#4cabd7] px-1.5 py-0.5 text-[10px] font-bold text-white">
          {item.badge}
        </div>
      )}
    </button>
  );
}

function StepSection({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[rgba(53,32,90,0.3)]">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#4cabd7] text-xs font-bold text-white">
          {step}
        </span>
        <h2 className="text-sm font-semibold text-white">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function GameDetailPage({ game }: { game: GameInfo }) {
  const [selectedItem, setSelectedItem] = useState<NominalItem | null>(null);

  return (
    <main className="relative bg-[#743cdd]">
      {/* Hero Banner */}
      <div className="relative">
        <Image
          src={game.bannerImage}
          alt={game.name}
          width={1920}
          height={400}
          className="min-h-56 w-full bg-[rgba(53,32,90,0.5)] object-cover object-center lg:object-contain"
          priority
        />
      </div>

      {/* Game Title Section */}
      <section className="flex min-h-32 w-full items-center border-b border-white/10 bg-gradient-to-r from-[rgba(53,32,90,0.8)] to-[rgba(116,60,221,0.6)] lg:min-h-[160px]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="-mt-12 h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-white/20 shadow-lg lg:-mt-16 lg:h-32 lg:w-32">
              <Image
                src={game.image}
                alt={game.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xs font-bold uppercase leading-7 tracking-wider text-white sm:text-lg">
                {game.name}
              </h1>
              <p className="text-xs text-white/60">{game.publisher}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <span className="text-yellow-400">⚡</span> Proses Cepat
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-blue-400">💬</span> Layanan Chat 24/7
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-400">✓</span> Pembayaran Aman!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mt-4 lg:mt-8">
        <div className="container mx-auto grid grid-cols-1 gap-4 px-4 md:gap-8 lg:grid-cols-3 lg:mt-8">
          {/* Left Column - Product Selection */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
            {/* Step 1: Pilih Nominal */}
            <StepSection step={1} title="Pilih Nominal">
              {game.categories.map((category) => (
                <div key={category.title} className="mb-6 last:mb-0">
                  <h3 className="mb-3 text-sm font-semibold text-white">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item) => (
                      <NominalCard
                        key={item.name}
                        item={item}
                        selected={selectedItem?.name === item.name}
                        onSelect={() => setSelectedItem(item)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </StepSection>

            {/* Step 2: Masukkan Data Akun */}
            <StepSection step={2} title="Masukkan Data Akun">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-white/60">
                    User ID
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan User ID"
                    className="h-10 w-full rounded-lg bg-[rgba(53,32,90,0.5)] px-3 text-sm text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-[#4cabd7]"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/60">
                    Zone ID
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan Zone ID"
                    className="h-10 w-full rounded-lg bg-[rgba(53,32,90,0.5)] px-3 text-sm text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-[#4cabd7]"
                  />
                </div>
              </div>
            </StepSection>

            {/* Step 3: Masukkan Jumlah Pembelian */}
            <StepSection step={3} title="Masukkan Jumlah Pembelian">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(53,32,90,0.5)] text-white border border-white/10"
                >
                  -
                </button>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="h-10 w-20 rounded-lg bg-[rgba(53,32,90,0.5)] px-3 text-center text-sm text-white outline-none border border-white/10"
                />
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(53,32,90,0.5)] text-white border border-white/10"
                >
                  +
                </button>
              </div>
            </StepSection>

            {/* Step 4: Pilih Pembayaran */}
            <StepSection step={4} title="Pilih Pembayaran">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["QRIS", "GoPay", "OVO", "DANA", "ShopeePay", "Bank Transfer"].map(
                  (method) => (
                    <button
                      key={method}
                      type="button"
                      className="rounded-lg border border-white/10 bg-[rgba(53,32,90,0.5)] p-3 text-center text-sm text-white transition-colors hover:bg-[rgba(53,32,90,0.7)]"
                    >
                      {method}
                    </button>
                  )
                )}
              </div>
            </StepSection>

            {/* Step 5: Kode Promo */}
            <StepSection step={5} title="Kode Promo">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Masukkan kode promo"
                  className="h-10 flex-1 rounded-lg bg-[rgba(53,32,90,0.5)] px-3 text-sm text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-[#4cabd7]"
                />
                <button
                  type="button"
                  className="rounded-lg bg-[#4cabd7] px-4 text-sm font-medium text-white transition-colors hover:bg-[#3d9bc7]"
                >
                  Terapkan
                </button>
              </div>
            </StepSection>

            {/* Step 6: Detail Kontak */}
            <StepSection step={6} title="Detail Kontak">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs text-white/60">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Masukkan email"
                    className="h-10 w-full rounded-lg bg-[rgba(53,32,90,0.5)] px-3 text-sm text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-[#4cabd7]"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/60">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="Masukkan nomor WhatsApp"
                    className="h-10 w-full rounded-lg bg-[rgba(53,32,90,0.5)] px-3 text-sm text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-[#4cabd7]"
                  />
                </div>
              </div>
            </StepSection>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Rating */}
            <div className="rounded-xl border border-white/10 bg-[rgba(53,32,90,0.3)] p-4">
              <p className="text-sm text-white/60">Ulasan dan rating</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-3xl font-bold text-white">
                  {game.rating}
                </span>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-1 text-xs text-white/40">
                Berdasarkan total {game.ratingCount} rating
              </p>
            </div>

            {/* Help */}
            <div className="rounded-xl border border-white/10 bg-[rgba(53,32,90,0.3)] p-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Butuh Bantuan?
                  </p>
                  <p className="text-xs text-white/60">
                    Kamu bisa hubungi admin disini.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="sticky top-20 rounded-xl border border-white/10 bg-[rgba(53,32,90,0.3)] p-4">
              {selectedItem ? (
                <div>
                  <p className="text-sm text-white">{selectedItem.name}</p>
                  <p className="mt-1 text-lg font-bold text-[#4cabd7]">
                    {formatPrice(selectedItem.price)}
                  </p>
                </div>
              ) : (
                <p className="text-center text-sm text-white/40">
                  Belum ada item produk yang dipilih.
                </p>
              )}
              <button
                type="button"
                className="mt-4 w-full rounded-lg bg-[#4cabd7] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d9bc7] disabled:opacity-50"
                disabled={!selectedItem}
              >
                Pesan Sekarang!
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="container mx-auto mt-8 hidden px-4 lg:block">
          <div className="rounded-xl border border-white/10 bg-[rgba(53,32,90,0.3)]">
            <div className="border-b border-white/10 px-4 py-2">
              <h2 className="text-sm font-semibold text-white">
                Deskripsi {game.name}
              </h2>
            </div>
            <div className="p-4">
              <p className="text-sm leading-relaxed text-white/70">
                {game.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
