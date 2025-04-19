// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50 ? "rgba(10, 10, 10, 0.9)" : "transparent";
    navbar.style.padding = window.scrollY > 50 ? "1rem 5%" : "2rem 5%";
  });
  
  // Skill hover effect (optional)
  document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("mouseover", () => {
      skill.style.transform = "translateY(-5px)";
    });
    skill.addEventListener("mouseout", () => {
      skill.style.transform = "translateY(0)";
    });

    // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  });

  