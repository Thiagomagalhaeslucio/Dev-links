function togglemode() {
  const html = document.body
  html.classList.toggle("light")

  //if(body.classList.contains('light')) {
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute("src", "./src/assets/Avatar-1.png");
  } else {
    img.setAttribute("src", "./src/assets/Avatar-j.png");
  }
}
