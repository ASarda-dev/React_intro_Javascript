const persona = {
  nombre: "Albert",
  apellido: "Sarda",
  edad: 32,
  profesion: "Director de Bares",
  direccion: {
    ciudad: "Barcelona",
    pais: "España",
  },
};

console.log(persona);
// console.table(persona);

// Para clonar un objeto {...nombredelobjeto}
const persona2 = { ...persona };
persona2.nombre = "Eva";

console.log(persona2);
