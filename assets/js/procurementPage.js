const iSuppliers = {
    navItem: document.getElementById("iSuppliers"),
    container: document.getElementById("iSup"),
    icon: document.getElementById("iSuppliers").getElementsByTagName("i")
};
const suppliers = {
    navItem: document.getElementById("suppliers"),
    container: document.getElementById("sup"),
    icon: document.getElementById("suppliers").getElementsByTagName("i")
};

const myObjects_3 = [iSuppliers, suppliers];

for (i = 0; i < myObjects_3.length; i++) {
    if (i != 0) {
        myObjects_3[i].container.style.display = 'none';
    }
    myObjects_3[i].navItem.onclick = function(event) {
        for (j = 0; j < myObjects_3.length; j++) {
            if ((event.target.id == myObjects_3[j].navItem.id) ||
                (event.target.parentNode.id == myObjects_3[j].navItem.id) ||
                (event.target.parentNode.parentNode.id == myObjects_3[j].navItem.id)
                ) {
                myObjects_3[j].container.style.display = 'block';
                myObjects_3[j].icon[0].style.color = "#4A3112";
            } else {
                myObjects_3[j].container.style.display = 'none';
                myObjects_3[j].icon[0].style.color = "#D5DDF4";
            }
        }
    };
} 

$(document).ready(function(){
  if(window.location.hash == "#iSuppliers"){
    document.getElementById("iSuppliers").click();
  } else if(window.location.hash == "#Suppliers"){
    document.getElementById("suppliers").click();
  }
});