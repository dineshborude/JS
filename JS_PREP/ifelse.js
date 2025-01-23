function age(age) {
  
    if (age < 18) {
        console.log("You are not eligible to vote");    
    }
    else {
        console.log("You are eligible to votee");
    }
}

// age(6);

function checkNumber(number) {
    if(number > 0) {
        console.log("Greater than zero");
    }else if (number < 0) {
        console.log("Less Than Zero") 
    }
    else{
        console.log("ZERO")
    }
}

// checkNumber(67);
// checkNumber(-2);
// checkNumber(0);

// Nested If Else 

function gradeChecker(grade) 
{

    if (grade >= 90) {
        console.log("GAY");
    }else{
        if(grade >= 80) {
            console.log("A")
        }else {
            if(grade >= 60) {
                console.log("B");
            }
            else {
                if (grade >= 40) {
                    console.log("LEGEND");
                }
                else{
                    console.log("ULTRA LEGEND");
                }
            }
    }
}


}

gradeChecker(3);