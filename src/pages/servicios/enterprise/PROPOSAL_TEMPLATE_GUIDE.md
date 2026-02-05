# Guía de Uso: Plantilla de Propuestas Enterprise

**Ubicación de Plantilla:** `src/pages/servicios/enterprise/_proposal_template.astro`

Esta plantilla está diseñada para generar propuestas de alto impacto bajo la metodología **"Consultative Diagnostic"**, enfocándose en cuestionar el status quo (software actual) vs. el valor de una solución propia (StackSolver).

## 🚀 Cómo crear una nueva propuesta

### 1. Duplicar y Renombrar
Copia el archivo `_proposal_template.astro` y pégalo en la misma carpeta (o en la carpeta del cliente si existe).
**Nomenclatura recomendada:** `[nombre_cliente].astro` (ej: `biopromedic.astro`, `genfami.astro`).

### 2. Configurar Variables
Al inicio del archivo encontrarás una sección de configuración. Reemplaza los valores entre corchetes:

```javascript
const clientName = "Empresa Ejemplo SAS";
const projectName = "Transformación Operativa";
const projectDate = "2026-02-10";
const stakeholders = "Gerente General";
const softwareActual = "Excel / Siesa"; // El 'enemigo' a comparar
const softwareCompetencia = "SAP B1";
const industria = "Manufactura";
```

### 3. Personalizar el Diagnóstico
La sección de "Preguntas de Reflexión" es vital. No dejes las genéricas.
*   **Identifica el dolor:** ¿Qué le duele al cliente? (Desorden, lentitud, falta de datos).
*   **Edita las preguntas:** Hazlas específicas para su industria.
    *   *Ejemplo Manufactura:* "¿Saben exactamente cuánto inventario pierden al mes?"
    *   *Ejemplo Servicios:* "¿Cuánto tiempo pierden agendando citas manualmente?"

### 4. Definir las Fases
Usa las etiquetas `<details>` para cada fase.
*   **Alcance:** Sé claro en los entregables (Bullet points).
*   **Inversión:** Si es estimada, usa "Inversión Aprox.". Si es fija, pon el valor exacto.

### 5. Diagrama del Ecosistema
El diagrama en la plantilla es un placeholder.
*   Para implementarlo visualmente atractivo, copia el código SVG/HTML del archivo `b_iopromedic.astro` (líneas 103-191) y adáptalo.
*   O usa una imagen exportada de Mermaid/Figma si es muy complejo.

### 6. Publicar
Al guardar el archivo `.astro` en `src/pages`, la ruta se generará automáticamente:
`https://stacksolver.tech/servicios/enterprise/[nombre_archivo]`

---

## 🎨 Elementos Clave del Diseño

*   **Tabla Comparativa:** Usa las clases de color existentes (Azul para la competencia, Esmeralda para StackSolver) para guiar psicológicamente la decisión.
*   **Acordeones (Details):** Mantén la Fase 1 abierta (`open`) por defecto para mostrar acción inmediata.
*   **Conclusión:** Siempre cierra con la frase neutral de reflexión estratégica.
