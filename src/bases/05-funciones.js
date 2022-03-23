// Funciones de Js

// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

console.log(saludar);
console.log(saludar2);
console.log(saludar2("albert"));

const getUser = () => {
  return {
    uid: "ABC123",
    username: "El_Papi1502",
  };
};
console.log(getUser());

const user = getUser();
console.log(user);

// Tarea
// function getUsuarioActivo(nombre) {
//   return {
//     uid: "ABD323423",
//     username: nombre,
//   };
// }
const getUsuarioActivo = (nombre) => ({
  uid: "ABD323423",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Albert");
console.log(usuarioActivo);
