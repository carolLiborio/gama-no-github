/*
 Converta a chamada HTTP usando XHR do exercício anterior para Promise,
  chamada meuFetch, simulando o fetch que usamos no exercício anterior.
  
  const XHR = new XMLHttpRequest();
    XHR.onload = function () {
        console.log(this.response);
    };
    XHR.responseType = 'json'; //convertendo com JSON.parse o this.responseText
    XHR.open("GET", URL);
    XHR.send();

*/

function meuFetch(url) {
    const XHR = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        try {
            XHR.onload = function () {
                resolve(this.response);
            };
            XHR.responseType = 'json';
            XHR.open("GET", url);
            XHR.send();
        } catch (err) {
            reject(err);
        }
    });
}

meuFetch('https://jsonplaceholder.typicode.com/users')
.then(console.log)