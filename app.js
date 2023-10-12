//Q1.take string from user and tell its length

/*
var input=prompt("Enter any text");
var user_length=input.length;
document.write(`The length of user text is ${user_length}`);

*/
////////////////////////////////////////////////////////////

//Q2.find index of n in pakistani
/*
var word="Pakistani";
var position=word.indexOf("n");
if (position!==-1) {
    document.write(`n is found at a position of ${position}`);
}
else{
   
   document.write("not found ");
}
*/
////////////////////////////////////////////////////////////

//Q3.Find char at specific index

/*
var word = "Pakistani";
var char3 = word.charAt(3);

if (char3) {
  document.write(`The character at the 3rd index in the word ${word} is ${char3}.`);
} else {
  document.write("No character found at the 3rd index.");
}
*/

////////////////////////////////////////////////////////////

//Q4.Replace single occurence in string

/*
var Word = "Hyderabad";
var newWord = Word.replace("Hyder", "Islam");

document.write(`Original word: ${Word}<br>`);
document.write(`New word: ${newWord}`);
*/

////////////////////////////////////////////////////////////

//Q5.Replace all occurence in string
/*
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&"); //or replaceAll can be used

document.write(`Original message: ${message}<br>`);
document.write(`Replaced message: ${replacedMessage}`);
*/

////////////////////////////////////////////////////////////

//Q6> Use of typeOf and string convert into number

/*
var stringNumber = "472";
var convertedNumber = parseInt(stringNumber);//or Number(stringNumber)

document.write(`Original value: ${stringNumber}<br>`);
document.write(`Type of original value: ${typeof stringNumber}<br>`);
document.write(`Converted value: ${convertedNumber}<br>`);
document.write(`Type of converted value: ${typeof convertedNumber}`);
*/

////////////////////////////////////////////////////////////

//Q7> use of uppercase method

/*
var userInput = prompt("Enter a text:");


var capital = userInput.toUpperCase();

document.write(`Original Input: ${userInput}<br>`);
document.write(`Input in Capital Letters: ${capital}`);

*/

////////////////////////////////////////////////////////////

//Q8.make word title case i.e first letter capital
/*

var userInput = prompt("Enter a word:");
var titleInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
document.write(`Original Input: ${userInput}<br>`);
document.write(`Input in Title Case: ${titleInput}`);

*/
////////////////////////////////////////////////////////////

//Q9.Converts number to strings

/*
var num = 35.36;
var numAsString = num.toString().replace(".", "");
document.write(`Original Number: ${num}<br>`);
document.write(`Number as String: ${numAsString}`);

*/

////////////////////////////////////////////////////////////

//Q10.Important one name validator
/*

var username = prompt("Enter a username:");

var containsSpecialSymbol = false;


for (var i = 0; i < username.length; i++) {
  var char = username.charAt(i);
  if (char === "@" || char === "." || char === "!") {
    containsSpecialSymbol = true;
    break;
  }
}


if (containsSpecialSymbol) {
  alert("Please enter a valid username without special symbols [@, ., !]");
} else {
  alert("Username is valid: " + username);
}
*/

////////////////////////////////////////////////////////////

//Q11.You have a array of items ask user to enter item ,tell user if its there or not also told its position
// Array of items
/*
var A = ["cake", "apple pie", "cookie", "chips", "patties"];


var userInput = prompt("Enter an item to search:");


var userInputLower = userInput.toLowerCase();

var foundIndex = -1;


for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInputLower) {
    foundIndex = i;
    break;
  }
}


if (foundIndex !== -1) {
  alert(userInput + " is found at index " + foundIndex + " in the list.");
} else {
  alert(userInput + " is not found in the list.");
}

*/

////////////////////////////////////////////////////////////

//Q12 Check password if it is of 6 char and contains letters and numbers
/*
// Prompt the user for a password
var password = prompt("Enter a password:");

// Check the validity of the password
var containsLetter = false;
var containsNumber = false;

if (password.length >= 6 && isNaN(password[0])) {
  for (var i = 0; i < password.length; i++) {
    if (
      (password[i] >= "a" && password[i] <= "z") ||
      (password[i] >= "A" && password[i] <= "Z")
    ) {
      containsLetter = true;
    } else if (password[i] >= "0" && password[i] <= "9") {
      containsNumber = true;
    }
  }
}

if (containsLetter && containsNumber) {
  alert("Password is valid.");
} else {
  alert("Please enter a valid password that meets the requirements.");
}
*/

//Note:
/*In JavaScript, isNaN is a built-in function that stands for "is not-a-number. 
It is used to determine whether a given value is not a valid number.
 When applied to a non-numeric value, it returns true.
  When applied to a numeric value or a string that can be converted to a numeric value, it returns false.

In the code isNaN(password[0]), it checks whether the first character of the password string is not a number (i.e., it's not a valid numeric character).
 If the first character is not a number, it returns true, indicating that the password does not start with a number.

For example, if password is "123abc", password[0] is "1", and isNaN("1") would return false because "1" is a valid numeric character.
 However, if password is "abc123", password[0] is "a", and isNaN("a") would return true because "a" is not a valid numeric character.

So, isNaN(password[0]) helps ensure that the password does not start with a numeric character, which is one of the specified requirements for a valid password in the provided code.
*/
         ////////////////////////////////////////////////////////////



//Q.Split strings 
/*
var university = "University of Karachi";

// Create an array with each character as an individual element
var universityArray = [];
for (var i = 0; i < university.length; i++) {
  universityArray.push(university[i]);
}

// Display the elements of the array
for (var j = 0; j < universityArray.length; j++) {
  document.write(universityArray[j] + "<br>");
}
*/
               ////////////////////////////////////////////////////////////
//Q.last letter of any strnig
/*
// Prompt the user for input
var userInput = prompt("Enter a text:");

// Get the last character of the input
var lastCharacter = userInput.charAt(userInput.length - 1);

// Display the last character
document.write(`Last character of input: ${lastCharacter}`);
*/


                 ////////////////////////////////////////////////////////////



 /*/Q Important You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string.    */   

//two solutions
//1
/*
i)We have the given string stored in the text variable.

ii)We split the string into words using the split method with a space as the delimiter.

iii)We initialize a wordCount variable to keep track of the number of occurrences of "the."

iv)We use a for loop to iterate through the words.

v)Inside the loop, we compare each word with "the" (after converting it to lowercase for a case-insensitive
comparison) and increment the wordCount if it matches "the."

vi)Finally, we display the count of occurrences in your web browser using document.write.

*/

/*/solution 
var text = "The quick brown fox jumps over the lazy dog";

// Split the string into words
var words = text.split(" ");

// Initialize a counter for word occurrences
var wordCount = 0;

// Iterate through the words and count occurrences of "the" (case-insensitive)
for (var i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "the") {
    wordCount++;
  }
}

// Display the count
document.write(`The word "the" occurs ${wordCount} times in the given string.`);
*/



//solution 2
/*
var text = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase for a case-insensitive search
var lowercaseText = text.toLowerCase();

// Word to search for (in lowercase)
var wordToFind = "the";

// Initialize a counter for word occurrences
var wordCount = 0;

// Initialize variables to track the start of each potential match
var startIndex = 0;
var endIndex = 0;

for (var i = 0; i < lowercaseText.length; i++) {
  if (lowercaseText[i] === wordToFind[startIndex]) {
    startIndex++;
    if (startIndex === wordToFind.length) {
      wordCount++;
      startIndex = 0;
    }
  } else {
    startIndex = 0;
  }
}

// Display the count
document.write(`The word "${wordToFind}" occurs ${wordCount} times in the given string.`);



          ////////////////////////////////////////////////////////////


















*/