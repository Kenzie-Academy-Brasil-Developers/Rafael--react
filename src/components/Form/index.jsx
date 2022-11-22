import "./style.css";
import { useState } from "react";

export const Form = ({ setRegistros, registros, contador, setContador }) => {
  const [description, setDesc] = useState("");
  const [valor, setValue] = useState(0);
  const [estado, setEstado] = useState("Entrada");
  localStorage.setItem("registros", JSON.stringify(registros));
  function hendleSubmit(event) {
    event.preventDefault();
    if (valor !== 0 && description !== "") {
      setContador(contador + 1);
      const registro = {
        description,
        valor,
        estado,
        contador,
      };
      const newLstRegister = [...registros, registro];
      setRegistros(newLstRegister);
    }
  }
  return (
    <div className="interface">
      <div>
        <form onSubmit={hendleSubmit}>
          <div className="formDiv">
            <div className="divInputText">
              <label className="label">Descrição</label>
              <input
                placeholder="Digite aqui sua descrição"
                type="text"
                onChange={(event) => setDesc(event.target.value)}
              />
            </div>
            <div className="divInput">
              <div className="divInputNumber">
                <label>Valor</label>
                <input
                  placeholder="1"
                  type="number"
                  onChange={(event) => setValue(event.target.value)}
                />
              </div>
              <div className="divSelect">
                <label>Tipo de valor</label>

                <select
                  onChange={(event) => setEstado(event.target.value)}
                  name="select"
                  id=""
                >
                  <option value="Entrada">Entrada</option>
                  <option value="saida">Saída</option>
                </select>
              </div>
            </div>
            <button type="submit">Inserir valor</button>
          </div>
        </form>
      </div>
    </div>
  );
};
