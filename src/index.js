module.exports = function reverse (n) {
    let arr = String(n).split("");
    console.log(arr);
    if(arr[0] == "-"){
        arr.splice(arr[0],1);
    }
  
    return Number(arr.reverse().join(""));
}
