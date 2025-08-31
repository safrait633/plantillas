# 🩺 PROMPT ESPECÍFICO: DERMATOLOGÍA

## 📋 ARCHIVO FUENTE:
`html_inicial/derma.html` → `algoritmos_nuevo_diseño/dermatologia.html`

## 🚫 ELEMENTOS CRÍTICOS A PRESERVAR AL 100%:

### 📝 Secciones Principales (TODAS OBLIGATORIAS):
1. **ANAMNESIS DERMATOLÓGICA**
2. **EXAMEN FÍSICO DE LA PIEL**
3. **CARACTERÍSTICAS DE LESIONES**
4. **DISTRIBUCIÓN TOPOGRÁFICA**
5. **EVALUACIÓN DE ANEXOS CUTÁNEOS**
6. **ESCALAS DERMATOLÓGICAS**
7. **DIAGNÓSTICO DIFERENCIAL**
8. **CONCLUSIONES Y PLAN TERAPÉUTICO**

### 🔍 Checkboxes Críticos de Síntomas Dermatológicos:
```html
<!-- MANTENER EXACTOS TODOS LOS IDs -->
<input type="checkbox" id="prurito"> Prurito
<input type="checkbox" id="dolor-cutaneo"> Dolor cutáneo
<input type="checkbox" id="ardor"> Ardor
<input type="checkbox" id="quemazón"> Quemazón
<input type="checkbox" id="descamacion"> Descamación
<input type="checkbox" id="sequedad"> Sequedad cutánea
<input type="checkbox" id="eritema"> Eritema
<input type="checkbox" id="edema-cutaneo"> Edema cutáneo
<input type="checkbox" id="cambios-coloracion"> Cambios de coloración
<input type="checkbox" id="lesiones-nuevas"> Lesiones nuevas
<input type="checkbox" id="cambios-nevus"> Cambios en nevus
<input type="checkbox" id="sangrado-lesiones"> Sangrado de lesiones
```

### 📊 Tipos de Lesiones Elementales:
```html
<!-- LESIONES PRIMARIAS -->
<input type="checkbox" id="macula"> Mácula
<input type="checkbox" id="papula"> Pápula
<input type="checkbox" id="nodulo"> Nódulo
<input type="checkbox" id="tumor"> Tumor
<input type="checkbox" id="placa"> Placa
<input type="checkbox" id="vesicula"> Vesícula
<input type="checkbox" id="ampolla"> Ampolla
<input type="checkbox" id="pustula"> Pústula
<input type="checkbox" id="habon"> Habón
<input type="checkbox" id="roncha"> Roncha

<!-- LESIONES SECUNDARIAS -->
<input type="checkbox" id="escama"> Escama
<input type="checkbox" id="costra"> Costra
<input type="checkbox" id="erosion"> Erosión
<input type="checkbox" id="ulcera"> Úlcera
<input type="checkbox" id="fisura"> Fisura
<input type="checkbox" id="cicatriz"> Cicatriz
<input type="checkbox" id="atrofia"> Atrofia
<input type="checkbox" id="liquenificacion"> Liquenificación
```

### 🗺️ Distribución Topográfica OBLIGATORIA:
```html
<!-- ZONAS CORPORALES -->
<input type="checkbox" id="cara"> Cara
<input type="checkbox" id="cuero-cabelludo"> Cuero cabelludo
<input type="checkbox" id="cuello"> Cuello
<input type="checkbox" id="torax-anterior"> Tórax anterior
<input type="checkbox" id="torax-posterior"> Tórax posterior
<input type="checkbox" id="abdomen"> Abdomen
<input type="checkbox" id="brazos"> Brazos
<input type="checkbox" id="antebrazos"> Antebrazos
<input type="checkbox" id="manos"> Manos
<input type="checkbox" id="muslos"> Muslos
<input type="checkbox" id="piernas"> Piernas
<input type="checkbox" id="pies"> Pies
<input type="checkbox" id="region-genital"> Región genital
<input type="checkbox" id="region-perianal"> Región perianal
<input type="checkbox" id="mucosas"> Mucosas
```

### 🎯 Escalas Dermatológicas OBLIGATORIAS:
```html
<!-- ESCALA DLQI (Dermatology Life Quality Index) -->
<input type="radio" name="dlqi-1" id="dlqi-1-0" value="0"> No afecta (0)
<input type="radio" name="dlqi-1" id="dlqi-1-1" value="1"> Poco (1)
<input type="radio" name="dlqi-1" id="dlqi-1-2" value="2"> Moderado (2)
<input type="radio" name="dlqi-1" id="dlqi-1-3" value="3"> Mucho (3)

<!-- PASI Score (para psoriasis) -->
<input type="number" id="pasi-cabeza-eritema" min="0" max="4" step="0.1">
<input type="number" id="pasi-cabeza-infiltracion" min="0" max="4" step="0.1">
<input type="number" id="pasi-cabeza-descamacion" min="0" max="4" step="0.1">
<input type="number" id="pasi-cabeza-superficie" min="0" max="6" step="0.1">

<!-- BSA (Body Surface Area) -->
<input type="number" id="bsa-porcentaje" min="0" max="100" step="0.1">
```

### ⚙️ Funciones JavaScript CRÍTICAS:
```javascript
// MANTENER TODAS ESTAS FUNCIONES EXACTAS:
function calculateDLQI() { /* Código completo */ }
function calculatePASI() { /* Código completo */ }
function calculateBSA() { /* Código completo */ }
function evaluateSkinLesions() { /* Código completo */ }
function assessMelanoma() { /* Código completo */ } // Criterios ABCDE
function generateDermatologyConclusion() { /* Código completo */ }
function updateDermatologyDashboard() { /* Código completo */ }
function handleLesionTypeChange() { /* Código completo */ }
function calculateSeverityScore() { /* Código completo */ }
```

## 🎨 DISEÑO MODERNO A APLICAR:

### 🌈 Paleta de Colores Dermatológica:
```css
:root {
    --dermato-primary: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    --dermato-secondary: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    --skin-tone-light: #f4d4bc;
    --skin-tone-medium: #d4a574;
    --skin-tone-dark: #a67c52;
    --lesion-color: #dc3545;
    --normal-skin: #fdbcb4;
    --inflamed-skin: #ff6b6b;
    --pigmented-lesion: #8b4513;
}
```

### 📱 Dashboard Dermatológico Específico:
```html
<div class="dashboard-fixed">
    <div class="dashboard-content">
        <div class="dashboard-grid">
            <div class="dashboard-item" id="dashboard-lesions">
                <i class="fas fa-search"></i>
                <div>Lesiones: <span id="lesion-count">0</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-bsa">
                <i class="fas fa-percentage"></i>
                <div>BSA: <span id="bsa-display">0%</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-dlqi">
                <i class="fas fa-heart"></i>
                <div>DLQI: <span id="dlqi-score">0</span>/30</div>
            </div>
            <div class="dashboard-item" id="dashboard-pasi">
                <i class="fas fa-calculator"></i>
                <div>PASI: <span id="pasi-score">0</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-severity">
                <i class="fas fa-thermometer-half"></i>
                <div>Severidad: <span id="severity-level">Leve</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-melanoma-risk">
                <i class="fas fa-exclamation-triangle"></i>
                <div>Riesgo: <span id="melanoma-risk">Bajo</span></div>
            </div>
        </div>
    </div>
</div>
```

### 🎨 Mapa Corporal Interactivo:
```html
<div class="body-map-container">
    <div class="body-map-header">
        <h3>🗺️ Distribución Topográfica de Lesiones</h3>
        <div class="map-controls">
            <button class="map-btn" onclick="clearBodyMap()">Limpiar</button>
            <button class="map-btn" onclick="selectAllAreas()">Seleccionar Todo</button>
        </div>
    </div>
    <div class="body-diagram">
        <div class="body-part" data-region="head" onclick="toggleBodyPart('head')">
            <i class="fas fa-head-side-virus"></i>
            <span>Cabeza</span>
        </div>
        <!-- Más partes del cuerpo... -->
    </div>
</div>
```

### 🔍 Evaluación ABCDE para Melanoma:
```html
<div class="melanoma-assessment">
    <h4>📋 Criterios ABCDE para Melanoma</h4>
    <div class="abcde-grid">
        <div class="criterion">
            <div class="criterion-header">
                <i class="fas fa-circle"></i>
                <span>A - Asimetría</span>
            </div>
            <input type="checkbox" id="asymmetry"> Lesión asimétrica
        </div>
        <div class="criterion">
            <div class="criterion-header">
                <i class="fas fa-border-style"></i>
                <span>B - Bordes</span>
            </div>
            <input type="checkbox" id="border-irregular"> Bordes irregulares
        </div>
        <div class="criterion">
            <div class="criterion-header">
                <i class="fas fa-palette"></i>
                <span>C - Color</span>
            </div>
            <input type="checkbox" id="color-varied"> Coloración heterogénea
        </div>
        <div class="criterion">
            <div class="criterion-header">
                <i class="fas fa-expand-arrows-alt"></i>
                <span>D - Diámetro</span>
            </div>
            <input type="number" id="diameter" min="0" max="50" step="0.1"> mm
        </div>
        <div class="criterion">
            <div class="criterion-header">
                <i class="fas fa-chart-line"></i>
                <span>E - Evolución</span>
            </div>
            <input type="checkbox" id="evolution-changes"> Cambios recientes
        </div>
    </div>
    <div class="melanoma-result">
        <div class="risk-indicator" id="melanoma-risk-indicator">
            <i class="fas fa-shield-alt"></i>
            <span>Riesgo de Melanoma: <strong id="melanoma-risk-level">Bajo</strong></span>
        </div>
    </div>
</div>
```

### 🎛️ Controles de Lesiones Interactivos:
```css
.lesion-selector {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 20px;
}

.lesion-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 15px;
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
    cursor: pointer;
}

.lesion-card:hover {
    border-color: var(--dermato-primary);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.lesion-card.selected {
    border-color: var(--lesion-color);
    background: linear-gradient(135deg, #ff9a9e, #fecfef);
}

.lesion-icon {
    font-size: 24px;
    color: var(--lesion-color);
    margin-bottom: 10px;
}
```

## 🔄 Funciones JavaScript Específicas:

### 📊 Cálculo DLQI:
```javascript
function calculateDLQI() {
    let totalScore = 0;
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="dlqi-${i}"]:checked`);
        if (selected) {
            totalScore += parseInt(selected.value);
        }
    }
    
    document.getElementById('dlqi-score').textContent = totalScore;
    
    let impactLevel = 'Sin impacto';
    if (totalScore >= 1 && totalScore <= 5) impactLevel = 'Impacto pequeño';
    else if (totalScore >= 6 && totalScore <= 10) impactLevel = 'Impacto moderado';
    else if (totalScore >= 11 && totalScore <= 20) impactLevel = 'Impacto muy grande';
    else if (totalScore >= 21) impactLevel = 'Impacto extremadamente grande';
    
    document.getElementById('dlqi-impact').textContent = impactLevel;
}
```

### 🔢 Cálculo PASI:
```javascript
function calculatePASI() {
    const areas = ['cabeza', 'tronco', 'brazos', 'piernas'];
    const weights = [0.1, 0.3, 0.2, 0.4];
    let totalPASI = 0;
    
    areas.forEach((area, index) => {
        const eritema = parseFloat(document.getElementById(`pasi-${area}-eritema`).value) || 0;
        const infiltracion = parseFloat(document.getElementById(`pasi-${area}-infiltracion`).value) || 0;
        const descamacion = parseFloat(document.getElementById(`pasi-${area}-descamacion`).value) || 0;
        const superficie = parseFloat(document.getElementById(`pasi-${area}-superficie`).value) || 0;
        
        const areaScore = (eritema + infiltracion + descamacion) * superficie * weights[index];
        totalPASI += areaScore;
    });
    
    document.getElementById('pasi-score').textContent = totalPASI.toFixed(1);
    
    let severity = 'Leve';
    if (totalPASI >= 10 && totalPASI < 20) severity = 'Moderada';
    else if (totalPASI >= 20) severity = 'Severa';
    
    document.getElementById('pasi-severity').textContent = severity;
}
```

## ✅ CHECKLIST ESPECÍFICO DERMATOLOGÍA:

- [ ] ✅ Dashboard muestra conteo de lesiones en tiempo real
- [ ] ✅ Todas las lesiones elementales primarias (10 tipos)
- [ ] ✅ Todas las lesiones elementales secundarias (8 tipos)
- [ ] ✅ Mapa corporal interactivo completo (15 regiones)
- [ ] ✅ Cálculo automático DLQI (10 preguntas)
- [ ] ✅ Cálculo automático PASI (4 áreas x 4 parámetros)
- [ ] ✅ Cálculo automático BSA (Body Surface Area)
- [ ] ✅ Evaluación ABCDE para melanoma
- [ ] ✅ Escala de severidad automática
- [ ] ✅ Evaluación de anexos cutáneos (pelo, uñas)
- [ ] ✅ Criterios diagnósticos específicos
- [ ] ✅ Generación automática de conclusiones
- [ ] ✅ Panel lateral con informe dermatológico
- [ ] ✅ Modo oscuro/claro funcional
- [ ] ✅ Exportación a PDF con imágenes
- [ ] ✅ Responsividad móvil optimizada
- [ ] ✅ Autoguardado en localStorage

## 🎯 CARACTERÍSTICAS ESPECIALES DERMATOLOGÍA:

### 🖼️ Sistema de Documentación Visual:
```html
<div class="photo-documentation">
    <h4>📸 Documentación Fotográfica</h4>
    <div class="photo-controls">
        <input type="file" id="lesion-photos" multiple accept="image/*">
        <button onclick="capturePhoto()">📷 Capturar</button>
        <button onclick="addAnnotations()">✏️ Anotar</button>
    </div>
    <div class="photo-gallery" id="photo-gallery">
        <!-- Fotos cargadas aparecerán aquí -->
    </div>
</div>
```

### 🎨 Selector de Colores de Lesiones:
```html
<div class="color-picker-section">
    <h4>🎨 Coloración de Lesiones</h4>
    <div class="color-grid">
        <input type="checkbox" id="color-rojo"> <span class="color-sample red"></span> Rojo
        <input type="checkbox" id="color-rosado"> <span class="color-sample pink"></span> Rosado
        <input type="checkbox" id="color-marron"> <span class="color-sample brown"></span> Marrón
        <input type="checkbox" id="color-negro"> <span class="color-sample black"></span> Negro
        <input type="checkbox" id="color-azul"> <span class="color-sample blue"></span> Azul
        <input type="checkbox" id="color-amarillo"> <span class="color-sample yellow"></span> Amarillo
    </div>
</div>
```

## 🎯 RESULTADO ESPERADO:
Un archivo `dermatologia.html` con diseño completamente moderno pero manteniendo el 100% de la funcionalidad dermatológica original, incluyendo todas las escalas de evaluación, mapeo corporal, cálculos automáticos y sistema de conclusiones especializadas en dermatología.
