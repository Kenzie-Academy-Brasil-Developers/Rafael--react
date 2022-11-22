import "./style.css";
import { ListLi } from "./ListLi";
import { Vazio } from "./Vazio";
export function List({ registros, filtrador, setFiltro }) {
  return (
    <div className="divListFilter">
      <div className="divFiltro">
        <h3 className="subTitle-h3">Resumo financeiro</h3>
        <div>
          <button onClick={() => setFiltro("todos")} className="todos">
            Todos
          </button>
          <button className="generico" onClick={() => setFiltro("Entrada")}>
            Entradas
          </button>
          <button className="generico" onClick={() => setFiltro("saida")}>
            Despesas
          </button>
        </div>
      </div>
      <ul className="ulRegistros">
        {registros.length === 0 ? (
          <Vazio />
        ) : (
          registros.map((element, i) => (
            <ListLi
              filtrador={filtrador}
              registros={registros}
              estado={element.estado}
              i={i}
              description={element.description}
              valor={element.valor}
            />
          ))
        )}
      </ul>
    </div>
  );
}
