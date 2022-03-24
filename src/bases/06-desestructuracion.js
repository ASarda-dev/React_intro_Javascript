// Desestructuración

const persona = {
  nombre: "albert",
  edad: 32,
  clave: "Ironman",
};
// const { nombre, edad, clave } = persona;
console.log(persona);

const useContext = ({ nombre, edad, clave }) => {
  //   console.log(edad, clave, nombre);

  return {
    nombreClave: clave,
    años: edad,
  };
};
// useContext(persona);
// console.log(useContext);

const { nombreClave, años } = useContext(persona);

console.log(nombreClave, años);
