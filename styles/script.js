// Menu mobile toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

// Close menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	});
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
	skillBars.forEach(bar => {
		const rect = bar.getBoundingClientRect();
		if (rect.top < window.innerHeight - 100) {
			bar.style.width = bar.getAttribute('data-width');
		}
	});
};
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
		contactForm.reset();
	});
}