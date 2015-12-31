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
