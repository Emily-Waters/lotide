const assertEqual = function(actual,expected) {

  if (actual === expected) {
    console.log(`💚️\tAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️\tAssertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  return arr.slice(1);
};


// Test Case 1: Check the returned array elements ANSWER COPIED FROM COMPASS. Instructions do not specify that I should refactor assertEqual at this time

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
