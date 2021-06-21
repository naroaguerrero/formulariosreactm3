import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

import Lista from "./Lista";
import Eliminar from "./Eliminar";

function App() {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [lista, setLista] = useState([
    {
      nombre: "Wolfgang Amadeus Mozart",
      fecha: 1756,
      canciones: ["Symphonie Nr 40", "Don Giovanni"],
    },
    {
      nombre: "Ludwig van Beethoven",
      fecha: 1770,
      canciones: ["Symphonie No.5", "Piano Sonata No.32"],
    },
    {
      nombre: "Johann Sebastian Bach",
      fecha: 1685,
      canciones: ["Vivace", "Largo ma non tanto"],
    },
  ]);

  function cambiaInput(e) {
    setInput(e.target.value);
  }

  function grabarParrafo() {
    let array = [...lista];
    array.push({ nombre: input });
    setLista(array);
    setInput("");
  }

  return (
    <BrowserRouter>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/eliminar">Eliminar</Link>
      </div>
      <Lista lista={lista} />
      <Route exact path="/">
        <input key="input1" type="text" onChange={cambiaInput} value={input} />
        <button onClick={grabarParrafo}>Grabar</button>
      </Route>
      <Route path="/eliminar">
        <Eliminar lista={lista} setLista={setLista} setFeedback={setFeedback} />
      </Route>
      <p>{feedback}</p>
    </BrowserRouter>
  );
}

export default App;
