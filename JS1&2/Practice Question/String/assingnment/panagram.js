let str = "We promptly judged antique ivory buckles for the next prize";
let strSet = new Set(str.toLowerCase());

(strSet.size === 27)
  ? console.log("pangram")
  : console.log("not pangram");

