function toggleTabelle() {
  const inhalt = document.getElementById("timetable-content");
  const button = document.querySelector("button");

  inhalt.classList.toggle("eingeklappt");

  if (inhalt.classList.contains("eingeklappt")) {
    button.textContent = "【 Zeitplan 】";
  } else {
    button.textContent = "【 Zeitplan 】";
  }
}