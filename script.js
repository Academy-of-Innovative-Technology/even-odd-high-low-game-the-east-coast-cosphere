let Min_Number = 0;
let Max_Number = 100;

let Number_To_Guess = 0;

let Stats = {
    Tries_This_Round: 0,
    Wins: 0,
    Losses: 0,
    Rounds: 0,
    Streak: 0,
    Retries: 0,
}

function Randomize_The_Guess_Number() {
  Number_To_Guess =
    Math.floor(Math.random() * (Max_Number - Min_Number + 1)) + Min_Number;
}

function Even_Or_Odd(Input_Number) {
  if (Input_Number % 2 == 0) {
    return "Even";
  }
  if (Input_Number % 2 !== 0) {
    return "Odd";
  } else {
    return "Neither";
  }
}
function Check_Answer(Input_Number) {
  if (Input_Number < Number_To_Guess) {
    return "Too Low";
  }
  if (Input_Number == Number_To_Guess) {
    return "Correct";
  }
  if (Input_Number > Number_To_Guess) {
    return "Too High";
  }
}

let Game_Comment_Text_DOM = document.querySelector(".Game_Comment_Text");

function Guess_Answer(Guess) {
  let Numbered_Guess = Number(Guess);
  let Status = Check_Answer(Numbered_Guess);

  switch (Status) {
    case "Too Low":
      console.log("Too Low");
      Game_Comment_Text_DOM.innerHTML = `Your number is too low, try an higher number. The answer is ${Even_Or_Odd(
        Number_To_Guess
      )}`;
      break;

    case "Correct":
      console.log("Correct");
      Game_Comment_Text_DOM.innerHTML = `Correct answer 👏👏👏`;
      break;

    case "Too High":
      console.log("Too High");
      Game_Comment_Text_DOM.innerHTML = `Your number is too high, try an lower number. The answer is ${Even_Or_Odd(
        Number_To_Guess
      )}`;
      break;
  }
}

// Conectar

document
  .querySelector("#Game_Answer_Submit_Input_BTN")
  .addEventListener("click", () => {
    let Input = document.querySelector("#Game_Answer_Submit_Input").value;

    if (Input && Input != "" && Input != NaN && Input != undefined) {
      Guess_Answer(Number(Input));
    } else {
      console.log("Fill the input with a number");
    }
  });

document
  .querySelector("#Game_Answer_Submit_Input")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let Input = document.querySelector("#Game_Answer_Submit_Input").value;

      if (Input && Input != "" && Input != NaN && Input != undefined) {
        Guess_Answer(Number(Input));
      } else {
        console.log("Fill the input with a number");
      }
    }
  });

// Default?
Randomize_The_Guess_Number();
console.log(Number_To_Guess)