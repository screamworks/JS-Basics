//////////////////PROBLEM 1////////////////////
var name = 'Tyler';

//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

  function isTyler(name){
    if(name === "Tyler"){
      return true
    } else {
      return false;
    }

  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName(){
    var name = prompt("what is your name?")
    return name;
  }

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
   alert("Welcome, " + getName());
};



//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  // I think of parameters as a placeholder for an input, they can be any name and become changed when an argument is passed in. An argument is the values placed in functions to invoke it. E.g X, Y can be parameters for a function, which are just placeholders, and "shiv" "red" are arguments I would pass inside of a function to invoke it and use the function.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //
  // Falsy values are Null, NaN, False, 0, '', undefined, "",
  // One can check false statements in booleans such as writing and if/else statements and conditional loops.

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(name){
   return "shiv";
}


//Now save the function definition of myName into a new variable called newMyName


  //Code Here
var newMyName = myName;

//Now alert the result of invoking newMyName
// Tyler

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.
// function

  //Code Here
  function outerFn() {
      return function (){
        return "shiv";
    }
  }
// //Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();
//Now invoke innerFn.
innerFn();
