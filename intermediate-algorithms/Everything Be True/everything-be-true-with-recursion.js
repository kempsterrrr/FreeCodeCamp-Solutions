function truthCheck(collection, pre) {
  // Is everyone being true?
  // base case
  return collection.every(function(a,b){
      return a[pre];    
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
