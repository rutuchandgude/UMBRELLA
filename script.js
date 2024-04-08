const COLOR_BTNS = document.querySelectorAll(".color");
COLOR_BTNS.forEach((color) => {
  color.addEventListener("click", () => {
    let colorNameClass = color.className;
    if (!color.classList.contains("active-color")) {
      let colorName = colorNameClass.slice(
        colorNameClass.indexOf("-") + 1,
        colorNameClass.length
      );
      resetActiveBtns();
      color.classList.add("active-color");
      setNewColor(colorName);
    }
  });
});

function resetActiveBtns() {
  COLOR_BTNS.forEach((color) => {
    color.classList.remove("active-color");
  });
}

function setNewColor(color) {
  document.querySelector(
    ".banner-right img"
  ).src = `images/umbrella_${color}.png`;
}

function colour(lightcolour) {
  var a = getComputedStyle(lightcolour);
  var b = a.backgroundColor;
  document.getElementsByTagName("header")[0].style.backgroundColor = b;
}

document.getElementById("logo-input").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const logoURL = e.target.result;
      const logo = document.createElement("img");
      logo.src = logoURL;
      logo.classList.add("logo");
      document.querySelector(".banner-right").appendChild(logo);
    };
    reader.readAsDataURL(file);
  }
});





