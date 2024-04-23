#! /usr/bin/env node 

import inquirer from "inquirer";

//import chalk for add colors to my output
import chalk from "chalk";

console.log(chalk.bold.bgCyanBright("\t\tWELCOM TO WORD COUNTER"));
console.log(chalk.yellowBright("============================================================"));

//ask question bt using await
const counter = await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:"Enter a sentence."
        }
    ]
);
//count  words using this 
let word = counter.sentence.trim().split(" ");

console.log(chalk.yellowBright("============================================================"));

console.log(" - sentences words:")
//seprate words 
console.log(word);
//count words
console.log(chalk.greenBright(`- words count : ${word.length} words`));

console.log(chalk.yellowBright("============================================================"));
