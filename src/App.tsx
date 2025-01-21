import { Outlet } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { AddWordDialog } from "./components/AddWordDialog/AddWordDialog";
import "./App.css";

function App() {
  return (
    <Layout>
      <h1>App title</h1>
      <Outlet />
      <AddWordDialog />
    </Layout>
  );
}

export default App;
