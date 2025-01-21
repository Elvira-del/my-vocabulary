import { FC } from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

type DefinitionCardProps = {
  definition: string;
  onFlip: () => void;
  flipped: boolean;
};

export const DefinitionCard: FC<DefinitionCardProps> = ({
  definition,
  onFlip,
  flipped,
}) => {
  return (
    <Card
      sx={{
        position: "absolute",
        maxWidth: 420,
        opacity: flipped ? 1 : 0,
        backfaceVisibility: "hidden",
        transform: `perspective(600px) rotateY(${flipped ? 0 : 180}deg)`,
        transformStyle: "preserve-3d",
        transition: "ease-out 0.5s",
        willChange: "transform, opacity",
      }}
    >
      <CardActionArea onClick={onFlip}>
        <CardContent>
          <Typography variant="body2" component="p">
            {definition}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
