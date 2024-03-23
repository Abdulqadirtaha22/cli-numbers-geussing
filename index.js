#!/usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) User input guessing numbers
// 3) compare user input with computer generater number and show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "user guess number",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answer.userguessnumber === randomnumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
