import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddWordButton = () => {
  return (
    <Fab color="primary" aria-label="Add word">
      <AddIcon />
    </Fab>
  );
};
