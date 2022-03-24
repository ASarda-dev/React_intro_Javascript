// import { heroes } from "./data/heroes";
// sniped imp
import { heroes } from "../data/heroes";

// const getHeroeById = (id) => {
//   return heroes.find((heroes) => {
//     if (heroes.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
const getHeroeById = (id) => {
  return heroes.find((heroes) => heroes.id === id);
};

console.log(getHeroeById);

console.log(heroes);
