import { useState } from "react";
import { Form } from "../../components/Form";
import { Heard } from "../../components/Header";
import { List } from "../../components/List";
import { Total } from "../../components/Total";
import "./style.css";

export function DashBord({ callBack }) {
  const array = localStorage.getItem("registros");
  const newArr = JSON.parse(array) || [];

  const [registros, setRegistros] = useState([...newArr]);
  const [contador, setContador] = useState(0);
  const [filtro, setFiltro] = useState("todos");

  const total = registros.reduce((acc, act) => {
    const numero = act.valor;
    if (act.estado === "saida") {
      return acc - Number(numero);
    } else {
      return acc + Number(numero);
    }
  }, 0);

  function filtrador(index) {
    const newArr = registros.filter(
      (element) => element.contador !== registros[index].contador
    );
    setRegistros(newArr);
    setContador(contador - 1);
  }
  const arr = registros.filter((element) =>
    filtro === "todos" ? true : element.estado === filtro
  );
  return (
    <div className="divPrincipal">
      <Heard callBack={callBack} />
      <div className="divFlex">
        <div className="divForm">
          <Form
            setContador={setContador}
            contador={contador}
            registros={registros}
            setRegistros={setRegistros}
          />
          <Total total={total} />
        </div>
        <List
          setFiltro={setFiltro}
          contador={contador}
          filtrador={filtrador}
          registros={arr}
        />
      </div>
    </div>
  );
}
