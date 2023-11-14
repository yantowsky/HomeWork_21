// //Завдання 1.
console.log("Task #1:");
const num = prompt("Enter number:");
const degree = prompt("Enter degree:");

function pow(num, degree) {
  if (degree < 0) {
    return 1 / pow(num, -degree);
  } else if (num === 1 || degree === 0) {
    return 1;
  } else if (num === 0) {
    return 0;
  } else if (degree === 1) {
    return num;
  } else {
    return num * pow(num, --degree);
  }
}
(isNaN(num) || isNaN(degree)) ?
  console.log("Error") :
  console.log(pow(num, degree));

// //Завдання 2.
console.log("Task #2:");
let array = [1, 2, 7, 7, 3, 4, 5, 6, 7, 7, 7, 2, 10, 15, 7, 7, 10, 15, 25, 7, 7];

function removeElement(array, item) {
  for (i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      continue;
    }
    array.splice(i, 1);
    i--;
  }
  return array;
}
console.log(removeElement(array, 7));

//Завдання 3.
console.log("Task #3:");
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += String(characters[Math.floor(Math.random() * characters.length)]);
  }
  return randomString;
}
console.log(generateKey(37, characters));