import { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

type DeleteDialogProps = {
  isOpenDialog: boolean;
  onCancelDelete: () => void;
  onConfirmDelete: () => void;
};

export const DeleteDialog: FC<DeleteDialogProps> = ({
  isOpenDialog,
  onCancelDelete,
  onConfirmDelete,
}) => {
  return (
    <Dialog
      open={isOpenDialog}
      onClose={onCancelDelete}
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
        <Button onClick={onCancelDelete}>Cancel</Button>
        <Button onClick={onConfirmDelete}>I'm sure</Button>
      </DialogActions>
    </Dialog>
  );
};
