# 🏥 PROMPT COMPLETO PARA MIGRACIÓN DE ALGORITMOS MÉDICOS

## 📋 OBJETIVO PRINCIPAL
Crear una nueva carpeta llamada `algoritmos_nuevo_diseño` y migrar TODOS los archivos HTML de la carpeta `html_inicial` manteniendo **ABSOLUTAMENTE TODA LA FUNCIONALIDAD** pero aplicando un diseño moderno y mejorado.

## 🚫 REGLAS ESTRICTAS - PROHIBIDO ELIMINAR:
1. **NINGUNA funcionalidad JavaScript**
2. **NINGÚN checkbox, input, select o textarea**
3. **NINGUNA lógica de cálculo médico**
4. **NINGUNA función de evaluación clínica**
5. **NINGÚN texto médico, síntoma o signo clínico**
6. **NINGUNA estructura de secciones expandibles**
7. **NINGÚN event listener o binding de eventos**

## 🎯 ESTRUCTURA DE CARPETAS A CREAR:

```
algoritmos_nuevo_diseño/
├── index.html (portal principal mejorado)
├── cardiologia.html
├── dermatologia.html  
├── endocrinologia.html
├── gastroenterologia.html
├── geriatria.html
├── hematologia.html
├── enfermedades_infecciosas.html
├── neurologia.html
├── oftalmologia.html
├── otorrinolaringologia.html
├── neumologia.html
├── psiquiatria.html
├── reumatologia.html
├── urologia.html
└── assets/
    ├── css/
    │   ├── main.css
    │   ├── dashboard.css
    │   └── themes.css
    ├── js/
    │   ├── main.js
    │   ├── calculations.js
    │   └── utils.js
    └── images/
```

## 🎨 DISEÑO MODERNO A IMPLEMENTAR:

### 🌈 Sistema de Colores y Variables CSS:
```css
:root {
    /* Colores Primarios */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    --accent-gradient: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    --warning-gradient: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
    
    /* Colores de Estado */
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
    
    /* Bordes y Radios */
    --border-radius: 12px;
    --border-radius-small: 6px;
    --border-color: #e1e8ed;
}

/* Tema Oscuro */
[data-theme="dark"] {
    --light-bg: #1a1a1a;
    --card-bg: #3d3d3d;
    --border-color: #444;
    color: #ffffff;
}
```

### 🧩 Componentes de Diseño Obligatorios:

#### 1. DASHBOARD FIJO SUPERIOR:
```html
<div class="dashboard-fixed">
    <div class="dashboard-content">
        <div class="dashboard-grid">
            <div class="dashboard-item" id="dashboard-symptoms">
                <i class="fas fa-heartbeat"></i>
                <div>Síntomas: <span id="symptoms-count">0</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-vitals">
                <i class="fas fa-thermometer-half"></i>
                <div>Signos Vitales</div>
            </div>
            <div class="dashboard-item" id="dashboard-risk">
                <i class="fas fa-exclamation-triangle"></i>
                <div>Nivel de Riesgo</div>
            </div>
            <!-- Más indicadores dinámicos -->
        </div>
        <div class="dashboard-controls">
            <button onclick="toggleTheme()" class="dashboard-btn">
                <i id="theme-icon" class="fas fa-moon"></i>
            </button>
            <button onclick="printReport()" class="dashboard-btn">
                <i class="fas fa-print"></i>
            </button>
            <button onclick="exportPDF()" class="dashboard-btn">
                <i class="fas fa-file-pdf"></i>
            </button>
        </div>
    </div>
</div>
```

#### 2. CONTENEDOR PRINCIPAL MODERNO:
```html
<div class="main-container">
    <div class="section" id="section-anamnesis">
        <div class="section-header" onclick="toggleSection('anamnesis-content')">
            <div class="section-title">
                <i class="fas fa-comments section-icon"></i>
                <span>ANAMNESIS Y SÍNTOMAS</span>
            </div>
            <div class="section-indicators">
                <span class="section-counter" id="anamnesis-counter">0/X</span>
                <i class="fas fa-chevron-down section-arrow"></i>
            </div>
        </div>
        <div class="section-content" id="anamnesis-content">
            <!-- Contenido de la sección -->
        </div>
    </div>
</div>
```

#### 3. PANEL LATERAL INTELIGENTE:
```html
<div class="sticky-panel" id="conclusion-panel">
    <div class="sticky-header">
        <span>📋 CONCLUSIÓN CLÍNICA</span>
        <div class="sticky-controls">
            <button class="sticky-btn" onclick="togglePanelSize()">
                <i class="fas fa-expand"></i>
            </button>
            <button class="sticky-btn" onclick="copyConclusion()">
                <i class="fas fa-copy"></i>
            </button>
        </div>
    </div>
    <div class="sticky-content" id="conclusion-content">
        <!-- Conclusión generada automáticamente -->
    </div>
</div>
```

### 🎛️ Estilos CSS Modernos:

#### Secciones Expandibles:
```css
.section {
    background: var(--card-bg);
    border-radius: var(--border-radius);
    margin-bottom: 20px;
    box-shadow: var(--shadow-light);
    border: 1px solid var(--border-color);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-header {
    background: var(--primary-gradient);
    color: white;
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

.section-header:hover {
    background: var(--secondary-gradient);
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
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
```

#### Controles de Formulario:
```css
.form-group {
    background: var(--light-bg);
    border-radius: var(--border-radius-small);
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
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
    transition: all 0.3s ease;
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
```

## 📄 PROMPT ESPECÍFICO POR ARCHIVO:

### 🫀 CARDIOLOGÍA (cardiologia_algoritmo_completo1.html → cardiologia.html)

**MANTENER ABSOLUTAMENTE:**
- Todas las 15+ secciones expandibles (Anamnesis, Examen Físico, ECG, etc.)
- Todos los checkboxes de síntomas (dolor torácico, disnea, palpitaciones, etc.)
- Todos los inputs numéricos (presión arterial, frecuencia cardíaca, etc.)
- Todas las escalas de evaluación (NYHA, CHADS2, HAS-BLED, TIMI, etc.)
- Todas las funciones JavaScript de cálculo automático
- Todo el sistema de conclusiones médicas automáticas
- Panel lateral con informe generado en tiempo real

**APLICAR DISEÑO NUEVO:**
- Dashboard superior con indicadores cardiovasculares en tiempo real
- Secciones con gradientes de color cardiology-themed
- Animaciones suaves en transiciones
- Iconografía médica moderna (FontAwesome 6.0+)
- Sistema de alertas visuales para valores críticos

### 🩺 DERMATOLOGÍA (derma.html → dermatologia.html)

**MANTENER ABSOLUTAMENTE:**
- Todo el algoritmo de evaluación dermatológica
- Todos los checkboxes de lesiones cutáneas
- Todas las escalas de evaluación dermatológica
- Sistema de clasificación de lesiones
- Generación automática de conclusiones

**APLICAR DISEÑO NUEVO:**
- Paleta de colores skin-tone friendly
- Iconografía dermatológica específica
- Grid responsivo para tipos de lesiones

### 🦴 REUMATOLOGÍA (rheumatology_exam.html → reumatologia.html)

**MANTENER ABSOLUTAMENTE:**
- Evaluación completa articular
- Escalas de dolor e inflamación
- Criterios diagnósticos (ACR, EULAR)
- Cálculos de índices de actividad
- Sistema de mapeo articular

### 🧠 NEUROLOGÍA (neurology_exam.html → neurologia.html)

**MANTENER ABSOLUTAMENTE:**
- Examen neurológico completo
- Escalas neurológicas (Glasgow, NIHSS, etc.)
- Evaluación de pares craneales
- Reflejos y funciones motoras
- Evaluación cognitiva

### 👁️ OFTALMOLOGÍA (Oftalmo.html → oftalmologia.html)

**MANTENER ABSOLUTAMENTE:**
- Examen oftalmológico sistemático
- Evaluación de agudeza visual
- Examen del fondo de ojo
- Presión intraocular
- Campos visuales

## 🛠️ FUNCIONALIDADES JAVASCRIPT A PRESERVAR:

### 1. Sistema de Event Listeners:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Todos los event listeners existentes
    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.addEventListener('change', () => {
            updateDashboard();
            generateConclusion();
        });
    });
});
```

### 2. Funciones de Cálculo Médico:
```javascript
function evaluateBloodPressure() { /* Mantener completa */ }
function evaluateHeartRate() { /* Mantener completa */ }
function calculateCHADS() { /* Mantener completa */ }
function calculateTIMI() { /* Mantener completa */ }
// Todas las demás funciones médicas
```

### 3. Generación de Conclusiones:
```javascript
function generateConclusion() {
    // Mantener toda la lógica existente
    // Solo mejorar el formato visual de salida
}
```

## 🎨 MEJORAS VISUALES A IMPLEMENTAR:

### 1. Animaciones CSS:
```css
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

### 2. Responsividad:
```css
@media (max-width: 768px) {
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
    }
}
```

## 📱 CARACTERÍSTICAS MODERNAS A AÑADIR:

1. **Progressive Web App (PWA) capabilities**
2. **Modo offline con LocalStorage**
3. **Exportación a PDF mejorada**
4. **Sistema de temas (claro/oscuro)**
5. **Indicadores de progreso en tiempo real**
6. **Autoguardado de datos**
7. **Navegación con breadcrumbs**
8. **Tooltips informativos**
9. **Validación en tiempo real**
10. **Accesibilidad mejorada (ARIA labels)**

## 🔄 PROCESO DE MIGRACIÓN:

### Paso 1: Crear estructura de carpetas
### Paso 2: Migrar index.html con diseño moderno
### Paso 3: Migrar cada archivo médico manteniendo 100% funcionalidad
### Paso 4: Implementar sistema de assets compartidos
### Paso 5: Optimizar y testing completo

## ✅ CHECKLIST DE VALIDACIÓN:

Para cada archivo migrado verificar:
- [ ] Todas las secciones expandibles funcionan
- [ ] Todos los checkboxes responden
- [ ] Todos los cálculos automáticos funcionan
- [ ] Panel de conclusiones se actualiza en tiempo real
- [ ] Dashboard superior muestra información correcta
- [ ] Modo oscuro/claro funciona
- [ ] Diseño es responsive
- [ ] No hay errores en consola JavaScript
- [ ] Exportación PDF funciona
- [ ] Impresión mantiene formato

---

**💡 IMPORTANTE:** Este prompt debe usarse como guía para crear EXACTAMENTE la misma funcionalidad médica pero con un diseño visual completamente renovado y moderno. ¡Ninguna funcionalidad médica debe perderse en el proceso!
