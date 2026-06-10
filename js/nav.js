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
}

// Smooth scroll for navbar links (only for same-page links)
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-menu a');
  
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const targetId = href.substring(1);
        
        // Only prevent default if it's a same-page anchor link
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
        // Otherwise allow normal navigation to other pages
      });
    });
  }
});