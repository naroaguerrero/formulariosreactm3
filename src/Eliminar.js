import { useState } from "react";

function Eliminar(props) {
  const [input2, setInput2] = useState("");

  function borrarParrafo(nombre) {
    let array = props.lista.filter(
      (compositor) => compositor.nombre.toLowerCase() !== nombre.toLowerCase()
    );
    array.length === props.lista.length
      ? props.setFeedback("No se ha borrado nada")
      : props.setFeedback(`Se ha borrado ${nombre}`);
    props.setLista(array);
    setInput2("");
  }

  return (
    <>
      <input
        key="input2"
        type="text"
        onChange={(e) => setInput2(e.target.value)}
        value={input2}
      />
      <button onClick={() => borrarParrafo(input2)}>Borrar</button>
    </>
  );
}

export default Eliminar;
