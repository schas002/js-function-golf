/**
 * $ - the HTML element lookup function.
 * @param id of the element
 * @return the corresponding element
 */
function $(id) {
  return document.getElementById(id);
}

/**
 * _ - the include function.
 * @param address of the JavaScript file to be included
 */
function _(address) {
  document.body.appendChild(document.createElement('script')).src = address;
}

var me = Math.E;
var mpi = Math.PI;
var m2r2 = Math.SQRT2;
var m2r_5 = Math.SQRT1_2;
var mln2 = Math.LN2;
var mln10 = Math.LN10;
var ml2e = Math.LOG2E;
var ml10e = Math.LOG10E;

/**
 * i - the input function
 * @param question to ask
 * @return the answer to the question
 */
function i(question) {
  return prompt(question);
}

/**
 * i2e - the integer to exponential function
 * @param data to convert
 * @param decimal point numbers
 * @return the data converted to exponential
 */
function i2e(data, decimal) {
  return data.toExponential(decimal);
}

/**
 * i2fp - the integer to fixed function
 * @param data to convert
 * @param decimal point numbers
 * @return the data converted to fixed
 */
function i2fp(data, decimal) {
  return data.toFixed(decimal);
}

/**
 * i2p - the integer to precision function
 * @param data to convert
 * @param length of number
 * @return the data converted to fixed
 */
function i2p(data, length) {
  return data.toPrecision(length);
}

/**
 * i2s - the item to string function
 * @param data to convert
 * @return the data converted to string
 */
function i2s(data) {
  return data.toString();
}

/**
 * iai - the input an integer function
 * @param question to ask
 * @return the answer to the question converted to integer
 */
function iai(question) {
  return parseInt(i(question));
}

/**
 * lc - the list check function
 * @param x list to check
 * @return true, if x is a list
 */
function lc(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

/**
 * li - the list in function
 * @param list to push data in
 * @param data to push in
 * @return list with data in the end
 */
function li(list, data) {
  return list.push(data);
}

/**
 * ll - the list length function
 * @param data to get length of
 * @return data's length
 */
function ll(data) {
  return data.length;
}

/**
 * mmax - the math minimum function
 * @param first integer
 * @param second integer
 * @return the larger integer
 */
function mmax(first, second) {
  return Math.max(first, second);
}

/**
 * mmin - the math minimum function
 * @param first integer
 * @param second integer
 * @return the smaller integer
 */
function mmin(first, second) {
  return Math.min(first, second);
}

/**
 * mrn - the math random function
 * @return a random float with 0 before the floating point
 */
function mrn() {
  return Math.random();
}

/**
 * mrnr - the math random range function
 * @param to which integer
 * @return a random number from 0 to to
 */
function mrnr(to) {
  return mrod(mrn() * to);
}

/**
 * mro - the math round function
 * @param data to round
 * @return data rounded to the nearest integer
 */
function mro(data) {
  return Math.round(data);
}

/**
 * mrod - the math round down function
 * @param data to round
 * @return data rounded down
 */
function mrod(data) {
  return Math.floor(data);
}

/**
 * mrou - the math round up function
 * @param data to round
 * @return data rounded up
 */
function mrou(data) {
  return Math.ceil(data);
}

/**
 * p - the print to console function
 * @param data to print
 */
function p(data) {
  console.log(data);
}

/**
 * p2a - the print to alert function
 * @param data to print
 */
function p2a(data) {
  alert(data);
}

/**
 * p2b - the print to browser function
 * @param data to print
 * @deprecated in favor of p2a
 */
function p2b(data) {
  p2a(data);
}

/**
 * pr - the prime function
 * @param number to be judged
 * @return the answer to the question: is number prime?
 */
function pr(number) {
  for(var i = 2; i < n; i++) {
    if(number % i == 0) return 0;
  }
  // loop fell through without finding a factor
  return 1;
}

/**
 * s2f - the string to float function
 * @param data to convert
 * @return the data converted to float
 */
function s2f(data) {
  return data.parseFloat();
}

/**
 * s2i - the string to integer function
 * @param data to convert
 * @return the data converted to integer
 */
function s2i(data) {
  return data.parseInt();
}

/**
 * s2lc - the string to lower case function
 * @param data to convert
 * @return the data converted to lower case
 */
function s2lc(data) {
  return data.toLowerCase();
}

/**
 * s2uc - the string to upper case function
 * @param data to convert
 * @return the data converted to upper case
 */
function s2uc(data) {
  return data.toUpperCase();
}

/**
 * scc - the string concatenate function
 * @param first string
 * @param second string
 * @return the strings concatenated
 */
function scc(first, second) {
  return first.concat(second);
}

/**
 * scha - the string character lookup function
 * @param data to lookup
 * @param character number
 * @return the character-th character of data
 */
function scha(data, character) {
  return data.charAt(character);
}

/**
 * schca - the string character code lookup function
 * @param data to lookup
 * @param character number
 * @return the code of character-th character of data
 */
function schca(data, character) {
  return data.charCodeAt(character);
}

/**
 * siloc - the string inverse locate function
 * @param data to search in
 * @param query to search
 * @return the location of query in data
 */
function siloc(data, query) {
  return data.lastIndexOf(query);
}

/**
 * sl - the string length function
 * @param data to get length of
 * @return data's length
 * @deprecated in favor of ll
 */
function sl(data) {
  return ll(data);
}

/**
 * sloc - the string locate function
 * @param data to search in
 * @param query to search
 * @return the location of query in data
 */
function sloc(data, query) {
  return data.indexOf(query);
}

/**
 * sr - the string replace function
 * @param data to edit
 * @param query to find
 * @param replacement string
 * @return the result of replacement
 */
function sr(data, query, replacement) {
  return data.replace(query, replacement);
}

/**
 * ss - the string search function
 * @param data to search in
 * @param query to search
 * @return the location of query in data
 */
function ss(data, query) {
  return data.search(query);
}

/**
 * ssl - the string slice function
 * @param data to slice
 * @param first position
 * @param last position
 * @return the sliced data
 */
function ssl(data, first, last) {
  return data.slice(first, last);
}

/**
 * sspl - the string split function
 * @param data to split
 * @param separator of returned strings
 * @return an array of data seperated by separator
 */
function sspl(data, separator) {
  return data.split(separator);
}

/**
 * subs - the substring function
 * @param data to slice
 * @param first position
 * @param last position
 * @return the sliced data
 */
function subs(data, first, last) {
  return data.substring(first, last);
}

/**
 * subsbl - the substring by length function
 * @param data to slice
 * @param first position
 * @param length of slice
 * @return the sliced data
 */
function subsbl(data, first, length) {
  return data.substr(first, length);
}

/**
 * yn - the yes/no function
 * @param question to ask
 * @return the answer to the question
 */
function yn(question) {
  return confirm(question);
}

/**
 * yn2i - the yes/no to integer function
 * @param question to ask
 * @return the answer to the question converted to integer
 */
function yn2i(question) {
  return yn(question)? 1 : 0;
}
