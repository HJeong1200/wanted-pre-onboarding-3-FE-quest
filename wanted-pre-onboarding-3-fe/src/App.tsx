import "App.css";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pages } from "pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="contents">
        <Sidebar />
        <Routes>
          {Pages.map(({ path, component }) => {
            return <Route path={path} element={component()} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
