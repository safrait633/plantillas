// === SISTEMA DE TEMAS ===
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.initializeTheme();
    }
    
    initializeTheme() {
        document.body.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeIcon();
        this.animateThemeChange();
    }
    
    updateThemeIcon() {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    animateThemeChange() {
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => document.body.style.transition = '', 500);
    }
}

// === NAVEGACIÓN INTELIGENTE ===
function navigateToSpecialty(specialtyFile) {
    // Animación de transición
    document.body.style.opacity = '0.8';
    document.body.style.transform = 'scale(0.95)';
    
    // Guardar preferencias del usuario
    localStorage.setItem('lastVisitedSpecialty', specialtyFile);
    localStorage.setItem('visitTime', new Date().toISOString());
    
    // Incrementar contador de visitas
    const currentCount = parseInt(localStorage.getItem('totalVisits') || '0');
    localStorage.setItem('totalVisits', (currentCount + 1).toString());
    
    // Navegación con delay para animación
    setTimeout(() => {
        window.location.href = specialtyFile;
    }, 300);
}

// === ESTADÍSTICAS EN TIEMPO REAL ===
function updateStats() {
    const totalVisits = localStorage.getItem('totalVisits') || '0';
    const cardioExams = localStorage.getItem('cardioExams') || '0';
    const neuroExams = localStorage.getItem('neuroExams') || '0';
    
    const statsElements = {
        'exams-today': totalVisits,
        'cardio-exams': cardioExams,
        'neuro-exams': neuroExams
    };
    
    Object.entries(statsElements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
}

// === ANIMACIÓN DE NÚMEROS ===
function animateNumbers() {
    const counters = document.querySelectorAll('.stat-value, .stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent) || 0;
        let current = 0;
        const increment = Math.max(target / 30, 1);
        
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current);
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 50);
    });
}

// === EFECTOS VISUALES ===
function setupCardEffects() {
    const cards = document.querySelectorAll('.specialty-card');
    
    cards.forEach((card, index) => {
        // Animación de entrada escalonada
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Efectos de hover mejorados
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// === BÚSQUEDA INTELIGENTE ===
function setupSearch() {
    const searchInput = document.querySelector('input[placeholder*="Buscar"]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.specialty-card');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const isVisible = title.includes(query) || description.includes(query);
                
                card.style.display = isVisible ? 'block' : 'none';
                
                if (isVisible) {
                    card.style.animation = 'fadeIn 0.3s ease';
                }
            });
        });
    }
}

// === FUNCIONES UTILITARIAS ===
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.warn('LocalStorage no disponible');
    }
}

function loadFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.warn('Error al cargar desde LocalStorage');
        return null;
    }
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar sistema de temas
    const themeManager = new ThemeManager();
    
    // Configurar efectos visuales
    setupCardEffects();
    setupSearch();
    
    // Actualizar estadísticas
    updateStats();
    
    // Animar números después de un breve delay
    setTimeout(() => {
        animateNumbers();
    }, 500);
    
    // Configurar botón de tema si existe
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => themeManager.toggleTheme());
    }
    
    console.log('🎉 Portal médico cargado exitosamente!');
});

// === ANIMACIONES CSS ADICIONALES ===
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInFromLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInFromRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
    }
`;
document.head.appendChild(style);