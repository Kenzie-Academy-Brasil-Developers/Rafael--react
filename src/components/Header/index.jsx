import "./style.css";
import IMG from "../../img/Nu Kenzie.svg";

export function Heard({ callBack }) {
  return (
    <header>
      <div className="headerDiv">
        <img src={IMG} alt="" />
        <button onClick={callBack}>Inicio</button>
      </div>
    </header>
  );
}
