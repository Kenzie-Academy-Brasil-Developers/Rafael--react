import "./style.css";
import { useState } from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Label } from "../Label";
import { Button } from "../Button";

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
              <Label className={"labelDescription"} Children={"Descrição"} />
              <Input
                type={"text"}
                placeholder={"Digite aqui sua descrição"}
                set={setDesc}
                className={"inputText"}
              />
            </div>
            <div className="divInput">
              <div className="divInputNumber">
                <Label className={"labelNumber"} Children={"Valor"} />
                <Input
                  type={"number"}
                  placeholder={"0"}
                  className={"inputNumber"}
                  set={setValue}
                  min={"0"}
                />
              </div>
              <div className="divSelect">
                <label>Tipo de valor</label>
                <Select setEstado={setEstado} />
              </div>
            </div>
            <Button
              className={"buttonForm"}
              Children={"Inserir valor"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
