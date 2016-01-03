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

/**
 * i - the input function
 * @param question to ask
 * @return the answer to the question
 */
function i(question) {
  return prompt(question);
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
  return i(question).parseInt();
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
 * @param data to measure
 * @return the length of data
 */
function sl(data) {
  return data.length;
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
