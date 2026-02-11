document.querySelectorAll('.vitrine_thing').forEach(thing => {
  const randomTop = Math.random() * 80 + 10;  // 10-90%
  const randomLeft = Math.random() * 80 + 10;
  thing.style.position = 'absolute';
  thing.style.top = randomTop + '%';
  thing.style.left = randomLeft + '%';
});