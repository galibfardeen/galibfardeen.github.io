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
