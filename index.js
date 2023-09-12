const { uniq }= require('lodash');

const array = [1, 2, 4, 4, 5, 1, 5]

const arrayUnico = uniq(array);

console.log(arrayUnico);
