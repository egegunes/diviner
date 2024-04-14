import Image from "next/image";

import { MajorArcana, Cups, Pentacles, Swords, Wands } from "@/app/tarot";

interface TarotCardProps {
  name: string;
  src: string;
}

const TarotCard = ({ name, src }: TarotCardProps) => {
  return (
    <div className="tarot-card border rounded-lg overflow-hidden">
      <Image src={src} alt={name} title={name} fill={true} />
    </div>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-left">Major Arcana</h1>
      <div className="flex space-x-4 overflow-x-auto">
        {MajorArcana.map((card) => (
          <TarotCard key={card.name} name={card.name} src={card.src} />
        ))}
      </div>
      <h1 className="text-4xl font-bold text-left">Minor Arcana</h1>
      <h3 className="text-xl font-bold text-left">Cups</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {Cups.map((card) => (
          <TarotCard key={card.name} name={card.name} src={card.src} />
        ))}
      </div>
      <h3 className="text-xl font-bold text-left">Pentacles</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {Pentacles.map((card) => (
          <TarotCard key={card.name} name={card.name} src={card.src} />
        ))}
      </div>
      <h3 className="text-xl font-bold text-left">Swords</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {Swords.map((card) => (
          <TarotCard key={card.name} name={card.name} src={card.src} />
        ))}
      </div>
      <h3 className="text-xl font-bold text-left">Wands</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {Wands.map((card) => (
          <TarotCard key={card.name} name={card.name} src={card.src} />
        ))}
      </div>
    </div>
  );
}
