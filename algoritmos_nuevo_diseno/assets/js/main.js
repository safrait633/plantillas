// === SISTEMA DE TEMAS ===
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
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

// === MANEJO DE SECCIONES ===
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    if (!content) return;
    
    const header = content.previousElementSibling;
    const arrow = header ? header.querySelector('.section-arrow') : null;
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('expanded');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
        content.classList.add('expanding');
        setTimeout(() => content.classList.remove('expanding'), 400);
    }
    
    // Actualizar contador de la sección si existe
    updateSectionCounter(sectionId);
}

// === ACTUALIZAR CONTADORES DE SECCIÓN ===
function updateSectionCounter(sectionId) {
    const content = document.getElementById(sectionId);
    if (!content) return;
    
    const checkboxes = content.querySelectorAll('input[type="checkbox"]');
    const checked = content.querySelectorAll('input[type="checkbox"]:checked');
    const counter = content.previousElementSibling?.querySelector('.section-counter');
    
    if (counter && checkboxes.length > 0) {
        counter.textContent = `${checked.length}/${checkboxes.length}`;
    }
}

// === PANEL LATERAL ===
function togglePanel() {
    const panel = document.getElementById('conclusion-panel');
    const toggleBtn = document.querySelector('.panel-toggle');
    
    if (panel) {
        panel.classList.toggle('active');
        if (toggleBtn) {
            toggleBtn.classList.toggle('active');
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                icon.className = panel.classList.contains('active') ? 'fas fa-times' : 'fas fa-file-alt';
            }
        }
    }
}

// === FUNCIONES UTILITARIAS ===
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.warn('LocalStorage no disponible:', e);
    }
}

function loadFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.warn('Error al cargar desde LocalStorage:', e);
        return null;
    }
}

// === MANEJO DE FORMULARIOS ===
function handleFormChange(event) {
    const target = event.target;
    
    // Actualizar dashboard
    if (typeof updateDashboard === 'function') {
        updateDashboard();
    }
    
    // Generar conclusión
    if (typeof generateConclusion === 'function') {
        generateConclusion();
    }
    
    // Actualizar contador de sección
    const section = target.closest('.section-content');
    if (section) {
        updateSectionCounter(section.id);
    }
    
    // Guardar en localStorage
    saveFormData();
}

// === GUARDAR DATOS DEL FORMULARIO ===
function saveFormData() {
    const formData = {};
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            formData[input.id] = input.checked;
        } else {
            formData[input.id] = input.value;
        }
    });
    
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    saveToLocalStorage(`formData_${currentPage}`, formData);
}

// === CARGAR DATOS DEL FORMULARIO ===
function loadFormData() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const formData = loadFromLocalStorage(`formData_${currentPage}`);
    
    if (!formData) return;
    
    Object.keys(formData).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (element.type === 'checkbox' || element.type === 'radio') {
                element.checked = formData[id];
            } else {
                element.value = formData[id];
            }
        }
    });
}

// === LIMPIAR FORMULARIO ===
function clearForm() {
    if (confirm('¿Está seguro de que desea limpiar todos los datos?')) {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = false;
            } else {
                input.value = '';
            }
        });
        
        // Limpiar localStorage
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        localStorage.removeItem(`formData_${currentPage}`);
        
        // Actualizar dashboard y conclusiones
        if (typeof updateDashboard === 'function') updateDashboard();
        if (typeof generateConclusion === 'function') generateConclusion();
        
        // Actualizar contadores
        document.querySelectorAll('.section-content').forEach(section => {
            updateSectionCounter(section.id);
        });
    }
}

// === EXPORTACIÓN PDF ===
function exportToPDF() {
    // Mostrar indicador de carga
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';
    btn.disabled = true;
    
    try {
        // Crear contenido para PDF
        const title = document.title;
        const conclusion = document.getElementById('conclusion-content')?.textContent || 'Sin conclusiones';
        
        // Usar la API de impresión del navegador (método más compatible)
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${title}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
                    .conclusion { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px; }
                    @media print { body { margin: 0; } }
                </style>
            </head>
            <body>
                <h1>${title}</h1>
                <div class="conclusion">
                    <h2>Conclusión Médica:</h2>
                    <pre>${conclusion}</pre>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                        window.close();
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
        
    } catch (error) {
        console.error('Error al exportar PDF:', error);
        alert('Error al generar el PDF. Por favor, intente nuevamente.');
    } finally {
        // Restaurar botón
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    }
}

// === IMPRESIÓN ===
function printReport() {
    const originalTitle = document.title;
    document.title = `Informe Médico - ${originalTitle}`;
    window.print();
    document.title = originalTitle;
}

// === NAVEGACIÓN INTELIGENTE ===
function navigateToSpecialty(specialtyFile) {
    // Guardar datos actuales
    saveFormData();
    
    // Animación de transición
    document.body.style.opacity = '0.8';
    document.body.style.transform = 'scale(0.95)';
    
    // Guardar estadísticas
    updateNavigationStats(specialtyFile);
    
    // Navegación con delay para animación
    setTimeout(() => {
        window.location.href = specialtyFile;
    }, 300);
}

// === ESTADÍSTICAS DE NAVEGACIÓN ===
function updateNavigationStats(specialty) {
    const stats = loadFromLocalStorage('navigationStats') || {};
    const today = new Date().toDateString();
    
    if (!stats[today]) {
        stats[today] = {};
    }
    
    if (!stats[today][specialty]) {
        stats[today][specialty] = 0;
    }
    
    stats[today][specialty]++;
    saveToLocalStorage('navigationStats', stats);
}

// === VALIDACIÓN DE CAMPOS OBLIGATORIOS ===
function validateRequiredFields() {
    const requiredFields = document.querySelectorAll('[required]');
    let allValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--alert-color)';
            allValid = false;
        } else {
            field.style.borderColor = 'var(--border-color)';
        }
    });
    
    return allValid;
}

// === MOSTRAR TOOLTIPS ===
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 9999;
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.bottom + 5) + 'px';
    
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    }, 3000);
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Iniciando sistema médico...');
    
    // Inicializar sistema de temas
    const themeManager = new ThemeManager();
    
    // Configurar event listeners
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => themeManager.toggleTheme());
    }
    
    // Configurar botón del panel
    const panelBtn = document.querySelector('.panel-toggle');
    if (panelBtn) {
        panelBtn.addEventListener('click', togglePanel);
    }
    
    // Configurar formularios
    document.addEventListener('change', handleFormChange);
    document.addEventListener('input', handleFormChange);
    
    // Cargar datos guardados
    loadFormData();
    
    // Expandir primera sección por defecto
    const firstSection = document.querySelector('.section-header');
    if (firstSection) {
        const sectionId = firstSection.nextElementSibling?.id;
        if (sectionId) {
            setTimeout(() => toggleSection(sectionId), 100);
        }
    }
    
    // Inicializar funciones específicas de la página
    if (typeof initializePageSpecificFunctions === 'function') {
        initializePageSpecificFunctions();
    }
    
    // Actualizar dashboard inicial
    if (typeof updateDashboard === 'function') {
        updateDashboard();
    }
    
    // Generar conclusión inicial
    if (typeof generateConclusion === 'function') {
        generateConclusion();
    }
    
    // Mostrar botón del panel si existe conclusión
    const conclusionPanel = document.getElementById('conclusion-panel');
    if (conclusionPanel) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'panel-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-file-alt"></i>';
        toggleBtn.title = 'Ver/Ocultar Conclusiones';
        document.body.appendChild(toggleBtn);
        
        toggleBtn.addEventListener('click', togglePanel);
    }
    
    console.log('✅ Sistema médico cargado exitosamente!');
});

// === MANEJO DE ERRORES GLOBALES ===
window.addEventListener('error', function(e) {
    console.error('Error en el sistema:', e.error);
    
    // Mostrar mensaje al usuario solo para errores críticos
    if (e.error instanceof TypeError || e.error instanceof ReferenceError) {
        const errorMsg = document.createElement('div');
        errorMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--alert-color);
            color: white;
            padding: 15px;
            border-radius: 8px;
            z-index: 10000;
            font-size: 14px;
            max-width: 300px;
        `;
        errorMsg.innerHTML = `
            <strong>Error del sistema</strong><br>
            Ha ocurrido un error inesperado. Recargue la página si persiste el problema.
            <button onclick="this.parentNode.remove()" style="
                background: none; border: none; color: white; 
                float: right; cursor: pointer; font-size: 16px;
            ">×</button>
        `;
        document.body.appendChild(errorMsg);
        
        setTimeout(() => {
            if (errorMsg.parentNode) {
                errorMsg.parentNode.removeChild(errorMsg);
            }
        }, 5000);
    }
});

// === UTILIDADES ADICIONALES ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Hacer funciones disponibles globalmente
window.ThemeManager = ThemeManager;
window.toggleSection = toggleSection;
window.togglePanel = togglePanel;
window.saveFormData = saveFormData;
window.loadFormData = loadFormData;
window.clearForm = clearForm;
window.exportToPDF = exportToPDF;
window.printReport = printReport;
window.navigateToSpecialty = navigateToSpecialty;
