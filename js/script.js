document.getElementById("toggle-button").addEventListener("click", function () {
    const person_list = document.getElementById("person_list");
    person_list.classList.toggle("show");
  
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  

  document.getElementById("info-button").addEventListener("click", function () {
    const info_text = document.getElementById("info_text");
    info_text.classList.toggle("show");
  
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  

// Projekte von Leuten sollen erscheinen

// Namen in person_list
const personNames = document.querySelectorAll('#person_list p');

personNames.forEach(name => {
    name.addEventListener('mouseenter', function() {
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
  