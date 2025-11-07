export interface Feature {
  title: string;
  description: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
}

export interface Service {
  id: string;
  displayTitle: string;
  subtitle: string;
  previewImageUrl: string;
  page: {
    title: string;
    description: string;
    features: Feature[];
  };
}

export const servicesData: Service[] = [
  // 1. Inteligencia Artificial
  {
    id: "ia-local",
    displayTitle: "Inteligencia Artificial Segura y LOCAL para empresas.",
    subtitle: "Usando Agentes, LLMs, y Ollama",
    previewImageUrl: "/images/services/preview-ai.jpg",
    page: {
      title: "IA Local, Segura y Enfocada en tus Resultados",
      description: "Llevamos la IA a tu empresa de forma práctica, manteniendo tus datos bajo tu control y entrenando modelos con tu propia información.",
      features: [
        {
          title: "IA 100% Local y Segura",
          description: "Utilizamos herramientas como Ollama para desplegar modelos de lenguaje en tu propia infraestructura. Tus datos nunca salen de tu control, garantizando máxima privacidad y seguridad.",
          media: { type: 'video', src: '/videos/features/ia-ollama.mp4', alt: 'Demostración de un modelo de IA corriendo localmente' }
        },
        {
          title: "Entrenamiento Personalizado",
          description: "Ajustamos y entrenamos los modelos con tus documentos, bases de datos y conocimiento interno. La IA habla el idioma de tu empresa y resuelve tus problemas específicos.",
          media: { type: 'image', src: '/images/features/ia-training.jpg', alt: 'Diagrama del proceso de entrenamiento de un modelo de IA' }
        },
        {
          title: "Automatización Inteligente",
          description: "Implementamos agentes de IA que automatizan tareas complejas, desde análisis de reportes y clasificación de documentos hasta la generación de respuestas para soporte al cliente.",
          media: { type: 'video', src: '/videos/features/ia-automation.mp4', alt: 'Animación de un agente de IA procesando documentos' }
        }
      ]
    }
  },
  // 2. Soluciones a Medida (FileMaker)
  {
    id: "filemaker-apps",
    displayTitle: "Soluciones empresariales a la medida.",
    subtitle: "Usando Claris FileMaker",
    previewImageUrl: "/images/services/preview-filemaker.jpg",
    page: {
      title: "Desarrollo a Medida con Claris FileMaker",
      description: "Creamos aplicaciones personalizadas que se amoldan perfectamente a tus procesos, desde ERPs y CRMs hasta soluciones específicas para tu industria.",
      features: [
        {
          title: "Sistemas GRC y ERP a tu Medida",
          description: "Gestiona reglas de negocio, riesgos, cumplimiento y todos los recursos de tu empresa en una única plataforma centralizada y diseñada para ti.",
          media: { type: 'image', src: '/images/features/filemaker-erp.jpg', alt: 'Dashboard de un sistema ERP hecho en Claris FileMaker' }
        },
        {
          title: "Gestión de Procesos y Proyectos",
          description: "Optimiza flujos de trabajo, controla tareas, asigna recursos y supervisa el avance de proyectos internos y externos con una herramienta visual e intuitiva.",
          media: { type: 'video', src: '/videos/features/filemaker-projects.mp4', alt: 'Video mostrando la gestión de un proyecto en FileMaker' }
        },
        {
          title: "Integración con tus Sistemas",
          description: "Conectamos tus aplicaciones FileMaker con otras herramientas que ya usas, creando un ecosistema tecnológico cohesivo y sin silos de información.",
          media: { type: 'image', src: '/images/features/filemaker-integration.jpg', alt: 'Esquema de integración de FileMaker con otras APIs' }
        }
      ]
    }
  },
  // 3. Diseño Web
  {
    id: "diseno-web",
    displayTitle: "Diseño Web Moderno y Funcional",
    subtitle: "Usando AWS & Astro Frameworks",
    previewImageUrl: "/images/services/preview-web.jpg",
    page: {
      title: "Diseño Web que Cautiva y Funciona",
      description: "Creamos experiencias web modernas y dinámicas con tecnología de punta como Astro, asegurando velocidad, innovación y resultados.",
      features: [
        {
          title: "Diseño Centrado en el Usuario",
          description: "Creamos sitios web que no solo se ven bien, sino que son fáciles de navegar y guían a tus visitantes hacia tus objetivos.",
          media: { type: 'image', src: '/images/features/web-design-ux.jpg', alt: 'Esquema de un diseño web centrado en la experiencia de usuario.' }
        },
        {
          title: "Rendimiento Superior con Astro",
          description: "Utilizamos Astro para construir sitios web ultrarrápidos, lo que se traduce en mejor SEO, usuarios más felices y mayores tasas de conversión.",
          media: { type: 'video', src: '/videos/features/web-performance.mp4', alt: 'Demostración de la velocidad de carga de un sitio hecho con Astro.' }
        },
        {
          title: "Portales Exclusivos para Clientes",
          description: "Ofrece a tus clientes un espacio privado y seguro donde pueden ver el avance de sus proyectos, costos actualizados y documentación relevante en tiempo real.",
          media: { type: 'image', src: '/images/features/web-portal.jpg', alt: 'Vista de un portal de clientes seguro y personalizado.' }
        }
      ]
    }
  },
  // 4. LMS
  {
    id: "plataformas-aprendizaje",
    displayTitle: "LMS Plataformas de Aprendizaje",
    subtitle: "Usando Moodle",
    previewImageUrl: "/images/services/preview-moodle.jpg",
    page: {
      title: "Capacitación que Inspira y Transforma",
      description: "Impulsa el conocimiento en tu organización con plataformas de aprendizaje virtual (LMS) dinámicas y efectivas basadas en Moodle.",
      features: [
        {
          title: "Experiencia Moderna e Intuitiva",
          description: "Diseñamos interfaces fáciles de usar para que el aprendizaje sea agradable y accesible para todos tus usuarios, en cualquier dispositivo.",
          media: { type: 'image', src: '/images/features/lms-interface.jpg', alt: 'Interfaz de un curso en Moodle con diseño moderno.' }
        },
        {
          title: "Aprendizaje Interactivo",
          description: "Creamos cursos con videos, cuestionarios, foros, tareas y actividades que realmente motivan y capturan la atención de los estudiantes.",
          media: { type: 'video', src: '/videos/features/lms-interactive.mp4', alt: 'Video de un estudiante interactuando con un cuestionario en Moodle.' }
        },
        {
          title: "Seguimiento Detallado del Progreso",
          description: "Mide la participación, el avance y la efectividad de tus programas de capacitación con herramientas analíticas y reportes personalizados.",
          media: { type: 'image', src: '/images/features/lms-analytics.jpg', alt: 'Gráficos de analíticas de progreso de estudiantes en un LMS.' }
        }
      ]
    }
  },
  // 5. GRC (Integración de Sistemas)
  {
    id: "integracion-sistemas",
    displayTitle: "Plataformas para GRC",
    subtitle: "Gobernanza, Riesgo y Cumplimiento",
    previewImageUrl: "/images/services/preview-grc.jpg",
    page: {
      title: "Datos que Fluyen, Decisiones que Impactan",
      description: "Conectamos tus diferentes sistemas (CRM, ERP, GRC) para que compartan información automáticamente, reduciendo errores y dándote una visión completa de tu negocio.",
      features: [
        {
          title: "Automatización de Flujos de Trabajo",
          description: "Utilizamos plataformas como Claris Connect, Make y Zapier para construir puentes robustos entre tus aplicaciones, eliminando tareas manuales.",
          media: { type: 'video', src: '/videos/features/integration-flow.mp4', alt: 'Animación de datos fluyendo entre diferentes aplicaciones.' }
        },
        {
          title: "Una Única Fuente de Verdad",
          description: "Consolida la información de toda tu empresa en un solo lugar, asegurando que todos los equipos trabajen con datos consistentes y actualizados.",
          media: { type: 'image', src: '/images/features/integration-dashboard.jpg', alt: 'Dashboard que consolida información de múltiples fuentes.' }
        },
        {
          title: "Conexión con el Mundo Físico (IoT)",
          description: "Capturamos datos de sensores y maquinaria (IoT) y los llevamos a tus sistemas de análisis para monitoreo, mantenimiento predictivo y optimización de operaciones.",
          media: { type: 'image', src: '/images/features/integration-iot.jpg', alt: 'Diagrama de sensores IoT enviando datos a una base de datos central.' }
        }
      ]
    }
  },
  // 6. Visualización de Datos
  {
    id: "visualizacion-datos",
    displayTitle: "Visualización Avanzada de Datos",
    subtitle: "Usando Looker Studio",
    previewImageUrl: "/images/services/preview-looker.jpg",
    page: {
      title: "Tus Datos, Claros Como el Agua",
      description: "Transformamos hojas de cálculo complejas y bases de datos en dashboards interactivos y visuales con Google Looker Studio que te muestran lo que realmente importa.",
      features: [
        {
          title: "Dashboards Interactivos",
          description: "Diseñamos informes y paneles que son claros, concisos y fáciles de interpretar. Filtra, explora y profundiza en tus datos con solo unos clics.",
          media: { type: 'video', src: '/videos/features/looker-interactive.mp4', alt: 'Video de un usuario interactuando con un dashboard de Looker Studio.' }
        },
        {
          title: "Conexión a Múltiples Fuentes",
          description: "Integramos datos de Google Sheets, Analytics, Ads, bases de datos SQL, CRMs y más, todo en una única vista consolidada.",
          media: { type: 'image', src: '/images/features/looker-sources.jpg', alt: 'Diagrama mostrando varias fuentes de datos conectándose a Looker Studio.' }
        },
        {
          title: "Decisiones Basadas en Hechos",
          description: "Accede a información actualizada en tiempo real para fundamentar tus estrategias, identificar tendencias y tomar acciones más efectivas.",
          media: { type: 'image', src: '/images/features/looker-kpi.jpg', alt: 'Un dashboard de Looker Studio mostrando KPIs clave de un negocio.' }
        }
      ]
    }
  }
];