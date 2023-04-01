const btnShare = document.querySelectorAll(".share")
const shareSection = document.querySelector(".shareSection");
const shareActive = document.querySelector(".shareActive");
const links = document.querySelectorAll("a");
const authorImage = document.querySelector(".authorImage");
const infoArticle = document.querySelector(".infoArticle");


function handleClick(event) {
  shareActive.classList.toggle("selected");
  shareSection.classList.toggle("selected");
  authorImage.classList.toggle("selected");
  infoArticle.classList.toggle("selected");
  event.preventDefault();
}

function handleDocumentClick(event) {
  if(!shareActive.contains(event.target) && !shareSection.contains(event.target)) {
    shareActive.classList.remove("selected");
    shareSection.classList.remove("selected");
    authorImage.classList.remove("selected");
    infoArticle.classList.remove("selected");
  }
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
})

btnShare.forEach((btn) => {
  btn.addEventListener("click", handleClick);
  btn.classList.toggle("selected");

})

document.addEventListener("click", handleDocumentClick);