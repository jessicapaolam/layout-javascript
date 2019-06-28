var url = 'dados.json';
var dados = [];

function load(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            data.forEach(function (item) {
                dados.push(item);
            });

        }
    }

    xhr.open('GET', url, true);
    xhr.send('');

}

load(url, function(){});