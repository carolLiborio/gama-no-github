const URL = 'https://jsonplaceholder.typicode.com/users';

// Com XHR
const XHR = new XMLHttpRequest();
XHR.onload = function () {
    console.log(this.response);
};
XHR.responseType = 'json'; //convertendo com JSON.parse o this.responseText
XHR.open("GET", URL);
XHR.send();