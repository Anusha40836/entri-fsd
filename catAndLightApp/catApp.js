function switchOff() {
  document.getElementById("bulbImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switchStatus").textContent = "Switched OFF";
  document.getElementById("switchOffBtn").style.backgroundColor = "red";
  document.getElementById("switchOnBtn").style.backgroundColor = "grey";
}

function switchOn() {
  document.getElementById("bulbImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switchStatus").textContent = "Switched ON";
  document.getElementById("switchOnBtn").style.backgroundColor = "green";
  document.getElementById("switchOffBtn").style.backgroundColor = "grey";
}
