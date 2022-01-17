// @ts-check

// Generates a random number
const randomNumber = (num) => {
    return Math.floor(Math.random() * num)
};

// Message Object with keys and values
const wizardMessages = {
    hogwartsHouse: ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'],
    patronus: ['stag', 'doe', 'phoenix', 'wolf', 'cat', 'goat', 'lynx', 'weasel', 'swan', 'fox', 'otter', 'hare', 'boar', 'horse', 'Jack Russel terrier'],
    quidditch: ['Chaser', 'Keeper', 'Beater', 'Seeker']
}

// Function that outputs randomized messages
const harryPotter = () => {
    let array = [];
    for (let key in wizardMessages) {
        let randomIndex = randomNumber(wizardMessages[key].length);
        if (key === 'hogwartsHouse') {
            array.push(`Your Hogwarts house is ${wizardMessages[key][randomIndex]}!`);
        } else if (key === 'patronus') {
            array.push(`Your patronus is a ${wizardMessages[key][randomIndex]}!`);
        } else if (key === 'quidditch') {
            array.push(`Your quidditch position is ${wizardMessages[key][randomIndex]}!`);
        }
    }
    let formattedArray = array.join('\n');
    return formattedArray;
};

console.log(harryPotter())