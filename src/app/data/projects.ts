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
    title: 'DocuValidate AI - Automatizacion PDF a Excel',
    period: '2026',
    category: 'Proyecto estrella',
    featured: true,
    description: 'Pipeline en Python para extraer, normalizar, consolidar y validar informacion desde certificados PDF contra libros maestros en Excel.',
    problem: 'La revision manual de certificados contra Excel era repetitiva, lenta y propensa a errores por diferencias de formato, unidades, tratamientos, fechas y nombres de empresas.',
    solution: 'Construccion de un flujo modular que detecta proveedor, extrae campos, normaliza texto, compara contra el libro maestro y genera reportes de inconsistencias en Excel.',
    impact: 'Reduce trabajo manual, mejora trazabilidad y convierte documentos no estructurados en datos auditables para revision operativa.',
    technologies: ['Python', 'Pandas', 'Regex', 'PDFPlumber', 'OCR', 'OpenPyXL', 'Excel']
  },
  {
    title: 'SAUL - Sistema de acompanamiento universitario',
    period: 'Universidad',
    category: 'Data / Software academico',
    description: 'Participacion en analisis de requisitos, diseno arquitectonico y desarrollo de software para un sistema orientado a detectar estudiantes en riesgo.',
    problem: 'La universidad necesitaba identificar estudiantes con bajo rendimiento o riesgo de desercion para generar alertas tempranas.',
    solution: 'Apoyo en arquitectura, analisis de datos, backend y bases de datos para organizar informacion academica y habilitar seguimiento.',
    impact: 'Sistema de apoyo a la toma de decisiones academicas y acompanamiento estudiantil.',
    technologies: ['Python', 'MongoDB', 'SQL', 'AWS', 'Analisis de datos']
  },
  {
    title: 'Keskol - Sitio web empresarial',
    period: 'Proyecto empresarial',
    category: 'Frontend / Cloud',
    description: 'Diseno y desarrollo de pagina web funcional para una marca de cafe, incluyendo estructura visual, hosting y dominio.',
    problem: 'La empresa necesitaba presencia digital profesional para mostrar productos, contacto y canales de atencion.',
    solution: 'Desarrollo de sitio responsive con secciones comerciales, botones de contacto y despliegue en la nube.',
    impact: 'Presencia digital funcional para negocio real, con una base escalable para contenido comercial.',
    technologies: ['Angular', 'HTML', 'CSS', 'AWS S3', 'Responsive Design']
  },
  {
    title: 'Bancolombia - Automatizacion de procesos internos',
    period: 'Practica profesional',
    category: 'Low-code / Automatizacion',
    description: 'Apoyo en soluciones internas, mejoras de procesos y automatizaciones para aplicativos corporativos.',
    problem: 'Existian procesos operativos que requerian intervencion manual, seguimiento repetitivo e integracion de informacion.',
    solution: 'Automatizacion de flujos, integracion de datos y soporte a herramientas internas usando Power Platform, SQL y Python.',
    impact: 'Mejora de eficiencia operativa y reduccion de tareas repetitivas en procesos internos.',
    technologies: ['PowerApps', 'PowerAutomate', 'SQL', 'Python']
  }
];
