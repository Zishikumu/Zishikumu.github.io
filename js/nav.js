// Navbar visibility control
const navbar = document.querySelector('.navbar');
const bighSection = document.querySelector('.bigh');

if (navbar && bighSection) {
  const navbarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If .bigh is visible, hide navbar
        navbar.classList.remove('active');
      } else {
        // If .bigh is not visible (scrolled past), show navbar
        navbar.classList.add('active');
      }
    });
  }, {
    threshold: 0
  });

  navbarObserver.observe(bighSection);
} else {
  console.error('Navbar or bigh section not found');
}

// Smooth scroll for navbar links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-menu a');
  
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  } else {
    console.error('Navbar menu links not found');
  }
});