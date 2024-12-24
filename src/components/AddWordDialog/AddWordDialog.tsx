import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { MenuItem, TextField } from "@mui/material";
import { AddWordButton } from "../AddWordButton/AddWordButton";

type WordClasses = string[];

const wordClasses: WordClasses = [
  "noun",
  "verb",
  "adjective",
  "adverb",
  "preposition",
  "determiner",
  "pronoun",
  "conjunction",
];

type vocabularyElem = {
  word: string;
  class: string;
  definition: string;
};

const dialogClass = {
  padding: 3,
};

const formContentClass = {
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
  paddingTop: 2,
};

export const AddWordDialog: FC = () => {
  const [vocabulary, setVocabulary] = useState<vocabularyElem[]>([]);
  const [vocabularyElem, setVocabularyElem] = useState<vocabularyElem>({
    word: "",
    class: "",
    definition: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVocabularyElem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AddWordButton onOpen={handleDialogOpen} />
      <Dialog
        open={isOpen}
        onClose={handleDialogClose}
        aria-labelledby="dialog-title"
        sx={dialogClass}
        PaperProps={{
          component: "form",
          onSubmit: (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setVocabulary((prev) => [...prev, vocabularyElem]);
            setVocabularyElem({ word: "", class: "", definition: "" });
            handleDialogClose();
          },
        }}
      >
        <DialogTitle id="dialog-title" component="h3">
          Add new word
        </DialogTitle>
        <DialogContent sx={formContentClass}>
          <TextField
            id="word"
            name="word"
            label="Word or sentence"
            variant="outlined"
            value={vocabularyElem.word}
            onChange={handleChange}
          />
          <TextField
            id="class"
            name="class"
            select
            label="Word class"
            variant="outlined"
            value={vocabularyElem.class}
            onChange={handleChange}
          >
            {wordClasses.map((option, idx) => (
              <MenuItem key={idx} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="definition"
            name="definition"
            label="Definition"
            variant="outlined"
            value={vocabularyElem.definition}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleDialogClose}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
