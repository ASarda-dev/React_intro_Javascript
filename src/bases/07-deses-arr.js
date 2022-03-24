const personajes = ["Batman", "Superman", "Ironman"];

console.log(personajes);

// la coma antes hace saltar la posicion del Array
const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;
console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tareas

const userState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = userState("Goku");
console.log(nombre);
console.log(userState);
setNombre();
console.log(setNombre);
