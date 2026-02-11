document.addEventListener('DOMContentLoaded', function() {
  console.log('JavaScript lädt!'); 

// Datum Counter
// Aktuelles Datum in die Überschrift einfügen
const dateElement = document.getElementById('current-date');
const today = new Date();

// Format: 11.02.2026
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // +1 weil Monate bei 0 starten
const year = today.getFullYear();

dateElement.textContent = `${day}.${month}.${year}`;

/* Milchglas Erscheint beim Klick auf Dinge */
document.querySelectorAll(".vitrine_thing")
  .forEach(el => {
    el.addEventListener("click", () => {
      document.querySelector(".milk-glass")
        .classList.add("show");
    });
  });

/* Text erscheint auf vitrine */
const things = document.querySelectorAll('.vitrine_thing');
const descriptions = document.querySelectorAll('.project_discription > div');
const milkGlass = document.querySelector('.milk-glass');
const vitrine = document.querySelector('.project_discription');

things.forEach(thing => {
  thing.addEventListener('click', (e) => {
    e.stopPropagation(); // verhindert, dass Klick auf Bild auch als Klick auf das Milchglas zählt
    
    const classes = Array.from(thing.classList);
    const name = classes.find(c => !['vitrine_thing','h_klein','h_mittel','h_gross','w_klein','w_mittel','w_gross','special_size'].includes(c));
    
    const targetDesc = document.querySelector(`.project_discription > div.${name}`);
    
    // Prüfen: ist der Text schon sichtbar?
    const isVisible = targetDesc.classList.contains('show');
    
    // Alle Texte ausblenden
    descriptions.forEach(desc => desc.classList.remove('show'));
    
    // Nur anzeigen, wenn er vorher nicht sichtbar war
    if(!isVisible){
      targetDesc.classList.add('show');
    }
  });
});

// ⬇️ NEU: Ein Klick schließt BEIDES - Milchglas UND Text
milkGlass.addEventListener('click', () => {
  milkGlass.classList.remove('show');
  descriptions.forEach(desc => desc.classList.remove('show'));
});

// Klick auf project_discription → beides schließen
vitrine.addEventListener('click', () => {
  milkGlass.classList.remove('show');
  descriptions.forEach(desc => desc.classList.remove('show'));
});

};

