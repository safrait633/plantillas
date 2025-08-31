# 🏠 PROMPT ESPECÍFICO: PORTAL PRINCIPAL (INDEX.HTML)

## 📋 ARCHIVO FUENTE:
`html_inicial/index.html` → `algoritmos_nuevo_diseño/index.html`

## 🎯 OBJETIVO:
Crear un portal moderno y atractivo que sirva como página principal para acceder a todos los algoritmos médicos, manteniendo la funcionalidad de navegación pero con un diseño completamente renovado.

## 🎨 DISEÑO MODERNO DEL PORTAL:

### 🌈 Hero Section Principal:
```html
<div class="hero-section">
    <div class="hero-content">
        <div class="hero-text">
            <h1 class="hero-title">
                <span class="gradient-text">Portal de Exámenes Médicos</span>
                <span class="version-badge">v2.0</span>
            </h1>
            <p class="hero-subtitle">
                Algoritmos clínicos avanzados para evaluación médica sistemática
            </p>
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">15+</span>
                    <span class="stat-label">Especialidades</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">500+</span>
                    <span class="stat-label">Algoritmos</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Evidencia</span>
                </div>
            </div>
        </div>
        <div class="hero-visual">
            <div class="medical-illustration">
                <i class="fas fa-heartbeat pulse-animation"></i>
                <i class="fas fa-brain brain-animation"></i>
                <i class="fas fa-lungs lungs-animation"></i>
            </div>
        </div>
    </div>
</div>
```

### 🏥 Grid de Especialidades Médicas:
```html
<div class="specialties-grid">
    <div class="specialty-card" data-specialty="cardiologia" onclick="navigateToSpecialty('cardiologia.html')">
        <div class="card-header">
            <div class="specialty-icon cardiology">
                <i class="fas fa-heartbeat"></i>
            </div>
            <h3>Cardiología</h3>
        </div>
        <div class="card-content">
            <p>Evaluación cardiovascular completa con escalas CHADS2, HAS-BLED, TIMI y más</p>
            <div class="card-features">
                <span class="feature-tag">ECG</span>
                <span class="feature-tag">Escalas</span>
                <span class="feature-tag">Riesgo CV</span>
            </div>
        </div>
        <div class="card-footer">
            <span class="algorithm-count">15+ Algoritmos</span>
            <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <div class="specialty-card" data-specialty="dermatologia" onclick="navigateToSpecialty('dermatologia.html')">
        <div class="card-header">
            <div class="specialty-icon dermatology">
                <i class="fas fa-search"></i>
            </div>
            <h3>Dermatología</h3>
        </div>
        <div class="card-content">
            <p>Evaluación dermatológica sistemática con escalas DLQI, PASI y criterios ABCDE</p>
            <div class="card-features">
                <span class="feature-tag">DLQI</span>
                <span class="feature-tag">PASI</span>
                <span class="feature-tag">Melanoma</span>
            </div>
        </div>
        <div class="card-footer">
            <span class="algorithm-count">12+ Algoritmos</span>
            <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <div class="specialty-card" data-specialty="gastroenterologia" onclick="navigateToSpecialty('gastroenterologia.html')">
        <div class="card-header">
            <div class="specialty-icon gastro">
                <i class="fas fa-stomach"></i>
            </div>
            <h3>Gastroenterología</h3>
        </div>
        <div class="card-content">
            <p>Evaluación digestiva con criterios Roma IV, escala Bristol y mapeo abdominal</p>
            <div class="card-features">
                <span class="feature-tag">Roma IV</span>
                <span class="feature-tag">Bristol</span>
                <span class="feature-tag">SII</span>
            </div>
        </div>
        <div class="card-footer">
            <span class="algorithm-count">18+ Algoritmos</span>
            <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <div class="specialty-card" data-specialty="neurologia" onclick="navigateToSpecialty('neurologia.html')">
        <div class="card-header">
            <div class="specialty-icon neurology">
                <i class="fas fa-brain"></i>
            </div>
            <h3>Neurología</h3>
        </div>
        <div class="card-content">
            <p>Examen neurológico completo con Glasgow, NIHSS y evaluación de pares craneales</p>
            <div class="card-features">
                <span class="feature-tag">Glasgow</span>
                <span class="feature-tag">NIHSS</span>
                <span class="feature-tag">P.Craneales</span>
            </div>
        </div>
        <div class="card-footer">
            <span class="algorithm-count">20+ Algoritmos</span>
            <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <!-- Continuar con todas las especialidades... -->
    <div class="specialty-card" data-specialty="neumologia" onclick="navigateToSpecialty('neumologia.html')">
        <div class="card-header">
            <div class="specialty-icon pulmonology">
                <i class="fas fa-lungs"></i>
            </div>
            <h3>Neumología</h3>
        </div>
        <div class="card-content">
            <p>Evaluación respiratoria con escalas mMRC, CAT Score y espirometría</p>
            <div class="card-features">
                <span class="feature-tag">mMRC</span>
                <span class="feature-tag">CAT</span>
                <span class="feature-tag">EPOC</span>
            </div>
        </div>
        <div class="card-footer">
            <span class="algorithm-count">14+ Algoritmos</span>
            <i class="fas fa-arrow-right"></i>
        </div>
    </div>

    <!-- Más especialidades... -->
</div>
```

### 🔥 Características Destacadas:
```html
<div class="features-section">
    <div class="section-header">
        <h2>🌟 Características Destacadas</h2>
        <p>Herramientas avanzadas para el diagnóstico médico</p>
    </div>
    <div class="features-grid">
        <div class="feature-item">
            <div class="feature-icon">
                <i class="fas fa-calculator"></i>
            </div>
            <h3>Cálculos Automáticos</h3>
            <p>Escalas médicas calculadas en tiempo real</p>
        </div>
        <div class="feature-item">
            <div class="feature-icon">
                <i class="fas fa-file-pdf"></i>
            </div>
            <h3>Exportación PDF</h3>
            <p>Informes profesionales listos para imprimir</p>
        </div>
        <div class="feature-item">
            <div class="feature-icon">
                <i class="fas fa-moon"></i>
            </div>
            <h3>Modo Oscuro</h3>
            <p>Interfaz adaptable para cualquier ambiente</p>
        </div>
        <div class="feature-item">
            <div class="feature-icon">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Responsivo</h3>
            <p>Optimizado para dispositivos móviles</p>
        </div>
    </div>
</div>
```

### 📊 Panel de Estadísticas en Vivo:
```html
<div class="stats-dashboard">
    <div class="dashboard-header">
        <h3>📊 Estadísticas de Uso</h3>
        <div class="dashboard-controls">
            <button class="stats-btn active" data-period="today">Hoy</button>
            <button class="stats-btn" data-period="week">Semana</button>
            <button class="stats-btn" data-period="month">Mes</button>
        </div>
    </div>
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-icon">
                <i class="fas fa-user-md"></i>
            </div>
            <div class="stat-info">
                <span class="stat-value" id="exams-today">0</span>
                <span class="stat-label">Exámenes Realizados</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">
                <i class="fas fa-heart"></i>
            </div>
            <div class="stat-info">
                <span class="stat-value" id="cardio-exams">0</span>
                <span class="stat-label">Evaluaciones Cardiovasculares</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">
                <i class="fas fa-brain"></i>
            </div>
            <div class="stat-info">
                <span class="stat-value" id="neuro-exams">0</span>
                <span class="stat-label">Evaluaciones Neurológicas</span>
            </div>
        </div>
    </div>
</div>
```

## 🎨 CSS Moderno para el Portal:

### 🌈 Variables CSS Avanzadas:
```css
:root {
    /* Gradientes Principales */
    --hero-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --card-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    
    /* Colores por Especialidad */
    --cardiology-color: #e74c3c;
    --neurology-color: #9b59b6;
    --gastro-color: #f39c12;
    --dermatology-color: #e91e63;
    --pulmonology-color: #3498db;
    --ophthalmology-color: #1abc9c;
    
    /* Animaciones */
    --transition-smooth: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-bounce: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* Sombras */
    --shadow-card: 0 10px 30px rgba(0,0,0,0.1);
    --shadow-card-hover: 0 20px 40px rgba(0,0,0,0.15);
    --shadow-hero: 0 30px 60px rgba(102, 126, 234, 0.2);
}
```

### 🎪 Hero Section Styles:
```css
.hero-section {
    min-height: 100vh;
    background: var(--hero-gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>') repeat;
    animation: float 20s ease-in-out infinite;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    color: white;
    margin-bottom: 20px;
}

.gradient-text {
    background: linear-gradient(45deg, #fff, #f093fb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.version-badge {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-left: 10px;
    backdrop-filter: blur(10px);
}
```

### 🃏 Cards de Especialidades:
```css
.specialties-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    padding: 60px 20px;
    max-width: 1400px;
    margin: 0 auto;
}

.specialty-card {
    background: var(--card-bg);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-card);
    transition: var(--transition-smooth);
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(255,255,255,0.1);
}

.specialty-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-card-hover);
}

.specialty-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--card-gradient);
}

.card-header {
    padding: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.specialty-icon {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    position: relative;
    overflow: hidden;
}

.specialty-icon.cardiology { background: var(--cardiology-color); }
.specialty-icon.neurology { background: var(--neurology-color); }
.specialty-icon.gastro { background: var(--gastro-color); }
.specialty-icon.dermatology { background: var(--dermatology-color); }
/* Más colores por especialidad... */

.specialty-icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
}

.specialty-card:hover .specialty-icon::before {
    left: 100%;
}
```

### 🎯 Animaciones Interactivas:
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes brain-pulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
}

.pulse-animation {
    animation: pulse 2s ease-in-out infinite;
    color: var(--cardiology-color);
}

.brain-animation {
    animation: brain-pulse 3s ease-in-out infinite;
    color: var(--neurology-color);
}

.lungs-animation {
    animation: float 4s ease-in-out infinite;
    color: var(--pulmonology-color);
}
```

## 🛠️ JavaScript Interactivo:

### 🚀 Navegación Inteligente:
```javascript
function navigateToSpecialty(specialtyFile) {
    // Animación de transición
    document.body.style.opacity = '0.8';
    document.body.style.transform = 'scale(0.95)';
    
    // Guardar preferencias del usuario
    localStorage.setItem('lastVisitedSpecialty', specialtyFile);
    localStorage.setItem('visitTime', new Date().toISOString());
    
    // Navegación con delay para animación
    setTimeout(() => {
        window.location.href = specialtyFile;
    }, 300);
}

// Estadísticas en tiempo real
function updateStats() {
    const examsToday = localStorage.getItem('examsToday') || 0;
    const cardioExams = localStorage.getItem('cardioExams') || 0;
    const neuroExams = localStorage.getItem('neuroExams') || 0;
    
    document.getElementById('exams-today').textContent = examsToday;
    document.getElementById('cardio-exams').textContent = cardioExams;
    document.getElementById('neuro-exams').textContent = neuroExams;
}

// Animación de números (count up)
function animateNumbers() {
    const counters = document.querySelectorAll('.stat-value');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 20;
        
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
```

### 🌙 Sistema de Temas Avanzado:
```javascript
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
    
    animateThemeChange() {
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }
    
    updateThemeIcon() {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    updateStats();
    animateNumbers();
    
    // Configurar botón de tema
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => themeManager.toggleTheme());
    }
});
```

## ✅ CHECKLIST PORTAL PRINCIPAL:

- [ ] ✅ Hero section con animaciones fluidas
- [ ] ✅ Grid de 15 especialidades médicas
- [ ] ✅ Cards interactivas con hover effects
- [ ] ✅ Sistema de navegación inteligente
- [ ] ✅ Dashboard de estadísticas en vivo
- [ ] ✅ Modo oscuro/claro con transiciones
- [ ] ✅ Animaciones CSS avanzadas
- [ ] ✅ Responsividad completa
- [ ] ✅ LocalStorage para preferencias
- [ ] ✅ Iconografía médica moderna
- [ ] ✅ Gradientes y sombras modernas
- [ ] ✅ Sistema de temas avanzado
- [ ] ✅ Contador animado de estadísticas
- [ ] ✅ Transiciones entre páginas
- [ ] ✅ SEO optimizado

## 🎯 RESULTADO ESPERADO:
Un portal principal moderno, atractivo y completamente funcional que sirva como entrada a todos los algoritmos médicos, con diseño responsive, animaciones fluidas y navegación intuitiva.
