  

// Projekte von Leuten sollen erscheinen

// Namen in person_list
const personNames = document.querySelectorAll('#person_list p');

personNames.forEach(name => {
    name.addEventListener('mouseenter', function() {
        const person_list = document.getElementById('person_list');
        
        // ✅ NUR wenn die Liste ausgeklappt ist
        if (!person_list.classList.contains('show')) {
            return; // Abbrechen, wenn Liste nicht sichtbar
        }

        // ✅ ZUERST alle anderen Highlights entfernen
      const allProjects = document.querySelectorAll('.content .highlighted');
        allProjects.forEach(project => {
          project.classList.remove('highlighted');
      });
        
        // Finde alle Klassen des Namens
        const classes = Array.from(this.classList);
        // Filter nach Farb-Klassen (die mit font_color_ anfangen)
        const colorClass = classes.find(c => c.startsWith('font_color_'));
        
        if (colorClass) {
            // Finde alle Projekte mit der gleichen Klasse
            const projects = document.querySelectorAll(`.content .${colorClass}`);
            // Füge temporär eine Klasse hinzu, die sie sichtbar macht
            projects.forEach(project => {
                project.classList.add('highlighted');
            });
        }
    });
    
    name.addEventListener('mouseleave', function() {
        // Entferne die highlight-Klasse von allen Projekten
        const allProjects = document.querySelectorAll('.content .highlighted');
        allProjects.forEach(project => {
            project.classList.remove('highlighted');
        });
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




