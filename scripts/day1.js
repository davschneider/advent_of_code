
const massArray = [70904,
    66770,
    118678,
    58460,
    128566,
    60820,
    107153,
    113196,
    52413,
    118335,
    96711,
    88120,
    129744,
    64049,
    90586,
    54466,
    55693,
    102407,
    148273,
    110281,
    111814,
    60951,
    102879,
    135253,
    130081,
    86645,
    72934,
    147097,
    74578,
    124073,
    100003,
    103314,
    86468,
    84557,
    94232,
    120012,
    64372,
    143081,
    96664,
    148076,
    147357,
    139897,
    113139,
    143022,
    144298,
    81293,
    53679,
    139311,
    107156,
    121730,
    132519,
    132666,
    80464,
    111118,
    76734,
    139023,
    111287,
    126811,
    130539,
    129173,
    67549,
    102058,
    72673,
    91194,
    64753,
    59488,
    126300,
    94407,
    126813,
    60028,
    95129,
    79270,
    123465,
    60966,
    111920,
    76549,
    110195,
    119975,
    112557,
    129676,
    104941,
    89583,
    121895,
    108901,
    135247,
    75129,
    148646,
    131128,
    78931,
    111637,
    72752,
    140761,
    57387,
    85684,
    77596,
    134159,
    63031,
    148361,
    133856,
    82022,
];

// PART 1

function fuelRequirement(massArray) {
    let sum = 0;
    for (let mass of massArray) {
        fuel = Math.floor(mass/3) - 2;
        sum += fuel;
        }
    return sum;
    } 
// console.log(fuelRequirement(massArray));


// PART 2


function needsAdditionFuel(fuel) {
    if (Math.floor(fuel/3) - 2 <= 0) {
        return false;
    } else {
        return true;
    }
}

// console.log(needsAdditionFuel(100756));

function calculateTotalFuel(fuel) {
    let addedFuelArray = [fuel];
    for (let i = 0; i < addedFuelArray.length; i++) {
        // console.log(addedFuelArray[i]);
        if (needsAdditionFuel(addedFuelArray[i])) {
            // console.log(addedFuelArray[i]);
            addedFuelArray.push(Math.floor(addedFuelArray[i]/3) - 2);
        }
    }
    console.log(addedFuelArray);
    // 
    // addedFuelArray.push(Math.floor(fuel/3) - 2);
    return addedFuelArray.reduce((a, b) => a + b, 0);
}

// console.log(calculateNegativeFuel(14));

function addedFuelRequirement(massArray) {
    let sum = 0;
    for (let mass of massArray) {
        fuel = Math.floor(mass/3) - 2;
        sum += calculateTotalFuel(fuel);
        }
    return sum;
    } 

console.log(addedFuelRequirement(massArray));

// write helper function to calculate negative fuel



    
// function addedFuelRequirement(massArray) {
//     let sum = 0;
//     for (let mass of massArray) {
//         let addedFuel = 0;
//         fuel = Math.floor(mass/3) - 2;
//         if (isNegativeFuel(fuel) === false) {
//             fuelUnit = Math.floor(fuel/3) - 2;
//             addedFuel += fuelUnit;
//             if (isNegativeFuel(fuelUnit) === false) {
//                 fuelUnit = Math.floor(fuel/3) - 2;
//                 addedFuel += fuelUnit;
//             }
//         totalFuel = fuel + addedFuel;
//         sum += totalFuel;
//         }
//     }
//     return sum;
// } 

// let testArray = [100756];

// console.log(addedFuelRequirement(testArray));





// console.log(fuelRequirement(massArray));