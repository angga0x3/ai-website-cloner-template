import { notFound } from "next/navigation";
import { Header } from "@/components/topup/Header";
import { WaveTransition } from "@/components/topup/WaveTransition";
import { Footer } from "@/components/topup/Footer";
import { GameDetailPage } from "@/components/topup/GameDetailPage";
import { gamesData } from "@/components/topup/GameData";

export function generateStaticParams() {
  return Object.keys(gamesData).map((game) => ({ game }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }) {
  const { game: gameSlug } = await params;
  const game = gamesData[gameSlug];
  if (!game) return { title: "Not Found" };
  return {
    title: `Top Up ${game.name} Termurah - Kepo.id`,
    description: game.description,
  };
}

export default async function GamePage({ params }: { params: Promise<{ game: string }> }) {
  const { game: gameSlug } = await params;
  const game = gamesData[gameSlug];
  if (!game) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-[#743cdd]">
      <Header />
      <GameDetailPage game={game} />
      <WaveTransition />
      <Footer />
    </div>
  );
}
