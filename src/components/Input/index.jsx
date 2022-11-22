import "./style.css";
export function Input({ set, type, placeholder, min, className }) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      onChange={(event) => set(event.target.value)}
      min={min}
    />
  );
}
<input placeholder="1" min="0" type="number" />;
