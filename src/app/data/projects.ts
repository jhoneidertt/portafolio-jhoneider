export interface Project {
  title: string;
  period: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  featured?: boolean;
  repository?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'DocuValidate AI — Automatización PDF → Excel',
    period: '2026',
    category: 'Proyecto estrella',
    featured: true,
    description: 'Sistema en Python para extraer, normalizar, consolidar y validar información desde certificados PDF contra libros maestros en Excel.',
    problem: 'La revisión manual de certificados contra Excel era repetitiva, lenta y propensa a errores por diferencias de formato, unidades, tratamientos, fechas y nombres de empresas.',
    solution: 'Construcción de un pipeline modular que detecta proveedor, extrae campos, normaliza texto, compara contra el libro maestro y genera reportes de errores en Excel.',
    impact: 'Reduce trabajo manual, mejora trazabilidad, detecta inconsistencias y convierte documentos no estructurados en datos auditables.',
    technologies: ['Python', 'Pandas', 'Regex', 'PDFPlumber', 'OCR', 'OpenPyXL', 'Excel']
  },
  {
    title: 'SAUL — Sistema de acompañamiento universitario',
    period: 'Universidad',
    category: 'Data / Software académico',
    description: 'Participación en análisis de requisitos, diseño arquitectónico y desarrollo de software para un sistema orientado a detectar posibles desertores y estudiantes en riesgo.',
    problem: 'La universidad necesitaba identificar estudiantes con bajo rendimiento o riesgo de deserción para generar alertas tempranas.',
    solution: 'Apoyo en diseño, arquitectura, análisis de datos y desarrollo usando tecnologías backend y bases de datos.',
    impact: 'Sistema de apoyo a la toma de decisiones académicas y seguimiento estudiantil.',
    technologies: ['Python', 'MongoDB', 'SQL', 'AWS', 'Análisis de datos']
  },
  {
    title: 'Keskol — Sitio web empresarial',
    period: 'Proyecto empresarial',
    category: 'Frontend / Cloud',
    description: 'Diseño y desarrollo de página web funcional para una marca de café, incluyendo estructura visual, hosting y dominio.',
    problem: 'La empresa necesitaba presencia digital profesional para mostrar productos, contacto y canales de atención.',
    solution: 'Desarrollo de sitio responsive con secciones comerciales, botones de contacto y despliegue en la nube.',
    impact: 'Presencia digital funcional para negocio real.',
    technologies: ['Angular', 'HTML', 'CSS', 'AWS S3', 'Responsive Design']
  },
  {
    title: 'Bancolombia — Automatización de procesos internos',
    period: 'Práctica profesional',
    category: 'Low-code / Automatización',
    description: 'Apoyo en soluciones internas, mejoras de procesos y automatizaciones para aplicativos corporativos.',
    problem: 'Existían procesos operativos que requerían intervención manual y seguimiento repetitivo.',
    solution: 'Automatización de flujos, integración de datos y soporte a herramientas internas.',
    impact: 'Mejora de eficiencia operativa y reducción de tareas repetitivas.',
    technologies: ['PowerApps', 'PowerAutomate', 'SQL', 'Python']
  }
];
