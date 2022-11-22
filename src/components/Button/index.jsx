import "./index.css"
export function Button ({callBack}){
    return (
        <button onClick={callBack} className="buttonIniciar">Iniciar</button>
    )
}