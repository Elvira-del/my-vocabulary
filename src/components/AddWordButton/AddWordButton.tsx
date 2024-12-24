import { FC } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type AddWordButtonProps = {
  onOpen: () => void;
};

export const AddWordButton: FC<AddWordButtonProps> = ({ onOpen }) => {
  return (
    <Fab color="primary" onClick={onOpen} aria-label="Add word">
      <AddIcon />
    </Fab>
  );
};
