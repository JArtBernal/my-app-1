import { useState } from "react";
import "./styles.css"

export default function App() {
  const[name , setName] = useState();
  const[last , setLast] = useState();
  const[apodo , setApodo] = useState();
  const[mostrar, setMostrar] = useState(false);

  const isDisabledName = name !== undefined && name !== "";
  const isDisabledLast = last !== undefined && last !== "";
  const isDisabledApodo = apodo !== undefined && apodo !== "";

  const isDisabledGlobal = isDisabledName && isDisabledLast && isDisabledApodo;

  const limpiar =()=>{
    setName('');
    setLast('');
    setApodo('');
    setMostrar(false);
  }

  const enviar =(event)=>{
    setMostrar(true);
  }

  const cambioNombre=(event)=>{
    setName(event.target.value)
  }

  const cambioLast=(event)=>{
    setLast(event.target.value)
  }

  const cambioApodo=(event)=>{
    setApodo(event.target.value)
  }

  return (
    <main>
      <div className='container'>
    <div className='App'>
      <p>Nombre: </p>
      <input onChange={cambioNombre} value={name}/>
      <p>Apellido: </p>
      <input onChange={cambioLast} value={last}/>
      <p>Apodo: </p>
      <input onChange={cambioApodo} value={apodo}/>
      <p></p>
      <button disabled={!isDisabledGlobal} onClick={enviar}> Enviar </button>
      <button onClick={limpiar}> Limpiar </button>
      <br />
      {mostrar && (
        <h1>{`${name} ${last} ${apodo}`}</h1>
      )}
    </div>
    </div>
    </main>
  );
}