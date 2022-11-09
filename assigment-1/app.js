const myArray = [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8, 13, 13, 13]; // In the given array
const newArray = [];               // An empty array
for (let i = 0; i < myArray.length; i++) {             //   first loop
  let counter = 0;                         // counter defined
  for (let k = 0; k < myArray.length; k++) {          // second loop
    if (myArray[i] == myArray[k]) {             // increments the counter by one if the values ​​are equal
      counter++;
    }
  }
  if (counter == 2) {                       //if the counter is two it will push to the newArray
    newArray.push(myArray[i]);
  }
}
console.log(`In the given array, only ${newArray} item is written 2 times.`);