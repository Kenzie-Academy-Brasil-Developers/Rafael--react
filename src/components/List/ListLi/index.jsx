import IMG from "../../../img/trash.svg";
export function ListLi({ filtrador, valor, description, i, estado }) {
  function rednderFiltrados(event) {
    filtrador(Number(event.target.id));
  }
  function verificar(estado) {
    if (estado === "Entrada") {
      return "liRgistrado";
    } else {
      return "liRgistrado1";
    }
  }
  function verificarEstado(estado) {
    if (estado === "Entrada") {
      return "Entrada";
    } else {
      return "Saida";
    }
  }
  return (
    <div>
      <li className={verificar(estado)}>
        <div className="imfo">
          <h3>{description}</h3>
          <small>{verificarEstado(estado)}</small>
        </div>
        <div className="priceDelet">
          <span>R$ {valor}</span>
          <button
            id={i}
            onClick={(event) => rednderFiltrados(event)}
            className="delet"
          >
            <img id={i} src={IMG} alt="apagar" />
          </button>
        </div>
      </li>
    </div>
  );
}
