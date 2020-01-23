function assert(assertion, message) {
  if (!assertion) throw new Error('Assertion failed: ' + message);
}

function it(should, test) {
  try {
    test()

    console.log('%c ♥️ ' + should + ' √', 'color: green;')
  } catch (error) {
    console.log(error.message)
    console.error('🤡 ' + should + ' †\n', error);
  }
}


function describe(description, tests) {
  "use strict";

  console.log('%c' + description, 'color: blue;');

  tests();
}