document.getElementById("year").textContent = String(new Date().getFullYear());

const observed = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  observed.forEach((element) => observer.observe(element));
} else {
  observed.forEach((element) => element.classList.add("is-visible"));
}
