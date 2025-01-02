import { FC } from "react";
import useFilterVocabulary from "src/hooks/useFilterVocabulary";
import { VocabularyList } from "./components/VocabularyList/VocabularyList";

export const VocabularyPage: FC = () => {
  const { searchBar, filteredVocabulary } = useFilterVocabulary();

  return (
    <section>
      {searchBar}
      <VocabularyList data={filteredVocabulary} />
    </section>
  );
};
