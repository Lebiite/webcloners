const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property.
dogs.forEach(dog => {
    dog.recommendedFood = Math.pow(dog.weight, 0.75) * 28;
});

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little.
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahsDog.curFood > sarahsDog.recommendedFood) {
    console.log("Sarah's dog is eating too much!");
} else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
    console.log("Sarah's dog is eating too little!");
} else {
    console.log("Sarah's dog is eating exactly the recommended amount!");
}

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs.reduce((acc, dog) => {
    if (dog.curFood > dog.recommendedFood) {
        return [...acc, ...dog.owners];
    }
    return acc;
}, []);

const ownersEatTooLittle = dogs.reduce((acc, dog) => {
    if (dog.curFood < dog.recommendedFood) {
        return [...acc, ...dog.owners];
    }
    return acc;
}, []);

// 4. Log a string to the console for each array created in 3.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended.
const eatsExactly = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`Is there any dog eating exactly the recommended amount? ${eatsExactly}`);

// 6. Log to the console whether there is any dog eating an OKAY amount of food.
const eatsOkay = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
console.log(`Is there any dog eating an okay amount of food? ${eatsOkay}`);

// 7. Create an array containing the dogs that are eating an OKAY amount of food.
const okayDogs = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order.
const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);