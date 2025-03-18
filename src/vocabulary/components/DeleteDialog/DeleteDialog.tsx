import { FC, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export const DeleteDialog: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogTitle id="delete-dialog-title">
        {"Are you sure you want to delete this word?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description">
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>I'm sure</Button>
      </DialogActions>
    </Dialog>
  );
};
