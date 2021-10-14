
const greetings = ['HELLO', 'HOWDY', 'WASSUP', 'AHOY', 'HI'];
const compliment = ['SEXY BEAST!', 'HANDSOME!', 'MR. BIG MUSCLES!', 'BADASS!', 'MR. WORLDS BIGGEST THIGHS!', 'MR. WORLDS STRONGEST MAN!'];
const hereIs = 'Here is your';
const description = ['EPIC', 'SICK', 'MARVELOUS', 'MONSTROUS', 'PAINFUL'];
const workout = 'workout:'
const movements = ['Squats', 'Push-ups', 'Burpees', 'Lunges', 'Jumping jacks', 'Mountain climbers', 'Pull ups'];
const repetitions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
const rounds = [1, 2, 3, 4, 5]
const luck = 'Good luck!!!'

const randomIndexWord = (arr) => {
    let randomInd = Math.floor(Math.random() * arr.length);
    return arr[randomInd];
};

const movementGenerator = (arr) => {
    let movement1 = randomIndexWord(arr)
    let movement2 = randomIndexWord(arr)
    let movement3 = randomIndexWord(arr)

    if (movement2 === movement1 || movement2 === movement3) {
        movement2 = randomIndexWord(arr);
    };
    if (movement3 === movement1 || movement3 === movement2) {
        movement3 = randomIndexWord(arr);
    };
  
    return(`${movement1} for ${randomIndexWord(repetitions)} reps
${movement2} for ${randomIndexWord(repetitions)} reps
${movement3} for ${randomIndexWord(repetitions)} reps`)
    
};


const word1 = randomIndexWord(greetings);
const word2 = randomIndexWord(compliment);
const word3 = hereIs;
const word4 = randomIndexWord(description);
const word5 = workout; 
const excercise = movementGenerator(movements);
const roundNum = randomIndexWord(rounds);
const word6 = luck;

console.log(`${word1} ${word2} ${word3} ${word4} ${word5}
${excercise}

Rounds: ${roundNum}

${word6}`)