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
            <h2>Im ubtitle</h2>
        </>
    );
} 
// Esto es equivalente al codigo anterior



"INTRODUCCION A LAS PRUEBAS UNITARIAS Y DE INTEGRACION"

// Unitarias: enfocadas en pequeñas funcionalidades
// Integracion: enfocadas en como funcionan varias piezas en conjunto
// Son faciles de escribir, leer, confiables, rapidas y principalmente unitarias

// AAA: Arrange (Arreglar), Act (Actuar), Assert (Afirmar)
// Arrange: Preparamos el estado inicial. Inicializamos variables e importaciones necesarias
// Act: Aplicamos acciones y estimulos al sujeto de pruebas. Llamar metodos, simular clicks, realizar acciones sobre el paso anterior
// Assert: Observar el comportamiento resultante. Son los resultados esperados, ej: que algo cambie, algo incremente o nada suceda 

// No aseguran que la aplicacion no tenga errores
// Pueden no funcionar
// No es necesario probar TODO



"---------JEST--------"

// Es una dependencia de desarrollo que nos sirve para hacer testing

{
    "scripts": {
        "test": "jest --watchAll"
      }
}

// npm install -D @types/jest // Para tener el intellisense 

// Para que JEST pueda hacer test con codigo moderno de JavaScript, debemos utilizar babel, instalandolo:
// npm install --save-dev babel-jest @babel/core @babel/preset-env
// caso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously". Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs
// Cuando jest corre un test, primero evaluara que en el archivo donde proviene lo exportado y utilizado este bien. Si todo esta bien, entonces procedera a correr el test como tal y lo va evaluar dependiendo de lo que hayamos puesto en el expectcaso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously."Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs

// expect(received).toEqual(expeced). // Basicamente se leeria como, se espera que este valor recibido sea igual a este otro valor esperado
// Cuando hacemos el testing, nos devolvera el objeto que estamos comparando. Dependiendo del color, las propiedades perteneceran al valor recibido o esperado, y los que estan de color significa que tiene una propiedad de mas o diferente con respecto al otro

// Se usa el toEqual cuando se quiere evaluar la iguald de condiciones (deep quality)
// Puede aprenderte esto solo pensando que el toBe compara todos los tipos de valores primarios, mientras que el toEqual compara las condiciones, es decir cuando ya es un objeto, arreglo o typeof

expect( hero ).toBeFalsy(); // Esperara un valor null, undefined o false