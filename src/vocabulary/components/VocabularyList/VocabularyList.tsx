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

type Vocabulary = {
  id: string;
  word: string;
  transcription: string;
  translate: string;
};

type VocabularyProps = {
  vocabularyData: Vocabulary[];
};

export const VocabularyList: FC<VocabularyProps> = ({ vocabularyData }) => {
  return (
    <List>
      {vocabularyData.map((elem) => (
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
                <Typography component="p">{elem?.transcription}</Typography>
                <Typography component="p">{elem?.translate}</Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
