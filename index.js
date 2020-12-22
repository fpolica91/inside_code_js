

function join_array(arr, separator){
  let joined ="";
  for(let i = 0; i < arr.length; i ++){
    joined += arr[i]
    if(i < arr.length -1){
      joined += separator
    }
  }

  return joined;
}

console.log(join_array([1,2,3], '-'))