// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, array = [], index = 0) {
    
  var all = document.all;
  var classes = all[index].className.split(' ');

  if (index === all.length - 1) {
    if (classes.indexOf(className) !== -1) {
    array.push(all[index]) };
    return array;
  }     

 if (classes.indexOf(className) !== -1) {
    array.push(all[index])
  }
  return getElementsByClassName(className, array, index + 1);

};