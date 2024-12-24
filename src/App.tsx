import { Layout } from "./components/Layout/Layout";
import { AddWordDialog } from "./components/AddWordDialog/AddWordDialog";
import { VocabularyList } from "./vocabulary/components/VocabularyList/VocabularyList";
import "./App.css";

function App() {
  return (
    <Layout>
      <h1>App title</h1>
      <AddWordDialog />
      <VocabularyList />
    </Layout>
  );
}

export default App;
