document.getElementById("toggle-button").addEventListener("click", function () {
    const person_list = document.getElementById("person_list");
                person_list.classList.toggle("show");
            });

document.getElementById("info-button").addEventListener("click", function () {
const info_text = document.getElementById("info_text");
            info_text.classList.toggle("show");
        });