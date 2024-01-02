let slideIndex = 0;
// store the timeout in a variable so we can cancel it if the user manually
// advances the slideshow to avoid having multiple timeouts conflicting with
// each other
let timeout;
// Next/previous controls
function plusSlides(n) {
  // set slideIndex to n-1 since we will increment slideIndex om showSlides()
  showSlides(slideIndex += n-1);
}

// Thumbnail image controls
function currentSlide(n) {
  // set slideIndex to n-1 since we will increment slideIndex om showSlides()
  showSlides(slideIndex = n-1);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex <= 0) {
    slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  if (typeof(timeout) !== undefined) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(showSlides, 6000); // Change slide every 6 seconds
}

window.onload = function() {
  // Call showSlides() once to display the first slide
  showSlides();
};