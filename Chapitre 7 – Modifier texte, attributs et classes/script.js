let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = "no more !";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "https://i.pinimg.com/736x/08/4f/03/084f0357a36d0d26e7fd4af3e6530015.jpg");
  image.setAttribute("alt", "Nouvelle image");
});







