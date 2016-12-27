function steamrollArray(arr) {
  // base case
  if(Array.isArray(arr) === false) return;
  
  // Recursive case
  return arr.reduce(function(a,b){
    if(Array.isArray(b)) {
      return a.concat(steamrollArray(b));
    } else {
      return a.concat(b);
    }
  },[]);
}
