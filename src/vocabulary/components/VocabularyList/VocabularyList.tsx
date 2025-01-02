import { FC } from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import useVocabularyStore from "src/store/store";

export const VocabularyList: FC = () => {
  const { vocabulary, deleteWord, favoriteWord } = useVocabularyStore();

  return (
    <List>
      {vocabulary.map((word) => (
        <ListItem
          key={word?.id}
          alignItems="flex-start"
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => deleteWord(word.id)}
              aria-label="delete"
            >
              <DeleteOutlineIcon />
            </IconButton>
          }
        >
          <IconButton
            edge="start"
            onClick={() => favoriteWord(word.id)}
            aria-label="favorite"
          >
            {word?.favorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
          <ListItemText
            primary={<Typography component="span">{word?.word}</Typography>}
            secondary={
              <>
                <Typography component="p">{word?.class}</Typography>
                <Typography component="p">{word?.definition}</Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
