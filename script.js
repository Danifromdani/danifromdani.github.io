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
// ===== FUNCIONALIDAD PARA LA SECCIÓN DE PEGATINAS =====

// Modal de vista previa para pegatinas
function initializeStickerModal() {
    const modal = document.getElementById('stickerModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.getElementById('closeModal');
    const downloadBtn = document.getElementById('downloadBtn');

    // Verificar si estamos en una página con pegatinas
    if (!modal) return;

    let currentStickerSrc = '';
    let currentStickerName = '';

    // Abrir modal al hacer clic en una pegatina
    document.querySelectorAll('.sticker-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('.sticker-image').src;
            const title = item.querySelector('.sticker-title').textContent;
            const description = item.querySelector('.sticker-description').textContent;
            
            modalImage.src = img;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            currentStickerSrc = img;
            currentStickerName = title + '.jpg';
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Funcionalidad de descarga individual
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (currentStickerSrc) {
                downloadSticker(currentStickerSrc, currentStickerName);
            }
        });
    }
}

// Función para descargar pegatina individual
function downloadSticker(imageUrl, fileName) {
    // Crear un elemento anchor temporal
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    
    // Añadir al documento y simular clic
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Opcional: Mostrar confirmación
    console.log(`Descargando: ${fileName}`);
}

// Animaciones para las tarjetas de pegatinas
function initializeStickerAnimations() {
    const stickerItems = document.querySelectorAll('.sticker-item');
    
    stickerItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeStickerModal();
    initializeStickerAnimations();
    
    // Verificar si estamos en una página de pegatinas
    const stickersSection = document.querySelector('.stickers-section');
    if (stickersSection) {
        console.log('Página de pegatinas inicializada');
    }
});

// Manejo de errores de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.sticker-image');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.error(`Error cargando imagen: ${this.src}`);
            this.src = 'https://i.imgur.com/Uw721FE.png';
            this.alt = 'Imagen no disponible';
        });
        
        // Precargar imágenes para mejor experiencia
        img.addEventListener('load', function() {
            console.log(`Imagen cargada: ${this.src}`);
        });
    });
});

// El resto del código permanece igual...
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