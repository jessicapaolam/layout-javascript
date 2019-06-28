var url = 'dados.json';
var elSelected = null;
var dataItems = [];

function load(url, callback) {
	var xhr = new XMLHttpRequest();
	var htmlItems = '';

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);

			data.forEach(function (item) {
				dataItems.push(item);

				htmlItems += createHtml(dataItems.length - 1);
			});

			document.getElementById('IdContainerAll').innerHTML += htmlItems;
			selected(0);
		}
	}

	xhr.open('GET', url, true);
	xhr.send('');

}

load(url, function () { });

function createHtml(index) {
	var htmlItem = '';

	if ((index + 1) % 3 == 1) {
		htmlItem += '<div class="cards">';
	}

	htmlItem += '<div id="item_' + index.toString() + '" class="card-style" onclick="selected(' + index.toString() + ', this)">';
	htmlItem += '<div class="card-content">';
	htmlItem += '<img src="./assets/images/' + dataItems[index].foto + '">';
	htmlItem += '<div class="indicator_item">' + dataItems[index].indicador + '</div>';
	htmlItem += '<div class="container">';
	htmlItem += '<h4><b>' + dataItems[index].nome + '</b></h4>';
	htmlItem += '<p>' + dataItems[index].cargo + '</p>';
	htmlItem += '</div>';
	htmlItem += '</div>';
	htmlItem += '</div>';

	if ((index + 1) % 3 == 0) {
		htmlItem += '</div>';
	}

	return htmlItem;
}

function selected(index) {
	if (elSelected != null) {
		elSelected.className = "card-style";
	}

	elSelected = document.getElementById('item_' + index.toString());
	elSelected.className = "card-style selected";

	document.getElementById('photo').setAttribute('src', './assets/images/' + dataItems[index].foto);
	document.getElementById('name').innerHTML = dataItems[index].nome;
	document.getElementById('role').innerHTML = dataItems[index].cargo;
	document.getElementById('age').innerHTML = dataItems[index].idade;
	document.getElementById('indicator').innerHTML = dataItems[index].indicador;
}