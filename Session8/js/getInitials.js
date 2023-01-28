// // Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre

// // getInitial(['Ferdinand','Jose','Maria','Dora']) -> FJMD

let nameArray = ["Jose", "Dolores", "Angela", "Andrea"];

const getInitial = (input) => {
  let initial = input.reduce((accum, value) => {
    accum += value[0];
    return accum;
  }, "");
  return initial;
};

console.log(getInitial(nameArray));
