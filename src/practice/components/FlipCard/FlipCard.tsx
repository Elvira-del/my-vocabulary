import { FC, useState } from "react";
import { WordCard } from "../WordCard/WordCard";
import { DefinitionCard } from "../DefinitionCard/DefinitionCard";

type FlipCardProps = {
  word: string;
  definition: string;
};

export const FlipCard: FC<FlipCardProps> = ({ word, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <>
      <WordCard word={word} onFlip={handleFlipCard} flipped={isFlipped} />
      <DefinitionCard
        definition={definition}
        onFlip={handleFlipCard}
        flipped={isFlipped}
      />
    </>
  );
};
