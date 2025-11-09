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
};

function Randomize_The_Guess_Number() {
  Number_To_Guess =
    Math.floor(Math.random() * (Max_Number - Min_Number + 1)) + Min_Number;
  console.log(Number_To_Guess);
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

function Update_All_Display_Stats() {
  document.querySelector("#Game_Current_Tries").innerHTML =
    Stats.Tries_This_Round;
  document.querySelector("#Game_Stat_Wins_Value").innerHTML = Stats.Wins;
  document.querySelector("#Game_Stat_Losses_Value").innerHTML = Stats.Losses;
  document.querySelector("#Game_Stat_Rounds_Value").innerHTML = Stats.Rounds;
  document.querySelector("#Game_Stat_Streak_Value").innerHTML = Stats.Streak;
  document.querySelector("#Game_Stat_Retries_Value").innerHTML = Stats.Retries;
}

function Reset_All_Stats() {
  for (let index in Stats) {
    Stats[index] = 0;
  }
  Update_All_Display_Stats();
}
document
  .querySelector("#Game_Reset_All_BTN")
  .addEventListener("click", Reset_All_Stats);

function Give_Up() {
  Stats.Losses += 1;
  Update_All_Display_Stats();
}
document.querySelector("#Game_Give_Up_BTN").addEventListener("click", Give_Up);

function Retry() {
  Randomize_The_Guess_Number();
  Stats.Retries += 1;
  Update_All_Display_Stats();
}
document.querySelector("#Game_Retry_BTN").addEventListener("click", Retry);

let Game_Comment_Text_DOM = document.querySelector(".Game_Comment_Text");
function Guess_Answer(Guess) {
  let Numbered_Guess = Number(Guess);
  let Status = Check_Answer(Numbered_Guess);
  let Hint_Activation = document.querySelector("#Game_Hint_Input").checked;
  console.log(Hint_Activation);
  switch (Status) {
    case "Too Low":
      console.log("Too Low");
      if (Hint_Activation) {
        Game_Comment_Text_DOM.innerHTML = `Your number is too <span class="bold">low</span>, try an <span class="bold">higher</span> number. The answer is <span class="bold">${Even_Or_Odd(
          Number_To_Guess
        )}</span>`;
      } else {
        Game_Comment_Text_DOM.innerHTML = `Your number is too <span class="bold">low</span>, try an <span class="bold">higher</span> number`;
      }

      break;

    case "Correct":
      console.log("Correct");
      Game_Comment_Text_DOM.innerHTML = `Correct answer 👏👏👏`;
      Stats.Wins += 1;
      Randomize_The_Guess_Number();
      break;

    case "Too High":
      console.log("Too High");
      if (Hint_Activation) {
        Game_Comment_Text_DOM.innerHTML = `Your number is too high, try an lower number. The answer is ${Even_Or_Odd(
          Number_To_Guess
        )}`;
      } else {
        Game_Comment_Text_DOM.innerHTML = `Your number is too high, try an lower number`;
      }
      break;
  }
  Stats.Tries_This_Round += 1;
  Update_All_Display_Stats();
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
