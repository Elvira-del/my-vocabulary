import { create } from "zustand";

type VocabularyElem = {
  word: string;
  class: string;
  definition: string;
};

type VocabularyStore = {
  vocabulary: VocabularyElem[];
  addWord: (word: VocabularyElem) => void;
};

const useVocabularyStore = create<VocabularyStore>((set) => ({
  vocabulary: [],
  addWord: (word: VocabularyElem) =>
    set((state) => ({ vocabulary: [...state.vocabulary, word] })),
}));

export default useVocabularyStore;
