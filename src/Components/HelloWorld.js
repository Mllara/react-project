import Frase from './Frase';

function HelloWord (){
    return (// como esta encapsulndo jsx o return é colocado entre ()
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
        </div>
    )

}

export default HelloWord;