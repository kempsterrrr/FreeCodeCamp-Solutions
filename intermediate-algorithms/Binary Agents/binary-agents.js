function binaryAgent(str) {
  
  // convert string to array so we can interate
  let arr = str.split(' '),
      newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr.push(String.fromCharCode(parseInt(arr[i], 2)));
  }
  
  return newArr.reduce(function(a,b){
    return a + b;
  });
  
}
