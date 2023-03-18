import './App.css';
import Evento from './Components/Eventos'
import Form from './Components/Form'


function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />

    </div>
  );
}

export default App;
