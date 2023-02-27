import "App.css";
import Header from "components/Header";
import Main from "pages/Main";
import Sidebar from "components/Sidebar";
import PageB from "pages/PabeB";
import PageA from "pages/PageA";
import PageC from "pages/PageC";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="contents">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pagea" element={<PageA />} />
          <Route path="/pageb" element={<PageB />} />
          <Route path="/pagec" element={<PageC />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
