// Promise example using a real-life promise
// The real-life promise in this scenario is a child asking his parents for a Nintendo Switch

const choresDone = true;

// Promise
const willGetSwitch = new Promise((resolve, reject) => {
  // Check for a desireable outcome, if so resolve the promise
  if (choresDone) {
    const reward = {
      name: 'Nintendo Switch',
      desired: true,
    };
    resolve(reward);

    // Otherwise reject the promise
  } else {
    const issue = new Error('Child did not finish chores as promised');
    reject(issue);
  }
});

// Another promise to call only if we get the reward
const playGames = (reward) => {
  const message = `I am playing games on my new ${reward.name}`;
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
  return Promise.resolve(message);
};

willGetSwitch
  .then(playGames)
  .then((resolved) => console.log(resolved))
  .catch((err) => console.error(err));


//---------------------Another Example


const fs = require("fs");

function readFileAsync(path, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err, farley) {
      if (err) {
        return reject(err);
      }

      resolve(farley);
    });
  });
}

readFileAsync("example.txt", "utf8")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });


function beHappy(name) {
  return new Promise(function(happyPath, sadPath) {
    //do some work
    let err; 
    if(name !== "Farley"){
      err = "So Sad you are not Farley"
    }
    if (err) {
      return sadPath(err);
    }

    happyPath("So good to be " + name);
  
  });
}


beHappy("Asher").then(function(data) {
    console.log("*******beHappy('Asher')*******");
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);//this line
  });

beHappy("Farley").then(function(data) {
    console.log("*******beHappy('Farley')*******");
    console.log(data);//this line
  })
  .catch(function(err) {
    console.log(err);
  });


//---------------------Another Example

function waitFor(seconds) {
  return new Promise(function(resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      return reject(Error("Parameter 'seconds' must be a positive number!"));
    }

    setTimeout(function() {
      resolve("Success!");
    }, seconds * 1000);
  });
}

waitFor(2)
  .then(function(msg) {
    console.log("*******waitFor*******")
    console.log(msg);
  })
  .catch(function(err) {
    console.log(err);
  });

// waitFor(-2)
//   .then(function(msg) {
//     console.log(msg);
//   })
//   .catch(function(err) {
//     console.log("Ugh!")
//     console.log(err);
//   });


//===============yet Another Example

const fs = require('fs');
/**
 * promisify
 * 
 * promisify() returns a new 'promisified' function that returns a promise
 * 
 * so you can do:
 * 
 * let promisifiedFn = promisify(fn); // promisifiedFn() => returns a Promise();
 * 
 * so you then can do:
 * 
 * promisifiedFn(args).then((data) => {}).catch((err) => {});
 * 
 * instead of:
 * 
 * fn(args, (err,data) => {
 *  // catch error
 *  if (err) {
 *    // handle error
 *    return;
 *  }
 *  else {
 *    // else handle data
 *  }
 * }); 
 * 
 * @param {function} function name of function to "promisify".  The
 *   function passed must take a callback of the form:
 *   function(err, data) {} (ex. fs.readFile('filename',function(err,data) {}))
 *  
 * @returns {function} that returns a promise 
 */
const promisify = function (fn) {
  // use rest operator to gather all the arguments to use in the
  // actual function 'fn'
  return function (...args) {
    // function returns a new promise
    return new Promise((resolve, reject) => {
      // spread operator on args to give 'fn' all the arguments we would
      // have passed it without promisify
      fn(...args, function (err, data) {
        if (err) {
          // on error reject PROMISE so that .catch() can handle err
          return reject(err);
        }
        // else we succeeded then resolve PROMISE so that .then() can 
        // receive data
        resolve(data);
      });
    });
  }
}

let promisifiedReadFile = promisify(fs.readFile);
/*
let promisifiedReadFile = function(...args) {
  // return a new promise
    return new Promise((resolve,reject) => {
        // fn is replaced with fn.readFile
        fs.readFile(...args, function (err, data) {
          if (err) {
            // on error reject PROMISE!!!
            return reject(err);
          }
            // else we succeeded then resolve PROMISE!!!
            resolve(data);
        });
    });
}
*/
​
​
promisifiedReadFile('filename').then((data) => {
  console.log(data);
}).catch((err) => {
  console.error(err);
});