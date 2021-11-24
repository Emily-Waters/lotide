//  Make password.js take in a SINGLE STRING as a command line argument and print out an
//  obfuscated version of that password, using the rules defined below.
//
//  Our program should define a function named obfuscate. This function should take a
//  string as an argument and obfuscate it by applying the following rules:
//
//  Every "a" in the string should be replaced with a "4".
//  Every "e" in the string should be replaced with a "3".
//  Every "o" (oh) in the string should be replaced with a "0" (zero).
//  Every "l" (el) in the string should be replaced with a "1" (one).

const args = process.argv.slice(2);

const obfuscate = (input) => {

  //Declaring resultString as an empty string in which to hold the encoded return value of the input
  let resultString = '';

  //Accessing each word in the array individually, in this case it is a single string only
  for (let word of input) {

    //Accessing individual letters in the input string and encoding them accordingly with switch(case)
    for (let letter of word) {

      switch (letter) {

      //ESLint doesn't like the cases to be indented so I will defer to ESLint's style requirements
      case 'a' :
        resultString += "4";
        break;
      case 'e' :
        resultString += "3";
        break;
      case 'o' :
        resultString += "0";
        break;
      case 'l' :
        resultString += "1";
        break;
      default :
        //If the letter passed in does not meet the encoding criteria it just gets added as is
        resultString += letter;
      }
    }
  }
  return resultString;
};


//Logging the encoded password
console.log(obfuscate(args));