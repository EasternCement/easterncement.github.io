// Nav items
var aboutCompany = document.getElementById("aboutCompany");
var missionStatement = document.getElementById("missionStatement");
var boardMembers = document.getElementById("boardMembers");
// Display Blocks
var a = document.getElementById("about");
var m = document.getElementById("mission");
var b = document.getElementById("board");
// Hide blocks
var arr = [a,m,b];
for (i = 0; i < arr.length; i++) {
    if (arr[i] != a) {
        arr[i].style.display = 'none';
    }
} 
// Hyperlink Colors
var icons = document.getElementById("accordionSidebar").getElementsByTagName("i");

aboutCompany.onclick = function() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != a) {
            arr[i].style.display = 'none';
            icons[i].style.color = '#D5DDF4';
        } else {
            arr[i].style.display = 'block';
            icons[i].style.color = "#4A3112";
        }
    } 
};

missionStatement.onclick = function() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != m) {
            arr[i].style.display = 'none';
            icons[i].style.color = '#839DE9';
        } else {
            arr[i].style.display = 'block';
            icons[i].style.color = "#4A3112";
        }
    } 
};

boardMembers.onclick = function() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != b) {
            arr[i].style.display = 'none';
            icons[i].style.color = '#839DE9';
        } else {
            arr[i].style.display = 'block';
            icons[i].style.color = "#4A3112";
        }
    } 
};