function sum(a, b) {
    return a + b;
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(4,5,sum));



function date(callback) {
    console.log(new Date);
    setTimeout( function(){ 
        let date = new Date;
        callback(date);
    }, 5000 );
}

function printDate(date) {
    console.log(date);
}

date(printDate);