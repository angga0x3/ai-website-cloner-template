import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[rgba(53,32,90,0.5)] px-4 py-4 lg:min-h-[554px] lg:py-8">
      <div className="container mx-auto">
        <a href="https://kepo.co.id/gold.html" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/image.png"
            alt="HARGA KHUSUS MEMBER GOLD - MLBB Weekly Diamond Pass, FF Membership"
            width={1568}
            height={623}
            className="w-full rounded-xl object-cover"
            priority
          />
        </a>
      </div>
    </section>
  );
}
