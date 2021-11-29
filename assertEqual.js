//  Console will not log anything if the argument in brackets evaluates as true.
//console.assert(true === true);
//  Console will log 'Assertion failed' for arguments that evaluate to false.
//console.assert(true === false);

/* NOTES ON SYNTAX FROM MDN FOR CONSOLE.ASSERT (https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
* console.assert(assertion, obj1 [, obj2, ..., objN]);
* console.assert(assertion, msg [, subst1, ..., substN]); // C-like message formatting
*
*
* NOTES FROM COMPASS LHL (https://web.compass.lighthouselabs.ca/days/w01d1/activities/807)
*
*    // FUNCTION IMPLEMENTATION
*     const sum = function(a, b) {
*      return a + b;
*    }
*
*    // TEST CODE
*    console.assert(sum(1, 2) === 3);
*    console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!
*
*   The console.assert function prints to the console for us, the developer,
*   when an expected outcome is not met (fails) so that we can look into why.
*/

//  Creating my own assertEqual func for testing


//IMPORTS
const assertEqual = (actual,expected) => {

  if (actual === expected) {
    console.log('💚️💚️💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️🔴️🔴️\tAssertion Failed:', actual ,'!==', expected);
  }
};


//EXPORTS
module.exports = assertEqual;