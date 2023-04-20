// Add an event listener to the navigation links
var navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		var target = this.getAttribute('href');
		var targetElement = document.querySelector(target);
		targetElement.scrollIntoView({behavior: "smooth"});
	});
});


let slideIndex = 1;
showSlides(slideIndex);

let timer = setInterval(() => {
  plusSlides(1);
}, 5000); // Change the interval time (in milliseconds) as needed

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
