/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const
  vscode = require('vscode'),
  myExtension = require('../extension'),
  convertIndent4to2 = myExtension.convertIndent4to2;

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', function () {
  // Defines a Mocha unit test
  test('Convert tabs', function () {
    assert.equal('    ABC \t', convertIndent4to2('\t\tABC \t'));
  });

  test('Convert spaces', function () {
    assert.equal('    ABC \t', convertIndent4to2('        ABC \t'));
  });

  test('Convert mixed tab and spaces', function () {
    assert.equal('    ABC \t', convertIndent4to2('    \tABC \t'));
  });
});