const makeElementVisibleAfterAnimation = (elementId) => {
  const el = document.getElementById(elementId);
  el.addEventListener("animationend", () => {
    el.classList.add("visible");
  });
}

makeElementVisibleAfterAnimation("happy-birthday-text");
makeElementVisibleAfterAnimation("manuls");
