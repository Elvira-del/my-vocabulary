import { Layout } from "./components/Layout/Layout";
import { AddWordDialog } from "./components/AddWordDialog/AddWordDialog";
import { VocabularyPage } from "./vocabulary/VocabularyPage";
import "./App.css";

function App() {
  return (
    <Layout>
      <h1>App title</h1>
      <VocabularyPage />
      <AddWordDialog />
    </Layout>
  );
}

export default App;
