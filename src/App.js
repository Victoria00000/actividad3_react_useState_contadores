import './App.css';
import { useState } from 'react';
//Todavia no llegué a las actividades donde se hace todo en components aparte! Acá importa cómo se usa jsx. Aunque ya hay mas variables.
function App() {
  //useState, un hook para hacer modificaciones a variables, nombre='otro nombre'; no se puede hacer en React.
  //[valorAModificar, Modificador]=valorInicial.
  const [nombre, setNombre] = useState('nombre');
  const cambioNombre = () => {
    setNombre('Juan');
  };
  //contador
  const [contador, setcontador] = useState(0);
  const aumentar = () => setcontador(contador + 1);
  const disminuir = () => setcontador(contador - 1);
  const reset = () => setcontador(0);
  //calcularSuma
  const [rta, setRta] = useState(0);
  const [nr1, setNr1] = useState(0);
  const [nr2, setNr2] = useState(0);
  const value1 = (evt) => setNr1(Number(evt.target.value));
  const value2 = (evt) => setNr2(Number(evt.target.value));
  const calcular = () => setRta(nr2+nr1);

  return (
    <>
      <h3> Me llamo: {nombre} </h3>
      <button onClick={cambioNombre}> Cambio de nombre </button>
      <hr />
      <h3> Contador: {contador} </h3>
      <button onClick={disminuir}> - </button>
      <button onClick={aumentar}> + </button>
      <button onClick={reset}> R </button>
      <hr />
      <p>cálculo de suma</p>
      <div id='calc'>
        <input type='number' value={nr1} onChange={value1}/>
        <p>+</p>
        <input type='number' value={nr2} onChange={value2}/>
        <p>=</p>
        <input type='number' value={rta} readOnly />
        <button onClick={calcular} value='calcular' />
      </div>
    </>
  );
}

export default App;
