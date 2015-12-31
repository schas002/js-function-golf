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
 * p2b - the print to browser function
 * @param data to print
 */
function p2b(data) {
  alert(data);
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
