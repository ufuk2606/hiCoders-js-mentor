// The array we are working on
const givenArray = [16, true, "8", 4, 9, "6", 36, false, 49, 9, "HiCoders", "false", 1, 4, "true"] ;
// Create empty array and variable
const arrayOfTypeNumber = [];
const arrayOfSquare = [];
const arrayOfSquareRoot = [];
let arrayOfSmallest ;
let arrayOfLargest ;
let arrayOfSum = 0 ;
let arrayOfAverage = 0 ;
// Finds type of numbers, their squares, square roots, and sums
for (let index = 0; index < givenArray.length; index++) {
    if (typeof givenArray[index] === "number") {
        arrayOfTypeNumber.push(givenArray[index]);
        arrayOfSquare.push(givenArray[index] * givenArray[index] );
        arrayOfSquareRoot.push(Math.sqrt(givenArray[index]));
        arrayOfSum += givenArray[index];
    }
}
// Finds the smallest number, the largest number, and the average of all elements in the array
arrayOfSmallest = Math.min(...arrayOfTypeNumber);
arrayOfLargest = Math.max(...arrayOfTypeNumber) ;
arrayOfAverage =  arrayOfSum / (arrayOfTypeNumber.length) ;
// Print to the console
console.log(`This is the given array : ${givenArray} \n This array with items of type number : ${arrayOfTypeNumber} \n This array with square of each item :  ${arrayOfSquare} \n This array with square root of each item :  ${arrayOfSquareRoot} \n This array with the smallest item :  ${arrayOfSmallest} \n This array with the largest item :  ${arrayOfLargest} \n This array with sum of the items :  ${arrayOfSum} \n This array with average of the items :  ${arrayOfAverage} `);
