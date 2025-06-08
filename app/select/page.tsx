"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface MiniAppProps {
  title: string;
  description: string;
  path: string;
  emoji: string;
  comingSoon?: boolean;
}

const MiniApp = ({ title, description, path, emoji, comingSoon }: MiniAppProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => !comingSoon && router.push(path)}
      className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 transition-all duration-300 relative ${comingSoon
          ? 'opacity-70 cursor-not-allowed'
          : 'cursor-pointer hover:bg-white/20 hover:scale-105'
        }`}
    >
      {comingSoon && (
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
          Coming Soon
        </div>
      )}
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
};

export default function SelectPage() {
  const miniApps = [
    {
      title: "Zenith Calculator",
      description: "Calculate when a constellation's brightest star reaches its maximum altitude for your location and date",
      path: "/zenith",
      emoji: "🌟",
    },
    {
      title: "Tarot Reading",
      description: "Explore the mystical world of tarot cards and divine your future",
      path: "/tarot",
      emoji: "🔮",
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <Image
                src="/pepethemystic.jpg"
                alt="Pepe the Mystic"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Pepe the Mystic
          </h1>
          <p className="text-white/80 text-lg">
            Seizing the memes of production
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {miniApps.map((app, index) => (
            <MiniApp
              key={index}
              title={app.title}
              description={app.description}
              path={app.path}
              emoji={app.emoji}
              comingSoon={app.comingSoon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
