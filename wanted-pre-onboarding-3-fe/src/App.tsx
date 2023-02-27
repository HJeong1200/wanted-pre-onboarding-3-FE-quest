import "App.css";
import Header from "components/Header";
import Main from "components/Main";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="contents">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
