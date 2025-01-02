import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export type VocabularyElem = {
  id: string;
  word: string;
  class: string;
  definition: string;
  favorite: boolean;
};

type VocabularyStore = {
  vocabulary: VocabularyElem[];
  addWord: (word: Omit<VocabularyElem, "id">) => void;
  deleteWord: (id: string) => void;
  favoriteWord: (id: string) => void;
};

const useVocabularyStore = create<VocabularyStore>()(
  persist(
    (set) => ({
      vocabulary: [],
      addWord: (word: Omit<VocabularyElem, "id">) =>
        set((state) => ({
          vocabulary: [...state.vocabulary, { id: uuidv4(), ...word }],
        })),

      deleteWord: (id: string) =>
        set((state) => ({
          vocabulary: state.vocabulary.filter((elem) => elem.id !== id),
        })),
      favoriteWord: (id: string) =>
        set((state) => ({
          vocabulary: state.vocabulary.map((word) =>
            word.id === id ? { ...word, favorite: !word.favorite } : word,
          ),
        })),
    }),
    {
      name: "vocabulary-store",
    },
  ),
);

export default useVocabularyStore;
