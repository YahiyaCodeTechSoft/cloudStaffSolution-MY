// Yahiya


var acc = document.getElementsByClassName("accordian__heading");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
  
    if (scroll > 400) {
      let nav = document.querySelector(".navbar");
      nav.classList.add("fixed");
    } else {
      let nav = document.querySelector(".navbar");
      nav.classList.remove("fixed");
    }
  });