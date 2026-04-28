import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#35205a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/images/pt-kepoo-solusi-indonesia-logo.webp"
              alt="Kepo.id Logo"
              width={120}
              height={44}
              className="mb-4 h-8 w-auto"
            />
            <p className="mb-4 text-xs leading-relaxed text-white/70">
              PT KEPOO SOLUSI INDONESIA, DWB TOWER LANTAI 7 - ZONA A JALAN
              KEBAGUSAN 1 Kav 6 RT. 002 RW. 001 KEBAGUSAN PASAR MINGGU, JAKARTA
              SELATAN- 12520 (085780006982 | support@kepoo.id). Direktorat
              Jendral Perlindungan Konsumen dan Tertib Niaga Kementerian
              Perdagangan Republik Indonesia Whatsapp Ditjen PKTN :
              0853-1111-1010
            </p>
            <div className="flex items-center gap-3">
              <SocialLink
                href="https://www.youtube.com/@OfficialKepoid"
                label="Youtube"
                icon={<YoutubeIcon />}
              />
              <SocialLink
                href="https://www.instagram.com/official.kepoid/"
                label="Instagram"
                icon={<InstagramIcon />}
              />
              <SocialLink
                href="https://whatsapp.com/channel/0029Val5dvlC6ZvdRLXrDl3f"
                label="WA Channel"
                icon={<WhatsAppIcon />}
              />
            </div>
          </div>

          <FooterColumn
            title="Tentang Kami"
            links={[
              { label: "Youtube", href: "https://www.youtube.com/@OfficialKepoid/" },
              { label: "Instagram", href: "https://www.instagram.com/official.kepoid/" },
              { label: "Linkedin", href: "https://www.linkedin.com/company/kepoid/" },
              { label: "WA Channel", href: "https://whatsapp.com/channel/0029Val5dvlC6ZvdRLXrDl3f" },
              { label: "Corporate Site", href: "https://www.kepoo.id/" },
            ]}
          />

          <FooterColumn
            title="Peta Situs"
            links={[
              { label: "Beranda", href: "#" },
              { label: "Masuk", href: "#" },
              { label: "Daftar", href: "#" },
              { label: "Cek Transaksi", href: "#" },
              { label: "Ulasan Google", href: "https://share.google/650ubj4kALsmqsHt8" },
            ]}
          />

          <FooterColumn
            title="Informasi"
            links={[
              { label: "Kebijakan Privasi", href: "#" },
              { label: "Syarat & Ketentuan", href: "#" },
            ]}
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <p className="text-xs text-white/50">
            © 2026 PT KEPOO SOLUSI INDONESIA. All rights reserved.
          </p>
          <button
            className="rounded-full bg-white/10 p-2 text-white/60 transition-colors hover:bg-white/20"
            aria-label="Toggle theme"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>
      </div>

      <FloatingCSButton />
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-[#4cabd7]">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-white/70 transition-colors hover:text-white"
    >
      {icon}
    </a>
  );
}

function FloatingCSButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="#"
        className="flex items-center gap-2 rounded-full bg-[#4cabd7] px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        HUBUNGI CS
      </a>
    </div>
  );
}

function YoutubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zm-5.42 7.4A9.87 9.87 0 0 1 7 20.12l-.36-.21-3.73.98.99-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88v.06zm8.41-18.28A11.81 11.81 0 0 0 12.05 0C5.49 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.59 5.95L0 24l6.3-1.65a11.87 11.87 0 0 0 5.69 1.45h.01c6.55 0 11.92-5.35 11.92-11.92a11.82 11.82 0 0 0-3.46-8.38z" />
    </svg>
  );
}
