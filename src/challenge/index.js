let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let url_api = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {

    try {  
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = function(event) {
            if( xhttp.readyState === 4 ) {
                if( xhttp.status === 200 ) {
                    callback(null, JSON.parse(xhttp.responseText));
                }
                else {
                    const error = new Error("Fetch Error(" + xhttp.status + "): " + url_api);
                    return callback(error, null);
                }
            }
        };
        xhttp.send();
    } catch (e) {
        console.error(e);
    }    
}

fetchData(url_api, function(error_1, data_1){
    if(error_1) return console.log(error_1);

    fetchData(url_api + data_1.results[0].id, function(error_2, data_2) {
        if(error_2) return console.log(error_2);
        fetchData(data_2.origin.url, function(error_3, data_3){
            if(error_3) return console.log(error_3);
            console.log(data_1.info.count);
            console.log(data_2.name);
            console.log(data_1.dimension);
        })
    });
});