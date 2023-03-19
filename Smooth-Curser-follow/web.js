const circleSvg = document.querySelector("svg");
const btn = document.querySelector("button");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (event) => {
  //   console.log(event.clientX);
  //   circleSvg.style.top = event.clientY - 45;
  //   circleSvg.style.left = event.clientX - 55;

  mouseY = event.clientY / 16 - 45 / 16 + "rem";
  mouseX = event.clientX / 16 - 55 / 16 + "rem";
});

const mouseMove = () => {
  circleSvg.style.top = mouseY;
  circleSvg.style.left = mouseX;

  window.requestAnimationFrame(mouseMove);
};
mouseMove();

var timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });

timeline.to(circleSvg, { with: 0, opacity: 0 });
timeline.to("body, button", { background: "white" });
timeline.pause();

btn.addEventListener("click", () => {
  timeline.play();
});
