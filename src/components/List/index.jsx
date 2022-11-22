import "./style.css";
import { ListLi } from "./ListLi";
import { Vazio } from "./Vazio";
import { Button } from "../Button";
export function List({ registros, filtrador, setFiltro }) {
  return (
    <div className="divListFilter">
      <div className="divFiltro">
        <h3 className="subTitle-h3">Resumo Financeiro</h3>
        <div>
          <Button
            Children={"Todos"}
            callBack={() => setFiltro("todos")}
            className={"todos"}
          />
          <Button
            Children={"Entradas"}
            className={"generico"}
            callBack={() => setFiltro("Entrada")}
          />
          <Button
            Children={"Despesas"}
            className={"generico"}
            callBack={() => setFiltro("saida")}
          />
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
