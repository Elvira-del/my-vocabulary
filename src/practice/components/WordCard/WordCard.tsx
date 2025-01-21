import { FC } from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

type WordCardProps = {
  word: string;
  onFlip: () => void;
  flipped: boolean;
};

export const WordCard: FC<WordCardProps> = ({ word, onFlip, flipped }) => {
  return (
    <Card
      sx={{
        position: "absolute",
        maxWidth: 420,
        opacity: flipped ? 0 : 1,
        backfaceVisibility: "hidden",
        transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
        transformStyle: "preserve-3d",
        transition: "ease-out 0.5s",
        willChange: "transform, opacity",
      }}
    >
      <CardActionArea onClick={onFlip}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {word}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
