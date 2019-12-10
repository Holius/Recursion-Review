// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (typeof obj === 'function') {
    return null
  }  
  if (typeof obj === 'boolean') {
    return obj.toString()
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (obj === undefined) {
    return 'undefined';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var addMe = '['
    for (var index of obj) {
      var string = stringifyJSON(index);
      addMe = addMe + string;
    }
    return addMe + ']'
  }
  if (typeof obj === 'object') {
      var addMe = '{';
        for (var keys in obj) {
          var string = stringifyJSON(obj[keys]);
          var key = keys.toString();
          addMe = addMe + keys + ':' + string;                 
      }
      addMe = addMe + '}';
      return addMe;
  }
};

