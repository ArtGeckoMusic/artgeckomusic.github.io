$(document).ready(() => {
  console.log("ready");
  let colors = [
    "greenyellow",
    "orange",
    "rust",
    "hotpink"
  ]
  let colorIndex = 0;
  setInterval(() => {
    $("#title").css("border", "5px dashed " + colors[colorIndex]);
    colorIndex = (colorIndex + 1) % 5;
  }, 400);

  $("#fartButton").on("click touchend", () => {
    alert("fart");
    let fart = new Audio("media/phart sound.wav");
    fart.play();
    console.log("farting");

  }); 
});