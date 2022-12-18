import "./style.css";
import { useRef, useLayoutEffect } from "react";
export function Total({ total }) {
  const conteinerRef = useRef();
  useLayoutEffect(() => {
    conteinerRef.current.innerText = "R$ " + total;
  });
  return (
    <div className="divTotal">
      <div className="imfoDiv">
        <h3>Valor Total:</h3>
        <span className="spann">O valor se refere ao saldo</span>
      </div>
      <div className="divPreco">
        <p ref={conteinerRef}>R$ {total}</p>
      </div>
    </div>
  );
}
