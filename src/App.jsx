import { useState } from "react";
import "./App.css";
import { DashBord } from "./page/DashBord";
import { Home } from "./page/Home";

function App() {
  const [page, setPage] = useState(true);
  const array = localStorage.getItem("registros");
  const registros = JSON.parse(array);

  function trocaPage() {
    return page ? setPage(false) : setPage(true);
  }
  return (
    <div className="App">
      {page ? <Home callBack={trocaPage} /> : <DashBord callBack={trocaPage} />}
    </div>
  );
}

export default App;
