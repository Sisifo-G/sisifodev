import React from 'react';
import './App.css';

// Componenets
import Header from './components/header/Header';
import Navegation from './components/navigation/Navigation';

// Class Component => Mantenimiento
// import TypeEffect from './components/typingEffect/TypingEffect';

const App = () => {
  return (
    <div className="App">
      <Header titleHeader="SisifoDev" />
      <Navegation background="bg-primary" titleNav="Esto es un Menu de Navegacion" />
    </div>
  );
}

export default App;
