function videoEnded() {
      location.href="https://www.google.com";
   }

function changevid(buttonlink){
document.getElementById('change').src = buttonlink;
document.getElementById("button_right").disabled=true;
document.getElementById("button_left").disabled=true;
}