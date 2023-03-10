import HelloWord from './Components/HelloWorld';
import './App.css';

function App() {

  const name ='Márcia!'

  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRTL7TRuzsT05NEr27mXbE-WRDlY3RTUPxw&usqp=CAU'


  return (
    <div className="App">
        <h1>Olá React!</h1>
        <h2>Alterando JSX</h2>
        <p>Olá, {name}</p> // interpolação da const nome
        <p>Soma: {2 + 2}</p> //executa função
        <p>Soma: {sum(1,2)}</p> //function sum
       
        <img src={url} alt="Gato" />
        <HelloWord/>
    </div>
  );
}

export default App;
