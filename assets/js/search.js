const searchBtn = document.getElementById("searchBtn");

searchBtn.onclick = function() {
    var searchText = document.getElementById("search").value;
    
    var content = document.body.textContent || document.body.innerText;
    var hasText = content.indexOf(searchText)!==-1;
    if (hasText) {
        console.log("YES!");
    } else {
        console.log("NO!");
    }
}

