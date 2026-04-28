export interface NominalItem {
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  outOfStock?: boolean;
  soldCount?: string;
  badge?: string;
}

export interface NominalCategory {
  title: string;
  items: NominalItem[];
}

export interface GameInfo {
  slug: string;
  name: string;
  publisher: string;
  image: string;
  bannerImage: string;
  rating: number;
  ratingCount: string;
  description: string;
  categories: NominalCategory[];
}

export const gamesData: Record<string, GameInfo> = {
  "mobile-legends": {
    slug: "mobile-legends",
    name: "MOBILE LEGENDS",
    publisher: "Moonton",
    image: "/images/mobile-legends.jpg",
    bannerImage: "/images/mobile-legends-banner.png",
    rating: 4.99,
    ratingCount: "10.78jt",
    description:
      "Beli top up ML diamond Mobile Legends & Weekly Diamond Pass MLBB harga paling murah, aman, cepat, dan terpercaya.",
    categories: [
      {
        title: "⚡ FLASH SALE",
        items: [
          {
            name: "Weekly Elite Pack - Khusus Member Gold ✨",
            price: 14017,
            outOfStock: true,
            soldCount: "9.999 / 9.999 purchased",
          },
          {
            name: "Weekly Diamond Pass - Khusus Member Gold ✨",
            price: 25926,
            outOfStock: true,
            soldCount: "9.999 / 9.999 purchased",
          },
          {
            name: "Weekly Diamond Pass - INSTANT ⚡⚡⚡",
            price: 27160,
            originalPrice: 32500,
            discount: "16%",
          },
        ],
      },
      {
        title: "😎 WDP MURAH",
        items: [
          {
            name: "Weekly Elite Pack",
            price: 14017,
            originalPrice: 15000,
            discount: "7%",
          },
          {
            name: "2x Weekly Diamond Pass",
            price: 54294,
            originalPrice: 65000,
            discount: "16%",
          },
          {
            name: "Monthly Epic Pack",
            price: 69255,
            originalPrice: 75000,
            discount: "8%",
          },
        ],
      },
      {
        title: "🎁 First Top Up - 2x Diamonds",
        items: [
          { name: "100 (50+50) Diamonds - First Top Up", price: 16417 },
          { name: "300 (150+150) Diamonds - First Top Up", price: 49065 },
          { name: "500 (250+250) Diamonds - First Top Up", price: 81573 },
        ],
      },
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "110 (100+10) Diamonds", price: 30624 },
          { name: "278 (251+27) Diamonds", price: 79624 },
          { name: "568 (503+65) Diamonds", price: 150888 },
        ],
      },
    ],
  },
  "free-fire": {
    slug: "free-fire",
    name: "FREE FIRE",
    publisher: "Garena",
    image: "/images/free-fire.jpg",
    bannerImage: "/images/free-fire.jpg",
    rating: 4.95,
    ratingCount: "5.2jt",
    description: "Top up Free Fire diamond dengan harga termurah dan proses tercepat.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "100 Diamonds", price: 15000 },
          { name: "310 Diamonds", price: 46000 },
          { name: "520 Diamonds", price: 75000 },
          { name: "1060 Diamonds", price: 150000 },
        ],
      },
    ],
  },
  "free-fire-max": {
    slug: "free-fire-max",
    name: "FREE FIRE MAX",
    publisher: "Garena",
    image: "/images/free-fire-max.jpg",
    bannerImage: "/images/free-fire-max.jpg",
    rating: 4.90,
    ratingCount: "3.1jt",
    description: "Top up Free Fire MAX diamond dengan harga termurah.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "100 Diamonds", price: 15000 },
          { name: "310 Diamonds", price: 46000 },
          { name: "520 Diamonds", price: 75000 },
        ],
      },
    ],
  },
  "pubg-mobile": {
    slug: "pubg-mobile",
    name: "PUBG MOBILE",
    publisher: "Tencent Games",
    image: "/images/pubg-mobile.jpg",
    bannerImage: "/images/pubg-mobile.jpg",
    rating: 4.97,
    ratingCount: "8.5jt",
    description: "Top up UC PUBG Mobile dengan harga paling murah, aman dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "60 UC", price: 15000 },
          { name: "325 UC", price: 75000 },
          { name: "660 UC", price: 150000 },
          { name: "1800 UC", price: 375000 },
        ],
      },
    ],
  },
  "genshin-impact": {
    slug: "genshin-impact",
    name: "GENSHIN IMPACT",
    publisher: "HoYoverse",
    image: "/images/genshin-impact.png",
    bannerImage: "/images/genshin-impact.png",
    rating: 4.98,
    ratingCount: "4.3jt",
    description: "Top up Genesis Crystal Genshin Impact termurah dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "60 Genesis Crystals", price: 16000 },
          { name: "330 Genesis Crystals", price: 79000 },
          { name: "1090 Genesis Crystals", price: 249000 },
        ],
      },
    ],
  },
  "valorant": {
    slug: "valorant",
    name: "VALORANT",
    publisher: "Riot Games",
    image: "/images/valorant.jpg",
    bannerImage: "/images/valorant.jpg",
    rating: 4.96,
    ratingCount: "6.1jt",
    description: "Top up Valorant Points termurah, aman dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "125 VP", price: 15000 },
          { name: "420 VP", price: 50000 },
          { name: "700 VP", price: 80000 },
          { name: "1375 VP", price: 150000 },
        ],
      },
    ],
  },
  "honkai-star-rail": {
    slug: "honkai-star-rail",
    name: "HONKAI: STAR RAIL",
    publisher: "Mihoyo",
    image: "/images/honkai---star-rail.png",
    bannerImage: "/images/honkai---star-rail.png",
    rating: 4.97,
    ratingCount: "2.8jt",
    description: "Top up Oneiric Shard Honkai Star Rail termurah dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "60 Oneiric Shards", price: 16000 },
          { name: "330 Oneiric Shards", price: 79000 },
          { name: "1090 Oneiric Shards", price: 249000 },
        ],
      },
    ],
  },
  "zenless-zone-zero": {
    slug: "zenless-zone-zero",
    name: "ZENLESS ZONE ZERO",
    publisher: "miHoYo",
    image: "/images/zenless-zone-zero.png",
    bannerImage: "/images/zenless-zone-zero.png",
    rating: 4.95,
    ratingCount: "1.5jt",
    description: "Top up Polychrome Zenless Zone Zero termurah.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "60 Polychrome", price: 16000 },
          { name: "330 Polychrome", price: 79000 },
          { name: "1090 Polychrome", price: 249000 },
        ],
      },
    ],
  },
  "roblox": {
    slug: "roblox",
    name: "ROBLOX - VOUCHER",
    publisher: "Roblox Corporation",
    image: "/images/roblox---voucher.png",
    bannerImage: "/images/roblox---voucher.png",
    rating: 4.92,
    ratingCount: "2.1jt",
    description: "Beli voucher Roblox termurah dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "Roblox $10", price: 150000 },
          { name: "Roblox $25", price: 375000 },
        ],
      },
    ],
  },
  "google-play-voucher": {
    slug: "google-play-voucher",
    name: "GOOGLE PLAY - VOUCHER",
    publisher: "Google LLC",
    image: "/images/google-play---voucher.png",
    bannerImage: "/images/google-play---voucher.png",
    rating: 4.90,
    ratingCount: "3.4jt",
    description: "Beli voucher Google Play termurah dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "Google Play Rp 20.000", price: 20500 },
          { name: "Google Play Rp 50.000", price: 51000 },
          { name: "Google Play Rp 100.000", price: 101000 },
        ],
      },
    ],
  },
  "sword-of-justice": {
    slug: "sword-of-justice",
    name: "SWORD OF JUSTICE",
    publisher: "Exptional Global",
    image: "/images/sword-of-justice.png",
    bannerImage: "/images/sword-of-justice.png",
    rating: 4.88,
    ratingCount: "500rb",
    description: "Top up Sword of Justice termurah dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "60 Gems", price: 16000 },
          { name: "330 Gems", price: 79000 },
        ],
      },
    ],
  },
  "lineage2m": {
    slug: "lineage2m",
    name: "LINEAGE2M",
    publisher: "NCV GAMES PTE. LTD.",
    image: "/images/lineage2m.jpg",
    bannerImage: "/images/lineage2m.jpg",
    rating: 4.85,
    ratingCount: "320rb",
    description: "Top up Lineage2M termurah dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "100 Blue Diamonds", price: 16000 },
          { name: "500 Blue Diamonds", price: 79000 },
        ],
      },
    ],
  },
  "magic-chess-go-go": {
    slug: "magic-chess-go-go",
    name: "MAGIC CHESS: GO GO",
    publisher: "Vizta Games",
    image: "/images/magic-chess--go-go.png",
    bannerImage: "/images/magic-chess--go-go.png",
    rating: 4.80,
    ratingCount: "150rb",
    description: "Top up Magic Chess: Go Go termurah.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "100 Diamonds", price: 15000 },
          { name: "500 Diamonds", price: 75000 },
        ],
      },
    ],
  },
  "mobile-legends-global": {
    slug: "mobile-legends-global",
    name: "MLBB GLOBAL",
    publisher: "Moonton",
    image: "/images/mlbb-global.jpg",
    bannerImage: "/images/mlbb-global.jpg",
    rating: 4.93,
    ratingCount: "1.2jt",
    description: "Top up MLBB Global diamonds termurah.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "56 Diamonds", price: 16000 },
          { name: "172 Diamonds", price: 48000 },
          { name: "568 Diamonds", price: 155000 },
        ],
      },
    ],
  },
  "crystal-of-atlan": {
    slug: "crystal-of-atlan",
    name: "CRYSTAL OF ATLAN",
    publisher: "Nuverse Games",
    image: "/images/crystal-of-atlan.jpg",
    bannerImage: "/images/crystal-of-atlan.jpg",
    rating: 4.82,
    ratingCount: "280rb",
    description: "Top up Crystal of Atlan termurah.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "60 Crystals", price: 16000 },
          { name: "330 Crystals", price: 79000 },
        ],
      },
    ],
  },
  "blood-strike": {
    slug: "blood-strike",
    name: "BLOOD STRIKE",
    publisher: "Wizard Games Global Limited",
    image: "/images/blood-strike.png",
    bannerImage: "/images/blood-strike.png",
    rating: 4.88,
    ratingCount: "800rb",
    description: "Top up Blood Strike termurah dan terpercaya.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "60 Gold", price: 15000 },
          { name: "330 Gold", price: 75000 },
        ],
      },
    ],
  },
  "where-winds-meet": {
    slug: "where-winds-meet",
    name: "WHERE WINDS MEET",
    publisher: "NetEase Games",
    image: "/images/where-winds-meet.png",
    bannerImage: "/images/where-winds-meet.png",
    rating: 4.85,
    ratingCount: "200rb",
    description: "Top up Where Winds Meet termurah.",
    categories: [
      {
        title: "🔥 Best Sellers",
        items: [
          { name: "60 Coins", price: 16000 },
          { name: "330 Coins", price: 79000 },
        ],
      },
    ],
  },
};

export function formatPrice(price: number): string {
  return "Rp\u00a0" + price.toLocaleString("id-ID");
}
