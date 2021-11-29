const assertEqual = (actual,expected) => {

  if (actual === expected) {
    console.log('💚️💚️💚️\tAssertion Passed:', actual ,'===', expected);
  } else {
    console.log('🔴️🔴️🔴️\tAssertion Failed:', actual ,'!==', expected);
  }
};

module.exports = assertEqual;