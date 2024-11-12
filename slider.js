let currentIndex = 0;
let isAnimating = false;

const cards = document.querySelectorAll('.card1');
const totalCards = cards.length;

function initializeCards() {
    gsap.set(cards, {
        rotationX: (i) => i * 30,
        z: (i) => -i * 50,
        opacity: (i) => i === 0 ? 1 : 0,
    });
}

function rotateCards() {
    if (isAnimating) return;
    isAnimating = true;

    const prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalCards;

    const tl = gsap.timeline({
        onComplete: () => {
            isAnimating = false;
        }
    });

    tl.to(cards[prevIndex], {
        rotationX: -30,
        z: -50 * (totalCards - 1),
        opacity: 0,
        duration: 0.75,
        ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    }, 0);

    cards.forEach((card, index) => {
        if (index !== prevIndex) {
            const rotation = ((index - currentIndex + totalCards) % totalCards) * 30;
            const zPosition = -((index - currentIndex + totalCards) % totalCards) * 50;

            tl.to(card, {
                rotationX: rotation,
                z: zPosition,
                opacity: index === currentIndex ? 1 : 0,
                duration: 0.75,
                ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            }, 0);
        }
    });

    tl.fromTo(cards[currentIndex].querySelectorAll(".copy > *"),
        { y: 20, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        },
        0.5
    );
}

function startAutoRotation() {
    setInterval(rotateCards, 7000); // Rotate every 7 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCards();
    startAutoRotation();
});

// Optional: Add click event to rotate cards manually
document.querySelector('.slider-container').addEventListener('click', rotateCards);




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
  y: 10,
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
  stagger: 0.2,
  duration: 1
});