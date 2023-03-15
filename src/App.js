import './App.css';
import Evento from './Components/Eventos'


function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>

    </div>
  );
}

export default App;
