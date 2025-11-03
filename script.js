



let Min_Number = 0;
let Max_Number = 1000;



let Number_To_Guess = 0;


function Randomize_The_Guess_Number(){
    Number_To_Guess = Math.floor(Math.random() * (Max_Number - Min_Number + 1)) + Min_Number;
}

function Even_Or_Odd(Input_Number){
    if (Input_Number % 2 == 0){
        return "Even";
    }
    if (Input_Number % 2 !== 0){
        return "Odd";
    } else {
        return "Neither";
    }
    
}
function Check_Answer(Input_Number){
    if (Input_Number < Number_To_Guess){
        return "Too Low";
    }
    if (Input_Number == Number_To_Guess){
        return "Correct";
    }
    if (Input_Number > Number_To_Guess){
        return "Too High";
    }
}

Randomize_The_Guess_Number();
console.log(Number_To_Guess);
console.log(Even_Or_Odd(Number_To_Guess));
