// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var all = document.all;
  var length = all.length;
  console.log(arguments[1], arguments[2])

  if (arguments[1] === undefined) {
    arguments[1] = 0;
  }

  if (arguments[2] === undefined) {
    arguments[2] = [];
    }               
  console.log(arguments[1], arguments[2])


  if (arguments[1] === length - 1) {
    for (let x = 0; x < all[arguments[1]].classList.length; x++) {
        if (all[arguments[1]].classList[x] === className) {
          arguments[2].push(all[arguments[1]]);  
  
      }
      return arguments[2];
    } 
  }

  else {
    for (let x = 0; x < all[arguments[1]].classList.length; x++) {
      if (all[arguments[1]].classList[x] === className) {
        arguments[2].push(all[arguments[1]]);  
      }
    return getElementsByClassName(className, arguments[1] + 1, arguments[2])
    } 
  } 
  // base case -- last element of ALL; 
  // return RESULT somewhere   
};