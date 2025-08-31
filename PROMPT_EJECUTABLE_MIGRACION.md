# 🚀 PROMPT EJECUTABLE: MIGRACIÓN COMPLETA DE ALGORITMOS MÉDICOS

## 📋 INSTRUCCIONES PASO A PASO

### PASO 1: Crear Estructura de Carpetas
```bash
mkdir -p algoritmos_nuevo_diseño/assets/css
mkdir -p algoritmos_nuevo_diseño/assets/js  
mkdir -p algoritmos_nuevo_diseño/assets/images
```

### PASO 2: Mapeo de Archivos para Migración

| ARCHIVO ORIGINAL | ARCHIVO NUEVO | ESPECIALIDAD |
|------------------|---------------|--------------|
| `html_inicial/index.html` | `algoritmos_nuevo_diseño/index.html` | Portal Principal |
| `html_inicial/cardiologia_algoritmo_completo1.html` | `algoritmos_nuevo_diseño/cardiologia.html` | Cardiología |
| `html_inicial/derma.html` | `algoritmos_nuevo_diseño/dermatologia.html` | Dermatología |
| `html_inicial/gastro.html` | `algoritmos_nuevo_diseño/gastroenterologia.html` | Gastroenterología |
| `html_inicial/neurology_exam.html` | `algoritmos_nuevo_diseño/neurologia.html` | Neurología |
| `html_inicial/pneumology_exam.html` | `algoritmos_nuevo_diseño/neumologia.html` | Neumología |
| `html_inicial/Oftalmo.html` | `algoritmos_nuevo_diseño/oftalmologia.html` | Oftalmología |
| `html_inicial/rheumatology_exam.html` | `algoritmos_nuevo_diseño/reumatologia.html` | Reumatología |
| `html_inicial/endocrinology_exam.html` | `algoritmos_nuevo_diseño/endocrinologia.html` | Endocrinología |
| `html_inicial/geriatric_exam.html` | `algoritmos_nuevo_diseño/geriatria.html` | Geriatría |
| `html_inicial/hematology_exam.html` | `algoritmos_nuevo_diseño/hematologia.html` | Hematología |
| `html_inicial/infectious_diseases_exam.html` | `algoritmos_nuevo_diseño/enfermedades_infecciosas.html` | Infectología |
| `html_inicial/otolaryngology_exam_es.html` | `algoritmos_nuevo_diseño/otorrinolaringologia.html` | ORL |
| `html_inicial/psychiatric_exam_system.html` | `algoritmos_nuevo_diseño/psiquiatria.html` | Psiquiatría |
| `html_inicial/urology_exam.html` | `algoritmos_nuevo_diseño/urologia.html` | Urología |

### PASO 3: CSS Base Compartido (`assets/css/main.css`)

```css
/* === VARIABLES CSS GLOBALES === */
:root {
    /* Gradientes Principales */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    --accent-gradient: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    --warning-gradient: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
    
    /* Colores por Especialidad */
    --cardiology: #e74c3c;
    --neurology: #9b59b6;
    --gastroenterology: #f39c12;
    --dermatology: #e91e63;
    --pulmonology: #3498db;
    --ophthalmology: #1abc9c;
    --rheumatology: #e67e22;
    --endocrinology: #8e44ad;
    --geriatrics: #95a5a6;
    --hematology: #c0392b;
    --infectious: #27ae60;
    --otolaryngology: #f39c12;
    --psychiatry: #34495e;
    --urology: #2980b9;
    
    /* Estados */
    --normal-color: #27ae60;
    --warning-color: #ffa726;
    --alert-color: #ff6b6b;
    --info-color: #17a2b8;
    
    /* Fondos */
    --light-bg: #f8f9fa;
    --card-bg: #ffffff;
    --dark-bg: #1a1a1a;
    --dark-card: #3d3d3d;
    
    /* Sombras */
    --shadow-light: 0 2px 10px rgba(0,0,0,0.1);
    --shadow-medium: 0 4px 20px rgba(0,0,0,0.15);
    --shadow-heavy: 0 8px 30px rgba(0,0,0,0.2);
    
    /* Bordes */
    --border-radius: 12px;
    --border-radius-small: 6px;
    --border-color: #e1e8ed;
    
    /* Transiciones */
    --transition-smooth: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-bounce: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* === TEMA OSCURO === */
[data-theme="dark"] {
    --light-bg: #1a1a1a;
    --card-bg: #3d3d3d;
    --border-color: #444;
    color: #ffffff;
}

/* === ESTILOS BASE === */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--light-bg);
    color: var(--text-color);
    line-height: 1.6;
    transition: var(--transition-smooth);
    padding-top: 160px; /* Espacio para dashboard fijo */
}

/* === DASHBOARD FIJO SUPERIOR === */
.dashboard-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--primary-gradient);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: var(--shadow-medium);
}

.dashboard-content {
    max-width: 1600px;
    margin: 0 auto;
    padding: 15px 20px;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin-bottom: 10px;
}

.dashboard-item {
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 8px 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: var(--transition-smooth);
    color: white;
    text-align: center;
    font-size: 12px;
}

.dashboard-item:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
}

/* === CONTENEDOR PRINCIPAL === */
.main-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
}

/* === SECCIONES EXPANDIBLES === */
.section {
    background: var(--card-bg);
    border-radius: var(--border-radius);
    margin-bottom: 20px;
    box-shadow: var(--shadow-light);
    border: 1px solid var(--border-color);
    overflow: hidden;
    transition: var(--transition-smooth);
}

.section-header {
    background: var(--primary-gradient);
    color: white;
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--transition-smooth);
}

.section-header:hover {
    background: var(--secondary-gradient);
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
}

.section-title {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 600;
    font-size: 16px;
}

.section-icon {
    font-size: 20px;
}

.section-content {
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-content.expanded {
    padding: 25px;
    max-height: 2000px;
}

/* === CONTROLES DE FORMULARIO === */
.form-group {
    background: var(--light-bg);
    border-radius: var(--border-radius-small);
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--border-color);
    transition: var(--transition-smooth);
}

.form-group:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-light);
    transform: translateY(-1px);
}

.checkbox-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    margin: 8px 0;
    background: white;
    border-radius: var(--border-radius-small);
    border: 1px solid var(--border-color);
    transition: var(--transition-smooth);
    cursor: pointer;
}

.checkbox-item:hover {
    background: var(--light-bg);
    border-color: var(--primary-color);
    transform: translateX(5px);
}

.checkbox-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-right: 12px;
    accent-color: var(--primary-color);
}

/* === PANEL LATERAL === */
.sticky-panel {
    position: fixed;
    top: 160px;
    right: -420px;
    width: 400px;
    height: calc(100vh - 180px);
    background: var(--card-bg);
    border-radius: 12px 0 0 12px;
    box-shadow: -4px 0 20px rgba(0,0,0,0.15);
    z-index: 997;
    transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
    border: 2px solid var(--primary-gradient);
}

.sticky-panel.active {
    right: 0;
}

/* === RESPONSIVIDAD === */
@media (max-width: 768px) {
    body {
        padding-top: 120px;
    }
    
    .dashboard-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .section-header {
        padding: 15px;
        font-size: 14px;
    }
    
    .sticky-panel {
        width: 100%;
        height: 50vh;
        top: auto;
        bottom: 0;
        right: 0;
        border-radius: 12px 12px 0 0;
    }
}

/* === ANIMACIONES === */
@keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.section-content.expanding {
    animation: slideIn 0.4s ease-out;
}

.alert-indicator {
    animation: pulse 2s infinite;
}
```

### PASO 4: JavaScript Base Compartido (`assets/js/main.js`)

```javascript
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
    const header = content.previousElementSibling;
    const arrow = header.querySelector('.section-arrow');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('expanded');
        arrow.style.transform = 'rotate(180deg)';
        content.classList.add('expanding');
        setTimeout(() => content.classList.remove('expanding'), 400);
    }
}

// === PANEL LATERAL ===
function togglePanel() {
    const panel = document.getElementById('conclusion-panel');
    if (panel) {
        panel.classList.toggle('active');
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

// === EXPORTACIÓN PDF ===
function exportToPDF() {
    // Implementar lógica de exportación
    console.log('Exportando a PDF...');
}

// === IMPRESIÓN ===
function printReport() {
    window.print();
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar sistema de temas
    const themeManager = new ThemeManager();
    
    // Configurar event listeners
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => themeManager.toggleTheme());
    }
    
    // Expandir primera sección por defecto
    const firstSection = document.querySelector('.section-header');
    if (firstSection) {
        const sectionId = firstSection.nextElementSibling?.id;
        if (sectionId) toggleSection(sectionId);
    }
    
    console.log('🎉 Sistema médico cargado exitosamente!');
});
```

### PASO 5: Orden de Implementación Recomendado

1. **PRIORIDAD ALTA** (Implementar primero):
   - `index.html` - Portal principal
   - `cardiologia.html` - Más complejo, establece patrones
   - `assets/css/main.css` - Estilos base
   - `assets/js/main.js` - JavaScript base

2. **PRIORIDAD MEDIA**:
   - `dermatologia.html`
   - `gastroenterologia.html`
   - `neurologia.html`
   - `neumologia.html`

3. **PRIORIDAD BAJA**:
   - Resto de especialidades

### PASO 6: Validación por Archivo

Para cada archivo migrado, verificar:

✅ **Funcionalidad**:
- [ ] Todas las secciones expandibles funcionan
- [ ] Todos los checkboxes responden
- [ ] Todos los cálculos automáticos funcionan
- [ ] Panel de conclusiones se actualiza
- [ ] Dashboard superior muestra información

✅ **Diseño**:
- [ ] Diseño responsive
- [ ] Modo oscuro/claro funciona
- [ ] Animaciones fluidas
- [ ] No hay errores en consola
- [ ] Exportación/impresión funciona

### PASO 7: Testing Final

```bash
# Verificar que todos los archivos están creados
ls -la algoritmos_nuevo_diseño/

# Verificar que no hay errores de sintaxis
# Abrir cada archivo en navegador
# Probar todas las funcionalidades
# Verificar responsividad en móviles
```

## 🎯 META FINAL

Al completar esta migración tendrás:

- ✅ 15 algoritmos médicos completamente funcionales
- ✅ Diseño moderno y atractivo
- ✅ 100% de funcionalidad preservada
- ✅ Sistema responsive
- ✅ Modo oscuro/claro
- ✅ Exportación PDF e impresión
- ✅ Dashboard interactivo
- ✅ Navegación fluida

**¡IMPORTANTE!** Usar los prompts específicos detallados para cada archivo para garantizar que no se pierda ninguna funcionalidad médica crítica.

---

**💡 NOTA:** Este prompt está diseñado para ser ejecutado paso a paso, utilizando los prompts específicos por especialidad como guía detallada para cada archivo individual.
