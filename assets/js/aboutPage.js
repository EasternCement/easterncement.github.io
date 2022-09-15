const aboutCompany = {
    navItem: document.getElementById("aboutCompany"),
    container: document.getElementById("about"),
    icon: document.getElementById("aboutCompany").getElementsByTagName("i")
};
const missionStatement = {
    navItem: document.getElementById("missionStatement"),
    container: document.getElementById("mission"),
    icon: document.getElementById("missionStatement").getElementsByTagName("i")
};
const boardMembers = {
    navItem: document.getElementById("boardMembers"),
    container: document.getElementById("board"),
    icon: document.getElementById("boardMembers").getElementsByTagName("i")
};
const executiveManagement = {
    navItem: document.getElementById("executiveManagement"),
    container: document.getElementById("management"),
    icon: document.getElementById("executiveManagement").getElementsByTagName("i")
};
const achievements = {
    navItem: document.getElementById("achievements"),
    container: document.getElementById("achiev"),
    icon: document.getElementById("achievements").getElementsByTagName("i")
};
const qualityPolicy = {
    navItem: document.getElementById("qualityPolicy"),
    container: document.getElementById("qualityP"),
    icon: document.getElementById("qualityPolicy").getElementsByTagName("i")
};
const trainingCenter = {
    navItem: document.getElementById("trainingCenter"),
    container: document.getElementById("training"),
    icon: document.getElementById("trainingCenter").getElementsByTagName("i")
};
const procurementTerms = {
    navItem: document.getElementById("procurementTerms"),
    container: document.getElementById("pTerms"),
    icon: document.getElementById("procurementTerms").getElementsByTagName("i")
};
const ourBankDetails = {
    navItem: document.getElementById("ourBankDetails"),
    container: document.getElementById("bank"),
    icon: document.getElementById("ourBankDetails").getElementsByTagName("i")
};

const myObjects = [aboutCompany, missionStatement, boardMembers, executiveManagement, achievements, qualityPolicy, trainingCenter, procurementTerms, ourBankDetails];

for (i = 0; i < myObjects.length; i++) {
    if (i != 0) {
        myObjects[i].container.style.display = 'none';
    }
    myObjects[i].navItem.onclick = function(event) {
        for (j = 0; j < myObjects.length; j++) {
            if ((event.target.id == myObjects[j].navItem.id) ||
                (event.target.parentNode.id == myObjects[j].navItem.id) ||
                (event.target.parentNode.parentNode.id == myObjects[j].navItem.id)
                ) {
                myObjects[j].container.style.display = 'block';
                myObjects[j].icon[0].style.color = "#4A3112";
            } else {
                myObjects[j].container.style.display = 'none';
                myObjects[j].icon[0].style.color = "#D5DDF4";
            }
        }
    };
}
$(document).ready(function(){
  if(window.location.hash == "#AboutCompany"){
    document.getElementById("achievements").click();
  } else if(window.location.hash == "#MissionStatement"){
    document.getElementById("missionStatement").click();
  } else if(window.location.hash == "#BoardMembers"){
    document.getElementById("boardMembers").click();
  } else if(window.location.hash == "#ExecutiveManagement"){
    document.getElementById("executiveManagement").click();
  } else if(window.location.hash == "#Achievements"){
    document.getElementById("achievements").click();
  } else if(window.location.hash == "#QualityPolicy"){
    document.getElementById("qualityPolicy").click();
  } else if(window.location.hash == "#TrainingCenter"){
    document.getElementById("trainingCenter").click();
  } else if(window.location.hash == "#ProcurementTerms"){
    document.getElementById("procurementTerms").click();
  } else if(window.location.hash == "#OurBankDetails"){
    document.getElementById("ourBankDetails").click();
  }
});
