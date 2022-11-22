import "./style.css";
import IMG from "../../img/Nu Kenzie.svg";
import { Button } from "../Button";
export function Heard({ callBack }) {
  return (
    <header>
      <div className="headerDiv">
        <img src={IMG} alt="" />
        <Button
          callBack={callBack}
          className={"buttonHeader"}
          Children={"Inicio"}
        />
      </div>
    </header>
  );
}
