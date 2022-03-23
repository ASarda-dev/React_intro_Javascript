console.log("Hola Mundo");

const nombre = "Albert";

const apellido = "Sarda";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = ` ${nombre} ${apellido} `;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return " Escrito por " + nombre;
}

console.log(`Este es un texto: ${getSaludo(`Albert Sarda`)}`);
