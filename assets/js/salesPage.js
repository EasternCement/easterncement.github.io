const corporateLink = {
    navItem: document.getElementById("corporateLink"),
    container: document.getElementById("login"),
    icon: document.getElementById("corporateLink").getElementsByTagName("i")
};
const yourMobileApp = {
    navItem: document.getElementById("yourMobileApp"),
    container: document.getElementById("mobile"),
    icon: document.getElementById("yourMobileApp").getElementsByTagName("i")
};

const signUp = {
  button: document.getElementById("signUp"),
  button2: document.getElementById("createAcct"),
  container: document.getElementById("register")
};
const forgotPassword = {
  button: document.getElementById("forgotPassword"),
  button2: document.getElementById("js-dummy"),
  container: document.getElementById("forgot")
};
const alreadyHave = {
  button: document.getElementById("alreadyHave"),
  button2: document.getElementById("alreadyHaveAcct"),
  container: document.getElementById("login")
};
const privacyPolicy = {
  button: document.getElementById("privacyPolicy"),
  button2: document.getElementById("js-dummy"),
  container: document.getElementById("privacy-p")
};
const userGuide = {
  button: document.getElementById("userGuide"),
  button2: document.getElementById("js-dummy"),
  container: document.getElementById("guide")
};
const back1 = {
  button: document.getElementById("back1"),
  button2: document.getElementById("back2"),
  container: document.getElementById("mobile")
};

const myObjects_4 = [corporateLink, yourMobileApp];
const buttons_1 = [alreadyHave, forgotPassword, signUp, privacyPolicy, userGuide, back1];

for (i = 0; i < myObjects_4.length; i++) {
    if (i != 0) {
        myObjects_4[i].container.style.display = 'none';
    }
    for (j = 0; j < buttons_1.length; j++) {
      if (j != 0) {
        buttons_1[j].container.style.display = 'none';
      }
    }
    myObjects_4[i].navItem.onclick = function(event) {
        for (j = 0; j < buttons_1.length; j++) {
            buttons_1[j].container.style.display = 'none';
        }
        for (j = 0; j < myObjects_4.length; j++) {
            if ((event.target.id == myObjects_4[j].navItem.id) ||
                (event.target.parentNode.id == myObjects_4[j].navItem.id) ||
                (event.target.parentNode.parentNode.id == myObjects_4[j].navItem.id)
                ) {
                myObjects_4[j].container.style.display = 'block';
                myObjects_4[j].icon[0].style.color = "#4A3112";
            } else {
                myObjects_4[j].container.style.display = 'none';
                myObjects_4[j].icon[0].style.color = "#D5DDF4";
            }
        }
    };
}

for (i = 0; i < buttons_1.length; i++) {

  buttons_1[i].button.onclick = function(event) {
    for (k = 0; k < myObjects_4.length; k++) {
          myObjects_4[k].container.style.display = 'none';
    }
    for (j = 0; j < buttons_1.length; j++) {
        buttons_1[j].container.style.display = 'none';
    }
    for (l = 0; l < buttons_1.length; l++) {
        if ((event.target.id == buttons_1[l].button.id) ||
            (event.target.parentNode.id == buttons_1[l].button.id)
      ) {
          console.log("now");
            buttons_1[l].container.style.display = 'block';
        }
    }
  };

  buttons_1[i].button2.onclick = function(event) {
    for (k = 0; k < myObjects_4.length; k++) {
          myObjects_4[k].container.style.display = 'none';
    }
    for (j = 0; j < buttons_1.length; j++) {
        buttons_1[j].container.style.display = 'none';
    }
    for (l = 0; l < buttons_1.length; l++) {
        if ((event.target.id == buttons_1[l].button2.id) ||
            (event.target.parentNode.id == buttons_1[l].button2.id)
      ) {
            buttons_1[l].container.style.display = 'block';
        }
    }
  };

}

$(document).ready(function(){
  if(window.location.hash == "#CorporateLink"){
    document.getElementById("corporateLink").click();
  } else if(window.location.hash == "#YourMobileApp"){
    document.getElementById("yourMobileApp").click();
  }
});