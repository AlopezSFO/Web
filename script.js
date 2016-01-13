$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});

function createCookie(name,value,email) {

  if (value.length < 1) {
    alert("Please enter your name to login");
    return false
    }


  var status = false;     
  var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
       if (document.frmLogin.email.value.search(emailRegEx) == -1) {
            alert("Please enter a valid email address.");
       }
       else {
            alert("Thank you for logging in.");
            window.location.reload();
            status = true;
       }
       return document.cookie = name+"="+value+"; path=/";
}



function readCookie(name) {
  var nameEQ = name + "=";  
  var visitorName = "";
  var cookieList = document.cookie.split(';');   
  for(var i=0;i < cookieList.length;i++) {
    var c = cookieList[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) { 
      visitorName = c.substring(nameEQ.length,c.length)  
    }
  }
  
  if (visitorName.length > 0) {
    var writeLink = "Hello " + visitorName + " - <a href=\"javascript:eraseCookie('myCookie');eraseLogin();eraseEmail();\"><img src='images/icons/activelogin.png'></a>"
  } 
  else
  {
    var writeLink = "<img src='images/icons/login.png'>" 
  }
   
  document.write(writeLink);
}

function eraseCookie(name) {
  document.cookie = name+"=;expires='1/1/2000'; path=/";

    alert("Thank you for logging out.");
              window.location.reload();
              status = true; 
}

function eraseLogin(name) {
  document.forms["frmLogin"].fname.value=''; location.reload(); 
}

function eraseEmail(email) {
  document.forms["frmLogin"].email.value=''; location.reload(); 
}


function showCookie() {
  alert(document.cookie)
}