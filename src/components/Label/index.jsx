import "./style.css";

export function Label({ Children, className }) {
  return <label className={className}>{Children}</label>;
}
