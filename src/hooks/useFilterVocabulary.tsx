import { useMemo, useState } from "react";
import useVocabularyStore, { VocabularyElem } from "src/store/store";
import { SearchBar } from "../vocabulary/components/SearchBar/SearchBar";

const useFilterVocabulary = (): {
  searchBar: JSX.Element;
  filteredVocabulary: VocabularyElem[];
} => {
  const { vocabulary } = useVocabularyStore();
  const [filteredVocabulary, setFilteredVocabulary] = useState<
    VocabularyElem[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchBar = (
    <SearchBar
      query={searchQuery}
      onSearch={(query) => setSearchQuery(query)}
    />
  );

  console.log("Search:", searchQuery);
  console.log("Filtered", filteredVocabulary);

  useMemo(() => {
    const filtered = searchQuery
      ? vocabulary.filter(
          (elem) =>
            elem.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
            elem.definition.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : vocabulary;
    setFilteredVocabulary(filtered);
  }, [vocabulary, searchQuery]);

  return {
    searchBar,
    filteredVocabulary,
  };
};

export default useFilterVocabulary;
