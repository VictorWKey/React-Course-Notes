// React JS

"BABEL"

// Se encarga de hacer la traduccion de un codigo moderno a lo que es un codigo que sea soportado por cualquier navegador web
// Para usarlo hay que poner su respectivo script y ademas en el script donde estara nuestro codigo, ponerle type="text/babel" al script
// Hace que se pueda usar codigo en navegadores que aun no soportan las caracteristicas mas nuevas de javascript
// Es un compilador
// React trabaja en el background con babel
// React no depende de babel, con el jsx elimina la necesidad de babel pero cuando trabajamos en archivos .js, implicitamente vamos a tener que usar configuraciones de babel
// No hay que preocuparnos por la configuracion de babel porque react la hace por nosotros

"CREATE REACT APP"

// npx create-react-app name
// npm start

"OBJETOS"

const objeto = {
    nombre: 'Victor',
    apellido: 'Lopez'
}

const objeto2 = objeto;
objeto2.nombre = 'Alonso';

// Estariamos modificando los dos objetos, no solo el objeto2
const objeto2 = {...objeto}; //Lo correcto seria hacer esto para no modificar el objeto original

// Pasa exactamente lo mismo con los arreglos

"DESESTRUCTURACION"

const objeto3 = {
    nombre: 'Victor',
    apellido: 'Lopez',
    materias: {
        matematicas: 9,
        fisica: 7.8
    }
}

const { nombre: nameP, apellido, materias: {matematicas, fisica}} = objeto3;

console.log(nameP, apellido, matematicas, fisica );

// Nota: F2 para remplazar una palabra por otra en todo el codigo

"EXPORT & IMPORT"

//-------------No-Indicada--------------------
export {
    heroes as default,
    owners
}

import heroes, { owners } from './data/heroes';
//-----------Indicada--------------------------
export const owners = ['Marvel', 'DC'];
export default heroes;

import heroes, { owners } from './data/heroes';
//----------------------------------------------


"PROMISES"

// Shorthand
promises.then( res => console.log(res)).catch(err => console.log( err ));
promises.then( console.log ).catch( console.log );


"OPERADOR TERNARIO"

const activo = true;

const mensaje = activo && 'Activo'; // mensaje = 'Activo' // Estos una manera un poco extraña pero basicamente lo que dice es que si lo de la izquierda es true y lo de la derecha tambien, la variable tomara el valor de la derecha, pero el valor de la izquierda debe ser a fuerza true para que se le asigne el de la izquierda
const mensaje2 = !activo && 'Activo'; // mensaje = false;
const mensaje3 = ( activo ) ? 'Activo' : 'Inactivo';


"COMPONENTE"

// Pequeña pieza de codigo encapsulada re-utilizable que puede tener estado o no.
// El estado es como se encuentra la informacion del componente en un punto determinado del tiempo


"FRAGMENT"

import { Fragment } from "react";

export const FirstApp = () => {
    return (
        <Fragment> 
            <h1>First App</h1>
            <h2>Im a subtitle</h2>
        </Fragment>
    );
} 
// El Fragment nos sirve para meter elementos dentro de el y que los elementos dentro de el no tengan un padre, ya que para retornar varios elementos, es necesario que tenga un padre

//----------------------------------
export const FirstApp = () => {
    return (
        <> 
            <h1>First App</h1>
            <h2>Im a subtitle</h2>
        </>
    );
} 
// Esto es equivalente al codigo anterior