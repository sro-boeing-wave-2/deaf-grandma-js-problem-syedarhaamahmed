/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let expectedResult = true;
  const pattern = /[a-z]/;
  if (pattern.test(s) === true) {
    expectedResult = false;
  }
  return expectedResult;
};
module.exports = isUppercase;
