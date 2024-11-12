
// Set the date we're counting down to (1 week from now)
const countDownDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRADO";
  }
}

// Update the countdown every 1 second
const x = setInterval(updateCountdown, 1000);

// GSAP animations
gsap.from("#special-offer", {
  scrollTrigger: {
    trigger: "#special-offer",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  },
  opacity: 0,
  y: 80,
  duration: 1
});

gsap.from(".countdown-item", {
  scrollTrigger: {
    trigger: "#countdown",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  },
  scale: 0.5,
  opacity: 0,
  stagger: 0.1,
  duration: 1
});