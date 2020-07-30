import React from 'react';
import './App.css';

// Componenets
import Header from './components/header/Header';
import Navegation from './components/navigation/Navigation';
import Seccion from './components/seccion/Seccion';
import Footer from './components/footer/Footer';

// Class Component => Mantenimiento
// import TypeEffect from './components/typingEffect/TypingEffect';

const App = () => {
  return (
    <div className="App">
      <Header titleHeader="Sisifo" />
      <Navegation />
      <Seccion />
      <Footer />
    </div>
  );
}

export default App;
