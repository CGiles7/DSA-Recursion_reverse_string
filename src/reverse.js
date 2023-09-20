/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
    if(text === "") {
      return "";
    } else {
      return reverse(text.substring(1)) + text.charAt(0);
    }
   }

module.exports = reverse;
