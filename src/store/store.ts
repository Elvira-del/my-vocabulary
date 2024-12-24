import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type VocabularyElem = {
  id: string;
  word: string;
  class: string;
  definition: string;
};

type VocabularyStore = {
  vocabulary: VocabularyElem[];
  addWord: (word: Omit<VocabularyElem, "id">) => void;
};

const useVocabularyStore = create<VocabularyStore>((set) => ({
  vocabulary: [],
  addWord: (word) =>
    set((state) => ({
      vocabulary: [...state.vocabulary, { id: uuidv4(), ...word }],
    })),
}));

export default useVocabularyStore;
