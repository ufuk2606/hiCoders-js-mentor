// Generates random numbers from 1 to 10
let marioCompartment = Math.floor(Math.random() * 10) + 1;
// Define his father's estimate
let fatherEstimate = "";

// loops 5 times
for (let index = 0; index <= 4; index++) {
    // He gets estimates in the top 4. It prints on the console what it can't find at 5
    if (index < 4 ) {
        fatherEstimate = Number(prompt(`${index + 1}. Estimate..\nPlease enter a number from 1 to 10`));
    } else {
        console.log(` Unfortunately, you didn't find your son.\n Point = 0 \n Your son was in compartment ${marioCompartment}`);
    }
    // Checking the type of the entered value
    if (typeof fatherEstimate === "number") {
        // Checks if the entered number is between 1 and 10
        if (( 0 < fatherEstimate) && (fatherEstimate < 11)) {
            // If he is in the top 4 and estimates correctly, it prints his point.
            if ( index < 4  &&  marioCompartment == fatherEstimate ) {
                console.log(`Yes, you found your son.\n Point = ${100 - (index * 25 )} \n Your son was in compartment ${marioCompartment}`);
                break;
            }else if( index < 4 && marioCompartment < fatherEstimate){                 
                console.log("Your son is in a compartment with a smaller number.");     //gives a tip
            }else if( index < 4 && marioCompartment > fatherEstimate){
                console.log("Your son is in a compartment with a larger number.");      //gives a tip
            }
        } else {
            console.log(" Please enter a number from 1 to 10")
        }
    } else {
        console.log("Not a number..  Please enter a number")
    }
}

//////////////////////////////////////// ilk yaptigim kod idi dersten sonra umut abi bu sekilde olsun dedigi icin degistirdim ama benzer bir hata(cok önemli degil bence) oldugunu farkettim  belki tekrardan bakariz diye bu sekilde gönderiyorum /////////////////////////////////////

// for (let index = 0; index <= 4; index++) {
//     if (index < 4 ) {
//         fatherEstimate = prompt(`${index + 1}. Estimate..\nPlease enter a number from 1 to 10`);
//     } else {
//         console.log(` Unfortunately, you didn't find your son.\n Point = 0 \n your son was in compartment ${marioCompartment}`);
//     }
//     if ( index < 4  &&  marioCompartment == fatherEstimate ) {
//         console.log(`Yes, you found your son.\n Point = ${100 - (index * 25 )}`);
//         break;
//     }else if( index < 4 && marioCompartment < fatherEstimate){
//         console.log("Your son is in a compartment with a smaller number.");
//     }else if( index < 4 && marioCompartment > fatherEstimate){
//         console.log("Your son is in a compartment with a larger number.");
//     }else{
//         console.log("Something is wrong..");
//     }
// }