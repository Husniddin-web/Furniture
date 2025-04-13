import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
