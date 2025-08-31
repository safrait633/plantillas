# 🧠 PROMPT ESPECÍFICO: NEUROLOGÍA

## 📋 ARCHIVO FUENTE:
`html_inicial/neurology_exam.html` → `algoritmos_nuevo_diseño/neurologia.html`

## 🚫 ELEMENTOS CRÍTICOS A PRESERVAR AL 100%:

### 📝 Secciones Principales (TODAS OBLIGATORIAS):
1. **ANAMNESIS NEUROLÓGICA**
2. **ESTADO MENTAL Y COGNICIÓN**
3. **PARES CRANEALES (I-XII)**
4. **SISTEMA MOTOR**
5. **SISTEMA SENSITIVO**
6. **REFLEJOS**
7. **COORDINACIÓN Y EQUILIBRIO**
8. **MARCHA**
9. **ESCALAS NEUROLÓGICAS**
10. **CONCLUSIONES NEUROLÓGICAS**

### 🧭 Escalas Neurológicas OBLIGATORIAS:

#### Escala de Glasgow:
```html
<div class="glasgow-scale">
    <h4>🧭 Escala de Glasgow</h4>
    <div class="glasgow-sections">
        <!-- APERTURA OCULAR -->
        <div class="glasgow-section">
            <h5>👁️ Apertura Ocular</h5>
            <input type="radio" name="glasgow-eye" id="eye-4" value="4">
            <label for="eye-4">Espontánea (4)</label>
            <input type="radio" name="glasgow-eye" id="eye-3" value="3">
            <label for="eye-3">Al habla (3)</label>
            <input type="radio" name="glasgow-eye" id="eye-2" value="2">
            <label for="eye-2">Al dolor (2)</label>
            <input type="radio" name="glasgow-eye" id="eye-1" value="1">
            <label for="eye-1">No respuesta (1)</label>
        </div>
        
        <!-- RESPUESTA VERBAL -->
        <div class="glasgow-section">
            <h5>🗣️ Respuesta Verbal</h5>
            <input type="radio" name="glasgow-verbal" id="verbal-5" value="5">
            <label for="verbal-5">Orientado (5)</label>
            <input type="radio" name="glasgow-verbal" id="verbal-4" value="4">
            <label for="verbal-4">Confuso (4)</label>
            <input type="radio" name="glasgow-verbal" id="verbal-3" value="3">
            <label for="verbal-3">Palabras inapropiadas (3)</label>
            <input type="radio" name="glasgow-verbal" id="verbal-2" value="2">
            <label for="verbal-2">Sonidos incomprensibles (2)</label>
            <input type="radio" name="glasgow-verbal" id="verbal-1" value="1">
            <label for="verbal-1">No respuesta (1)</label>
        </div>
        
        <!-- RESPUESTA MOTORA -->
        <div class="glasgow-section">
            <h5>🤲 Respuesta Motora</h5>
            <input type="radio" name="glasgow-motor" id="motor-6" value="6">
            <label for="motor-6">Obedece órdenes (6)</label>
            <input type="radio" name="glasgow-motor" id="motor-5" value="5">
            <label for="motor-5">Localiza dolor (5)</label>
            <input type="radio" name="glasgow-motor" id="motor-4" value="4">
            <label for="motor-4">Retirada al dolor (4)</label>
            <input type="radio" name="glasgow-motor" id="motor-3" value="3">
            <label for="motor-3">Flexión anormal (3)</label>
            <input type="radio" name="glasgow-motor" id="motor-2" value="2">
            <label for="motor-2">Extensión anormal (2)</label>
            <input type="radio" name="glasgow-motor" id="motor-1" value="1">
            <label for="motor-1">No respuesta (1)</label>
        </div>
    </div>
    <div class="glasgow-result">
        <div class="glasgow-total">
            Total: <span id="glasgow-total">15</span>/15
        </div>
        <div class="glasgow-interpretation">
            <span id="glasgow-interpretation">Normal</span>
        </div>
    </div>
</div>
```

#### Escala NIHSS (Stroke):
```html
<div class="nihss-scale">
    <h4>🧠 NIHSS - National Institutes of Health Stroke Scale</h4>
    <div class="nihss-items">
        <div class="nihss-item">
            <h5>1a. Nivel de Consciencia</h5>
            <input type="radio" name="nihss-1a" value="0"> Normal (0)
            <input type="radio" name="nihss-1a" value="1"> Somnoliento (1)
            <input type="radio" name="nihss-1a" value="2"> Estuporoso (2)
            <input type="radio" name="nihss-1a" value="3"> Coma (3)
        </div>
        
        <div class="nihss-item">
            <h5>1b. Preguntas de Orientación</h5>
            <input type="radio" name="nihss-1b" value="0"> Ambas correctas (0)
            <input type="radio" name="nihss-1b" value="1"> Una correcta (1)
            <input type="radio" name="nihss-1b" value="2"> Ninguna correcta (2)
        </div>
        
        <!-- Más items NIHSS... -->
    </div>
    <div class="nihss-result">
        <div class="nihss-total">
            Total NIHSS: <span id="nihss-total">0</span>/42
        </div>
        <div class="nihss-severity">
            <span id="nihss-severity">No déficit neurológico</span>
        </div>
    </div>
</div>
```

### 🔍 Pares Craneales COMPLETOS:
```html
<div class="cranial-nerves">
    <h4>🧠 Evaluación de Pares Craneales</h4>
    <div class="cranial-grid">
        <!-- PAR I - OLFATORIO -->
        <div class="cranial-nerve">
            <h5>I - Olfatorio</h5>
            <input type="checkbox" id="cn1-normal"> Normal
            <input type="checkbox" id="cn1-anosmia"> Anosmia
            <input type="checkbox" id="cn1-hiposmia"> Hiposmia
        </div>
        
        <!-- PAR II - ÓPTICO -->
        <div class="cranial-nerve">
            <h5>II - Óptico</h5>
            <input type="text" id="cn2-agudeza-od" placeholder="Agudeza visual OD">
            <input type="text" id="cn2-agudeza-oi" placeholder="Agudeza visual OI">
            <input type="checkbox" id="cn2-defecto-pupilar"> Defecto pupilar aferente
            <input type="checkbox" id="cn2-papiliedema"> Papiliedema
        </div>
        
        <!-- PAR III - OCULOMOTOR -->
        <div class="cranial-nerve">
            <h5>III - Oculomotor</h5>
            <input type="checkbox" id="cn3-ptosis"> Ptosis
            <input type="checkbox" id="cn3-midriasis"> Midriasis
            <input type="checkbox" id="cn3-diplopia"> Diplopía
            <input type="checkbox" id="cn3-limitacion-medial"> Limitación mirada medial
        </div>
        
        <!-- Continuar con todos los pares... PAR IV al XII -->
    </div>
</div>
```

### 💪 Sistema Motor COMPLETO:
```html
<div class="motor-system">
    <h4>💪 Sistema Motor</h4>
    <div class="motor-sections">
        <!-- FUERZA MUSCULAR -->
        <div class="muscle-strength">
            <h5>🏋️ Fuerza Muscular (Escala 0-5)</h5>
            <div class="strength-grid">
                <div class="muscle-group">
                    <h6>Miembro Superior Derecho</h6>
                    <label>Deltoides: <input type="number" id="deltoides-der" min="0" max="5"></label>
                    <label>Bíceps: <input type="number" id="biceps-der" min="0" max="5"></label>
                    <label>Tríceps: <input type="number" id="triceps-der" min="0" max="5"></label>
                    <label>Flexores muñeca: <input type="number" id="flexores-muneca-der" min="0" max="5"></label>
                    <label>Extensores muñeca: <input type="number" id="extensores-muneca-der" min="0" max="5"></label>
                </div>
                
                <div class="muscle-group">
                    <h6>Miembro Inferior Derecho</h6>
                    <label>Psoas: <input type="number" id="psoas-der" min="0" max="5"></label>
                    <label>Cuádriceps: <input type="number" id="cuadriceps-der" min="0" max="5"></label>
                    <label>Isquiotibiales: <input type="number" id="isquiotibiales-der" min="0" max="5"></label>
                    <label>Tibial anterior: <input type="number" id="tibial-anterior-der" min="0" max="5"></label>
                    <label>Gastrocnemio: <input type="number" id="gastrocnemio-der" min="0" max="5"></label>
                </div>
                
                <!-- Lado izquierdo... -->
            </div>
        </div>
        
        <!-- TONO MUSCULAR -->
        <div class="muscle-tone">
            <h5>🎵 Tono Muscular</h5>
            <input type="radio" name="tone" id="tone-normal" value="normal">
            <label for="tone-normal">Normal</label>
            <input type="radio" name="tone" id="tone-hipotonia" value="hipotonia">
            <label for="tone-hipotonia">Hipotonía</label>
            <input type="radio" name="tone" id="tone-hipertonia" value="hipertonia">
            <label for="tone-hipertonia">Hipertonía</label>
            <input type="radio" name="tone" id="tone-rigidez" value="rigidez">
            <label for="tone-rigidez">Rigidez</label>
            <input type="radio" name="tone" id="tone-espasticidad" value="espasticidad">
            <label for="tone-espasticidad">Espasticidad</label>
        </div>
    </div>
</div>
```

### ⚙️ Funciones JavaScript CRÍTICAS:
```javascript
// MANTENER TODAS ESTAS FUNCIONES EXACTAS:
function calculateGlasgowScore() { /* Código completo */ }
function calculateNIHSS() { /* Código completo */ }
function evaluateCranialNerves() { /* Código completo */ }
function assessMotorSystem() { /* Código completo */ }
function evaluateReflexes() { /* Código completo */ }
function assessCoordination() { /* Código completo */ }
function evaluateGait() { /* Código completo */ }
function generateNeuroConclusion() { /* Código completo */ }
function updateNeuroDashboard() { /* Código completo */ }
function assessCognition() { /* Código completo */ }
```

## 🎨 DISEÑO MODERNO NEUROLÓGICO:

### 🌈 Paleta de Colores:
```css
:root {
    --neuro-primary: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
    --neuro-secondary: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    --brain-color: #e74c3c;
    --nerve-color: #f39c12;
    --normal-neuro: #27ae60;
    --warning-neuro: #f39c12;
    --alert-neuro: #e74c3c;
}
```

### 📱 Dashboard Neurológico:
```html
<div class="dashboard-grid">
    <div class="dashboard-item" id="dashboard-glasgow">
        <i class="fas fa-brain"></i>
        <div>Glasgow: <span id="glasgow-display">15</span>/15</div>
    </div>
    <div class="dashboard-item" id="dashboard-nihss">
        <i class="fas fa-heartbeat"></i>
        <div>NIHSS: <span id="nihss-display">0</span>/42</div>
    </div>
    <div class="dashboard-item" id="dashboard-cranial">
        <i class="fas fa-eye"></i>
        <div>P. Craneales: <span id="cranial-count">0</span>/12</div>
    </div>
    <div class="dashboard-item" id="dashboard-motor">
        <i class="fas fa-running"></i>
        <div>Motor: <span id="motor-score">5</span>/5</div>
    </div>
    <div class="dashboard-item" id="dashboard-reflexes">
        <i class="fas fa-hammer"></i>
        <div>Reflejos: <span id="reflex-status">Normales</span></div>
    </div>
</div>
```

## ✅ CHECKLIST ESPECÍFICO NEUROLOGÍA:

- [ ] ✅ Escala de Glasgow completa (3 componentes)
- [ ] ✅ NIHSS completa (15 items)
- [ ] ✅ Evaluación 12 pares craneales
- [ ] ✅ Sistema motor bilateral completo
- [ ] ✅ Evaluación de reflejos (osteotendinosos y patológicos)
- [ ] ✅ Pruebas de coordinación (dedo-nariz, talón-rodilla)
- [ ] ✅ Evaluación de la marcha
- [ ] ✅ Estado mental y cognición
- [ ] ✅ Sistema sensitivo (tacto, dolor, vibración)
- [ ] ✅ Generación automática de conclusiones neurológicas

---

# 🫁 PROMPT ESPECÍFICO: NEUMOLOGÍA

## 📋 ARCHIVO FUENTE:
`html_inicial/pneumology_exam.html` → `algoritmos_nuevo_diseño/neumologia.html`

### 🫁 Secciones Principales OBLIGATORIAS:
1. **ANAMNESIS RESPIRATORIA**
2. **SÍNTOMAS RESPIRATORIOS**
3. **EXAMEN FÍSICO PULMONAR**
4. **PRUEBAS DE FUNCIÓN PULMONAR**
5. **ESCALAS NEUMOLÓGICAS**
6. **EVALUACIÓN DE OXIGENACIÓN**
7. **CONCLUSIONES PULMONARES**

### 🔍 Síntomas Respiratorios Críticos:
```html
<input type="checkbox" id="disnea-esfuerzo"> Disnea de esfuerzo
<input type="checkbox" id="disnea-reposo"> Disnea de reposo
<input type="checkbox" id="tos-seca"> Tos seca
<input type="checkbox" id="tos-productiva"> Tos productiva
<input type="checkbox" id="expectoracion"> Expectoración
<input type="checkbox" id="hemoptisis"> Hemoptisis
<input type="checkbox" id="dolor-toracico-pleuritico"> Dolor torácico pleurítico
<input type="checkbox" id="sibilancias"> Sibilancias
<input type="checkbox" id="ortopnea"> Ortopnea
<input type="checkbox" id="disnea-paroxistica-nocturna"> DPN
```

### 📊 Escalas Respiratorias:
```html
<!-- mMRC (Modified Medical Research Council) -->
<div class="mmrc-scale">
    <h4>mMRC - Escala de Disnea</h4>
    <input type="radio" name="mmrc" value="0"> Grado 0: Solo disnea con ejercicio intenso
    <input type="radio" name="mmrc" value="1"> Grado 1: Disnea caminando rápido
    <input type="radio" name="mmrc" value="2"> Grado 2: Camina más lento que personas de su edad
    <input type="radio" name="mmrc" value="3"> Grado 3: Se detiene al caminar 100m
    <input type="radio" name="mmrc" value="4"> Grado 4: Disnea con actividades básicas
</div>

<!-- CAT Score para EPOC -->
<div class="cat-score">
    <h4>CAT Score - COPD Assessment Test</h4>
    <!-- 8 preguntas con escala 0-5 cada una -->
</div>
```

---

# 👁️ PROMPT ESPECÍFICO: OFTALMOLOGÍA

## 📋 ARCHIVO FUENTE:
`html_inicial/Oftalmo.html` → `algoritmos_nuevo_diseño/oftalmologia.html`

### 👁️ Secciones Oftalmológicas OBLIGATORIAS:
1. **ANAMNESIS OFTALMOLÓGICA**
2. **AGUDEZA VISUAL**
3. **EXAMEN EXTERNO**
4. **BIOMICROSCOPÍA**
5. **FONDO DE OJO**
6. **PRESIÓN INTRAOCULAR**
7. **CAMPOS VISUALES**
8. **CONCLUSIONES OFTALMOLÓGICAS**

### 🔍 Evaluación de Agudeza Visual:
```html
<div class="visual-acuity">
    <h4>👁️ Agudeza Visual</h4>
    <div class="va-measurements">
        <label>OD sin corrección: 
            <select id="va-od-sc">
                <option value="20/20">20/20</option>
                <option value="20/25">20/25</option>
                <option value="20/30">20/30</option>
                <option value="20/40">20/40</option>
                <!-- Más opciones... -->
            </select>
        </label>
        <label>OI sin corrección: 
            <select id="va-oi-sc">
                <!-- Opciones similares -->
            </select>
        </label>
    </div>
</div>
```

---

Ahora voy a crear el prompt principal para la migración del portal index.html:
