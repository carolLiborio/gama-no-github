
/* 
3) O seguinte código irá disparar um erro onClick is not a function. Como você o corrigiria?

function principal(onClick) {
    const argumentos = { 
        mensagem: 'oi'
    };

    if (onClick === 'function') {
        onClick(argumentos)
    }
}

principal(null)
*/

function principal(onClick) {
    const argumentos = { 
        mensagem: 'oi'
    };
    if(typeof onClick === 'function'){
        onClick(argumentos)
    }  
}

principal(null)