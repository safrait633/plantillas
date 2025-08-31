# 🏥 Portal de Exámenes Médicos - MedScap v2.0

## 📋 Descripción del Proyecto

Portal médico integral que incluye **15 especialidades médicas** con algoritmos clínicos avanzados, diseño moderno con glassmorphism y funcionalidades completas de evaluación médica.

## 🎯 Características Principales

### ✨ Diseño Moderno
- **Glassmorphism**: Efectos de vidrio esmerilado con `backdrop-filter`
- **Modo Oscuro**: Tema dark por defecto con transiciones suaves
- **Responsive**: Optimizado para móvil, tablet y desktop
- **Animaciones**: Transiciones fluidas y micro-interacciones

### 🏥 Especialidades Médicas Incluidas

| Especialidad | Archivo | Características Principales |
|--------------|---------|----------------------------|
| 🫀 **Cardiología** | `cardiologia.html` | CHADS2, HAS-BLED, TIMI, escalas cardiovasculares |
| 🧠 **Neurología** | `neurology_exam.html` | Glasgow, NIHSS, pares craneales, función motora |
| 🫁 **Neumología** | `pneumology_exam.html` | mMRC, CAT Score, saturación O₂, espirometría |
| 🍽️ **Gastroenterología** | `gastro.html` | Roma IV, Bristol, mapeo abdominal, EVA |
| 🩺 **Dermatología** | `derma.html` | DLQI, PASI, criterios ABCDE, mapeo corporal |
| 👁️ **Oftalmología** | `Oftalmo.html` | Agudeza visual, PIO, fondo de ojo |
| 👂 **Otorrinolaringología** | `otolaryngology_exam_es.html` | Weber, Rinne, audiometría |
| 🦴 **Reumatología** | `rheumatology_exam.html` | VSG, PCR, factor reumatoide |
| 🧬 **Endocrinología** | `endocrinology_exam.html` | Diabetes, tiroides, HbA1c, TSH |
| 🩸 **Hematología** | `hematology_exam.html` | Hemograma, anemia, coagulación |
| 🦠 **Infectología** | `infectious_diseases_exam.html` | Síndrome febril, marcadores |
| 🧠 **Psiquiatría** | `psychiatric_exam_system.html` | PHQ-9, GAD-7, estado mental |
| 🏃 **Traumatología** | `trama.html` | EVA dolor, movilidad, limitaciones |
| 🫘 **Urología** | `urology_exam.html` | Síntomas obstructivos/irritativos |
| 👴 **Geriatría** | `geriatria.html` | MMSE, Barthel, riesgo de caídas |

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v14 o superior)
- Navegador web moderno

### Instalación
```bash
# Clonar o descargar el proyecto
cd algoritmos_nuevo_diseño

# Instalar dependencias
npm install

# Ejecutar servidor
npm start
# o
node server.js
```

### Acceso
- **URL Local**: http://localhost:3000
- **Portal Principal**: `index.html`
- **Especialidades**: Acceso directo desde el portal

## 🛠️ Estructura Técnica

### Archivos Principales
```
algoritmos_nuevo_diseño/
├── index.html                    # Portal principal
├── [especialidad].html           # 15 módulos médicos
├── assets/
│   ├── css/main.css             # Estilos base compartidos
│   └── js/main.js               # JavaScript unificado
├── medical-unified.js           # Sistema médico unificado
├── medical-unified.css          # CSS médico base
├── server.js                    # Servidor Express
└── package.json                 # Dependencias
```

### Tecnologías
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Frameworks**: Tailwind CSS, Font Awesome 6.0
- **Backend**: Node.js + Express
- **Fuentes**: Inter (Google Fonts)

## 🎨 Funcionalidades Médicas

### Cálculos Automáticos
- ✅ Escalas de riesgo cardiovascular
- ✅ Índices dermatológicos
- ✅ Escalas neurológicas
- ✅ Evaluaciones respiratorias
- ✅ Marcadores inflamatorios

### Sistemas de Evaluación
- ✅ Validación en tiempo real
- ✅ Alertas automáticas
- ✅ Generación de conclusiones
- ✅ Exportación PDF
- ✅ Autoguardado

## 📱 Características de UX/UI

### Dashboard Superior
- Indicadores en tiempo real por especialidad
- Controles de tema, impresión y exportación
- Progreso visual del examen

### Secciones Expandibles
- Navegación intuitiva
- Contadores de progreso
- Animaciones suaves

### Panel Lateral Inteligente
- Conclusiones automáticas
- Interpretaciones médicas
- Recomendaciones clínicas

## 🔧 Personalización

### Temas
- Modo claro/oscuro
- Colores por especialidad
- Persistencia en localStorage

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados
- Touch-friendly interfaces

## 📊 Métricas y Analytics

### LocalStorage
- Historial de visitas
- Preferencias de usuario
- Datos de sesión

### Estadísticas
- Exámenes realizados
- Especialidades más usadas
- Tiempo de completado

## 🔒 Consideraciones de Seguridad

- Sin almacenamiento de datos médicos sensibles
- Procesamiento local de información
- No requiere conexión a internet para funcionar

## 🚀 Roadmap Futuro

### Próximas Funcionalidades
- [ ] PWA (Progressive Web App)
- [ ] Modo offline completo
- [ ] Sincronización en la nube
- [ ] Reportes avanzados
- [ ] Integración con sistemas hospitalarios

### Optimizaciones
- [ ] Lazy loading de módulos
- [ ] Minificación de assets
- [ ] Service Workers
- [ ] Cache strategies

## 📞 Soporte

Para soporte técnico o consultas médicas sobre los algoritmos, consulte la documentación específica de cada especialidad en los archivos `PROMPT_*.md`.

---

**🏥 MedScap v2.0** - Portal Médico de Nueva Generación
*Desarrollado con tecnologías web modernas para profesionales de la salud*