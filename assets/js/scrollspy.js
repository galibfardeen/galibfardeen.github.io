// Slide in profile sidebar after scrolling past the about section
(function () {
  const sidebar = document.getElementById("profile-sidebar");
  const about = document.getElementById("about");
  if (sidebar && about) {
    window.addEventListener("scroll", function () {
      const aboutBottom = about.getBoundingClientRect().bottom;
      if (aboutBottom < 60) {
        sidebar.classList.add("visible");
      } else {
        sidebar.classList.remove("visible");
      }
    });
  }
})();

// Fade in navbar brand name after scrolling past the page title
(function () {
  const brand = document.getElementById("navbar-brand-home");
  const title = document.querySelector(".post-title");
  if (brand && title) {
    window.addEventListener("scroll", function () {
      const titleBottom = title.getBoundingClientRect().bottom;
      brand.style.opacity = titleBottom < 0 ? "1" : "0";
    });
  }
})();

// Scrollspy: highlight navbar anchor links as sections scroll into view
(function () {
  const sections = ["about", "research", "publications", "cv"];
  const navLinks = {};

  sections.forEach((id) => {
    const link = document.querySelector(
      id === "about"
        ? `#nav-about`
        : `.navbar a[href="#${id}"]`
    );
    if (link) navLinks[id] = id === "about" ? link : link.closest("li");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (navLinks[id]) {
          if (entry.isIntersecting) {
            navLinks[id].classList.add("active");
          } else {
            navLinks[id].classList.remove("active");
          }
        }
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px", // triggers when section is roughly in upper third of viewport
      threshold: 0,
    }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
