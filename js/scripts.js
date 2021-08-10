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
let word2 = word.concat(yikes);
return word2
}

function count() {
let word2 = getinhere(word)
let i = parseInt(word2.length);
const sniper = word.charAt(i/2);
return sniper.concat(word2);
}



console.log(capitalize(word));
console.log(reverse(capitalize));
console.log(getinhere(word));
const final = count(getinhere(word));

function runo() {
let splicer = final.split("");
let revItUp = splicer.reverse();
let joiner = revItUp.join("");
return joiner;
}

console.log(runo(final));