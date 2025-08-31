# 🫀 PROMPT ESPECÍFICO: CARDIOLOGÍA

## 📋 ARCHIVO FUENTE:
`html_inicial/cardiologia_algoritmo_completo1.html` → `algoritmos_nuevo_diseño/cardiologia.html`

## 🚫 ELEMENTOS CRÍTICOS A PRESERVAR AL 100%:

### 📝 Secciones Principales (TODAS OBLIGATORIAS):
1. **ANAMNESIS Y QUEJAS PRINCIPALES**
2. **SIGNOS VITALES Y MEDICIONES**
3. **EXAMEN FÍSICO CARDIOVASCULAR**
4. **EVALUACIÓN ELECTROCARDIOGRÁFICA**
5. **ESTUDIOS COMPLEMENTARIOS**
6. **ESCALAS DE EVALUACIÓN CARDIOVASCULAR**
7. **FACTORES DE RIESGO CARDIOVASCULAR**
8. **CONCLUSIONES Y RECOMENDACIONES**

### 🔍 Checkboxes Críticos de Síntomas:
```html
<!-- MANTENER EXACTOS -->
<input type="checkbox" id="sin-quejas"> Sin quejas cardiovasculares
<input type="checkbox" id="dolor-toracico"> Dolor torácico
<input type="checkbox" id="disnea"> Disnea
<input type="checkbox" id="palpitaciones"> Palpitaciones
<input type="checkbox" id="sincope"> Síncope
<input type="checkbox" id="presincope"> Presíncope
<input type="checkbox" id="edema"> Edema
<input type="checkbox" id="fatiga"> Fatiga
<input type="checkbox" id="ortopnea"> Ortopnea
<input type="checkbox" id="disnea-paroxistica"> Disnea paroxística nocturna
<input type="checkbox" id="claudicacion"> Claudicación intermitente
<input type="checkbox" id="cianosis"> Cianosis
```

### 📊 Inputs Numéricos Vitales:
```html
<!-- PRESERVAR TODOS CON SUS IDs EXACTOS -->
<input type="number" id="pas-derecho" min="80" max="200"> PAS Derecho
<input type="number" id="pad-derecho" min="40" max="120"> PAD Derecho
<input type="number" id="pas-izquierdo" min="80" max="200"> PAS Izquierdo
<input type="number" id="pad-izquierdo" min="40" max="120"> PAD Izquierdo
<input type="number" id="frecuencia-cardiaca" min="40" max="180"> FC
<input type="number" id="saturacion-oxigeno" min="70" max="100"> SatO2
<input type="range" id="dolor-intensidad" min="0" max="10"> Intensidad Dolor
<input type="range" id="disnea-intensidad" min="0" max="10"> Intensidad Disnea
```

### 🎯 Escalas de Evaluación OBLIGATORIAS:
```html
<!-- CHADS2-VASc Score -->
<input type="checkbox" id="chads-chf"> ICC
<input type="checkbox" id="chads-hipertension"> Hipertensión
<input type="checkbox" id="chads-edad75"> Edad ≥75 años
<input type="checkbox" id="chads-diabetes"> Diabetes
<input type="checkbox" id="chads-avc"> ACV/AIT/TEP previo
<input type="checkbox" id="chads-vascular"> Enfermedad vascular
<input type="checkbox" id="chads-edad65"> Edad 65-74 años
<input type="checkbox" id="chads-sexo"> Sexo femenino

<!-- HAS-BLED Score -->
<input type="checkbox" id="hasbled-hipertension"> Hipertensión
<input type="checkbox" id="hasbled-renal"> Función renal anormal
<input type="checkbox" id="hasbled-hepatica"> Función hepática anormal
<input type="checkbox" id="hasbled-avc"> ACV previo
<input type="checkbox" id="hasbled-sangrado"> Historia de sangrado
<input type="checkbox" id="hasbled-inr"> INR lábil
<input type="checkbox" id="hasbled-edad"> Edad >65 años
<input type="checkbox" id="hasbled-drogas"> Drogas/alcohol
```

### ⚙️ Funciones JavaScript CRÍTICAS:
```javascript
// MANTENER TODAS ESTAS FUNCIONES EXACTAS:
function evaluateBloodPressure() { /* Código completo */ }
function evaluateHeartRate() { /* Código completo */ }
function evaluateSaturation() { /* Código completo */ }
function calculateCHADS() { /* Código completo */ }
function calculateHASBLED() { /* Código completo */ }
function calculateTIMI() { /* Código completo */ }
function calculateITB() { /* Código completo */ }
function evaluateNYHA() { /* Código completo */ }
function evaluate6MWT() { /* Código completo */ }
function evaluateChestPain() { /* Código completo */ }
function handleChestPainToggle() { /* Código completo */ }
function handleDyspneaToggle() { /* Código completo */ }
function handleNoComplaints() { /* Código completo */ }
function generateConclusion() { /* Código completo */ }
function updateDashboard() { /* Código completo */ }
```

## 🎨 DISEÑO MODERNO A APLICAR:

### 🌈 Paleta de Colores Cardiovascular:
```css
:root {
    --cardio-primary: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
    --cardio-secondary: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    --heart-rate-color: #e74c3c;
    --blood-pressure-color: #9b59b6;
    --oxygen-color: #3498db;
    --risk-high: #e74c3c;
    --risk-medium: #f39c12;
    --risk-low: #27ae60;
}
```

### 📱 Dashboard Cardiovascular Específico:
```html
<div class="dashboard-fixed">
    <div class="dashboard-content">
        <div class="dashboard-grid">
            <div class="dashboard-item" id="dashboard-bp">
                <i class="fas fa-heartbeat"></i>
                <div>PA: <span id="bp-display">--/--</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-hr">
                <i class="fas fa-heart"></i>
                <div>FC: <span id="hr-display">--</span> lpm</div>
            </div>
            <div class="dashboard-item" id="dashboard-sat">
                <i class="fas fa-lungs"></i>
                <div>SatO2: <span id="sat-display">--%</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-chads">
                <i class="fas fa-calculator"></i>
                <div>CHADS2: <span id="chads-score">0</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-hasbled">
                <i class="fas fa-exclamation-triangle"></i>
                <div>HAS-BLED: <span id="hasbled-score">0</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-nyha">
                <i class="fas fa-running"></i>
                <div>NYHA: <span id="nyha-display">--</span></div>
            </div>
        </div>
    </div>
</div>
```

### 🔍 Subsecciones Expandibles Detalladas:

#### Dolor Torácico (MANTENER ESTRUCTURA EXACTA):
```html
<div class="subsection" id="chest-pain-details">
    <div class="subsection-header">
        <h4>📊 Evaluación Detallada del Dolor Torácico</h4>
    </div>
    <div class="form-grid">
        <!-- Tipo de dolor -->
        <div class="form-group">
            <input type="radio" name="dolor-tipo" id="dolor-opresivo">
            <label for="dolor-opresivo">Opresivo</label>
        </div>
        <!-- Irradiación -->
        <div class="checkbox-group">
            <input type="checkbox" id="irradiacion-brazo-izq">
            <label for="irradiacion-brazo-izq">Brazo izquierdo</label>
        </div>
        <!-- Más elementos... TODOS OBLIGATORIOS -->
    </div>
</div>
```

### 🎛️ Controles Interactivos Modernos:
```css
.measurement-control {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: var(--card-bg);
    border-radius: 12px;
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
}

.measurement-control:hover {
    border-color: var(--cardio-primary);
    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.1);
}

.measurement-input {
    width: 80px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.measurement-input:focus {
    border-color: var(--heart-rate-color);
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}
```

## 🔄 Estructura HTML Moderna:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen Cardiovascular - Algoritmo Completo</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/cardiology.css">
</head>
<body>
    <!-- Dashboard Fijo Superior -->
    <div class="dashboard-fixed">
        <!-- Contenido del dashboard -->
    </div>

    <!-- Contenedor Principal -->
    <div class="main-container">
        <!-- Sección 1: Anamnesis -->
        <div class="section" id="section-anamnesis">
            <div class="section-header" onclick="toggleSection('anamnesis-content')">
                <div class="section-title">
                    <i class="fas fa-comments section-icon"></i>
                    <span>ANAMNESIS Y QUEJAS PRINCIPALES</span>
                </div>
                <div class="section-indicators">
                    <span class="section-counter" id="anamnesis-counter">0/12</span>
                    <i class="fas fa-chevron-down section-arrow"></i>
                </div>
            </div>
            <div class="section-content" id="anamnesis-content">
                <!-- TODO EL CONTENIDO ORIGINAL AQUÍ -->
            </div>
        </div>

        <!-- Más secciones... -->
    </div>

    <!-- Panel Lateral de Conclusiones -->
    <div class="sticky-panel" id="conclusion-panel">
        <!-- Contenido del panel -->
    </div>

    <!-- JavaScript -->
    <script src="./assets/js/cardiology.js"></script>
</body>
</html>
```

## ✅ CHECKLIST ESPECÍFICO CARDIOLOGÍA:

- [ ] ✅ Dashboard muestra PA, FC, SatO2 en tiempo real
- [ ] ✅ Todas las 12+ quejas principales funcionan
- [ ] ✅ Subsección dolor torácico completa (tipo, irradiación, desencadenantes)
- [ ] ✅ Subsección disnea completa (intensidad, NYHA, tipo)
- [ ] ✅ Cálculo automático CHADS2-VASc
- [ ] ✅ Cálculo automático HAS-BLED
- [ ] ✅ Cálculo automático TIMI Risk Score
- [ ] ✅ Evaluación automática ITB (Índice Tobillo-Brazo)
- [ ] ✅ Test de marcha de 6 minutos
- [ ] ✅ Escala de Borg para disnea
- [ ] ✅ Evaluación de presión arterial con alertas
- [ ] ✅ Evaluación de frecuencia cardíaca con rangos
- [ ] ✅ Saturación de oxígeno con alertas
- [ ] ✅ Generación automática de conclusiones médicas
- [ ] ✅ Panel lateral con informe en tiempo real
- [ ] ✅ Modo oscuro/claro funcional
- [ ] ✅ Exportación a PDF
- [ ] ✅ Impresión optimizada
- [ ] ✅ Responsividad móvil
- [ ] ✅ Autoguardado en localStorage

## 🎯 RESULTADO ESPERADO:
Un archivo `cardiologia.html` con diseño completamente moderno pero manteniendo el 100% de la funcionalidad médica original, incluyendo todos los cálculos automáticos, escalas de evaluación y sistema de conclusiones inteligente.
