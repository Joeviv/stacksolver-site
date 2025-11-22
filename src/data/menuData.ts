// ARCHIVO: src/data/menuData.ts

import { 
  CpuChipIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  Square3Stack3DIcon
} from '@heroicons/react/24/outline';

export type ImplementationStep = {
  step: number;
  title: string;
  description: string;
};

export type SubSection = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  implementationPlan: ImplementationStep[];
  features: string[];
  image: string;
  isInteractiveBuilder?: boolean;
  techBadge?: string;
};

export type Section = {
  id: string;
  title: string;
  icon: any;
  subsections: SubSection[];
};

export const SERVICES_MENU: Section[] = [
  {
    id: 'ai-local',
    title: 'Soluciones de IA Local',
    icon: CpuChipIcon,
    subsections: [
      {
        id: 'ai-proto',
        title: 'Generador de Prototipos',
        shortDescription: 'Herramienta exclusiva de StackSolver para generar aplicaciones web completas.',
        fullDescription: 'Nuestro Generador de Prototipos es una herramienta de vanguardia impulsada por Gemini 2.5 Pro. Permite transformar ideas abstractas en código funcional (HTML/CSS/JS) en cuestión de segundos.',
        implementationPlan: [
            { step: 1, title: 'Input Visual', description: 'El usuario sube una imagen o escribe un prompt detallado.' },
            { step: 2, title: 'Análisis Multimodal', description: 'La IA analiza la estructura visual y lógica de negocio.' },
            { step: 3, title: 'Generación de Código', description: 'Se escribe código limpio y funcional en tiempo real.' },
            { step: 4, title: 'Preview & Export', description: 'Visualización inmediata con opción de descarga.' }
        ],
        features: ['Conversión de Imagen a Código', 'Interactividad Instantánea', 'Sin dependencias externas', 'Prototipado Rápido'],
        image: '', 
        isInteractiveBuilder: true
      },
      {
        id: 'ai-llm',
        title: 'Modelos LLM Locales',
        shortDescription: 'Implementación de modelos de lenguaje en infraestructura propia.',
        fullDescription: 'Desplegamos Modelos de Lenguaje Grande (LLMs) como Llama 3 o Mistral directamente en sus servidores locales (On-Premise). Garantiza soberanía total de la información.',
        implementationPlan: [
            { step: 1, title: 'Evaluación de Hardware', description: 'Análisis de GPU/RAM para determinar el modelo óptimo.' },
            { step: 2, title: 'Selección de Modelo', description: 'Balance entre rendimiento (7B vs 70B) y velocidad.' },
            { step: 3, title: 'Despliegue & Cuantización', description: 'Optimización para reducir consumo de memoria.' },
            { step: 4, title: 'Integración API', description: 'API interna compatible con OpenAI.' }
        ],
        features: ['Privacidad Total (Air-gapped)', 'Sin costos por token', 'Baja latencia', 'Personalizable'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'ai-agents',
        title: 'Agentes Autónomos',
        shortDescription: 'Agentes inteligentes capaces de ejecutar tareas complejas.',
        fullDescription: 'Diseñamos ecosistemas de Agentes Autónomos que "actúan". Pueden navegar por la web, utilizar herramientas de software y tomar decisiones basadas en objetivos.',
        implementationPlan: [
            { step: 1, title: 'Mapeo de Flujos', description: 'Identificación de procesos que requieren toma de decisiones.' },
            { step: 2, title: 'Definición de Herramientas', description: 'Configuración de accesos (API, Web Search, DB).' },
            { step: 3, title: 'Orquestación', description: 'Framework (LangChain/AutoGen) para gestionar razonamiento.' },
            { step: 4, title: 'Testing Supervisado', description: 'Validación humana antes del despliegue total.' }
        ],
        features: ['Ejecución de tareas complejas', 'Navegación Web', 'Uso de APIs externas', 'Memoria a largo plazo'],
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
      },
      {
        id: 'ai-chatbots',
        title: 'Chatbots Privados (RAG)',
        shortDescription: 'Asistentes conversacionales con su base de conocimiento.',
        fullDescription: 'Sistemas RAG (Retrieval Augmented Generation) que responden basándose estrictamente en sus documentos internos (PDFs, wikis). Cero alucinaciones.',
        implementationPlan: [
            { step: 1, title: 'Ingesta de Datos', description: 'Limpieza de documentos (PDF, DOCX, HTML).' },
            { step: 2, title: 'Vectorización', description: 'Base de datos vectorial (Pinecone/Milvus).' },
            { step: 3, title: 'Desarrollo de Interfaz', description: 'Chat seguro e intuitivo.' },
            { step: 4, title: 'Afinamiento', description: 'Ingeniería de prompts para precisión.' }
        ],
        features: ['Cero Alucinaciones', 'Citas de fuentes', 'Datos en tiempo real', 'Seguridad empresarial'],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop'
      },
      {
        id: 'ai-docs',
        title: 'Procesamiento de Documentos',
        shortDescription: 'Extracción de datos de facturas y contratos con visión artificial.',
        fullDescription: 'Automatización inteligente (IDP) para leer y extraer datos estructurados de documentos escaneados o manuscritos.',
        implementationPlan: [
            { step: 1, title: 'Definición de Esquema', description: 'Campos a extraer (Fecha, Total, NIT).' },
            { step: 2, title: 'Entrenamiento', description: 'Fine-tuning con ejemplos específicos.' },
            { step: 3, title: 'Pipeline', description: 'OCR -> Extracción -> Validación -> JSON.' },
            { step: 4, title: 'Integración ERP', description: 'Inyección de datos en sistema contable.' }
        ],
        features: ['OCR Avanzado', 'Escritura a mano', 'Clasificación automática', 'Validación de datos'],
        image: 'https://images.unsplash.com/photo-1562564025-5167b772701d?q=80&w=2050&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'enterprise',
    title: 'Soluciones empresariales',
    icon: BuildingOfficeIcon,
    subsections: [
      {
        id: 'ent-erp',
        title: 'ERP Personalizado',
        shortDescription: 'Sistemas de Planificación hechos a la medida.',
        fullDescription: 'Sistemas ERP personalizados que centralizan operaciones, contabilidad, ventas e inventario en una sola plataforma.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Levantamiento', description: 'Mapeo de flujos operativos.' },
            { step: 2, title: 'Arquitectura', description: 'Diseño relacional en Claris FileMaker.' },
            { step: 3, title: 'Desarrollo Modular', description: 'Construcción ágil por módulos.' },
            { step: 4, title: 'Migración', description: 'Importación de datos y capacitación.' }
        ],
        features: ['Multi-usuario', 'Reportes personalizados', 'Facturación electrónica', 'Seguridad basada en roles'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
      },
      {
        id: 'ent-crm',
        title: 'CRM Inteligente',
        shortDescription: 'Gestión de relaciones con clientes.',
        fullDescription: 'CRM diseñado para equipos de alto rendimiento. Gestione el ciclo de vida completo del cliente.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Definición Funnel', description: 'Configuración del embudo de ventas.' },
            { step: 2, title: 'Interfaz', description: 'Dashboards en FileMaker.' },
            { step: 3, title: 'Automatización', description: 'Recordatorios y correos automáticos.' },
            { step: 4, title: 'Movilidad', description: 'FileMaker Go (iOS).' }
        ],
        features: ['Pipeline 360', 'Historial', 'Acceso Móvil (iOS)', 'Email Integrado'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'ent-hr',
        title: 'Gestión de RRHH',
        shortDescription: 'Plataforma integral para talento humano.',
        fullDescription: 'Digitalice RRHH: reclutamiento, onboarding, desempeño y nómina.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Legajos Digitales', description: 'Almacenamiento documental.' },
            { step: 2, title: 'Asistencia', description: 'Control de horarios.' },
            { step: 3, title: 'Portal Empleado', description: 'Acceso WebDirect.' },
            { step: 4, title: 'Evaluaciones', description: 'Desempeño 360.' }
        ],
        features: ['Expediente único', 'Vacaciones', 'Firma digital', 'Confidencialidad'],
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop'
      },
      {
        id: 'ent-fin',
        title: 'Finanzas Automatizadas',
        shortDescription: 'Control sobre flujo de caja y gastos.',
        fullDescription: 'Gestione presupuestos, flujo de caja, aprobaciones y conciliaciones bancarias.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Centros de Costo', description: 'Estructuración presupuestal.' },
            { step: 2, title: 'Workflows', description: 'Aprobación de gastos.' },
            { step: 3, title: 'Dashboards', description: 'P&L y Cash Flow.' },
            { step: 4, title: 'Auditoría', description: 'Logs de transacciones.' }
        ],
        features: ['Conciliación', 'Presupuestos', 'Alertas', 'Proyecciones'],
        image: 'https://images.unsplash.com/photo-1554224155-98496fae562c?q=80&w=2072&auto=format&fit=crop'
      },
      {
        id: 'ent-supply',
        title: 'Cadena de Suministro',
        shortDescription: 'Logística e inventarios avanzados.',
        fullDescription: 'Visibilidad total de supply chain: compras, almacenes, trazabilidad y distribución.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Inventario', description: 'SKUs, máximos y mínimos.' },
            { step: 2, title: 'WMS', description: 'Códigos de barra/QR.' },
            { step: 3, title: 'Proveedores', description: 'Seguimiento de órdenes.' },
            { step: 4, title: 'Logística', description: 'Rutas y flota.' }
        ],
        features: ['Trazabilidad', 'Mermas', 'Códigos de Barra', 'Alertas Stock'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'web',
    title: 'Diseño Web',
    icon: ComputerDesktopIcon,
    subsections: [
      {
        id: 'web-ux',
        title: 'Diseño UX/UI',
        shortDescription: 'Interfaces intuitivas centradas en el usuario.',
        fullDescription: 'Diseño centrado en entender a los usuarios para crear interfaces bellas, intuitivas y accesibles.',
        implementationPlan: [
            { step: 1, title: 'Investigación', description: 'Entrevistas y análisis.' },
            { step: 2, title: 'Wireframing', description: 'Estructura baja fidelidad.' },
            { step: 3, title: 'Diseño UI', description: 'Alta fidelidad en Figma.' },
            { step: 4, title: 'Prototipado', description: 'Pruebas de usabilidad.' }
        ],
        features: ['User Research', 'Figma', 'Design Systems', 'Usabilidad'],
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'web-dev',
        title: 'Desarrollo Frontend',
        shortDescription: 'Webs de alto rendimiento.',
        fullDescription: 'Sitios web rápidos, responsivos y optimizados para SEO usando tecnologías modernas.',
        implementationPlan: [
            { step: 1, title: 'Setup', description: 'Stack (React, Astro, Vue).' },
            { step: 2, title: 'Componentes', description: 'Desarrollo modular.' },
            { step: 3, title: 'CMS', description: 'Integración de contenidos.' },
            { step: 4, title: 'Optimización', description: 'Core Web Vitals.' }
        ],
        features: ['React / Astro', 'Tailwind', 'SEO Técnico', 'Accesibilidad'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop'
      },
      {
        id: 'web-ecom',
        title: 'E-Commerce',
        shortDescription: 'Tiendas online robustas.',
        fullDescription: 'Tiendas en línea seguras y fáciles de gestionar, optimizadas para ventas.',
        implementationPlan: [
            { step: 1, title: 'Catálogo', description: 'Estructuración productos.' },
            { step: 2, title: 'Storefront', description: 'Personalización visual.' },
            { step: 3, title: 'Pagos', description: 'Integración pasarelas.' },
            { step: 4, title: 'Lanzamiento', description: 'Logística e impuestos.' }
        ],
        features: ['Shopify / WooCommerce', 'Pagos Seguros', 'Inventario', 'Carritos'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'web-landing',
        title: 'Landing Pages',
        shortDescription: 'Páginas de alta conversión.',
        fullDescription: 'Páginas enfocadas en convertir visitantes en leads mediante copy persuasivo y diseño estratégico.',
        implementationPlan: [
            { step: 1, title: 'Estrategia', description: 'Copywriting.' },
            { step: 2, title: 'Diseño', description: 'Layout enfocado en CTA.' },
            { step: 3, title: 'Desarrollo', description: 'Pixeles seguimiento.' },
            { step: 4, title: 'A/B Testing', description: 'Optimización.' }
        ],
        features: ['Alta Conversión', 'Copywriting', 'Carga Rápida', 'Analytics'],
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop'
      },
      {
        id: 'web-maint',
        title: 'Mantenimiento Web',
        shortDescription: 'Soporte continuo.',
        fullDescription: 'Planes de mantenimiento para asegurar seguridad, actualizaciones y uptime.',
        implementationPlan: [
            { step: 1, title: 'Auditoría', description: 'Revisión inicial.' },
            { step: 2, title: 'Backups', description: 'Copias automáticas.' },
            { step: 3, title: 'Actualizaciones', description: 'Parcheo seguridad.' },
            { step: 4, title: 'Monitoreo', description: 'Alertas 24/7.' }
        ],
        features: ['Seguridad', 'Actualizaciones', 'Monitoreo', 'Soporte'],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'lms',
    title: 'LMS Plataforma de aprendizaje',
    icon: AcademicCapIcon,
    subsections: [
      {
        id: 'lms-moodle',
        title: 'Plataforma Moodle',
        shortDescription: 'El estándar mundial en educación virtual.',
        fullDescription: 'Implementamos y personalizamos Moodle, asegurando escalabilidad para miles de estudiantes.',
        implementationPlan: [
            { step: 1, title: 'Instalación', description: 'Despliegue nube/local.' },
            { step: 2, title: 'Theming', description: 'Personalización visual.' },
            { step: 3, title: 'Académico', description: 'Cursos y matrículas.' },
            { step: 4, title: 'Capacitación', description: 'Entrenamiento.' }
        ],
        features: ['Open Source', 'Escalable', 'Evaluaciones', 'Videoconferencia'],
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2067&auto=format&fit=crop'
      },
      {
        id: 'lms-gam',
        title: 'Gamificación',
        shortDescription: 'Mecánicas de juego para retención.',
        fullDescription: 'Integramos puntos, niveles, insignias y rankings para motivar el aprendizaje.',
        implementationPlan: [
            { step: 1, title: 'Mecánicas', description: 'Definición reglas.' },
            { step: 2, title: 'Badges', description: 'Diseño insignias.' },
            { step: 3, title: 'Integración', description: 'Plugins Moodle.' },
            { step: 4, title: 'Lanzamiento', description: 'Comunicación.' }
        ],
        features: ['Puntos y Niveles', 'Badges', 'Rankings', 'Retos'],
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop'
      },
      {
        id: 'lms-analytics',
        title: 'Analytics Educativo',
        shortDescription: 'Datos para calidad educativa.',
        fullDescription: 'Dashboards para identificar deserción y patrones de aprendizaje.',
        implementationPlan: [
            { step: 1, title: 'KPIs', description: 'Definición métricas.' },
            { step: 2, title: 'Data Mining', description: 'Extracción logs.' },
            { step: 3, title: 'Visualización', description: 'Reportes gráficos.' },
            { step: 4, title: 'Alertas', description: 'Avisos automáticos.' }
        ],
        features: ['Seguimiento', 'Predicción Deserción', 'Notas', 'Uso Recursos'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'lms-mobile',
        title: 'Mobile Learning',
        shortDescription: 'Aprendizaje en cualquier lugar.',
        fullDescription: 'Apps móviles oficiales o nativas para contenido offline y notificaciones.',
        implementationPlan: [
            { step: 1, title: 'Configuración', description: 'Servicios web LMS.' },
            { step: 2, title: 'Branding', description: 'Personalización App.' },
            { step: 3, title: 'Pruebas', description: 'iOS / Android.' },
            { step: 4, title: 'Tiendas', description: 'Publicación.' }
        ],
        features: ['Offline', 'Push', 'Responsive', 'Sincronización'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'lms-content',
        title: 'Creación de Contenido',
        shortDescription: 'Diseño instruccional multimedia.',
        fullDescription: 'Transformamos manuales en cursos interactivos SCORM y videos.',
        implementationPlan: [
            { step: 1, title: 'Guion', description: 'Pedagogía.' },
            { step: 2, title: 'Producción', description: 'Video/Diseño.' },
            { step: 3, title: 'Autoría', description: 'Empaquetado SCORM.' },
            { step: 4, title: 'QA', description: 'Revisión.' }
        ],
        features: ['SCORM', 'Interactivo', 'Diseño Instruccional', 'Descargable'],
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'grc',
    title: 'GRC Gobernanza, Riesgo y Cumplimiento',
    icon: ShieldCheckIcon,
    subsections: [
      {
        id: 'grc-gov',
        title: 'Gobernanza Corporativa',
        shortDescription: 'Estructura y transparencia.',
        fullDescription: 'Digitaliza gestión de políticas, comités y actas para asegurar alineamiento estratégico.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Diagnóstico', description: 'Evaluación estructura.' },
            { step: 2, title: 'Políticas', description: 'Biblioteca normativa.' },
            { step: 3, title: 'Comités', description: 'Agenda y actas.' },
            { step: 4, title: 'Tablero', description: 'Visualización.' }
        ],
        features: ['Políticas', 'Acuerdos', 'Portal Directores', 'Trazabilidad'],
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop'
      },
      {
        id: 'grc-risk',
        title: 'Gestión de Riesgos',
        shortDescription: 'Mitigación proactiva de amenazas.',
        fullDescription: 'Matrices de riesgo automatizadas para identificar y monitorear riesgos en tiempo real.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Parametrización', description: 'Escalas impacto/probabilidad.' },
            { step: 2, title: 'Inventario', description: 'Identificación riesgos.' },
            { step: 3, title: 'Mapas Calor', description: 'Generación automática.' },
            { step: 4, title: 'Planes', description: 'Seguimiento.' }
        ],
        features: ['Matriz Riesgos', 'Mapas Calor', 'KRI', 'Alertas'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'grc-comp',
        title: 'Cumplimiento Normativo',
        shortDescription: 'Adherencia a regulaciones.',
        fullDescription: 'Centraliza requisitos (ISO, GDPR, SOX), evidencias y fechas límite.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Normativas', description: 'Carga legal.' },
            { step: 2, title: 'Responsables', description: 'Asignación tareas.' },
            { step: 3, title: 'Evidencias', description: 'Repositorio.' },
            { step: 4, title: 'Dashboard', description: 'Estado cumplimiento.' }
        ],
        features: ['ISO / GDPR', 'Evidencias', 'Calendario', 'Checklists'],
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop'
      },
      {
        id: 'grc-audit',
        title: 'Auditoría Interna',
        shortDescription: 'Ciclo completo de auditoría.',
        fullDescription: 'Desde planificación anual hasta ejecución, informes y seguimiento de hallazgos.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Plan Anual', description: 'Programación.' },
            { step: 2, title: 'Papeles Trabajo', description: 'Pruebas digitales.' },
            { step: 3, title: 'Hallazgos', description: 'Registro.' },
            { step: 4, title: 'Seguimiento', description: 'Recomendaciones.' }
        ],
        features: ['Planificación', 'Papeles Trabajo', 'Informes', 'Seguimiento'],
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'grc-incident',
        title: 'Gestión de Incidentes',
        shortDescription: 'Respuesta ante eventos adversos.',
        fullDescription: 'Reporte, clasificación e investigación de incidentes de seguridad u operativos.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Reporte', description: 'Canales multicanal.' },
            { step: 2, title: 'Triage', description: 'Clasificación.' },
            { step: 3, title: 'Investigación', description: 'Evidencias.' },
            { step: 4, title: 'Lecciones', description: 'Prevención.' }
        ],
        features: ['Reporte', 'Causa Raíz', 'SLA', 'Confidencialidad'],
        image: 'https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'grc-vendor',
        title: 'Riesgos de Terceros',
        shortDescription: 'Control de proveedores.',
        fullDescription: 'Evalúe y monitoree a proveedores en seguridad y cumplimiento.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Cuestionarios', description: 'Due diligence.' },
            { step: 2, title: 'Scoring', description: 'Nivel riesgo.' },
            { step: 3, title: 'Contratos', description: 'SLAs.' },
            { step: 4, title: 'Auditoría', description: 'Revisiones.' }
        ],
        features: ['Due Diligence', 'Scoring', 'Portal Proveedores', 'Contratos'],
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop'
      },
      {
        id: 'grc-report',
        title: 'Reportes Regulatorios',
        shortDescription: 'Informes para autoridades.',
        fullDescription: 'Automatice la preparación de informes legales consolidando datos de varias áreas.',
        techBadge: 'Desarrollado con Claris FileMaker',
        implementationPlan: [
            { step: 1, title: 'Mapeo', description: 'Fuentes datos.' },
            { step: 2, title: 'Consolidación', description: 'Limpieza.' },
            { step: 3, title: 'Formatos', description: 'Plantillas ley.' },
            { step: 4, title: 'Envío', description: 'Validación.' }
        ],
        features: ['Reportes 1-clic', 'Formatos', 'Historial', 'Validación'],
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'data',
    title: 'Visualizacion avanzada de datos',
    icon: ChartPieIcon,
    subsections: [
      {
        id: 'data-dash',
        title: 'Dashboards en Tiempo Real',
        shortDescription: 'Control al instante.',
        fullDescription: 'Centros de comando visuales conectados a todas sus fuentes de datos.',
        implementationPlan: [
            { step: 1, title: 'Conexión', description: 'SQL / APIs.' },
            { step: 2, title: 'Modelado', description: 'Estructuración.' },
            { step: 3, title: 'Diseño', description: 'UX datos.' },
            { step: 4, title: 'Publicación', description: 'Web / TV.' }
        ],
        features: ['Tiempo real', 'Drill-down', 'Multi-fuente', 'Responsive'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'data-bi',
        title: 'Business Intelligence',
        shortDescription: 'Estrategia profunda.',
        fullDescription: 'Soluciones en Power BI o Tableau para revelar tendencias históricas.',
        implementationPlan: [
            { step: 1, title: 'Warehouse', description: 'Centralización.' },
            { step: 2, title: 'Métricas', description: 'KPIs.' },
            { step: 3, title: 'Reportes', description: 'Interactividad.' },
            { step: 4, title: 'Self-Service', description: 'Capacitación.' }
        ],
        features: ['Power BI / Tableau', 'Histórico', 'ETL', 'Seguridad'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
      },
      {
        id: 'data-mining',
        title: 'Minería de Datos',
        shortDescription: 'Patrones ocultos.',
        fullDescription: 'Algoritmos estadísticos para descubrir correlaciones no evidentes.',
        implementationPlan: [
            { step: 1, title: 'Exploración', description: 'Análisis inicial.' },
            { step: 2, title: 'Algoritmos', description: 'Clustering/Reglas.' },
            { step: 3, title: 'Modelos', description: 'Ejecución.' },
            { step: 4, title: 'Insights', description: 'Interpretación.' }
        ],
        features: ['Clustering', 'Fraude', 'Segmentación', 'Python/R'],
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop'
      },
      {
        id: 'data-predict',
        title: 'Reportes Predictivos',
        shortDescription: 'Anticipe el futuro.',
        fullDescription: 'Modelos predictivos para proyectar ventas e inventario.',
        implementationPlan: [
            { step: 1, title: 'Recolección', description: 'Datos históricos.' },
            { step: 2, title: 'Features', description: 'Variables.' },
            { step: 3, title: 'Validación', description: 'Backtesting.' },
            { step: 4, title: 'Uso', description: 'Integración.' }
        ],
        features: ['Forecast', 'Churn', 'Mantenimiento', 'Demanda'],
        image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop'
      },
      {
        id: 'data-maps',
        title: 'Mapas de Calor',
        shortDescription: 'Inteligencia geoespacial.',
        fullDescription: 'Visualice datos en mapas interactivos para optimizar territorios.',
        implementationPlan: [
            { step: 1, title: 'Geocodificación', description: 'Coordenadas.' },
            { step: 2, title: 'GIS', description: 'Mapbox/Google.' },
            { step: 3, title: 'Capas', description: 'Superposición.' },
            { step: 4, title: 'Interactividad', description: 'Filtros.' }
        ],
        features: ['Geomarketing', 'Territorios', 'Mapas', 'Regional'],
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2031&auto=format&fit=crop'
      }
    ]
  }
];