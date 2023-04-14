let tabs = document.querySelectorAll(".tabs li");
let content = document.querySelectorAll(".content div");
tabs.forEach((e) => {
  e.addEventListener("click", addActiveClass);
  e.addEventListener("click", showdetails);
});

function addActiveClass() {
  tabs.forEach((e) => {
    e.classList.remove("active");
    this.classList.add("active");
  });
}

function showdetails() {
  tabs.forEach((t) => {
   
    content.forEach((c) => {
      c.style.display = "none";
    });
// to make divs diplay block
   document.querySelector(this.dataset.cont).style.display = "block";
  });
}
