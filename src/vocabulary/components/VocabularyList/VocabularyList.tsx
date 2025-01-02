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
import useVocabularyStore, { VocabularyElem } from "src/store/store";

type VocabularyListProps = {
  data: VocabularyElem[];
};

export const VocabularyList: FC<VocabularyListProps> = ({ data }) => {
  const { deleteWord, favoriteWord } = useVocabularyStore();

  return (
    <List>
      {data.map((elem) => (
        <ListItem
          key={elem?.id}
          alignItems="flex-start"
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => deleteWord(elem.id)}
              aria-label="delete"
            >
              <DeleteOutlineIcon />
            </IconButton>
          }
        >
          <IconButton
            edge="start"
            onClick={() => favoriteWord(elem.id)}
            aria-label="favorite"
          >
            {elem?.favorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
          <ListItemText
            primary={<Typography component="span">{elem?.word}</Typography>}
            secondary={
              <>
                <Typography component="p">{elem?.class}</Typography>
                <Typography component="p">{elem?.definition}</Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
