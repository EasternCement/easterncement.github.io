var myData = []
var token = GetURLParameter('tok');

function GetURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1)
	var sURLVariables = sPageURL.split('&')
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=')
		if (sParameterName[0] == sParam) {
			return sParameterName[1]
		}
	}
}

function myFunction() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let response = this.responseText;
			var json = JSON.parse(response)
			
			for(var i = json.length - 1; i >= 0; i--) {
				let obj = json[i];
				let group = obj["groups"]
				
				if(obj.name != "Informative" && obj.name != "Microsoft 365 Clone" && group[0]["name"] != "Only Me" && obj.delivered_count != 1) {
					myData.push({"Name": obj.name, "Group": group[0]["name"], "Date": obj.started_at, "Delivered": obj.delivered_count,"Opened": obj.opened_count, "Clicked": obj.clicked_count, "Replied": obj.replied_count, "Attachment Open": obj.attachment_open_count, "Entered Data": obj.data_entered_count})
				}
				
			}
			document.body.appendChild(buildHtmlTable(myData))
		}
	};
	xhttp.open("GET", "https://eu.api.knowbe4.com/v1/phishing/security_tests", true);
	xhttp.setRequestHeader('Authorization', "Bearer " + token);
	xhttp.send();
}

var _table_ = document.createElement('table'),
	_tr_ = document.createElement('tr'),
	_th_ = document.createElement('th'),
	_td_ = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
function buildHtmlTable(arr) {
	var table = _table_.cloneNode(false),
		columns = addAllColumnHeaders(arr, table);
	for (var i = 0, maxi = arr.length; i < maxi; ++i) {
		var tr = _tr_.cloneNode(false);
		for (var j = 0, maxj = columns.length; j < maxj; ++j) {
			var td = _td_.cloneNode(false);
			var cellValue = arr[i][columns[j]];
			td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	return table;
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(arr, table) {
	var columnSet = [],
		tr = _tr_.cloneNode(false);
	for (var i = 0, l = arr.length; i < l; i++) {
		for (var key in arr[i]) {
			if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
				columnSet.push(key);
				var th = _th_.cloneNode(false);
				th.appendChild(document.createTextNode(key));
				tr.appendChild(th);
			}
		}
	}
	table.appendChild(tr);
	return columnSet;
}