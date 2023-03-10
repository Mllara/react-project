import HelloWord from './Components/HelloWorld';
import './App.css';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa'
import Frase from  './Components/Frase'

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testando</h1>
        <Frase/>
        <Frase/>
        <SayMyName nome="Márcia"/>
        <SayMyName nome={nome} />
        <Pessoa nome="Rodrigo"  idade="28" profissão="Programador" foto="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fportuguese%2Fgeral-37268918&psig=AOvVaw2CQr6qc9PstUIzRPPZ9DjE&ust=1678563688863000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDropeP0v0CFQAAAAAdAAAAABAE" />

    </div>
  );
}

export default App;
