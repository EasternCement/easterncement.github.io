var p = window.location.pathname;
var searchForm = document.getElementById("searchForm");
var searchField = document.getElementById("searchField");
var searchText = localStorage.getItem("searchText");

$("#searchField").keyup(function() {
    if ($(this).val() != null) {
        searchText = $(this).val().toLowerCase();
        localStorage.setItem("searchText", searchText);
    }
})

 if (p.match(/^\/?search/)) {
     console.log (searchText);
     searchField.value = searchText;

     const tableBody = document.getElementById("tableBody");

     // var content = document.body.textContent.toLowerCase() || document.body.innerText.toLowerCase();
     // var hasText = content.indexOf(searchText)!==-1;

     $.get('/aboutUs.html', function( data ) {
        var content = data.toLowerCase();
        var hasText = content.indexOf(searchText)!==-1;

        if (hasText) {
            var indices = getIndicesOf(searchText, content);
            var row = tableBody.insertRow(0);
            var cell = row.insertCell(0);
            cell.innerHTML = searchText + " " + indices;
            console.log(content.substring(indices[2] - 20, (indices[2])));
        } else {
            var row = tableBody.insertRow(0);
            var cell = row.insertCell(0);
            cell.innerHTML = "NO RESULTS!";
            console.log("NO!");
        }
      });

 }

var x = document.getElementsByClassName("container-fluid");

for (i = 0; i < x.length; i++) {
    if(x[i].id != "") {
        const heading = x[i].getElementsByTagName("h1")[0].innerHTML;
        console.log(heading.replace(/\s/g, ''));
    }
}

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}
