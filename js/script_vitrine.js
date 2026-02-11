
/* Milchglas Erscheint beim Klick auf Dinge */

document.querySelectorAll(".vitrine_thing")
  .forEach(el => {
    el.addEventListener("click", () => {
      document.querySelector(".milk-glass")
        .classList.add("show");
    });
  });

document.querySelector(".milk-glass")
  .addEventListener("click", function() {
    this.classList.remove("show");
  });
