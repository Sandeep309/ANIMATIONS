function createStar(type, quantity) {
  console.log(1);

  for (let i = 0; i < quantity; i++) {
    var star = document.createElement("div");
    star.classList.add("star", `type-${type}`);
    star.style.left = `${randomNumber(1, 99)}%`;
    star.style.bottom = `${randomNumber(1, 99)}%`;
    star.style.animationDuration = `${randomNumber(50, 200)}s`;
    document.body.appendChild(star);
  }
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

createStar(1, 100);
createStar(2, 80);
createStar(3, 75);
