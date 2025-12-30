// ARCHIVO: src/data/seoData.ts

export const siteSEO = {
    // Configuración Global (por defecto)
    global: {
        siteName: "StackSolver",
        siteUrl: "https://www.stacksolver.tech",
        defaultImage: "/og-image.png",
        author: "StackSolver Team",
        twitterHandle: "@stacksolver", // (Opcional, si tienen)

        // Palabras clave globales (aparecen en todas las páginas)
        keywords: [
            // Core Business
            "Consultoría Tecnológica",
            "Desarrollo de Software",
            "Inteligencia Artificial",
            "Transformación Digital",

            // Especialidad Claris FileMaker
            "Claris FileMaker Partner",
            "Desarrollador Claris FileMaker",
            "FileMaker Apps a la medida",
            "Consultor FileMaker Colombia",
            "Expertos FileMaker Latam",
            "Migración FileMaker",

            // Soluciones Empresariales
            "ERP Personalizado",
            "Software GRC",
            "Sistemas de Gestión a la Medida",
            "Gobierno Corporativo",
            "Automatización de Procesos",

            // Tech Stack Moderno
            "Astro Framework",
            "React Development",

            // Marca Personal / Legado
            "Viovelt",
            "Viovelt FileMaker",
            "Cursos Viovelt",

            // ISO & Cumplimiento (Nuevo)
            "Consultoría ISO 27001",
            "Implementación ISO 42001 AI",
            "Auditoría GRC",
            "Gestión del Cambio",

            // Servicios de Gestión (Nuevo)
            "Gestión de Procesos de Negocio",
            "Gestión de Proyectos Tecnológicos",
            "Desarrollo ERP Rust"
        ]
    },

    // Configuración específica por página
    pages: {
        home: {
            title: "StackSolver | Expertos en Claris FileMaker (+18 años), IA & ISO",
            description: "Desde Colombia para toda Latam (Perú, Chile, México). +18 años de experiencia en Claris FileMaker, implementación de ISO 27001/42001 y desarrollo de ERPs modernos.",
            keywords: [
                "Empresa de Software Colombia",
                "Soluciones Empresariales Chile",
                "Consultoría FileMaker Perú",
                "Asesoría ISO 27001 Latam",
                "Desarrollo de Apps Empresariales",
                "Modernización de Legacy Systems"
            ]
        },
        contact: {
            title: "Contacto | StackSolver",
            description: "Agenda una consultoría con expertos en Claris FileMaker (+18 años de experiencia) y Estrategia Digital.",
            keywords: ["Cotización FileMaker", "Consultoría Software Colombia", "Implementadores ISO"]
        }
        // Agrega más páginas aquí...
    }
};
