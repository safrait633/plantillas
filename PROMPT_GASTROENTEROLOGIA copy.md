# 🍽️ PROMPT ESPECÍFICO: GASTROENTEROLOGÍA

## 📋 ARCHIVO FUENTE:
`html_inicial/gastro.html` → `algoritmos_nuevo_diseño/gastroenterologia.html`

## 🚫 ELEMENTOS CRÍTICOS A PRESERVAR AL 100%:

### 📝 Secciones Principales (TODAS OBLIGATORIAS):
1. **ANAMNESIS GASTROENTEROLÓGICA**
2. **SÍNTOMAS DIGESTIVOS PRINCIPALES**
3. **EXAMEN FÍSICO ABDOMINAL**
4. **EVALUACIÓN HEPATO-BILIAR**
5. **ESCALAS GASTROENTEROLÓGICAS**
6. **SÍNDROME DISPÉPTICO**
7. **SÍNDROME DIARREICO**
8. **EVALUACIÓN NUTRICIONAL**
9. **CONCLUSIONES Y PLAN DIAGNÓSTICO**

### 🔍 Checkboxes Críticos de Síntomas Digestivos:
```html
<!-- SÍNTOMAS PRINCIPALES -->
<input type="checkbox" id="dolor-abdominal"> Dolor abdominal
<input type="checkbox" id="nauseas"> Náuseas
<input type="checkbox" id="vomitos"> Vómitos
<input type="checkbox" id="diarrea"> Diarrea
<input type="checkbox" id="constipacion"> Constipación
<input type="checkbox" id="meteorismo"> Meteorismo
<input type="checkbox" id="distension-abdominal"> Distensión abdominal
<input type="checkbox" id="flatulencia"> Flatulencia
<input type="checkbox" id="eructos"> Eructos
<input type="checkbox" id="pirosis"> Pirosis (acidez)
<input type="checkbox" id="regurgitacion"> Regurgitación
<input type="checkbox" id="disfagia"> Disfagia
<input type="checkbox" id="odinofagia"> Odinofagia
<input type="checkbox" id="hematemesis"> Hematemesis
<input type="checkbox" id="melena"> Melena
<input type="checkbox" id="rectorragia"> Rectorragia
<input type="checkbox" id="tenesmo"> Tenesmo
<input type="checkbox" id="ictericia"> Ictericia
<input type="checkbox" id="coluria"> Coluria
<input type="checkbox" id="acolia"> Acolia
```

### 📊 Evaluación del Dolor Abdominal:
```html
<!-- CARACTERÍSTICAS DEL DOLOR -->
<div class="pain-assessment">
    <input type="range" id="dolor-intensidad" min="0" max="10" step="1">
    <label>Intensidad: <span id="dolor-valor">0</span>/10</label>
    
    <!-- LOCALIZACIÓN -->
    <div class="pain-location">
        <input type="checkbox" id="dolor-epigastrio"> Epigastrio
        <input type="checkbox" id="dolor-hipocondrio-derecho"> Hipocondrio derecho
        <input type="checkbox" id="dolor-hipocondrio-izquierdo"> Hipocondrio izquierdo
        <input type="checkbox" id="dolor-flanco-derecho"> Flanco derecho
        <input type="checkbox" id="dolor-flanco-izquierdo"> Flanco izquierdo
        <input type="checkbox" id="dolor-mesogastrio"> Mesogastrio
        <input type="checkbox" id="dolor-fosa-iliaca-derecha"> Fosa ilíaca derecha
        <input type="checkbox" id="dolor-fosa-iliaca-izquierda"> Fosa ilíaca izquierda
        <input type="checkbox" id="dolor-hipogastrio"> Hipogastrio
    </div>
    
    <!-- CARACTERÍSTICAS -->
    <select id="dolor-tipo">
        <option value="">Seleccione tipo de dolor...</option>
        <option value="colico">Cólico</option>
        <option value="sordo">Sordo</option>
        <option value="punzante">Punzante</option>
        <option value="quemante">Quemante</option>
        <option value="opresivo">Opresivo</option>
        <option value="pulsatil">Pulsátil</option>
    </select>
</div>
```

### 🎯 Escalas Gastroenterológicas OBLIGATORIAS:

#### Escala de Bristol para Heces:
```html
<div class="bristol-scale">
    <h4>💩 Escala de Bristol para Consistencia de Heces</h4>
    <div class="bristol-options">
        <input type="radio" name="bristol" id="bristol-1" value="1">
        <label for="bristol-1">Tipo 1: Trozos duros separados</label>
        
        <input type="radio" name="bristol" id="bristol-2" value="2">
        <label for="bristol-2">Tipo 2: En forma de salchicha, grumosa</label>
        
        <input type="radio" name="bristol" id="bristol-3" value="3">
        <label for="bristol-3">Tipo 3: Como salchicha con grietas</label>
        
        <input type="radio" name="bristol" id="bristol-4" value="4">
        <label for="bristol-4">Tipo 4: Como salchicha lisa</label>
        
        <input type="radio" name="bristol" id="bristol-5" value="5">
        <label for="bristol-5">Tipo 5: Trozos blandos con bordes definidos</label>
        
        <input type="radio" name="bristol" id="bristol-6" value="6">
        <label for="bristol-6">Tipo 6: Trozos esponjosos con bordes irregulares</label>
        
        <input type="radio" name="bristol" id="bristol-7" value="7">
        <label for="bristol-7">Tipo 7: Acuosa, completamente líquida</label>
    </div>
</div>
```

#### Roma IV para Síndrome de Intestino Irritable:
```html
<div class="roma-iv-criteria">
    <h4>📋 Criterios Roma IV - Síndrome de Intestino Irritable</h4>
    <div class="criteria-checklist">
        <input type="checkbox" id="roma-dolor-abdominal">
        <label for="roma-dolor-abdominal">Dolor abdominal recurrente ≥1 día/semana (últimos 3 meses)</label>
        
        <div class="subcriteria">
            <h5>Asociado con 2 o más de los siguientes:</h5>
            <input type="checkbox" id="roma-defecacion">
            <label for="roma-defecacion">Relacionado con la defecación</label>
            
            <input type="checkbox" id="roma-frecuencia">
            <label for="roma-frecuencia">Cambio en frecuencia de deposiciones</label>
            
            <input type="checkbox" id="roma-consistencia">
            <label for="roma-consistencia">Cambio en consistencia de las heces</label>
        </div>
    </div>
    <div class="roma-result">
        <span id="roma-diagnosis">Evaluando criterios...</span>
    </div>
</div>
```

### ⚙️ Funciones JavaScript CRÍTICAS:
```javascript
// MANTENER TODAS ESTAS FUNCIONES EXACTAS:
function evaluateAbdominalPain() { /* Código completo */ }
function assessBristolScale() { /* Código completo */ }
function evaluateRomaIVCriteria() { /* Código completo */ }
function calculateDyspepsiaScore() { /* Código completo */ }
function assessGIBleeding() { /* Código completo */ }
function evaluateJaundice() { /* Código completo */ }
function generateGastroConclusion() { /* Código completo */ }
function updateGastroDashboard() { /* Código completo */ }
function handleDiarrheaAssessment() { /* Código completo */ }
function evaluateNutritionalStatus() { /* Código completo */ }
```

## 🎨 DISEÑO MODERNO A APLICAR:

### 🌈 Paleta de Colores Gastroenterológica:
```css
:root {
    --gastro-primary: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
    --gastro-secondary: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
    --liver-color: #8b4513;
    --stomach-color: #ff7675;
    --intestine-color: #74b9ff;
    --pain-color: #e74c3c;
    --normal-digestive: #27ae60;
    --warning-digestive: #f39c12;
    --alert-digestive: #e74c3c;
}
```

### 📱 Dashboard Gastroenterológico:
```html
<div class="dashboard-fixed">
    <div class="dashboard-content">
        <div class="dashboard-grid">
            <div class="dashboard-item" id="dashboard-symptoms">
                <i class="fas fa-stomach"></i>
                <div>Síntomas: <span id="symptom-count">0</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-pain">
                <i class="fas fa-exclamation-triangle"></i>
                <div>Dolor: <span id="pain-level">0</span>/10</div>
            </div>
            <div class="dashboard-item" id="dashboard-bristol">
                <i class="fas fa-toilet"></i>
                <div>Bristol: Tipo <span id="bristol-type">--</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-roma">
                <i class="fas fa-clipboard-check"></i>
                <div>Roma IV: <span id="roma-status">--</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-bleeding">
                <i class="fas fa-tint"></i>
                <div>Sangrado: <span id="bleeding-status">No</span></div>
            </div>
            <div class="dashboard-item" id="dashboard-jaundice">
                <i class="fas fa-eye"></i>
                <div>Ictericia: <span id="jaundice-status">No</span></div>
            </div>
        </div>
    </div>
</div>
```

### 🗺️ Mapa Abdominal Interactivo:
```html
<div class="abdominal-map">
    <h3>🗺️ Localización del Dolor Abdominal</h3>
    <div class="abdomen-diagram">
        <div class="abdominal-region" id="region-epigastrio" onclick="toggleAbdominalRegion('epigastrio')">
            <span>Epigastrio</span>
        </div>
        <div class="abdominal-region" id="region-hipocondrio-der" onclick="toggleAbdominalRegion('hipocondrio-der')">
            <span>Hipocondrio Derecho</span>
        </div>
        <div class="abdominal-region" id="region-hipocondrio-izq" onclick="toggleAbdominalRegion('hipocondrio-izq')">
            <span>Hipocondrio Izquierdo</span>
        </div>
        <!-- Más regiones abdominales... -->
    </div>
    <div class="pain-characteristics">
        <div class="pain-intensity">
            <label>Intensidad del Dolor:</label>
            <input type="range" id="pain-slider" min="0" max="10" step="1" oninput="updatePainValue()">
            <span id="pain-display">0/10</span>
        </div>
    </div>
</div>
```

### 🔬 Panel de Examen Físico:
```html
<div class="physical-exam-panel">
    <h3>👨‍⚕️ Examen Físico Abdominal</h3>
    <div class="exam-sections">
        <!-- INSPECCIÓN -->
        <div class="exam-section">
            <h4>👀 Inspección</h4>
            <div class="checkbox-grid">
                <input type="checkbox" id="abdomen-distendido"> Abdomen distendido
                <input type="checkbox" id="abdomen-excavado"> Abdomen excavado
                <input type="checkbox" id="circulacion-colateral"> Circulación colateral
                <input type="checkbox" id="cicatrices"> Cicatrices
                <input type="checkbox" id="hernias"> Hernias
                <input type="checkbox" id="masas-visibles"> Masas visibles
            </div>
        </div>
        
        <!-- PALPACIÓN -->
        <div class="exam-section">
            <h4>✋ Palpación</h4>
            <div class="checkbox-grid">
                <input type="checkbox" id="dolor-palpacion"> Dolor a la palpación
                <input type="checkbox" id="defensa-muscular"> Defensa muscular
                <input type="checkbox" id="rebote-positivo"> Rebote positivo
                <input type="checkbox" id="hepatomegalia"> Hepatomegalia
                <input type="checkbox" id="esplenomegalia"> Esplenomegalia
                <input type="checkbox" id="masas-palpables"> Masas palpables
            </div>
        </div>
        
        <!-- PERCUSIÓN -->
        <div class="exam-section">
            <h4>🥁 Percusión</h4>
            <div class="checkbox-grid">
                <input type="checkbox" id="timpanismo"> Timpanismo
                <input type="checkbox" id="matidez"> Matidez
                <input type="checkbox" id="ascitis"> Ascitis (oleada líquida)
                <input type="checkbox" id="hepatomegalia-percusion"> Hepatomegalia (percusión)
            </div>
        </div>
        
        <!-- AUSCULTACIÓN -->
        <div class="exam-section">
            <h4>🩺 Auscultación</h4>
            <div class="checkbox-grid">
                <input type="checkbox" id="ruidos-normales"> Ruidos intestinales normales
                <input type="checkbox" id="ruidos-aumentados"> Ruidos aumentados
                <input type="checkbox" id="ruidos-disminuidos"> Ruidos disminuidos
                <input type="checkbox" id="ruidos-ausentes"> Ruidos ausentes
                <input type="checkbox" id="soplos"> Soplos abdominales
            </div>
        </div>
    </div>
</div>
```

## 🔄 Funciones JavaScript Específicas:

### 📊 Evaluación Roma IV:
```javascript
function evaluateRomaIVCriteria() {
    const dolorAbdominal = document.getElementById('roma-dolor-abdominal').checked;
    const relacionadoDefecacion = document.getElementById('roma-defecacion').checked;
    const cambioFrecuencia = document.getElementById('roma-frecuencia').checked;
    const cambioConsistencia = document.getElementById('roma-consistencia').checked;
    
    const criteriosAsociados = [relacionadoDefecacion, cambioFrecuencia, cambioConsistencia]
        .filter(criterio => criterio).length;
    
    const cumpleRomaIV = dolorAbdominal && criteriosAsociados >= 2;
    
    const resultElement = document.getElementById('roma-diagnosis');
    const statusElement = document.getElementById('roma-status');
    
    if (cumpleRomaIV) {
        resultElement.textContent = '✅ Cumple criterios Roma IV para SII';
        resultElement.className = 'criteria-positive';
        statusElement.textContent = 'Positivo';
    } else {
        resultElement.textContent = '❌ No cumple criterios Roma IV';
        resultElement.className = 'criteria-negative';
        statusElement.textContent = 'Negativo';
    }
    
    updateGastroDashboard();
}
```

### 🚽 Evaluación Escala Bristol:
```javascript
function assessBristolScale() {
    const selectedBristol = document.querySelector('input[name="bristol"]:checked');
    if (!selectedBristol) return;
    
    const bristolType = selectedBristol.value;
    const bristolTypeElement = document.getElementById('bristol-type');
    bristolTypeElement.textContent = bristolType;
    
    let interpretation = '';
    let className = '';
    
    switch(bristolType) {
        case '1':
        case '2':
            interpretation = 'Constipación severa';
            className = 'bristol-constipated';
            break;
        case '3':
        case '4':
            interpretation = 'Normal';
            className = 'bristol-normal';
            break;
        case '5':
            interpretation = 'Falta de fibra';
            className = 'bristol-soft';
            break;
        case '6':
        case '7':
            interpretation = 'Diarrea';
            className = 'bristol-diarrhea';
            break;
    }
    
    const interpretationElement = document.getElementById('bristol-interpretation');
    interpretationElement.textContent = interpretation;
    interpretationElement.className = className;
    
    updateGastroDashboard();
}
```

## ✅ CHECKLIST ESPECÍFICO GASTROENTEROLOGÍA:

- [ ] ✅ Dashboard muestra síntomas digestivos en tiempo real
- [ ] ✅ Todos los síntomas principales (19 síntomas)
- [ ] ✅ Mapa abdominal interactivo (9 regiones)
- [ ] ✅ Escala de Bristol completa (7 tipos)
- [ ] ✅ Criterios Roma IV para SII
- [ ] ✅ Evaluación completa del dolor abdominal
- [ ] ✅ Examen físico sistemático (4 pasos)
- [ ] ✅ Evaluación de sangrado digestivo
- [ ] ✅ Evaluación de ictericia
- [ ] ✅ Escalas de dispepsia
- [ ] ✅ Evaluación nutricional
- [ ] ✅ Generación automática de conclusiones
- [ ] ✅ Panel lateral con informe gastroenterológico
- [ ] ✅ Modo oscuro/claro funcional
- [ ] ✅ Exportación a PDF especializada
- [ ] ✅ Responsividad móvil
- [ ] ✅ Autoguardado en localStorage

## 🎯 CARACTERÍSTICAS ESPECIALES GASTROENTEROLOGÍA:

### 🍽️ Evaluación Dietética:
```html
<div class="dietary-assessment">
    <h4>🍽️ Evaluación Dietética</h4>
    <div class="dietary-factors">
        <input type="checkbox" id="dieta-rica-fibra"> Dieta rica en fibra
        <input type="checkbox" id="dieta-grasa"> Dieta rica en grasas
        <input type="checkbox" id="lacteos"> Consumo de lácteos
        <input type="checkbox" id="picante"> Comidas picantes
        <input type="checkbox" id="alcohol"> Consumo de alcohol
        <input type="checkbox" id="cafe"> Consumo de café
        <input type="checkbox" id="agua-suficiente"> Hidratación adecuada
    </div>
</div>
```

### 🩸 Evaluación de Sangrado Digestivo:
```html
<div class="gi-bleeding-assessment">
    <h4>🩸 Evaluación de Sangrado Digestivo</h4>
    <div class="bleeding-types">
        <input type="checkbox" id="hematemesis"> Hematemesis
        <input type="checkbox" id="melena"> Melena
        <input type="checkbox" id="rectorragia"> Rectorragia
        <input type="checkbox" id="sangre-oculta"> Sangre oculta en heces
    </div>
    <div class="bleeding-severity">
        <label>Severidad del sangrado:</label>
        <select id="bleeding-severity">
            <option value="">Seleccione...</option>
            <option value="leve">Leve</option>
            <option value="moderado">Moderado</option>
            <option value="severo">Severo</option>
        </select>
    </div>
</div>
```

## 🎯 RESULTADO ESPERADO:
Un archivo `gastroenterologia.html` con diseño completamente moderno pero manteniendo el 100% de la funcionalidad gastroenterológica original, incluyendo todas las escalas de evaluación, mapeo abdominal, criterios diagnósticos y sistema de conclusiones especializadas en gastroenterología.
