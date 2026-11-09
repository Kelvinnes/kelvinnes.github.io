// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Close mobile menu after clicking a link
document.querySelectorAll('.nav nav a').forEach((a) =>
  a.addEventListener('click', () => document.body.classList.remove('menu-open'))
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
