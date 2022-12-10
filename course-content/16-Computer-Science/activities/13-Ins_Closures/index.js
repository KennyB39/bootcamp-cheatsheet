// A closure is a function that can bind variables from the surrounding lexical scope.
// Create a function which will hold another function.
function bankAccount() {
  // Create two variables inside of the outer function.
  // We will be accessing the two variables inside of our inner function.
  const checking = 400;
  const savings = 1000;

  // Return a newly created inner function.
  return {
    displayFunds: function () {
      // We have access to our outer functions variable which we console.log.
      // This is a closure. The inner function has access to the outer functions scope.
      console.log(
        `You have $${checking} in your checking account and $${savings} in your savings account`
      );
    },
  };
}

// Create a new varriable which holds the `bankAccount` function.
const myBank = bankAccount();

console.log("-----------");
// With our newly created variable call the `displayFunds` method attached to it.
myBank.displayFunds();

// Check the console and expand the given object -> displayFunds -> Scope and then you should be able to visually see your closures.
console.log(myBank);

// https://developer.mozilla.org/en-US/docs/Web/API/console/dir
// The method console.dir() displays an interactive list of the properties of the specified JavaScript object. 
// The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
console.dir(myBank);

// By console logging the outer function's variable we can see that the variables are not able to be accessed.
// console.log(checking); //ReferenceError: checking is not defined
// console.log(savings);//ReferenceError: savings is not defined

console.log("-----------");
var aaaGlobal = "I am global";
//Part of 'Global Environment Records' - as let and const are not stored on the window Object
// Declarative Environment Record
// Object Environment Record
// A Declarative Environment Record is basically your standard environment that you get when calling a function. All bindings (variables, constants, etc) are defined in some internal data structure that cannot be accessed from normal code.

// An Object Environment Record on the other hand uses an actual JavaScript object to store bindings. This is used for example by the now deprecated with statement:
const aaaGlobalEnv = "I am global Environment Record";

function myPersonalInfo(name, location) {
  // We will be accessing the two variables inside of our inner function.
  // Return a newly created inner function.
  const aaaLocalClosure = "I am Local Closure Varible";
  return {
    displayInfo: function () {
      // We have access to our outer functions variable which we console.log.
      // This is a closure. The inner function has access to the outer functions scope.
      console.log(
        `${name}  lives in ${location}. + ${aaaLocalClosure}`
      );
    },
  };
}

const farley = myPersonalInfo('Farley', 'San Francisco, CA');
const asher = myPersonalInfo('Asher', 'Pleasantville, CA');
const sage = myPersonalInfo('Sage', 'Mustafar - Fire Planet');
// sidenote: This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do not become properties of the window object, unlike var variables.
// This declaration creates a constant whose scope can be either global or local to the block in which it is declared. 
// Global constants do not become properties of the window object, unlike var variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const#description

// An Object Environment Record on the other hand uses an actual JavaScript object to store bindings.

// A Declarative Environment Record is basically your standard environment that you get when calling a function. All bindings (variables, constants, etc) are defined in some internal data structure that cannot be accessed from normal code.
// The declarative environment contains the let, const, class, etc declarations.

console.log(farley);
farley.displayInfo();
asher.displayInfo();
sage.displayInfo();



function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

