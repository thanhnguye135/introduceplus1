function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document
  .getElementById("changeColorBtn")
  .addEventListener("click", function () {
    var randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;

    document.querySelector(".text-center").style.color = randomColor;

    document.querySelector(".container p").style.color = randomColor;
  });
