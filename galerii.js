//Alustan esimesest pildist
var slideIndex = 1;
//Näita esimest pilti
showSlides(slideIndex);

// Järgmise/eelmise kontrollid
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //Kui n on suurem kui elementide arv, siis algusesse tagasi
  if (n > slides.length) {slideIndex = 1}
  //Kui n on 1-st väiksem, siis seatakse see elementide arvuks, et minna viimasele tagasi
  if (n < 1) {slideIndex = slides.length}
  //Peidab ülejäänud pildid
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //Kuvab slideindexiga pilti
  slides[slideIndex-1].style.display = "block";

}
