
const { uuid } = require('uuid');
const { v1 } = require('shell-sort-ashepeople');
const { v2 } = require('cubes-ashepeople');

// quizGame.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: 'What is the capital of France?',
        answer: 'Paris'
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answer: 'Harper Lee'
    },
    // Add more questions as needed
];

let score = 0;

function askQuestion(index) {
    if (index === questions.length) {
        console.log(`Quiz completed! Your score: ${score}/${questions.length}`);
        rl.close();
        return;
    }
    rl.question(`${questions[index].question} `, userInput => {
        if (userInput.trim().toLowerCase() === questions[index].answer.toLowerCase()) {
            console.log('Correct!');
            score++;
        } else {
            console.log('Incorrect!');
        }
        askQuestion(index + 1);
    });
}

console.log('Welcome to the Quiz Game!');
askQuestion(0);


module.exports = { askQuestion };
