// Efecto para el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = '#333';
        header.style.boxShadow = 'none';
    }
});

// Smooth scrolling para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Cargar contenido de proyectos dinámicamente (ejemplo)
function loadProjectContent(projectId) {
    // Aquí iría la lógica para cargar el contenido del proyecto
    // Esto sería para cuando implementes las páginas individuales de proyectos
    console.log(`Cargando proyecto: ${projectId}`);
}