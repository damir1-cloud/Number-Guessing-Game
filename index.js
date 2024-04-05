#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let restartAgain = false;
console.log(chalk.green.bold("Welcome to the Number Guessing Game!\n"));
// first loop added restart and abort feature
do {
    const computerGeneratedNumber = Math.floor(Math.random() * 10) + 1;
    let counter = 1;
    let score = 0;
    let roundCheck = await inquirer.prompt({
        name: "rounds",
        type: "number",
        message: "How many rounds would you like to play?",
    });
    let { rounds } = roundCheck;
    // nested loop added to run program equilent to the number of rounds selected bu user
    do {
        console.log(chalk.blue(`Round ${counter}`));
        counter++;
        let answer = await inquirer.prompt({
            name: "userGuess",
            type: "number",
            message: "Enter a number between 1 and 10",
        });
        let { userGuess } = answer;
        console.log(`Computer generated number is: ${computerGeneratedNumber}, and your guessed number is: ${userGuess}`);
        if (computerGeneratedNumber != userGuess) {
            console.log(chalk.red(`You lost. Please try again!\n Score:${score}\n`));
        }
        else {
            score++;
            console.log(chalk.green(`Congratulations. You won!\n Score: ${score}\n`));
        }
    } while (counter <= rounds);
    let restart = await inquirer.prompt({
        name: "confirm",
        type: "confirm",
        message: "Do you want to play again?",
    });
    restartAgain = restart.confirm;
} while (restartAgain);
