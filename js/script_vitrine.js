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

/* Text erscheint auf vitrine */
const things = document.querySelectorAll('.vitrine_thing');
const descriptions = document.querySelectorAll('.project_discription > div');
const vitrine = document.querySelector('.project_discription');

things.forEach(thing => {
  thing.addEventListener('click', (e) => {
    e.stopPropagation(); // verhindert, dass Klick auf Bild auch als Klick auf das Milchglas zählt
    
    const classes = Array.from(thing.classList);
    const name = classes.find(c => !['vitrine_thing','h_klein','h_mittel','h_gross','w_klein','w_mittel','w_gross','special_size'].includes(c));
    
    // ⬇️ HIER war der Fehler - Backtick fehlte am Anfang
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

// Klick auf das Milchglas selbst → alles ausblenden
vitrine.addEventListener('click', () => {
  descriptions.forEach(desc => desc.classList.remove('show'));
});