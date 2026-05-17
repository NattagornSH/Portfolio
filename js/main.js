// Intersection Observer for fade-in animations
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".observe").forEach((el) => obs.observe(el));

// Progress Bar
window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.transform =
    `scaleX(${scrolled / 100})`;
});

// Back to Top Button
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

// Typing Animation
const texts = [
  "Node.js · Express.js · MongoDB · React",
  "Backend Developer · API Design",
  "Full-Stack · MERN Stack",
  "Problem Solver · Fast Learner",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typingText");
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => {
      isDeleting = true;
    }, pauseTime);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(type, speed);
}

// Start typing animation after page load
setTimeout(type, 1000);

// ===================================
// Loading Screen
// ===================================
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 1500);
});

// ===================================
// Particle Background
// ===================================
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = `rgba(0, 229, 160, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach((b) => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.strokeStyle = `rgba(0, 229, 160, ${0.2 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

initParticles();

// ===================================
// Custom Cursor
// ===================================
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

if (cursor && cursorFollower) {
  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = followerX + "px";
    cursorFollower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
  }

  animateFollower();

  // Cursor effects on interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, .skill-card, .project-card",
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("active"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });
}

// ===================================
// Scroll Progress Circle
// ===================================
const scrollProgress = document.querySelector(".scroll-progress");
const progressRing = document.querySelector(".progress-ring");
const scrollProgressText = document.querySelector(".scroll-progress-text");

if (scrollProgress && progressRing) {
  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const offset = 157 - (157 * scrolled) / 100;
    progressRing.style.strokeDashoffset = offset;

    if (scrollProgressText) {
      scrollProgressText.textContent = Math.round(scrolled) + "%";
    }

    if (winScroll > 300) {
      scrollProgress.classList.add("visible");
    } else {
      scrollProgress.classList.remove("visible");
    }
  });
}

// ===================================
// Parallax Effect
// ===================================
document.addEventListener("mousemove", (e) => {
  const shapes = document.querySelectorAll(".shape");
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 20;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    shape.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// ===================================
// Smooth Scroll with Offset
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===================================
// Add Glitch Effect Data Attribute
// ===================================
const heroName = document.querySelector(".hero-name");
if (heroName) {
  heroName.setAttribute("data-text", heroName.textContent);
}

// ===================================
// Reveal Animations on Scroll
// ===================================
const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .achievement-badge, .exp-item",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 100);
      }
    });
  },
  { threshold: 0.1 },
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  revealObserver.observe(el);
});

// ===================================
// Console Easter Egg
// ===================================
console.log(
  "%c👋 Hello, Developer!",
  "color: #00e5a0; font-size: 20px; font-weight: bold;",
);
console.log(
  "%cLooking for something? Check out my GitHub: https://github.com/NattagornSH",
  "color: #7c6fff; font-size: 14px;",
);
console.log(
  "%cLet's build something amazing together! 🚀",
  "color: #ff6b9d; font-size: 14px;",
);
