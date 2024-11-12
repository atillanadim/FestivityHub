document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let missingFields = [];

        if (!name) missingFields.push('Nome');
        if (!email) missingFields.push('Email');
        if (!subject) missingFields.push('Assunto');
        if (!message) missingFields.push('Mensagem');

        if (missingFields.length > 0) {
            errorMessage.textContent = `Por favor preencha a informação em falta: ${missingFields.join(', ')}.`;
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Aqui você pode adicionar o código para enviar o formulário
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });
});