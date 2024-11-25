document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); 
            } else {
                alert('Essa seção ainda não está implementada!'); 
            }
        });
    });
});
