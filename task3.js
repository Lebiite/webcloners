const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];


dogs.forEach(dog => {
    dog.recommendedFood = Math.pow(dog.weight, 0.75) * 28;
});

//sara`s dogs
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahsDog.curFood > sarahsDog.recommendedFood) {
    console.log("Sarah's dog is eating too much.");
} else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
    console.log("Sarah's dog is eating too little.");
} else {
    console.log("Sarah's dog is eating the right amount.");
}

//an array that contains dog owners who eat too much or too less
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(dog => {
    if (dog.curFood > dog.recommendedFood) {
        ownersEatTooMuch.push(...dog.owners);
    } else if (dog.curFood < dog.recommendedFood) {
        ownersEatTooLittle.push(...dog.owners);
    }
});
3.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//loging console for a dog eating exact
const exactEaters = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(exactEaters);

//dog eating ok
const okayEaters = dogs.some(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10));
console.log(okayEaters);

//an array containing dogs eating ok
const okayDogs = dogs.filter(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10));

const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);