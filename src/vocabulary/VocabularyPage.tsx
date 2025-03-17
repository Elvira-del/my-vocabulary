import { FC } from "react";
import useFilterVocabulary from "src/hooks/useFilterVocabulary";
import { TabsList } from "./components/TabsList/TabsList";

export const VocabularyPage: FC = () => {
  const { searchBar, filteredVocabulary } = useFilterVocabulary();

  return (
    <section>
      {searchBar}
      <TabsList data={filteredVocabulary} />
    </section>
  );
};
