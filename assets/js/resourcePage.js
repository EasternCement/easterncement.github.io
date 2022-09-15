const photoGallery = {
    navItem: document.getElementById("photoGallery"),
    container: document.getElementById("gallery"),
    icon: document.getElementById("photoGallery").getElementsByTagName("i")
};
const generalDownloads = {
    navItem: document.getElementById("generalDownloads"),
    container: document.getElementById("downloads"),
    icon: document.getElementById("generalDownloads").getElementsByTagName("i")
};
const financialStatements = {
    navItem: document.getElementById("financialStatements"),
    container: document.getElementById("statements"),
    icon: document.getElementById("financialStatements").getElementsByTagName("i")
};
const vatCertificate = {
    navItem: document.getElementById("vatCertificate"),
    container: document.getElementById("vat"),
    icon: document.getElementById("vatCertificate").getElementsByTagName("i")
};
const epccoBylaws = {
    navItem: document.getElementById("epccoBylaws"),
    container: document.getElementById("laws"),
    icon: document.getElementById("epccoBylaws").getElementsByTagName("i")
};
const employeesLinks = {
    navItem: document.getElementById("employeesLinks"),
    container: document.getElementById("links"),
    icon: document.getElementById("employeesLinks").getElementsByTagName("i")
};
const shareholderCertificate = {
    navItem: document.getElementById("shareholderCertificate"),
    container: document.getElementById("shareholder"),
    icon: document.getElementById("shareholderCertificate").getElementsByTagName("i")
};

const myObjects_2 = [photoGallery, generalDownloads, financialStatements, vatCertificate, epccoBylaws, employeesLinks, shareholderCertificate];

for (i = 0; i < myObjects_2.length; i++) {
    if (i != 0) {
        myObjects_2[i].container.style.display = 'none';
    }
    myObjects_2[i].navItem.onclick = function(event) {
        for (j = 0; j < myObjects_2.length; j++) {
            if ((event.target.id == myObjects_2[j].navItem.id) ||
                (event.target.parentNode.id == myObjects_2[j].navItem.id) ||
                (event.target.parentNode.parentNode.id == myObjects_2[j].navItem.id)
                ) {
                myObjects_2[j].container.style.display = 'block';
                myObjects_2[j].icon[0].style.color = "#4A3112";
            } else {
                myObjects_2[j].container.style.display = 'none';
                myObjects_2[j].icon[0].style.color = "#D5DDF4";
            }
        }
    };
}

$(document).ready(function(){
  if(window.location.hash == "#PhotoGallery"){
    document.getElementById("photoGallery").click();
  } else if(window.location.hash == "#GeneralDownloads"){
    document.getElementById("generalDownloads").click();
  } else if(window.location.hash == "#FinancialStatements"){
    document.getElementById("financialStatements").click();
  } else if(window.location.hash == "#VATCertificate"){
    document.getElementById("vatCertificate").click();
  } else if(window.location.hash == "#EPCCOBylaws"){
    document.getElementById("epccoBylaws").click();
  } else if(window.location.hash == "#EmployeesLinks"){
    document.getElementById("employeesLinks").click();
  } else if(window.location.hash == "#ShareholderCertificate"){
    document.getElementById("shareholderCertificate").click();
  }
});
