import React from 'react';
import './App.css';

// Componenets
import Header from './components/header/Header';
import Navegation from './components/navigation/Navigation';
import Seccion from './components/seccion/Seccion';

// Class Component => Mantenimiento
// import TypeEffect from './components/typingEffect/TypingEffect';

const App = () => {
  return (
    <div className="App">
      <Header titleHeader="SisifoDev" />
      <Navegation />
      <Seccion />
    </div>
  );
}

export default App;
