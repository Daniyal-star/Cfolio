document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Starry background
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function drawStar(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }

  function animateStars() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = Math.random() * 1.5;
      drawStar(x, y, r);
    }
    requestAnimationFrame(animateStars);
  }

  resize();
  animateStars();
  window.addEventListener("resize", resize);
});

