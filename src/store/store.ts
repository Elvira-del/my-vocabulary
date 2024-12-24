import { create } from "zustand";
import { persist } from "zustand/middleware";

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

const useVocabularyStore = create<VocabularyStore>()(
  persist(
    (set) => ({
      vocabulary: [],
      addWord: (word: VocabularyElem) =>
        set((state) => ({ vocabulary: [...state.vocabulary, word] })),
    }),
    {
      name: "vocabulary-store",
    },
  ),
);

export default useVocabularyStore;
