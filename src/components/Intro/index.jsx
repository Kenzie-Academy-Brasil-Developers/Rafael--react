import imgLog from "../../img/Nu Kenzie.svg";
import "./index.css";
import ilustraçao from "../../img/illustration.svg";
import { Button } from "../Button";
export function Intro({ callBack }) {
  return (
    <div className="home">
      <div className="iniciar">
        <img src={imgLog} />
        <h2>Centralize o controle das suas finanças</h2>
        <span>de forma rápida e segura</span>
        <Button
          Children={"Iniciar"}
          callBack={callBack}
          className={"buttonIniciar"}
        ></Button>
      </div>
      <div className="introducionImg">
        <img src={ilustraçao} alt="" />
      </div>
    </div>
  );
}
