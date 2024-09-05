function calcAverageHumanAge(ages) {
    let humanAges = [];

    for (let age of ages) {
        let humanAge;
        if (age <= 2) {
            humanAge = 2 * age;
        } else {
            humanAge = 16 + age * 4;
        }
        humanAges.push(humanAge);
    }

    humanAges = humanAges.filter(age => age >= 18);

    let sum = humanAges.reduce((a, b) => a + b, 0);
    let averageAge = sum / humanAges.length;

    return averageAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

