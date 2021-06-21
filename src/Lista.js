function Lista(props) {
    let respuesta = props.lista.map((compositor, index) => {
      return <li>{compositor.nombre}</li>;
    });
  
    return <ul>{respuesta}</ul>;
  }
  
  export default Lista;