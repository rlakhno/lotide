// Get command line arguments
const args = process.argv;
let slicedArgs = args.slice(2);//removing first 2 elements from args

// // Avaluating
// if (slicedArgs.length < 1) {
//   console.log("Please provide some arguments: ");
//   process.exit(1);
// }

// // Longer version of reverse
// const reverse = function(item) {
//   let revItem = "";
//   for (let i = item.length - 1; i >= 0; i --) {
//     revItem += item[i];
//   }
//   return revItem;
// };

//revrsing elements of array
const revItem = function(item) {
  return(item.split("").reverse().join(""));
}
//iterating through array
const reverse = function(array) {
  // let newString = "";
  for(let items of array){
    console.log(revItem(items));
  }
}
//printing reversed array
reverse(slicedArgs);
