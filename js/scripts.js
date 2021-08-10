let word = prompt("Enter a sentence");
console.log(word);

let first = word.charAt(0).toUpperCase();
let last = word.charAt(word.length-1).toUpperCase();

function capitalize(){
  return first + last;
  }
  
  function reverse(){
  return last.concat(first)
  }

function getinhere() {
let yikes = reverse(capitalize());
return word.concat(yikes);
} 

function count() {
count(all letters divide by 2, out letter at index)
}

console.log(capitalize(word));
console.log(reverse(capitalize));
console.log(getinhere(word));