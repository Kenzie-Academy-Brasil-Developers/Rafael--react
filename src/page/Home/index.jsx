import "./style.css";
import { Intro } from "../../components/Intro";

export function Home({ callBack }) {
  return (
    <div className="principal">
      <Intro callBack={callBack} />
    </div>
  );
}
