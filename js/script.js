  


// Namen in person_list

// ===== Personen Hover (Desktop) + Click Filter (Mobile) =====

const personNames = document.querySelectorAll('#person_list p');

function resetMobileFilter() {
  document.querySelectorAll('.project_title')
    .forEach(p => p.classList.remove('mobile-hidden'));

  personNames.forEach(n =>
    n.classList.remove('active-filter'));
}

personNames.forEach(name => {

  // ---------- DESKTOP HOVER ----------
  name.addEventListener('mouseenter', function() {
    if (isMobile()) return;
    if (!person_list.classList.contains('show')) return;

    document.querySelectorAll('.highlighted')
      .forEach(p => p.classList.remove('highlighted'));

    const colorClass = [...this.classList]
      .find(c => c.startsWith('font_color_'));

    if (!colorClass) return;

    document.querySelectorAll(`.content .${colorClass}`)
      .forEach(p => p.classList.add('highlighted'));
  });

  name.addEventListener('mouseleave', function() {
    if (isMobile()) return;

    document.querySelectorAll('.highlighted')
      .forEach(p => p.classList.remove('highlighted'));
  });


  // ---------- MOBILE CLICK FILTER ----------
  name.addEventListener('click', function() {

    if (!isMobile()) return;

    const colorClass = [...this.classList]
      .find(c => c.startsWith('font_color_'));
    if (!colorClass) return;

    const already = this.classList.contains('active-filter');

    resetMobileFilter();

    if (already) return;

    this.classList.add('active-filter');

    document.querySelectorAll('.project_title')
      .forEach(t => {
        if (!t.classList.contains(colorClass)) {
          t.classList.add('mobile-hidden');
        }
      });

    const first = document.querySelector(`.project_title.${colorClass}`);
    if (first) {
      const y = first.getBoundingClientRect().top + window.scrollY - 48;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });      
    }

  });

});





// Reset Togglebuttons Farbe nach anklicken
document.querySelectorAll('.header-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });
  

// Beim Laden der Website: Erst Bilder dann verzögert die Projekttitel

if (window.innerWidth <= 768) {
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.body.classList.add("titles-ready");
    }, 2300);
  });
}


// button schließt die box_black 

document.querySelectorAll(".close-button").forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".box_black").style.display = "none";
  });
});


// Mobile: Namensliste und Infobox schließen sich gegenseitig

const toggleBtn = document.getElementById("toggle-button");
const infoBtn = document.getElementById("info-button");
const person_list = document.getElementById("person_list");
const info_text = document.getElementById("info_text");

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

toggleBtn.addEventListener("click", function () {

  if (isMobile()) {
    resetMobileFilter();   // ← wichtig
    info_text.classList.remove("show");
  }

  person_list.classList.toggle("show");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

infoBtn.addEventListener("click", function () {

  if (isMobile()) {
    person_list.classList.remove("show");
  }

  info_text.classList.toggle("show");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Popup nach 2 Sekunden zeigen
window.addEventListener("load", () => {
  setTimeout(() => {
    const popup = document.querySelector(".box_black");
    if (popup) popup.classList.add("show");
  }, 2000);
});



