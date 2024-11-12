// Importa GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


const myNav = document.querySelector("#my-nav");
const burger = document.querySelector("#burger");

if (burger && myNav) { // Verifica se os elementos foram encontrados
    burger.addEventListener('click', () => {
        myNav.classList.toggle("is-active");
        burger.classList.toggle("is-active");
    });
}

const eventCards = document.querySelectorAll('.event-card');

function showCards() {
    eventCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showCards);
showCards();


// Animação para o Hero Section
gsap.from(".hero-section", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top center",
        toggleActions: "play none none none",
    }
});

// Animação para a seção Eventos em Destaque
gsap.from(".event-grid", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "none",
    scrollTrigger: {
        trigger: ".event-grid",
        start: "top center",
        toggleActions: "play none none none",
    }
});

// Animação para a seção Sobre Nós
gsap.from(".about-section", {
    opacity: 0,
    x: -50,
    duration: 1.2,
    ease: "none",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top center",
        toggleActions: "play none none none",
    }
});

// Animação para a seção Contatos Rápidos
gsap.from(".contact-section", {
    opacity: 0,
    x: 50,
    duration: 1.2,
    ease: "none",
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top center",
        toggleActions: "play none none none",
    }
});


