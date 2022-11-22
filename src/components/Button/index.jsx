import "./index.css";
export function Button({ callBack, className, Children, id }) {
  return (
    <button id={id} onClick={callBack} className={className}>
      {Children}
    </button>
  );
}
