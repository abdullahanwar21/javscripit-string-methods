const firstName = "Abdullah";
const lastName = "Anwar";

// this is the old way of string manipulation
console.log("Hello My Name is " + firstName + lastName);
//  this is the best way to write code about string its called string interpolation
console.log(`Hello My Name is ${firstName}  ${lastName} Thank You :) .`);

// Its also same to declare string but bad practice thats why its not recommended .
//  i just created this str object to see string methods nearly.
let strObj = new String("Hello world");
console.log(strObj);

//  Now we will experiment with string methods lets start .

// #-1  -> anchor()

/* This method is usually not use nowadays because some browser compatibility.
   This method create a name attribute for anchor tag. so nowadays name attribute not use much more in anchor tag.*/

const contentString = "Hello, world";
const elem = document.createElement("a");

document.body.appendChild(elem)
// console.log(elem.innerText = contentString.anchor("hello"));
 /* hello become the value of name attribute value -> <a name = "hello"> Hello, world </a> 
 Note :  This markup is invalid, because name is no longer a valid attribute of the <a> element
 */

//  #-2 -> at()




// #-5  -> bold()

/*  Bold Method Simply Bold the text or string if u wanna apply but its also out dated methods maybe somewhere its use but we mostly do these kind og stuff with css */ 
const str5 = "argentina";
console.log(str5.bold());



// #-6  -> charAt()

/* 
charAt methods just simply check that character is available in given string index number if not available its simply return nothing .  
*/
let str6 = "pikaachu";
console.log(str6.charAt(7)); 
/* output:- u because in 7th index u is available if you give bigger index number its will  return nothing.*/ 


//  #-9  -> concat()

/**
 *This method simply join two string with the new string . 
 */
const str9 = "Hello";
const str91 = "world";
console.log(str9.concat(str91)); // Output :- Helloworld 


//  #-15 includes()
/**
 * This Method is just check if in given string that word or character is available or not its return us boolean .
 */

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"


// #-16  -> indexof()

/**
 * indexof method just check the given index number is available in string or not if 
 * not simply return us -1; 
 */
const str16 = "Haji Murad";
console.log(str16.indexOf("M")); // Output 5 , because in index 5 M is available if you give unknown character thats not available in given string its will return -1 and its also case-sensitive;

//  #-  -> slice()
/**
 *  slice is simple method of string its just takes two param first one is where to start cutting the string and second one is where to end .
 */

let sliceStr = "abdul kareem shakoor";
/**
 * now we just want kareem not abdul simply we slice the string 
 */
console.log(sliceStr.slice(5,12));


//  #-  -> lastIndexOf()

/**
 *  last index of is as simple as like indexOf but its just ignore the starting its just find for end values lets see example.
 */
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`
);
// Expected output: "Index of the last "dog" is 38"

//  #  -> endsWith()

/**
 * if the given characters are found at the end of the string. its return true otherwise false and also case-sensitive. 
 */

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false

//  #  -> toLowerCase()

/**
 * tolowercase is just do text-transformation in lower case
 */
const strToLower= "HEloo world";
console.log(strToLower.toLowerCase()); // output:- hello world 

//  #  -> toLowerCase()

/**
 * tolowercase is just do text-transformation in lower case
 */
const strToUpper= "hello world";
console.log(strToLower.toUpperCase()); // output:- UPPER CASE 


//  #  -> padStart()

/**
 *  this method mostly used use in rare case its takes two parameter 
 * one is how many pad string u want to add in given string but not starting with 0 index and 2nd is whats character or string u ant to end .
 */

let padStr = "6";
console.log(padStr.padStart(4,"*")); // output :- ***6

//  #  -> padEnd()

/**
 *  this method same as padStart also takes two parameter 
 * one is how many pad string u want to add in given string but not starting with 0 index and its insert after string or character and   2nd is whats character or string u ant to end .
 */

let padStrEnd = "+92"
console.log(padStrEnd.padEnd(9,"*")); // output :- ***6


//    String.raw()

// Create a variable that uses a Windows
// path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);
// Expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"


//    repeat();
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "


//  replace()

const paragraph2 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph2.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"


//  replaceAll()
const paragraph3 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph3.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"



//  split()

//  convert string to array with the help of split method()

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]



//  StartWith()

const str12 = 'Saturday night plans';

console.log(str12.startsWith('Sat'));
// Expected output: true

//  2nd param is optional its define that where to start by default is 0 index 
console.log(str12.startsWith('Sat', 3));
// Expected output: false


//  substring()

const str90 = 'Mozilla';

console.log(str90.substring(1, 3));
// Expected output: "oz"

console.log(str90.substring(2));
// Expected output: "zilla"


//  #  trim()

/**
 * The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
 */
let greeting = "       hello   world    ";
console.log(greeting); // output:- '    hello world      '

console.log(greeting.trim()); // output:- 'hello world'


//  #   valuEoF()

let newStr = new String("foo");
console.log(newStr.valueOf()); // output:- foo


