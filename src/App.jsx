import Imagen from "./assets/images/Img.jpg";
import Button from "./Components/Button.jsx";
import WelcomeText from "./Components/WelcomeText.jsx";
import ListFruits from "./Components/ListFruits.jsx";

const App = () => {

    const title = "Titulo por Defecto";
    const subtitle = "Holaaaa";
    const user = true;

    const fruits = ['🍇', '🍉', '🍎']
    const fruits_Two = ['😍', '😒', '😊']

    return(

        <div>
            <h1 className="text-center">{title}</h1>  
            <h2>{subtitle}</h2>
            <img src={Imagen}  alt="" ></img>
            
            <Button text = 'Boton 1'/>

            <WelcomeText user = {user} />

            <ListFruits fruits = {fruits}/>
            <ListFruits fruits = {fruits_Two}/>
        </div>
    );
};
 

export default App;

/* 
                            APRENDIZAJES !!!
Para llamar una clase de el .css, se usa className = "nombre_de_la_clase"  
El h1 es para titulos, h2 para subtitulos, y asi sucesivamente h3, h4 ... 
Se pueden generar constantes y añadirlas a h1 o derivados, con {nombre_de_la_constante} 

COMPONENTES !!!
Un componenete es una funcion, const nombre_de_la_funcion = () => { ... }
Los componentes pueden ser botones, divs, ...
Se debe añadir a la clase principal
Se pueden diferencias ya que inician siempre en mayuscula y estan de otro color al de una etiqueta
Los componentes se pueden reutilizar cuantas veces sea necesario

OERADOR TERNARIO !!!
El if else en un archivo .jsx es de la siguiente manera:
{nombre_de_la_variable ? 'Si_es_verdadero' : 'Si_es_falso'}
Si solo se quiere usar el Verdadero, se hace de la siguiente manera:
{nombre_de_la_variable && 'Si_es_verdadero'}

IMAGENES !!!
Se pueden importar imagenes para su facil uso con: 
import nombre_que_se_le_quiera_dar_a_la_imagen from "ruta_relativa"
NOTA: la ruta relativa se daca dando click derecho a la imagen ya dentro de la carpeta

UL y LI!!!
La etiqueta <ul> </ul> se usa para una lists sin nigun orden
la etiqueta <li> </li> se usa para un elemento de una lista, es decir, siempre esta dentro de un <ul> </ul>

MAP !!!
Asi como en JavaScript, map de usa para recorrer, en otros lenguajes seria un (for), donde de un array se 
le va a dar un parametro y tendra que retornar algo, ej:
 fruits.map((fruit, index) => (
                        <li key={index}>
                            {fruit} - {index}
                            </li>
                    ))
Se va a recorrer (.map()) un array de frutas (fruits), se le da como parametro la fruta (fruit) y este va a 
retornar en modo de elementos de una lista (<li> </li>) la fruta (fruit)
El index funciona como contador, ya que este es una Array estatico
*/