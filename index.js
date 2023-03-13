//number 1


for (let i = 25; i > 0; i -= 5 ){
  //  console.log(i);
}


//number 2
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE! // WRITE YOUR LOOP BELOW THIS LINE:
 for(let i= 0; i <= people.length; i++){
   // console.log(people[i]);
 }


//number 3
/* Write a function called printInstructions.
 It should take in an array of steps (strings) and log each one, with the string "Step 1 - ", "Step 2 - " in front.*/
 
 printInstructions([
   "Remove the plastic wrapper",
   "Microwave 45 seconds",
   "Let cool",
   "Enjoy!",
 ]);
/* Should log:
 
 Step 1 - Remove the plastic wrapper
 Step 2 - Microwave 45 seconds
 Step 3 - Let cool
 Step 4 - Enjoy!
 Hint_: At each step, the counter variable is _one less than the step number. How can you get the step number from the counter?*/

 function printInstructions(steps) {
    const string = index => `Step ${index} - `;
  
    for (let i = 0, len = steps.length; i < len; i++) {
      const t = steps[i];
      console.log(string(i + 1) + t);
    }
  }

  
   