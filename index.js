var readLineSync = require('readline-sync')
const chalk = require('chalk');

var highScore = 0;
var highScorerName = "Admin";

while(true) {

var userName = readLineSync.question(chalk.blueBright.bold('What is your name? '));

console.log(chalk.greenBright("\nWelcome " + userName + ", Let's check how much you know about C++ Framework\n"));

var score = 0;

function quiz(question, answer) {
  var cAnswer = readLineSync.question(chalk.keyword('yellow')(question));

  if (cAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log(chalk.cyanBright("Correct!"));
    score++;
  } else {
    console.log(chalk.yellow("Oops! Your answer is wrong."));
  }
}

var questionSet = [
  {
    question: "1. Which data type can be used to hold a wide character in C++? \n\tA: unsigned char \n\tB: int \n\tC: wchar_t \n\tD: none of the above\n",
    answer: "C"
  },
  {
    question: "2. Choose the Object oriented programming language from below. \n\tA: C++ \n\tB: Small talk \n\tC: Simula \n\tD: All of the above\n",
    answer: "D"
  },
  {
    question: "3. Which operator is used to resolve the scope of the global variable? \n\tA: ->\n\tB: .\n\tC: *\n\tD: ::\n",
    answer: "D"
  },
  {
    question: "4. An array can be passed to the function with call by value mechanism. \n\tA: False\n\tB: True\n",
    answer: "A"
  },
  {
    question: "5. What is the size of ‘int’? \n\tA: 2\n\tB: 4\n\tC: 8\n\tD: Compiler dependent\n",
    answer: "D"
  },
	{
		question: "6. Choose the invalid identifier from the below \nA: int \nB: bool\nC: DOUBLE\nD: KL __0__\n",
		answer: "B"
	}
]


	console.log(chalk.red.bold("\nChoose options only!\n"));
	for (var i = 0; i < questionSet.length; i++) {
		quiz(questionSet[i].question, questionSet[i].answer);
		console.log(chalk.green("Your current score is ", score));
		console.log();
	}
	console.clear();

	console.log(chalk.yellowBright("Your final score is ", score));

	if(highScore <= score) {
		highScore = score;
		console.log(chalk.yellowBright("You beat " + highScorerName + "!"));
		highScorerName = userName;
		
	}

	console.log();
	console.log(chalk.keyword('magenta')(highScorerName + " made high score and Score is " + highScore + "!"));

	var check = readLineSync.question('\nDo you want to play again? (Y/N) ')
	if(check.toUpperCase() == 'Y'){
		console.clear();
		continue;
	} else {
		console.clear();
		break;
	}
}