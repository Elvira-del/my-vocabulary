import { FC, useState } from "react";
import useVocabularyStore from "src/store/store";
import useFilterVocabulary from "src/hooks/useFilterVocabulary";
import { TabsList } from "./components/TabsList/TabsList";
import { DeleteDialog } from "./components/DeleteDialog/DeleteDialog";

export const VocabularyPage: FC = () => {
  const { deleteWord } = useVocabularyStore();
  const { searchBar, filteredVocabulary } = useFilterVocabulary();
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false);
  const [wordId, setWordId] = useState<string>("");

  const handleOpenDeleteDialog = (id: string) => {
    setIsOpenDeleteDialog(true);
    setWordId(id);
  };

  const handleCancelDeleteWord = () => {
    setIsOpenDeleteDialog(false);
  };

  const handleConfirmDeleteWord = () => {
    deleteWord(wordId);
    setIsOpenDeleteDialog(false);
  };

  return (
    <section>
      {searchBar}
      <TabsList
        data={filteredVocabulary}
        onOpenDeleteDialog={handleOpenDeleteDialog}
      />
      <DeleteDialog
        isOpenDialog={isOpenDeleteDialog}
        onCancelDelete={handleCancelDeleteWord}
        onConfirmDelete={handleConfirmDeleteWord}
      />
    </section>
  );
};
