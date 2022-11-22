import "./style.css";
export function Select({ setEstado }) {
  return (
    <select
      onChange={(event) => setEstado(event.target.value)}
      name="select"
      id=""
    >
      <option value="Entrada">Entrada</option>
      <option value="saida">Saída</option>
    </select>
  );
}
