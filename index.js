#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    GBP: 0.91,
    EUR: 0.76,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "GBP", "EUR", "PKR"]
    },
    {
        name: 'to',
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "GBP", "EUR", "PKR"]
    },
    {
        name: 'amount',
        message: "Enter your amount to convert",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
