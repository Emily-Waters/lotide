const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`💚️\tAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️\tAssertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return typeof arr === 'object' ? arr[0] : '🔴️NON-OBJECT🔴️';
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7,6,5]), 5);
assertEqual(head([]), 5);
assertEqual(head(0), 5);