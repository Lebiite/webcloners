function checkDogs(dogsJulia, dogsKate) {

    const correctedDogsJulia = dogsJulia.slice(1, -2);

    const allDogs = correctedDogsJulia.concat(dogsKate);

    allDogs.forEach((age, index) => {
        if (age >= 3) {
            console.log(`Dog number ${index + 1} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${index + 1} is still a puppy 🐶`);
        }
    });
}

console.log("Test Data 1:");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log("\nTest Data 2:");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);