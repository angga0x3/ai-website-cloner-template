import Image from "next/image";

interface Product {
  name: string;
  publisher: string;
  image: string;
  href: string;
  hasFlashSale?: boolean;
}

const popularProducts: Product[] = [
  {
    name: "Mobile Legends",
    publisher: "Moonton",
    image: "/images/mobile-legends.jpg",
    href: "/id-id/mobile-legends",
  },
  {
    name: "Free Fire",
    publisher: "Garena",
    image: "/images/free-fire.jpg",
    href: "/id-id/free-fire",
  },
  {
    name: "Free Fire MAX",
    publisher: "Garena",
    image: "/images/free-fire-max.jpg",
    href: "/id-id/free-fire-max",
  },
  {
    name: "Sword Of Justice",
    publisher: "Exptional Global",
    image: "/images/sword-of-justice.png",
    href: "/id-id/sword-of-justice",
  },
  {
    name: "Lineage2M",
    publisher: "NCV GAMES PTE. LTD.",
    image: "/images/lineage2m.jpg",
    href: "/id-id/lineage2m",
  },
  {
    name: "PUBG Mobile",
    publisher: "Tencent Games",
    image: "/images/pubg-mobile.jpg",
    href: "/id-id/pubg-mobile",
  },
];

const allProducts: Product[] = [
  {
    name: "Roblox - Voucher",
    publisher: "Roblox Corporation",
    image: "/images/roblox---voucher.png",
    href: "/id-id/roblox",
  },
  {
    name: "Google Play - Voucher",
    publisher: "Google LLC",
    image: "/images/google-play---voucher.png",
    href: "/id-id/google-play-voucher",
  },
  {
    name: "Magic Chess: Go Go",
    publisher: "Vizta Games",
    image: "/images/magic-chess--go-go.png",
    href: "/id-id/magic-chess-go-go",
  },
  {
    name: "MLBB Global",
    publisher: "Moonton",
    image: "/images/mlbb-global.jpg",
    href: "/id-id/mobile-legends-global",
  },
  {
    name: "Crystal of Atlan",
    publisher: "Nuverse Games",
    image: "/images/crystal-of-atlan.jpg",
    href: "/id-id/crystal-of-atlan",
  },
  {
    name: "Genshin Impact",
    publisher: "HoYoverse",
    image: "/images/genshin-impact.png",
    href: "/id-id/genshin-impact",
    hasFlashSale: true,
  },
  {
    name: "Blood Strike",
    publisher: "Wizard Games Global Limited",
    image: "/images/blood-strike.png",
    href: "/id-id/blood-strike",
    hasFlashSale: true,
  },
  {
    name: "Zenless Zone Zero",
    publisher: "miHoYo",
    image: "/images/zenless-zone-zero.png",
    href: "/id-id/zenless-zone-zero",
    hasFlashSale: true,
  },
  {
    name: "Honkai : Star Rail",
    publisher: "Mihoyo",
    image: "/images/honkai---star-rail.png",
    href: "/id-id/honkai-star-rail",
    hasFlashSale: true,
  },
  {
    name: "Valorant",
    publisher: "Riot Games",
    image: "/images/valorant.jpg",
    href: "/id-id/valorant",
  },
  {
    name: "Where Winds Meet",
    publisher: "NetEase Games",
    image: "/images/where-winds-meet.png",
    href: "/id-id/where-winds-meet",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      className="group flex items-center gap-3 rounded-xl bg-[rgba(53,32,90,0.5)] p-3 transition-all hover:bg-[rgba(53,32,90,0.7)] hover:shadow-lg"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
        {product.hasFlashSale && (
          <div className="absolute right-0 top-0 rounded-bl-lg bg-red-500 px-1 py-0.5 text-[8px] font-bold text-white">
            FLASH
            <br />
            SALE
          </div>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-white">
          {product.name}
        </h3>
        <p className="truncate text-xs text-white/60">{product.publisher}</p>
      </div>
    </a>
  );
}

function ProductImageCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      className="group relative aspect-[3/4] overflow-hidden rounded-xl transition-transform hover:scale-105"
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
      />
      {product.hasFlashSale && (
        <div className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-lg">
          FLASH SALE
        </div>
      )}
    </a>
  );
}

export function ProductGrid() {
  return (
    <div className="flex flex-col gap-y-8 pt-8">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white">
            <span>🔥</span> POPULER SEKARANG!
          </h2>
          <p className="text-sm text-[#4cabd7]">
            Berikut adalah beberapa produk yang paling populer saat ini.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {allProducts.map((product) => (
            <ProductImageCard key={product.name + product.href} product={product} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button className="rounded-lg border border-white/20 bg-[rgba(53,32,90,0.5)] px-6 py-2 text-sm text-white transition-colors hover:bg-[rgba(53,32,90,0.7)]">
            Tampilkan Lainnya...
          </button>
        </div>
      </div>
    </div>
  );
}
