import { FC } from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import useVocabularyStore from "src/store/store";

export const VocabularyList: FC = () => {
  const { vocabulary } = useVocabularyStore();

  return (
    <List>
      {vocabulary.map((elem) => (
        <ListItem
          key={elem?.id}
          alignItems="flex-start"
          secondaryAction={
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          }
        >
          <IconButton>
            <StarBorderIcon />
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
