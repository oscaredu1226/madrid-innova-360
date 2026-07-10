const GATES = ["G1", "G2", "G3", "G4", "G5"];
const GATE_META = {
  G1: { label: "Oportunidades", etapa: "Oportunidad", color: "var(--g1)", soft: "var(--g1-soft)" },
  G2: { label: "Ideas y conceptos", etapa: "Idea / Concepto", color: "var(--g2)", soft: "var(--g2-soft)" },
  G3: { label: "Iniciativas", etapa: "Iniciativa", color: "var(--g3)", soft: "var(--g3-soft)" },
  G4: { label: "Desarrollo", etapa: "Proyecto / MVP", color: "var(--g4)", soft: "var(--g4-soft)" },
  G5: { label: "Despliegue", etapa: "Despliegue", color: "var(--g5)", soft: "var(--g5-soft)" },
};
const NAV = [
  ["inicio", "Inicio", "dashboard"], ["portafolio", "Portafolio", "briefcase"], ["oportunidades", "Oportunidades", "bulb"],
  ["ideas", "Ideas y conceptos", "sparkles"], ["iniciativas", "Iniciativas", "rocket"], ["desarrollo", "Desarrollo y MVP", "code"],
  ["despliegue", "Despliegue", "send"], ["evaluaciones", "Evaluaciones", "check"], ["comite", "Comité de Innovación", "users"],
  ["evidencias", "Evidencias", "file"], ["tareas", "Tareas", "list"], ["riesgos", "Riesgos", "shield"], ["reportes", "Reportes", "chart"],
  ["aprendizajes", "Aprendizajes", "grad"], ["administracion", "Administración", "settings"], ["bitacora", "Bitácora", "scroll"],
];
const ROLES = [
  ["proponente", "Proponente", "Registra oportunidades e ideas"], ["responsable", "Responsable de iniciativa", "Gestiona la iniciativa y su evidencia"],
  ["gestor", "Gestor del portafolio", "Realiza el triaje y prioriza el portafolio"], ["evaluador", "Evaluador", "Evalúa madurez y prioridad"],
  ["comite", "Miembro del Comité", "Participa en las sesiones y recomienda"], ["lider", "Líder de Innovación", "Registra la decisión final"],
  ["soporte", "Área de soporte", "Apoya el desarrollo y despliegue"], ["direccion", "Alta Dirección", "Visión estratégica del portafolio"],
  ["admin", "Administrador SGI", "Configura el sistema de gestión de innovación"],
];
const AREAS = ["Innovación y SG", "Operaciones", "Comercial", "Tecnología de la Información", "Talento Humano", "Administración y Finanzas", "Riesgos", "Legal", "Experiencia del Cliente", "Sostenibilidad", "Proyectos", "Postventa"];
const OBJETIVOS = [
  { id: "O1", texto: "Liderar la experiencia del cliente y generar confianza." },
  { id: "O2", texto: "Desarrollar soluciones innovadoras y sostenibles de alto impacto." },
  { id: "O3", texto: "Transformar digitalmente la operación y los procesos." },
  { id: "O4", texto: "Fortalecer el talento, la cultura y el propósito." },
  { id: "O5", texto: "Crear valor económico y social de manera sostenible." },
];
const DRIVERS = ["Clientes", "Transformación digital", "Procesos", "Sostenibilidad", "Cultura y talento", "Alianzas estratégicas"];
const TIPOS_EVIDENCIA = ["Entrevista", "Encuesta", "Benchmark", "Análisis de datos", "Feedback de cliente", "Prototipo", "Prueba técnica", "Análisis financiero", "Validación legal", "Análisis de riesgo", "Resultado de piloto", "Resultado de KPI", "Contrato", "Documento de arquitectura", "SRS", "Business case", "Presentación", "Acta de reunión"];
const DECISIONES = ["Avanzar", "Avanzar con ajustes", "Requiere más información", "Volver a validar", "Enviar a backlog", "Derivar a mejora continua", "Pausar", "Cerrar"];
const CATEGORIAS_RIESGO = ["Técnico", "Mercado", "Legal", "Operativo", "Financiero", "Adopción", "Reputacional", "Seguridad", "Datos"];

const seeds = [
  ["Automatización inteligente del proceso de postventa", "G2", "En evaluación", "Operaciones", "Innovación estratégica", 3.4, 4.3, "Medio", 820, 0, ["Procesos", "Transformación digital"], ["O1", "O3"], "Los reclamos de postventa se atienden de forma manual, generando demoras y baja satisfacción del cliente.", "Motor de automatización con clasificación asistida de reclamos y enrutamiento inteligente a los equipos responsables."],
  ["Portal digital para propietarios", "G3", "Activa", "Experiencia del Cliente", "Proyecto tecnológico", 3.8, 4.0, "Bajo", 640, 0, ["Clientes", "Transformación digital"], ["O1"], "Los propietarios no cuentan con un canal unificado para consultar el estado de su vivienda y trámites.", "Portal web y móvil con autoservicio de trámites, documentos y seguimiento de solicitudes."],
  ["Predicción de incidencias en edificios", "G3", "Activa", "Tecnología de la Información", "Innovación estratégica", 3.2, 3.9, "Alto", 910, 0, ["Transformación digital", "Sostenibilidad"], ["O2", "O3"], "El mantenimiento reactivo eleva costos y afecta la disponibilidad de los edificios.", "Modelo predictivo con datos de sensores para anticipar fallas y programar mantenimiento preventivo."],
  ["Optimización del consumo energético", "G4", "Activa", "Sostenibilidad", "Innovación incremental", 4.1, 3.7, "Medio", 550, 120, ["Sostenibilidad", "Procesos"], ["O2", "O5"], "El consumo energético de las áreas comunes supera los estándares de eficiencia.", "Sistema de monitoreo y control automatizado de iluminación y climatización."],
  ["Experiencia digital para visitas a proyectos", "G2", "En comité", "Comercial", "Innovación incremental", 3.0, 4.1, "Bajo", 470, 0, ["Clientes", "Transformación digital"], ["O1"], "Las visitas presenciales limitan el alcance comercial y la conversión.", "Recorridos virtuales inmersivos con agendamiento y seguimiento comercial integrado."],
  ["Sistema de seguimiento de entregas", "G4", "Bloqueada", "Proyectos", "Proyecto tecnológico", 3.6, 3.4, "Alto", 380, 0, ["Procesos"], ["O3"], "La entrega de viviendas carece de trazabilidad y control de hitos en tiempo real.", "Plataforma de seguimiento con checklist digital, evidencias y firma electrónica."],
  ["Asistente virtual para atención al cliente", "G3", "En evaluación", "Experiencia del Cliente", "Innovación estratégica", 3.3, 4.2, "Medio", 700, 0, ["Clientes", "Transformación digital"], ["O1", "O3"], "La atención al cliente se satura en horarios pico y consultas repetitivas.", "Asistente conversacional para resolver consultas frecuentes y derivar casos complejos."],
  ["Gemelo digital para mantenimiento", "G1", "Activa", "Tecnología de la Información", "Innovación abierta", 2.1, 3.5, "Alto", 1200, 0, ["Transformación digital", "Alianzas estratégicas"], ["O2", "O3"], "No existe una representación digital que integre el estado real de los activos.", "Gemelo digital de edificios para simulación, mantenimiento y eficiencia operativa."],
  ["Plataforma de proveedores sostenibles", "G2", "Activa", "Administración y Finanzas", "Innovación abierta", 2.8, 3.2, "Medio", 420, 0, ["Sostenibilidad", "Alianzas estratégicas"], ["O5"], "La selección de proveedores no incorpora criterios de sostenibilidad de forma sistemática.", "Plataforma de evaluación y homologación de proveedores con criterios ESG."],
  ["Mejora del proceso de separación de residuos", "G1", "Mejora continua", "Sostenibilidad", "Mejora continua", 2.4, 2.6, "Bajo", 180, 0, ["Sostenibilidad"], ["O5"], "La separación de residuos en los proyectos es inconsistente.", "Rediseño del proceso con puntos de acopio, señalética y sensibilización."],
  ["Analítica para decisiones comerciales", "G3", "Activa", "Comercial", "Proyecto tecnológico", 3.5, 3.8, "Medio", 590, 0, ["Transformación digital", "Clientes"], ["O1", "O3"], "Las decisiones comerciales se basan en información fragmentada.", "Tablero analítico con indicadores de conversión, demanda y precios."],
  ["Optimización de reclamos de clientes", "G5", "Activa", "Postventa", "Innovación incremental", 4.3, 4.0, "Bajo", 460, 310, ["Clientes", "Procesos"], ["O1"], "El ciclo de atención de reclamos es largo y poco transparente.", "Flujo optimizado con SLA, seguimiento y comunicación proactiva."],
  ["Sistema de trazabilidad de documentación", "G4", "Activa", "Legal", "Proyecto tecnológico", 3.7, 3.3, "Medio", 340, 0, ["Procesos"], ["O3"], "La documentación legal se dispersa entre áreas y sistemas.", "Repositorio con trazabilidad, versionado y control de accesos."],
  ["Modelo de evaluación de satisfacción", "G2", "Backlog", "Experiencia del Cliente", "Mejora continua", 2.6, 2.4, "Bajo", 150, 0, ["Clientes"], ["O1"], "No hay una medición homogénea de la satisfacción del cliente.", "Modelo NPS/CSAT con captura automatizada en puntos de contacto."],
  ["Automatización del control de calidad", "G3", "En evaluación", "Proyectos", "Innovación incremental", 3.1, 3.6, "Medio", 510, 0, ["Procesos", "Transformación digital"], ["O3"], "El control de calidad en obra depende de registros manuales.", "App de inspección con checklist, evidencias fotográficas y reportes automáticos."],
  ["Programa de innovación con proveedores", "G1", "Activa", "Innovación y SG", "Innovación abierta", 1.9, 3.0, "Medio", 260, 0, ["Alianzas estratégicas", "Cultura y talento"], ["O4"], "No existe un mecanismo estructurado para co-crear con proveedores.", "Programa de retos de innovación abierta con proveedores estratégicos."],
  ["Dashboard de sostenibilidad de proyectos", "G4", "Activa", "Sostenibilidad", "Proyecto tecnológico", 3.9, 3.5, "Bajo", 300, 80, ["Sostenibilidad", "Transformación digital"], ["O5"], "Los indicadores de sostenibilidad no se consolidan por proyecto.", "Tablero con métricas ambientales, sociales y de gobernanza por proyecto."],
  ["Predicción de demanda inmobiliaria", "G1", "Cerrada", "Comercial", "Innovación estratégica", 2.0, 2.2, "Alto", 700, 0, ["Transformación digital"], ["O2"], "La estimación de demanda es imprecisa y tardía.", "Modelo predictivo con variables de mercado y comportamiento del cliente."],
];
const responsables = ["Lucía Paredes", "Diego Salazar", "Ana Milagros Cárdenas", "Fernando Loayza", "Rosa Elena Quispe"];
const sponsors = ["Gerente de Operaciones", "Gerente Comercial", "Gerente de TI", "Gerente de Sostenibilidad", "Gerente de Experiencia del Cliente"];

let state = {
  authed: false,
  role: "gestor",
  usuario: "María Fernanda Ríos",
  page: "inicio",
  detailId: "INI-001",
  mobileOpen: false,
  oportunidadPaso: 0,
  oportunidadEnviada: false,
  ideaTexto: "",
  q: {},
  tabs: {},
  comiteSesion: false,
  comiteIdx: 0,
  iniciativas: [],
};

function initData() {
  state.iniciativas = seeds.map((s, i) => {
    const [nombre, gate, estado, area, tipo, madurez, prioridad, riesgo, valorEsperado, valorRealizado, drivers, objetivos, problema, solucion] = s;
    const num = String(i + 1).padStart(3, "0");
    const etapa = ["Oportunidad", "Idea", "Iniciativa", "Proyecto / MVP", "Despliegue"][GATES.indexOf(gate)];
    const responsable = responsables[i % responsables.length];
    return {
      id: `INI-${num}`,
      codigo: `MI-2024-${num}`,
      nombre, gate, estado, area, tipo, madurez, prioridad, riesgo, valorEsperado, valorRealizado, drivers, objetivos, problema, solucion,
      etapa, responsable, sponsor: sponsors[i % sponsors.length],
      modalidad: ["Desarrollo interno", "Co-desarrollo colaborativo", "Alianzas y venture client", "Innovación abierta y retos"][i % 4],
      completitudEvidencia: Math.min(100, Math.round(40 + madurez * 12)),
      actualizado: `2025-0${(i % 7) + 1}-1${i % 9}`,
      proximaDecision: gate === "G5" ? "Cierre y captura de valor" : `Revisión de ${gate} a siguiente gate`,
      descripcion: `${solucion} Esta iniciativa busca generar valor sostenible y centrado en las personas para Madrid Inmobiliaria.`,
      evidencias: [
        { id: `${num}-e1`, nombre: "Entrevistas a usuarios clave", tipo: "Entrevista", version: "1.2", autor: responsable, fecha: "2025-03-10", gate: "G1", requisito: "Comprender el problema", estado: "Validada", validador: "María Fernanda Ríos", confidencialidad: "Interna" },
        { id: `${num}-e2`, nombre: "Benchmark de soluciones del mercado", tipo: "Benchmark", version: "1.0", autor: "Diego Salazar", fecha: "2025-03-18", gate: "G2", requisito: "Analizar alternativas", estado: "Pendiente de validación", confidencialidad: "Interna" },
        { id: `${num}-e3`, nombre: "Business case preliminar", tipo: "Business case", version: "0.9", autor: "Fernando Loayza", fecha: "2025-04-02", gate: "G2", requisito: "Estimar valor", estado: i % 3 === 0 ? "Borrador" : "Validada", confidencialidad: "Confidencial" },
      ],
      decisiones: decisiones(gate, responsable),
      riesgos: [
        { id: `${num}-r1`, descripcion: "Adopción insuficiente por parte de los usuarios finales", categoria: "Adopción", probabilidad: 3, impacto: riesgo === "Alto" ? 4 : 3, responsable, mitigacion: "Plan de gestión del cambio y capacitación temprana", estado: "En tratamiento" },
        { id: `${num}-r2`, descripcion: "Integración con sistemas legados", categoria: "Técnico", probabilidad: riesgo === "Alto" ? 4 : 2, impacto: 4, responsable: "Diego Salazar", mitigacion: "Prueba de concepto de integración en fase temprana", estado: "Abierto" },
      ],
      kpis: [
        { id: `${num}-k1`, nombre: "Tiempo de respuesta", tipo: "Eficiencia operativa", unidad: "días", lineaBase: 12, objetivo: 5, actual: valorRealizado > 0 ? 7 : 12, responsable },
        { id: `${num}-k2`, nombre: "Satisfacción del cliente", tipo: "Experiencia del cliente", unidad: "% CSAT", lineaBase: 72, objetivo: 88, actual: valorRealizado > 0 ? 81 : 72, responsable: "Ana Milagros Cárdenas" },
      ],
      gateEstados: gateEstados(gate),
    };
  });
}
function gateEstados(gate) {
  const idx = GATES.indexOf(gate);
  return Object.fromEntries(GATES.map((g, i) => [g, i < idx ? "Completado" : i === idx ? "Actual" : "Pendiente"]));
}
function decisiones(gate, responsable) {
  const out = [];
  for (let i = 0; i < GATES.indexOf(gate); i++) out.push({
    id: `dec-${GATES[i]}-${responsable}`, gate: GATES[i], fecha: `2025-0${i + 1}-15`, resultado: "Avanzar",
    responsable: "Carlos Bustamante", recomendacionComite: "Recomendar avanzar", criterios: "Madurez y prioridad por encima del umbral del gate",
    comentarios: "La evidencia respalda el avance a la siguiente etapa.", proximaAccion: "Preparar evidencias del siguiente gate", proximoResponsable: responsable,
  });
  return out;
}
const APRENDIZAJES = [
  { id: "ap1", titulo: "La validación temprana reduce el retrabajo en desarrollo", contexto: "Piloto de automatización en postventa", queFunciono: "Entrevistar a usuarios antes de diseñar la solución", queNo: "Asumir requisitos sin evidencia", recomendacion: "Priorizar la fase de empatía en todo gate G1", reutilizacion: "Alta", tags: ["validación", "postventa", "empatía"], area: "Operaciones", gate: "G2", autor: "Lucía Paredes", fecha: "2025-04-20", vecesReutilizado: 7 },
  { id: "ap2", titulo: "Los pilotos acotados aceleran la decisión del comité", contexto: "Optimización de reclamos", queFunciono: "Definir un alcance pequeño y medible", queNo: "Intentar cubrir todos los casos desde el inicio", recomendacion: "Diseñar MVP con métricas claras", reutilizacion: "Alta", tags: ["MVP", "piloto", "comité"], area: "Postventa", gate: "G4", autor: "Rosa Elena Quispe", fecha: "2025-05-05", vecesReutilizado: 5 },
  { id: "ap3", titulo: "La gestión del cambio determina la adopción", contexto: "Portal digital para propietarios", queFunciono: "Involucrar a las áreas usuarias desde G3", queNo: "Comunicar el cambio solo al final", recomendacion: "Incluir plan de adopción como evidencia obligatoria en G4", reutilizacion: "Media", tags: ["adopción", "cambio", "clientes"], area: "Experiencia del Cliente", gate: "G3", autor: "Ana Milagros Cárdenas", fecha: "2025-05-18", vecesReutilizado: 3 },
];
const BITACORA = [
  ["María Fernanda Ríos", "Gestor del portafolio", "Registró la oportunidad", "INI-001 · Automatización de postventa", "2025-03-01 09:12", "", "Borrador"],
  ["Diego Salazar", "Evaluador", "Envió evaluación de madurez", "INI-001", "2025-04-10 15:40", "", "3.4 / 5"],
  ["Ana Milagros Cárdenas", "Miembro del Comité", "Registró recomendación del comité", "INI-001", "2025-04-22 11:05", "", "Recomendar avanzar con ajustes"],
  ["Carlos Bustamante", "Líder de Innovación", "Registró decisión final", "INI-001", "2025-04-25 10:30", "G1", "G2"],
  ["Lucía Paredes", "Responsable de iniciativa", "Subió evidencia", "INI-001 · Business case", "2025-04-02 16:20", "", "Business case v0.9"],
  ["Fernando Loayza", "Evaluador", "Actualizó KPI", "INI-012 · Optimización de reclamos", "2025-05-12 08:55", "72% CSAT", "81% CSAT"],
].map((e, i) => ({ id: `ev${i}`, usuario: e[0], rol: e[1], accion: e[2], entidad: e[3], fecha: e[4], valorAnterior: e[5], valorNuevo: e[6] }));

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[c]);
const LOGO_URL = "https://madridinmobiliaria.pe/img/svg/logo.svg";
const fmtM = (n) => `S/ ${(n / 1000).toFixed(1)}M`;
const sum = (arr, fn) => arr.reduce((s, x) => s + fn(x), 0);
const roleName = () => ROLES.find((r) => r[0] === state.role)?.[1] || "Gestor del portafolio";

function icon(name, cls = "icon") {
  const paths = {
    dashboard: '<path d="M3 13h8V3H3v10Zm10 8h8V3h-8v18ZM3 21h8v-6H3v6Z"/>',
    briefcase: '<path d="M9 6V4h6v2"/><path d="M3 7h18v12H3z"/><path d="M3 12h18"/>',
    bulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8 14a6 6 0 1 1 8 0c-1 1-1.5 2-1.5 3h-5c0-1-.5-2-1.5-3Z"/>',
    sparkles: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M5 17l.8 2.2L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-.8L5 17Z"/>',
    rocket: '<path d="M4.5 16.5c-1 1-1.5 2.5-1.5 4.5 2 0 3.5-.5 4.5-1.5"/><path d="M9 15l-4-4 5-5c3-3 7-3 10-3 0 3 0 7-3 10l-5 5-3-3Z"/><path d="M15 9h.01"/><path d="M8 16l-2 5"/>',
    code: '<path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 4-4 16"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 16V9M12 16V5M17 16v-3"/>',
    grad: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    settings: '<path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6V20a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.2.35.4.65.6 1h.1a2 2 0 1 1 0 4H20a1.7 1.7 0 0 0-.6 1Z"/>',
    scroll: '<path d="M8 21h8"/><path d="M12 21V7"/><path d="M17 7H7a4 4 0 0 0 0 8h10a4 4 0 0 0 0-8Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8 12 3 7 8"/><path d="M12 3v12"/>',
    play: '<path d="M8 5v14l11-7Z"/>',
  };
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.dashboard}</svg>`;
}

function logo(dark = false, product = true) {
  return `<div class="logo ${dark ? "dark" : ""}">
    <img class="logo-img" src="${LOGO_URL}" alt="Madrid Inmobiliaria" loading="eager" decoding="async">
    ${product ? `<div class="logo-product">Innova 360</div>` : ""}
  </div>`;
}
function gateBadge(g) {
  const m = GATE_META[g];
  return `<span class="badge uc" style="background:${m.soft};color:${m.color}"><span class="gate-dot" style="background:${m.color}"></span>${g} · ${m.label}</span>`;
}
function estadoBadge(e) {
  const map = { Activa: "var(--info)", Bloqueada: "var(--danger)", "En evaluación": "var(--warning)", "En comité": "var(--g2)", Backlog: "var(--muted-foreground)", Cerrada: "var(--muted-foreground)", "Mejora continua": "var(--g5)" };
  const c = map[e] || "var(--muted-foreground)";
  return `<span class="badge uc" style="background:color-mix(in oklch, ${c}, transparent 86%);color:${c}">${esc(e)}</span>`;
}
function riesgoBadge(n) {
  const c = n === "Alto" ? "var(--danger)" : n === "Medio" ? "var(--warning)" : "var(--success)";
  return `<span class="badge uc" style="background:color-mix(in oklch, ${c}, transparent 86%);color:${c}">Riesgo ${n}</span>`;
}
function section(title, desc = "", action = "") {
  return `<div class="section-title"><div><h2>${esc(title)}</h2>${desc ? `<p>${esc(desc)}</p>` : ""}</div>${action ? `<div class="actions">${action}</div>` : ""}</div>`;
}
function kpi(label, value, iconName = "chart", opts = {}) {
  const color = opts.color || "var(--madrid)";
  return `<div class="card kpi">
    <div class="kpi-head"><span class="kpi-label uc">${esc(label)}</span><span class="kpi-bubble" style="background:color-mix(in oklch, ${color}, transparent 86%);color:${color}">${icon(iconName)}</span></div>
    <div class="kpi-value" ${typeof value === "number" ? `data-count="${value}"` : ""}>${esc(value)}</div>
    ${opts.hint || opts.trend ? `<div class="kpi-hint">${opts.trend ? `<span class="${opts.down ? "trend-down" : "trend-up"}">${esc(opts.trend)}</span>` : ""}${opts.hint ? `<span>${esc(opts.hint)}</span>` : ""}</div>` : ""}
  </div>`;
}
function toast(title, desc = "") {
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `<b>${esc(title)}</b>${desc ? `<span>${esc(desc)}</span>` : ""}`;
  $("#toast-region").appendChild(t);
  setTimeout(() => t.remove(), 3400);
}
function setPage(page, extra) {
  state.page = page;
  state.mobileOpen = false;
  if (extra?.id) state.detailId = extra.id;
  render();
}

function render() {
  const app = $("#app");
  if (!state.authed) app.innerHTML = loginView();
  else app.innerHTML = shellView();
  bind();
}
function loginView() {
  const demos = [
    ["gestor", "Gestor del portafolio", "María Fernanda Ríos"], ["lider", "Líder de Innovación", "Carlos Bustamante"],
    ["comite", "Miembro del Comité", "Ana Milagros Cárdenas"], ["proponente", "Proponente", "Rosa Elena Quispe"],
  ];
  return `<div class="login">
    <div class="brand-panel">${logo(true, true)}${networkSvg()}<div class="brand-copy"><h1>Innovación que crea valor.</h1><h1 class="accent">Valor que crea hogares felices.</h1><p>Registros de innovación vivos y conectados. Una única fuente de verdad para transformar oportunidades en valor, de la mano de MadridLab.</p></div><p class="tiny" style="position:relative;z-index:1;color:rgba(255,255,255,.42)">Madrid Inmobiliaria · Sistema de Gestión de Innovación</p></div>
    <div class="login-panel"><div class="login-box">
      <div class="hidden-mobile" style="margin-bottom:28px">${logo(false, true)}</div>
      <h2 style="margin:0 0 4px;font-size:25px">Bienvenido</h2>
      <p class="small muted" style="margin:0 0 24px">Ingresa a Madrid Innova 360 para gestionar el portafolio de innovación.</p>
      <form class="form-stack" data-action="login">
        <div><label class="label">Correo</label><input class="input" type="email" value="usuario@madrid.pe" required></div>
        <div><label class="label">Contraseña</label><input class="input" type="password" value="demo1234" required></div>
        <button class="btn" style="width:100%">Ingresar</button>
      </form>
      <div class="actions tiny uc muted" style="margin:24px 0;justify-content:center"><span style="height:1px;background:var(--border);flex:1"></span>Ingresar como usuario demo<span style="height:1px;background:var(--border);flex:1"></span></div>
      <div class="demo-grid">${demos.map(d => `<button class="demo-card" data-login-role="${d[0]}" data-user="${esc(d[2])}"><div style="display:flex;align-items:center;justify-content:space-between"><span class="tiny uc" style="color:var(--madrid);font-weight:800">${d[1]}</span>${icon("right")}</div><div class="small" style="margin-top:5px;font-weight:700">${d[2]}</div></button>`).join("")}</div>
      <p class="tiny muted" style="text-align:center;margin-top:24px">Prototipo de demostración. La información es simulada y no reemplaza los sistemas productivos.</p>
    </div></div>
  </div>`;
}
function networkSvg() {
  return `<svg class="network" aria-hidden="true"><defs><pattern id="net" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="1.5" fill="white"/><line x1="4" y1="4" x2="60" y2="30" stroke="white" stroke-width=".3"/><line x1="4" y1="4" x2="30" y2="60" stroke="white" stroke-width=".3"/></pattern></defs><rect width="100%" height="100%" fill="url(#net)"/></svg>`;
}
function shellView() {
  const current = state.page === "detalle" ? "Iniciativa" : (NAV.find(n => n[0] === state.page)?.[1] || "Inicio");
  return `<div class="app-shell">
    <aside class="sidebar desktop">${sidebar()}</aside>
    ${state.mobileOpen ? `<div class="drawer-backdrop" data-action="close-drawer"></div><aside class="sidebar drawer">${sidebar()}</aside>` : ""}
    <div class="content">
      <header class="topbar">
        <button class="btn ghost icon-btn mobile-menu" data-action="open-drawer" aria-label="Abrir menú">${icon("menu")}</button>
        <div class="breadcrumb"><button class="btn ghost sm" data-page="inicio">Inicio</button>${state.page !== "inicio" ? `<span>/</span><b>${esc(current)}</b>` : ""}</div>
        <div class="searchbox">${icon("search")}<input class="input" placeholder="Buscar en el portafolio..." data-global-search></div>
        <button class="btn sm" data-page="oportunidades">${icon("plus")}<span class="hide-sm">Registrar oportunidad</span></button>
        <div class="dropdown"><button class="btn ghost icon-btn" data-toggle="notif">${icon("bell")}<span style="position:absolute;width:8px;height:8px;background:var(--madrid);border-radius:99px;margin-left:12px;margin-top:-12px"></span></button><div class="dropdown-panel hidden" id="notif-panel"><b class="tiny uc muted" style="display:block;padding:8px">Notificaciones</b>${["El Comité recomienda avanzar con ajustes la iniciativa de postventa.", "Faltan 2 evidencias para completar el gate G2.", "Se creó una nueva tarea para el responsable de la iniciativa.", "La decisión final de INI-001 fue registrada correctamente."].map(n => `<button class="dropdown-item">${n}</button>`).join("")}</div></div>
        <div class="dropdown"><button class="btn ghost" data-toggle="profile"><span class="avatar">${initials(state.usuario)}</span><span class="hide-sm" style="text-align:left"><b class="small">${esc(state.usuario)}</b><br><span class="badge tiny">${esc(roleName())}</span></span></button><div class="dropdown-panel hidden" id="profile-panel">${ROLES.map(r => `<button class="dropdown-item" data-role="${r[0]}">${r[1]} ${state.role === r[0] ? "✓" : ""}</button>`).join("")}<hr style="border:0;border-top:1px solid var(--border)"><button class="dropdown-item" data-action="logout">Cerrar sesión</button></div></div>
      </header>
      <main class="main"><div class="page">${pageView()}</div></main>
    </div>
  </div>`;
}
function sidebar() {
  return `<div class="sidebar-head">${logo(true, true)}</div><nav class="sidebar-nav">${NAV.map(n => `<button class="nav-item ${state.page === n[0] || (state.page === "detalle" && n[0] === "iniciativas") ? "active" : ""}" data-page="${n[0]}">${icon(n[2], "nav-icon")}<span>${n[1]}</span></button>`).join("")}</nav><div class="sidebar-foot">Sistema de Gestión de Innovación · MadridLab<div style="margin-top:4px;font-weight:800;color:rgba(255,255,255,.7)">Crear hogares felices.</div></div>`;
}
function pageView() {
  const map = { inicio, portafolio, oportunidades, ideas, iniciativas, desarrollo, despliegue, evaluaciones, comite, evidencias, tareas, riesgos, reportes, aprendizajes, administracion, bitacora, detalle };
  return (map[state.page] || inicio)();
}

function inicio() {
  const iniciativas = state.iniciativas;
  const activas = iniciativas.filter(i => !["Cerrada", "Backlog"].includes(i.estado)).length;
  const bloqueadas = iniciativas.filter(i => i.estado === "Bloqueada").length;
  const valorEsp = sum(iniciativas, i => i.valorEsperado);
  const valorReal = sum(iniciativas, i => i.valorRealizado);
  const porGate = GATES.map(g => ({ name: g, value: iniciativas.filter(i => i.gate === g).length, color: GATE_META[g].color }));
  const porDriver = DRIVERS.map((d, i) => ({ name: d, value: iniciativas.filter(x => x.drivers.includes(d)).length, color: [`var(--g1)`, `var(--g2)`, `var(--g3)`, `var(--g4)`, `var(--g5)`, `var(--value)`][i] }));
  const madurez = [1, 2, 3, 4, 5].map(n => ({ name: `Nivel ${n}`, value: iniciativas.filter(i => Math.round(i.madurez) === n).length }));
  const valorComp = GATES.map(g => ({ name: g, esperado: sum(iniciativas.filter(i => i.gate === g), i => i.valorEsperado), realizado: sum(iniciativas.filter(i => i.gate === g), i => i.valorRealizado) }));
  const atencion = iniciativas.filter(i => i.estado === "Bloqueada" || i.completitudEvidencia < 55).slice(0, 4);
  return `<div class="space">
    <div class="hero"><div><p class="tiny uc">${esc(roleName())} · jueves, 10 de julio</p><h1>Hola, ${esc(state.usuario)}</h1><p>Convierte oportunidades en valor sostenible. Cada iniciativa tiene un registro 360° vivo, trazable y auditable.</p></div><div class="actions"><button class="btn secondary" data-detail="INI-001">${icon("play")}Iniciar recorrido demo</button><button class="btn white" data-page="oportunidades">${icon("rocket")}Registrar oportunidad</button></div></div>
    <div class="grid cols-4">${kpi("Iniciativas activas", activas, "rocket", { trend: "+3", hint: "este mes" })}${kpi("Decisiones pendientes", 5, "check", { color: "var(--warning)", hint: "requieren gate" })}${kpi("Evidencias faltantes", 8, "file", { color: "var(--info)" })}${kpi("Iniciativas bloqueadas", bloqueadas, "shield", { color: "var(--danger)" })}${kpi("Tareas vencidas", 4, "list", { color: "var(--danger)" })}${kpi("Valor esperado", fmtM(valorEsp), "chart", { color: "var(--success)" })}${kpi("Valor realizado", fmtM(valorReal), "check", { color: "var(--g5)" })}${kpi("Tiempo prom. decisión", "14 días", "dashboard", { color: "var(--g3)", trend: "-2 d", down: true })}</div>
    <div class="grid cols-3 dash"><div class="card pad span-2">${section("Iniciativas por gate", "Distribución del portafolio en el modelo G1-G5")}${barChart(porGate, 240)}</div><div class="card pad">${section("Por driver estratégico")}${donutChart(porDriver)}</div></div>
    <div class="grid cols-3"><div class="card pad">${section("Distribución de madurez")}${hBarChart(madurez)}</div><div class="card pad">${section("Valor esperado vs realizado", "miles de S/")}${groupBar(valorComp)}</div><div class="card pad">${section("Transiciones de gate por mes")}${lineChart([{name:"Ene",value:2},{name:"Feb",value:3},{name:"Mar",value:5},{name:"Abr",value:4},{name:"May",value:6},{name:"Jun",value:5}])}</div></div>
    <div class="grid cols-3 dash"><div class="card pad span-2">${section("Iniciativas que requieren atención")}${atencion.map(i => `<button class="demo-card" style="width:100%;margin-bottom:8px" data-detail="${i.id}"><div class="actions">${gateBadge(i.gate)}${estadoBadge(i.estado)}</div><div style="margin-top:6px;font-weight:800">${esc(i.nombre)}</div><div class="small muted">Evidencia ${i.completitudEvidencia}% · Responsable: ${esc(i.responsable)}</div></button>`).join("")}</div><div class="card pad" style="border-color:color-mix(in oklch,var(--madrid),transparent 70%);background:color-mix(in oklch,var(--madrid-soft),transparent 60%)"><h3 style="margin-top:0;color:var(--madrid)">${icon("sparkles")} Recomendaciones del asistente</h3><p class="tiny muted">Asistencia simulada. No reemplaza la evaluación humana ni la decisión de los líderes.</p><div class="space small"><p class="card pad"><b>Recomendación:</b> Preparar la iniciativa de postventa para el próximo comité.</p><p class="card pad"><b>Hallazgo:</b> 3 iniciativas de G3 tienen evidencia por debajo del 55%.</p><p class="card pad"><b>Posible riesgo:</b> El sistema de seguimiento de entregas está bloqueado hace 12 días.</p></div></div></div>
  </div>`;
}

function portafolio() {
  const q = state.q.portafolio || "";
  const gate = state.q.gate || "todos";
  const filtradas = state.iniciativas.filter(i => (gate === "todos" || i.gate === gate) && (i.nombre.toLowerCase().includes(q.toLowerCase()) || i.codigo.toLowerCase().includes(q.toLowerCase())));
  const tab = state.tabs.portafolio || "tabla";
  return `<div>${section("Portafolio de innovación", "Una única fuente de verdad para todas las iniciativas de Madrid Inmobiliaria", `<button class="btn outline sm" data-toast="Exportación simulada">${icon("upload")}Exportar</button><button class="btn sm" data-toast="Comité en preparación">${icon("users")}Preparar comité</button>`)}
    <div class="actions" style="margin-bottom:14px"><div class="field-search" style="position:relative;flex:1;min-width:240px">${icon("search")}<input class="input" placeholder="Buscar por nombre o código..." value="${esc(q)}" data-q="portafolio"></div><select class="select" style="width:210px" data-filter-gate><option value="todos">Todos los gates</option>${GATES.map(g => `<option ${gate === g ? "selected" : ""} value="${g}">${g} · ${GATE_META[g].label}</option>`).join("")}</select><span class="badge">${filtradas.length} iniciativas</span></div>
    ${tabs("portafolio", ["tabla:Tabla", "tarjetas:Tarjetas", "etapas:Etapas"], tab)}
    <div class="tab-panel">${tab === "tabla" ? portafolioTabla(filtradas) : tab === "tarjetas" ? cardsIniciativas(filtradas) : etapas(filtradas)}</div></div>`;
}
function portafolioTabla(list) {
  return `<div class="card table-wrap"><table><thead><tr><th>Código</th><th>Nombre</th><th>Gate</th><th>Estado</th><th>Área</th><th>Responsable</th><th>Madurez</th><th>Prioridad</th><th>Riesgo</th><th style="text-align:right">Valor esp.</th></tr></thead><tbody>${list.map(i => `<tr class="clickable" data-detail="${i.id}"><td class="small">${i.codigo}</td><td><b>${esc(i.nombre)}</b></td><td>${gateBadge(i.gate)}</td><td>${estadoBadge(i.estado)}</td><td class="small muted">${esc(i.area)}</td><td class="small">${esc(i.responsable)}</td><td><b>${i.madurez.toFixed(1)}</b></td><td><b>${i.prioridad.toFixed(1)}</b></td><td>${riesgoBadge(i.riesgo)}</td><td style="text-align:right"><b>S/ ${i.valorEsperado}k</b></td></tr>`).join("")}</tbody></table></div>`;
}
function cardsIniciativas(list) {
  return `<div class="grid cols-3">${list.map(i => `<div class="card initiative-card clickable" data-detail="${i.id}"><div class="actions" style="justify-content:space-between">${gateBadge(i.gate)}${riesgoBadge(i.riesgo)}</div><h3>${esc(i.nombre)}</h3><p class="small muted line-clamp">${esc(i.problema)}</p><div class="actions small" style="justify-content:space-between;border-top:1px solid var(--border);padding-top:12px;margin-top:14px"><span class="muted">${esc(i.area)}</span><b>Prioridad ${i.prioridad.toFixed(1)}</b></div></div>`).join("")}</div>`;
}
function etapas(list) {
  return `<p class="small muted">Los gates no son estados arrastrables: representan decisiones formales trazables. Selecciona una iniciativa para registrar su decisión de gate.</p><div class="grid cols-5">${GATES.map(g => `<div class="kanban-col"><div style="margin-bottom:8px">${gateBadge(g)}</div>${list.filter(i => i.gate === g).map(i => `<div class="card pad clickable" style="margin-bottom:8px" data-detail="${i.id}"><b class="small">${esc(i.nombre)}</b><div class="tiny muted">${esc(i.responsable)}</div></div>`).join("")}</div>`).join("")}</div>`;
}

function oportunidades() {
  const pasos = ["Origen", "Problema o necesidad", "Contexto", "Personas afectadas", "Evidencia inicial", "Alineamiento estratégico", "Impacto potencial", "Revisión final"];
  if (state.oportunidadEnviada) {
    const sim = state.iniciativas.slice(0, 3).map((i, idx) => ({ ...i, sim: [82, 61, 47][idx] }));
    return `<div>${section("Análisis de similitud", "Detección simulada de iniciativas relacionadas antes de crear un nuevo registro")}<div class="card pad" style="border-color:color-mix(in oklch,var(--info),transparent 70%);background:color-mix(in oklch,var(--info),transparent 94%)"><b style="color:var(--info)">${icon("briefcase")} Encontramos 3 iniciativas similares</b><p class="small muted">Revisa si tu oportunidad puede vincularse a una iniciativa existente para evitar duplicados.</p></div><div class="space" style="margin-top:12px">${sim.map(s => `<div class="card pad actions" style="justify-content:space-between"><div><b>${esc(s.nombre)}</b><div class="small muted">Driver compartido: ${esc(s.drivers[0])} · Área: ${esc(s.area)}</div></div><div class="actions"><span class="badge" style="background:${s.sim > 70 ? "var(--danger)" : s.sim > 55 ? "var(--warning)" : "var(--muted-foreground)"};color:white">${s.sim}% similar</span><button class="btn outline sm">Vincular</button></div></div>`).join("")}</div><div class="actions" style="margin-top:16px"><button class="btn" data-action="oportunidad-reset">Continuar como nueva</button><button class="btn outline" data-toast="Propuesta de fusión enviada a triaje">Proponer fusión</button></div></div>`;
  }
  const paso = state.oportunidadPaso;
  const progress = Math.round(((paso + 1) / pasos.length) * 100);
  return `<div>${section("Registrar oportunidad", "Formulario guiado para capturar oportunidades de innovación")}<div class="grid dash" style="grid-template-columns:1fr 320px">
    <div class="card pad-lg"><div><div class="actions tiny" style="justify-content:space-between"><b class="uc" style="color:var(--madrid)">Paso ${paso + 1} de ${pasos.length}: ${pasos[paso]}</b><span class="muted">${progress}% completado</span></div><div class="progress" style="margin-top:6px"><span style="width:${progress}%"></span></div></div><div style="margin-top:18px">${oportunidadPaso(paso)}</div><div class="actions" style="justify-content:space-between;margin-top:24px"><button class="btn ghost" ${paso === 0 ? "disabled" : ""} data-action="paso-prev">Anterior</button>${paso < pasos.length - 1 ? `<button class="btn" data-action="paso-next">Continuar ${icon("right")}</button>` : `<button class="btn" data-action="oportunidad-send">${icon("check")}Enviar a triaje</button>`}</div></div>
    <div class="card pad" style="height:max-content;border-color:color-mix(in oklch,var(--madrid),transparent 70%);background:color-mix(in oklch,var(--madrid-soft),transparent 60%)"><h3 style="margin-top:0;color:var(--madrid)">${icon("sparkles")} Asistente Madrid Innova</h3><p class="tiny muted">Asistencia simulada para fines de demostración.</p><div class="grid">${["Mejorar redacción", "Detectar información faltante", "Sugerir pregunta HMW", "Resumir oportunidad"].map(a => `<button class="btn outline sm" data-toast="${a}">${icon("sparkles")}${a}</button>`).join("")}</div><p class="card pad small" style="margin-top:12px">Sugerencia: automatizar la programación de visitas técnicas para reducir tiempos de coordinación y mejorar la experiencia del propietario.</p></div>
  </div></div>`;
}
function oportunidadPaso(p) {
  const fields = [
    `<div class="form-stack"><div><label class="label">Título de la oportunidad</label><input class="input" value="Automatización de la programación de visitas técnicas"></div><div><label class="label">Origen</label><select class="select"><option>Detectada en la operación</option><option>Feedback de cliente</option></select></div><div><label class="label">Área</label><select class="select">${AREAS.map(a => `<option>${a}</option>`).join("")}</select></div></div>`,
    `<div class="form-stack"><div><label class="label">Descripción del problema</label><textarea class="textarea" rows="3">La coordinación de visitas técnicas es manual y genera reprogramaciones frecuentes.</textarea></div><div><label class="label">¿Cómo podríamos...?</label><input class="input" value="¿Cómo podríamos coordinar visitas técnicas de forma automática y clara?"></div></div>`,
    `<label class="label">Situación actual</label><textarea class="textarea" rows="4">Actualmente el proceso depende de llamadas y hojas de cálculo, sin trazabilidad.</textarea>`,
    `<label class="label">¿Quiénes se ven afectados?</label><textarea class="textarea" rows="3">Propietarios, equipo de postventa y técnicos de mantenimiento.</textarea>`,
    `<label class="label">Evidencia existente</label><textarea class="textarea" rows="3" placeholder="Adjunta encuestas, entrevistas o datos (carga simulada)..."></textarea><button class="btn outline sm" style="margin-top:8px">Adjuntar archivo (simulado)</button>`,
    `<div class="form-stack"><div><label class="label">Objetivo estratégico</label><select class="select">${OBJETIVOS.map(o => `<option>${o.id}: ${o.texto}</option>`).join("")}</select></div><div><label class="label">Driver estratégico</label><select class="select">${DRIVERS.map(d => `<option>${d}</option>`).join("")}</select></div></div>`,
    `<div class="grid cols-2"><div><label class="label">Impacto estimado</label><select class="select"><option>Alto</option><option>Medio</option><option>Bajo</option></select></div><div><label class="label">Urgencia</label><select class="select"><option>Media</option><option>Alta</option><option>Baja</option></select></div></div>`,
    `<div class="card pad"><h3 style="margin-top:0">Automatización de la programación de visitas técnicas</h3><p class="small muted">Revisa la información antes de enviar a triaje. Al enviar, se ejecutará un análisis de similitud.</p><div class="actions"><span class="badge">Operaciones</span><span class="badge outline">O1</span><span class="badge outline">Procesos</span></div></div>`,
  ];
  return fields[p];
}
function ideas() {
  const q = state.q.ideas || "";
  const list = state.iniciativas.filter(i => ["Idea", "Oportunidad", "Concepto"].includes(i.etapa)).filter(i => i.nombre.toLowerCase().includes(q.toLowerCase()));
  return `<div>${section("Banco de ideas", "Captura ligera de ideas y oportunidades tempranas")}<div class="card pad-lg"><h3 style="margin-top:0">${icon("bulb")} Registrar una idea rápida</h3><textarea class="textarea" rows="3" data-idea-text placeholder="Describe la idea en una o dos frases...">${esc(state.ideaTexto)}</textarea><div class="actions" style="margin-top:10px"><button class="btn" data-action="save-idea">Guardar idea</button><button class="btn outline" data-toast="Sugerencias del asistente generadas">${icon("sparkles")}Sugerir mejoras (IA)</button></div></div><div class="field-search" style="position:relative;max-width:380px;margin:16px 0">${icon("search")}<input class="input" data-q="ideas" value="${esc(q)}" placeholder="Buscar ideas..."></div>${cardsIniciativas(list)}</div>`;
}
function iniciativas() {
  const list = state.iniciativas.filter(i => GATES.indexOf(i.gate) >= 2 || i.estado === "Activa");
  return `<div>${section("Iniciativas", "Registros 360° activos del portafolio de innovación")}${cardsIniciativas(list)}</div>`;
}
function desarrollo() {
  const list = state.iniciativas.filter(i => i.gate === "G3" || i.gate === "G4" || i.etapa === "Proyecto / MVP");
  return `<div>${section("Desarrollo y MVP", "Iniciativas en construcción y pilotaje (G3-G4)")}<div class="grid cols-2">${list.map(i => `<div class="card pad-lg"><div class="actions" style="justify-content:space-between">${gateBadge(i.gate)}<span class="badge">${esc(i.etapa)}</span></div><h3>${icon("rocket")} ${esc(i.nombre)}</h3><p class="small muted line-clamp">${esc(i.solucion)}</p><div class="small actions" style="justify-content:space-between"><span class="muted">Evidencia del gate</span><b>${i.completitudEvidencia}%</b></div><div class="progress"><span style="width:${i.completitudEvidencia}%"></span></div><div class="grid cols-3" style="margin-top:12px">${[["Madurez", i.madurez.toFixed(1)], ["Riesgo", i.riesgo], ["Valor esp.", `S/ ${i.valorEsperado}k`]].map(x => `<div class="metric"><div class="metric-label">${x[0]}</div><div class="metric-value">${x[1]}</div></div>`).join("")}</div><p class="tiny muted">Responsable: ${esc(i.responsable)} · Próxima decisión: ${esc(i.proximaDecision)}</p></div>`).join("")}</div></div>`;
}
function despliegue() {
  const list = state.iniciativas.filter(i => i.gate === "G5" || i.estado === "Mejora continua" || i.etapa === "Despliegue");
  const valorReal = sum(list, i => i.valorRealizado);
  return `<div>${section("Despliegue y valor", "Iniciativas en producción, escalamiento y mejora continua (G5)")}<div class="grid cols-3">${kpi("En producción", list.length, "rocket", { color: "var(--g5)" })}${kpi("Valor realizado", fmtM(valorReal), "chart", { color: "var(--success)", trend: "+18%" })}${kpi("En mejora continua", list.filter(i => i.estado === "Mejora continua").length, "settings", { color: "var(--info)" })}</div><div class="grid cols-2" style="margin-top:16px">${list.map(i => `<div class="card pad-lg"><div class="actions" style="justify-content:space-between">${gateBadge(i.gate)}<span class="badge" style="background:var(--success);color:white">${icon("check")}Desplegada</span></div><h3>${esc(i.nombre)}</h3><div class="grid cols-2">${[["Valor esperado", `S/ ${i.valorEsperado}k`], ["Valor realizado", `S/ ${i.valorRealizado}k`]].map(x => `<div class="metric"><div class="metric-label">${x[0]}</div><div class="metric-value">${x[1]}</div></div>`).join("")}</div><p class="small card pad" style="background:var(--muted)"><b>${i.kpis[0].nombre}:</b> ${i.kpis[0].actual}${i.kpis[0].unidad} (objetivo ${i.kpis[0].objetivo}${i.kpis[0].unidad})</p></div>`).join("")}</div></div>`;
}
function evaluaciones() {
  const tab = state.tabs.evaluaciones || "madurez";
  const matriz = state.iniciativas.slice(0, 10).map(i => ({ x: i.prioridad, y: i.madurez, z: i.valorEsperado, name: i.nombre }));
  return `<div>${section("Evaluaciones", "Madurez, priorización y matriz del portafolio")}${tabs("evaluaciones", ["madurez:Madurez", "prioridad:Priorización", "matriz:Matriz madurez / prioridad", "consolidada:Consolidada"], tab)}<div class="tab-panel">${tab === "madurez" ? evalMadurez() : tab === "prioridad" ? evalPrioridad() : tab === "matriz" ? `<div class="card pad-lg"><p class="small muted">Cuadrantes: alta madurez + alta prioridad implica avanzar; baja madurez + alta prioridad implica acelerar validación.</p>${scatterChart(matriz)}</div>` : evalConsolidada()}</div></div>`;
}
function evalMadurez() {
  return `<div class="card pad-lg"><div class="actions" style="justify-content:space-between"><h3>¿Está lista la iniciativa para avanzar?</h3><span class="badge" style="background:var(--warning);color:white">Promedio 2.8 · Umbral 3.5</span></div>${["Empatizar", "Definir", "Idear", "Prototipar", "Testear"].map((m, i) => `<label class="label">${m} <span class="muted">— ${["Comprensión del usuario y del problema", "Claridad del problema y del alcance", "Exploración de soluciones alternativas", "Materialización de la solución", "Validación con evidencia"][i]}</span></label><input type="range" min="1" max="5" value="${[4,3,3,2,2][i]}" style="width:100%;accent-color:var(--madrid)">`).join("")}<div class="actions" style="margin-top:16px"><button class="btn" data-toast="La iniciativa fue enviada a evaluación.">Enviar evaluación</button><button class="btn outline">Guardar borrador</button></div></div>`;
}
function evalPrioridad() {
  return `<div class="card pad-lg"><div class="actions" style="justify-content:space-between"><div><h3>¿Qué tan conveniente es avanzar ahora?</h3><p class="small muted">Fórmula de explotación con impacto, urgencia, alineamiento, esfuerzo e incertidumbre.</p></div><span class="badge" style="background:var(--madrid);color:white;font-size:15px">Prioridad 4.6</span></div><div class="grid cols-3">${["Impacto", "Alineamiento estratégico", "Viabilidad", "Factibilidad", "Esfuerzo", "Riesgo", "Incertidumbre", "Urgencia", "Evidencia disponible"].map((p, i) => `<div><label class="label">${p}</label><input type="range" min="1" max="5" value="${[4,4,3,3,2,2,2,4,3][i]}" style="width:100%;accent-color:var(--madrid)"></div>`).join("")}</div></div>`;
}
function evalConsolidada() {
  return `<div class="card pad-lg"><h3>Evaluación consolidada</h3><div class="grid cols-4">${[["Promedio", "3.4"], ["Mediana", "3.5"], ["Dispersión", "0.6"], ["Quórum", "4/5"]].map(x => `<div class="metric"><div class="metric-label">${x[0]}</div><div class="metric-value">${x[1]}</div></div>`).join("")}</div><p class="card pad small" style="background:var(--muted)"><b>Principales acuerdos:</b> el problema está bien validado y la solución es viable técnicamente.</p><p class="card pad small" style="background:color-mix(in oklch,var(--warning),transparent 90%)"><b>Desacuerdo relevante:</b> un evaluador considera que el esfuerzo está subestimado.</p><div class="actions"><button class="btn" data-toast="Enviado al Comité de Innovación">Enviar a comité</button><button class="btn outline" data-toast="Recordatorio enviado a evaluadores pendientes">Enviar recordatorio</button></div></div>`;
}
function comite() {
  const agenda = state.iniciativas.filter(i => i.estado === "En comité" || i.estado === "En evaluación").slice(0, 4);
  if (state.comiteSesion) {
    const actual = agenda[state.comiteIdx] || state.iniciativas[0];
    return `<div>${section("Sesión del Comité de Innovación", `Iniciativa ${state.comiteIdx + 1} de ${agenda.length} · Quórum 4/5`, `<button class="btn outline" data-action="comite-exit">Salir de la sesión</button>`)}<div class="card pad-lg">${gateBadge(actual.gate)} ${estadoBadge(actual.estado)}<h1>${esc(actual.nombre)}</h1><div class="grid cols-2"><div class="field"><h3>Problema</h3><p>${esc(actual.problema)}</p></div><div class="field"><h3>Solución propuesta</h3><p>${esc(actual.solucion)}</p></div></div><div class="grid cols-4">${[["Madurez", actual.madurez.toFixed(1)], ["Prioridad", actual.prioridad.toFixed(1)], ["Riesgo", actual.riesgo], ["Valor esp.", `S/ ${actual.valorEsperado}k`]].map(x => `<div class="metric"><div class="metric-label">${x[0]}</div><div class="metric-value">${x[1]}</div></div>`).join("")}</div><h3>Recomendación del comité</h3><p class="small muted">El comité solo recomienda. La decisión final es responsabilidad del Líder de Innovación.</p><div class="actions">${["Recomendar avanzar", "Recomendar avanzar con ajustes", "Solicitar más información", "Recomendar volver a validar", "Recomendar backlog", "Recomendar cerrar"].map(r => `<button class="btn outline sm" data-toast="El Comité recomienda: ${r.replace("Recomendar ", "")}">${r}</button>`).join("")}</div><div class="actions" style="justify-content:space-between;margin-top:20px"><button class="btn ghost" data-action="comite-prev">Anterior</button><button class="btn" data-action="comite-next">${state.comiteIdx < agenda.length - 1 ? "Siguiente iniciativa" : "Finalizar sesión"}</button></div></div></div>`;
  }
  const tab = state.tabs.comite || "proximas";
  return `<div>${section("Comité de Innovación", "Preparación y ejecución de sesiones", `<button class="btn" data-action="comite-start">${icon("play")}Iniciar sesión</button>`)}${tabs("comite", ["proximas:Próximas", "agenda:Agenda de la sesión", "historial:Completadas"], tab)}<div class="tab-panel">${tab === "proximas" ? `<div class="card pad actions" style="justify-content:space-between"><div class="actions"><span class="kpi-bubble">${icon("dashboard")}</span><div><b>Comité de Innovación · Junio 2025</b><div class="small muted">Jueves 26 de junio · 10:00 · ${agenda.length} iniciativas · Quórum 4/5</div></div></div><span class="badge">${icon("users")}5 participantes</span></div>` : tab === "agenda" ? agenda.map(i => `<div class="card pad actions" style="justify-content:space-between;margin-bottom:8px"><div>${gateBadge(i.gate)}<div style="margin-top:6px"><b>${esc(i.nombre)}</b></div><div class="small muted">Madurez ${i.madurez.toFixed(1)} · Prioridad ${i.prioridad.toFixed(1)} · Evidencia ${i.completitudEvidencia}%</div></div><span class="badge outline">Recomendar avanzar con ajustes</span></div>`).join("") : `<div class="card pad">${icon("check")} <b>Comité de Innovación · Mayo 2025</b><div class="small muted">6 iniciativas revisadas · 4 recomendadas para avanzar</div></div>`}</div></div>`;
}
function evidencias() {
  const q = state.q.evidencias || "";
  const todas = state.iniciativas.flatMap(i => i.evidencias.map(e => ({ ...e, ini: i.nombre })));
  const filtradas = todas.filter(e => (e.nombre + e.ini).toLowerCase().includes(q.toLowerCase()));
  const colors = { Validada: "var(--success)", "Pendiente de validación": "var(--warning)", Borrador: "var(--muted-foreground)" };
  return `<div>${section("Evidencias", "Repositorio versionado con validación por gate", `<button class="btn" data-toast="Se abrió el asistente para cargar evidencia">${icon("upload")}Subir evidencia</button>`)}<div class="actions" style="margin-bottom:14px"><div class="field-search" style="position:relative;max-width:390px;flex:1">${icon("search")}<input class="input" data-q="evidencias" value="${esc(q)}" placeholder="Buscar evidencia o iniciativa..."></div><span class="badge">${todas.filter(e => e.estado === "Validada").length} validadas</span></div><div class="card table-wrap"><table><thead><tr><th>Evidencia</th><th>Iniciativa</th><th>Gate</th><th>Versión</th><th>Estado</th><th>Confidencialidad</th><th></th></tr></thead><tbody>${filtradas.map(e => `<tr><td><b>${esc(e.nombre)}</b><div class="tiny muted">${esc(e.tipo)} · ${esc(e.autor)}</div></td><td>${esc(e.ini)}</td><td>${gateBadge(e.gate)}</td><td>${e.version}</td><td><span class="badge" style="background:color-mix(in oklch,${colors[e.estado] || "var(--danger)"},transparent 86%);color:${colors[e.estado] || "var(--danger)"}">${esc(e.estado)}</span></td><td>${esc(e.confidencialidad)}</td><td>${e.estado === "Pendiente de validación" ? `<button class="btn outline sm" data-toast="Evidencia validada">Validar</button>` : ""}</td></tr>`).join("")}</tbody></table></div></div>`;
}
function tareas() {
  const tareas = state.iniciativas.flatMap((ini, i) => [
    { id: `${ini.id}-t1`, titulo: "Completar evidencia de validación del problema", iniciativaNombre: ini.nombre, gate: ini.gate, responsable: ini.responsable, prioridad: ["Alta", "Media", "Baja"][i % 3], estado: ["Pendiente", "En curso", "Bloqueada", "En revisión"][i % 4], vence: `2025-0${(i % 8) + 1}-2${i % 9}` },
    { id: `${ini.id}-t2`, titulo: "Preparar carpeta para el Comité de Innovación", iniciativaNombre: ini.nombre, gate: ini.gate, responsable: "María Fernanda Ríos", prioridad: "Media", estado: ["Pendiente", "Completada", "En curso"][i % 3], vence: `2025-0${(i % 6) + 2}-1${i % 9}` },
  ]);
  const cols = ["Pendiente", "En curso", "Bloqueada", "En revisión", "Completada"];
  const pc = { Alta: "var(--danger)", Media: "var(--warning)", Baja: "var(--muted-foreground)" };
  return `<div>${section("Tareas y planes de acción", "Tablero por estado, vinculado a iniciativas y gates")}<div class="grid cols-5">${cols.map(c => { const items = tareas.filter(t => t.estado === c); return `<div><div class="actions" style="justify-content:space-between;margin:0 4px 8px"><b class="tiny uc muted">${c}</b><span class="badge">${items.length}</span></div>${items.map(t => `<div class="card pad" style="margin-bottom:8px">${gateBadge(t.gate)}<span class="tiny uc" style="float:right;color:${pc[t.prioridad]};font-weight:800">${t.prioridad}</span><div class="small" style="margin-top:8px;font-weight:700">${esc(t.titulo)}</div><div class="tiny muted line-clamp">${esc(t.iniciativaNombre)}</div><div class="tiny muted actions" style="justify-content:space-between;margin-top:8px"><span>${esc(t.responsable)}</span><span>Vence ${t.vence}</span></div></div>`).join("") || `<div class="card pad muted tiny" style="text-align:center;border-style:dashed">Sin tareas</div>`}</div>`; }).join("")}</div></div>`;
}
function riesgos() {
  const tab = state.tabs.riesgos || "matriz";
  const todos = state.iniciativas.flatMap(i => i.riesgos.map(r => ({ ...r, ini: i.nombre })));
  const nivel = v => v >= 15 ? ["Alto", "var(--danger)"] : v >= 6 ? ["Medio", "var(--warning)"] : ["Bajo", "var(--success)"];
  return `<div>${section("Riesgos", "Registro y matriz probabilidad x impacto del portafolio")}${tabs("riesgos", ["matriz:Matriz", "registro:Registro"], tab)}<div class="tab-panel">${tab === "matriz" ? `<div class="card pad-lg"><div class="risk-grid">${[5,4,3,2,1].flatMap(p => [1,2,3,4,5].map(im => { const r = todos.filter(x => x.probabilidad === p && x.impacto === im); const n = nivel(p*im); return `<div class="risk-cell" style="background:${n[1]};opacity:${r.length ? 1 : .25}">${r.length || ""}</div>`; })).join("")}</div><div class="actions small" style="margin-top:14px">${[["Bajo","var(--success)"],["Medio","var(--warning)"],["Alto","var(--danger)"]].map(x=>`<span><span class="legend-dot" style="background:${x[1]}"></span>${x[0]}</span>`).join("")}</div></div>` : `<div class="card table-wrap"><table><thead><tr><th>Riesgo</th><th>Iniciativa</th><th>Categoría</th><th>Nivel</th><th>Mitigación</th><th>Estado</th></tr></thead><tbody>${todos.map(r => { const n = nivel(r.probabilidad*r.impacto); return `<tr><td>${esc(r.descripcion)}</td><td>${esc(r.ini)}</td><td><span class="badge">${r.categoria}</span></td><td><span class="badge" style="background:color-mix(in oklch,${n[1]},transparent 86%);color:${n[1]}">${n[0]} (${r.probabilidad*r.impacto})</span></td><td class="small muted">${esc(r.mitigacion)}</td><td><span class="badge outline">${r.estado}</span></td></tr>`; }).join("")}</tbody></table></div>`}</div></div>`;
}
function reportes() {
  const totalEsp = sum(state.iniciativas, i => i.valorEsperado), totalReal = sum(state.iniciativas, i => i.valorRealizado);
  const porGate = GATES.map(g => ({ name: g, esperado: sum(state.iniciativas.filter(i => i.gate === g), i => i.valorEsperado), realizado: sum(state.iniciativas.filter(i => i.gate === g), i => i.valorRealizado) }));
  return `<div>${section("Reportes ejecutivos", "Valor, conversión de gates y desempeño del portafolio", `<button class="btn outline" data-toast="Reporte exportado en PDF (simulado)">Exportar PDF</button>`)}<div class="grid cols-4">${kpi("Valor esperado", fmtM(totalEsp), "chart")}${kpi("Valor realizado", fmtM(totalReal), "briefcase", { color: "var(--success)", trend: "+18%" })}${kpi("Tasa de realización", `${Math.round(totalReal / totalEsp * 100)}%`, "dashboard", { color: "var(--info)" })}${kpi("Iniciativas activas", state.iniciativas.filter(i => i.estado === "Activa").length, "rocket", { color: "var(--g4)" })}</div><div class="card pad-lg" style="margin-top:16px"><h3>Valor esperado vs realizado por gate (miles S/)</h3>${groupBar(porGate)}</div><div class="card pad-lg" style="margin-top:16px"><h3>Embudo de conversión de gates</h3>${GATES.map(g => { const n = state.iniciativas.filter(i => GATES.indexOf(i.gate) >= GATES.indexOf(g)).length; return `<div class="actions" style="margin-bottom:8px"><div style="width:110px">${gateBadge(g)}</div><div class="progress" style="height:24px;flex:1"><span style="width:${n/state.iniciativas.length*100}%;display:grid;place-items:center;color:white;font-size:11px;font-weight:800">${n}</span></div></div>`; }).join("")}</div></div>`;
}
function aprendizajes() {
  const q = state.q.aprendizajes || "";
  const items = APRENDIZAJES.filter(a => (a.titulo + a.tags.join(" ") + a.area).toLowerCase().includes(q.toLowerCase()));
  return `<div>${section("Aprendizajes", "Memoria organizacional reutilizable de la innovación")}<div class="field-search" style="position:relative;max-width:390px;margin-bottom:16px">${icon("search")}<input class="input" data-q="aprendizajes" value="${esc(q)}" placeholder="Buscar por tema, tag o área..."></div><div class="grid cols-2">${items.map(a => `<div class="card pad-lg"><div class="actions" style="justify-content:space-between"><h3 style="margin:0">${icon("bulb")} ${esc(a.titulo)}</h3>${gateBadge(a.gate)}</div><p class="small muted"><b>Contexto:</b> ${esc(a.contexto)}</p><p class="small">${icon("check")} ${esc(a.queFunciono)}</p><p class="small">${icon("shield")} ${esc(a.queNo)}</p><p class="card pad small" style="background:var(--muted)"><b>Recomendación:</b> ${esc(a.recomendacion)}</p><div class="actions">${a.tags.map(t => `<span class="badge">#${t}</span>`).join("")}</div><div class="actions tiny muted" style="justify-content:space-between;border-top:1px solid var(--border);padding-top:12px;margin-top:12px"><span>${esc(a.autor)} · ${esc(a.area)}</span><button class="btn ghost sm" data-toast="Aprendizaje reutilizado en tu iniciativa">Reutilizado ${a.vecesReutilizado}x</button></div></div>`).join("")}</div></div>`;
}
function administracion() {
  const tab = state.tabs.administracion || "roles";
  return `<div>${section("Administración (SGI)", "Configuración del modelo, roles y parámetros del sistema")}${tabs("administracion", ["roles:Roles y permisos", "gates:Modelo de gates", "catalogos:Catálogos", "parametros:Parámetros"], tab)}<div class="tab-panel">${adminTab(tab)}</div></div>`;
}
function adminTab(tab) {
  if (tab === "roles") return `<div class="card table-wrap"><table><thead><tr><th>Rol</th><th>Descripción</th><th>Estado</th></tr></thead><tbody>${ROLES.map(r => `<tr><td><b>${r[1]}</b></td><td class="small muted">${r[2]}</td><td><button class="switch" data-switch data-toast="Permisos de ${r[1]} actualizados"></button></td></tr>`).join("")}</tbody></table></div>`;
  if (tab === "gates") return GATES.map(g => `<div class="card pad actions" style="justify-content:space-between;margin-bottom:8px"><div class="actions">${gateBadge(g)}<span class="small muted">Etapa: ${GATE_META[g].etapa}</span></div><span class="badge">Umbral de madurez 3.5</span></div>`).join("");
  if (tab === "catalogos") return `<div class="card pad-lg"><h3>Áreas de la organización</h3><div class="actions">${AREAS.map(a => `<span class="badge">${a}</span>`).join("")}</div><h3>Tipos de evidencia</h3><div class="actions">${TIPOS_EVIDENCIA.map(t => `<span class="badge outline">${t}</span>`).join("")}</div></div>`;
  return `<div class="card pad-lg">${[["Umbral de madurez para avanzar","3.5 / 5"],["Quórum del comité","4 de 5"],["Vigencia de evidencias","180 días"],["Notificaciones automáticas",""]].map(x => `<div class="actions" style="justify-content:space-between;border-bottom:1px solid var(--border);padding:12px 0"><span>${x[0]}</span>${x[1] ? `<span class="badge">${x[1]}</span>` : `<button class="switch" data-switch></button>`}</div>`).join("")}<button class="btn" style="margin-top:16px" data-toast="Parámetros guardados">Guardar cambios</button></div>`;
}
function bitacora() {
  const q = state.q.bitacora || "";
  const items = BITACORA.filter(e => (e.usuario + e.accion + e.entidad).toLowerCase().includes(q.toLowerCase()));
  return `<div>${section("Bitácora de auditoría", "Trazabilidad inmutable de todas las acciones del sistema")}<div class="field-search" style="position:relative;max-width:390px;margin-bottom:16px">${icon("search")}<input class="input" data-q="bitacora" value="${esc(q)}" placeholder="Buscar por usuario, acción o entidad..."></div><div class="card pad"><ol class="timeline">${items.map(e => `<li><span class="timeline-dot">${icon("scroll")}</span><div class="actions"><b class="small">${esc(e.usuario)}</b><span class="badge">${esc(e.rol)}</span><span class="tiny muted">${e.fecha}</span></div><div class="small">${esc(e.accion)} <span class="muted">— ${esc(e.entidad)}</span></div>${e.valorAnterior || e.valorNuevo ? `<div class="actions tiny" style="margin-top:6px">${e.valorAnterior ? `<span class="badge" style="color:var(--danger)">${e.valorAnterior}</span>${icon("right")}` : ""}${e.valorNuevo ? `<span class="badge" style="color:var(--success)">${e.valorNuevo}</span>` : ""}</div>` : ""}</li>`).join("")}</ol></div></div>`;
}
function detalle() {
  const ini = state.iniciativas.find(i => i.id === state.detailId) || state.iniciativas[0];
  const tab = state.tabs.detalle || "Resumen";
  const tabsArr = ["Resumen", "Origen", "Problema", "Solución", "Equipo", "Evaluaciones", "Evidencias", "Decisiones", "Riesgos", "Tareas", "Desarrollo / SRS", "Despliegue", "KPIs y valor", "Aprendizajes", "Documentos", "Bitácora"];
  return `<div class="space"><div class="card pad-lg detail-header"><div class="actions" style="justify-content:space-between;align-items:flex-start"><div><div class="actions">${gateBadge(ini.gate)}${estadoBadge(ini.estado)}${riesgoBadge(ini.riesgo)}<span class="badge outline">${ini.codigo}</span></div><h1>${esc(ini.nombre)}</h1><div class="meta"><span>Sponsor: <b>${esc(ini.sponsor)}</b></span><span>Responsable: <b>${esc(ini.responsable)}</b></span><span>Área: <b>${esc(ini.area)}</b></span><span>Próxima decisión: <b>${esc(ini.proximaDecision)}</b></span></div></div><div class="actions"><button class="btn outline sm" data-toast="Modo edición (demo)">Editar</button><button class="btn outline sm" data-page="evidencias">Evidencia</button><button class="btn outline sm" data-page="evaluaciones">Evaluar</button><button class="btn sm" data-action="open-decision">Registrar decisión</button></div></div><div class="separator"></div>${stepper(ini)}</div><div class="grid dash" style="grid-template-columns:1fr 300px"><div class="card pad">${tabs("detalle", tabsArr.map(t => `${t}:${t}`), tab)}<div class="tab-panel">${detalleTab(tab, ini)}</div></div><div class="space"><div class="card pad"><h3 class="tiny uc muted">Estado de completitud</h3><div class="actions small" style="justify-content:space-between"><span>Evidencia</span><b>${ini.completitudEvidencia}%</b></div><div class="progress"><span style="width:${ini.completitudEvidencia}%"></span></div><ul class="small"><li>Falta evidencia de validación técnica</li><li>1 aprobación pendiente del sponsor</li><li>Business case cargado</li></ul></div><div class="card pad" style="border-color:color-mix(in oklch,var(--madrid),transparent 70%);background:color-mix(in oklch,var(--madrid-soft),transparent 60%)"><h3 style="color:var(--madrid)">${icon("sparkles")} Asistente Madrid Innova</h3><button class="btn outline sm" data-toast="Resumen ejecutivo generado">Generar resumen ejecutivo</button><p class="small card pad">Resumen ejecutivo: ${esc(ini.nombre)} presenta una madurez de ${ini.madurez.toFixed(1)}/5 y prioridad de ${ini.prioridad.toFixed(1)}/5.</p></div><div class="card pad"><h3 class="tiny uc muted">Siguiente paso sugerido</h3><p class="small">${ini.gate === "G5" ? "Medir el valor realizado y registrar aprendizajes." : `Completar evidencia para la revisión de ${ini.gate} y llevar a comité.`}</p></div></div></div></div>`;
}
function stepper(ini) {
  return `<div class="stepper">${GATES.map((g, idx) => { const est = ini.gateEstados[g]; const done = est === "Completado", actual = est === "Actual"; return `<div class="step"><div class="step-label"><div class="step-circle" style="border-color:${done || actual ? GATE_META[g].color : "var(--border)"};background:${done ? GATE_META[g].color : actual ? GATE_META[g].soft : "transparent"};color:${done ? "white" : GATE_META[g].color}">${done ? "✓" : "○"}</div><div class="tiny uc" style="color:${GATE_META[g].color};font-weight:800">${g}</div><div class="tiny muted">${est}</div></div>${idx < GATES.length - 1 ? `<div class="step-rail" style="background:${done ? GATE_META[g].color : "var(--border)"}"></div>` : ""}</div>`; }).join("")}</div>`;
}
function detalleTab(tab, ini) {
  if (tab === "Resumen") return `<div class="space"><div class="field"><h3>Descripción ejecutiva</h3><p>${esc(ini.descripcion)}</p></div><div class="field"><h3>Problema de negocio</h3><p>${esc(ini.problema)}</p></div><div class="field"><h3>Solución propuesta</h3><p>${esc(ini.solucion)}</p></div><div class="grid cols-2">${[["Madurez", `${ini.madurez.toFixed(1)} / 5`],["Prioridad", `${ini.prioridad.toFixed(1)} / 5`],["Valor esperado", `S/ ${ini.valorEsperado}k`],["Completitud evidencia", `${ini.completitudEvidencia}%`]].map(x => `<div class="metric"><div class="metric-label">${x[0]}</div><div class="metric-value">${x[1]}</div></div>`).join("")}</div><div class="field"><h3>Alineamiento estratégico</h3><div class="actions">${ini.objetivos.map(o => `<span class="badge">${o}: ${OBJETIVOS.find(x => x.id === o)?.texto}</span>`).join("")}${ini.drivers.map(d => `<span class="badge outline">${d}</span>`).join("")}</div></div></div>`;
  if (tab === "Evaluaciones") return `<div class="card pad"><h3>¿Está lista la iniciativa para avanzar?</h3><p class="small muted">Evaluación de madurez basada en Design Thinking.</p>${radarChart([{name:"Empatizar",value:Math.min(5,ini.madurez+.6)},{name:"Definir",value:ini.madurez},{name:"Idear",value:Math.max(1,ini.madurez-.3)},{name:"Prototipar",value:Math.max(1,ini.madurez-.8)},{name:"Testear",value:Math.max(1,ini.madurez-1)}])}<div class="actions" style="justify-content:space-between"><span>Promedio de madurez: <b>${ini.madurez.toFixed(1)}</b></span><span class="badge" style="background:${ini.madurez >= 3.5 ? "var(--success)" : "var(--warning)"};color:white">Umbral del gate: 3.5 · ${ini.madurez >= 3.5 ? "Cumple" : "Por debajo"}</span></div></div>`;
  if (tab === "Evidencias") return ini.evidencias.map(e => `<div class="card pad actions" style="justify-content:space-between;margin-bottom:8px"><div><b>${e.nombre}</b><div class="small muted">${e.tipo} · v${e.version} · ${e.autor} · ${e.fecha}</div></div><div class="actions">${gateBadge(e.gate)}<span class="badge">${e.estado}</span></div></div>`).join("");
  if (tab === "Decisiones") return ini.decisiones.map(d => `<div class="card pad" style="border-left:3px solid var(--madrid);margin-bottom:8px">${gateBadge(d.gate)} <span class="tiny muted">${d.fecha}</span><div><b>${d.resultado}</b></div><div class="small muted">Responsable: ${d.responsable} · Recomendación: ${d.recomendacionComite}</div><p class="small">${d.comentarios}</p></div>`).join("") || `<p class="muted">Aún no se registran decisiones de gate.</p>`;
  if (tab === "Riesgos") return ini.riesgos.map(r => `<div class="card pad" style="margin-bottom:8px"><div class="actions" style="justify-content:space-between"><b>${r.descripcion}</b><span class="badge outline">${r.categoria}</span></div><div class="small muted">Exposición: ${r.probabilidad*r.impacto} · Responsable: ${r.responsable} · ${r.estado}</div><p class="small">Mitigación: ${r.mitigacion}</p></div>`).join("");
  if (tab === "KPIs y valor") return ini.kpis.map(k => `<div class="card pad" style="margin-bottom:8px"><div class="actions" style="justify-content:space-between"><b>${k.nombre}</b><span class="badge">${k.tipo}</span></div><div class="grid cols-3" style="text-align:center;margin-top:10px">${[["Línea base",`${k.lineaBase} ${k.unidad}`],["Actual",`${k.actual} ${k.unidad}`],["Objetivo",`${k.objetivo} ${k.unidad}`]].map(x => `<div><div class="tiny muted">${x[0]}</div><b>${x[1]}</b></div>`).join("")}</div></div>`).join("");
  const generic = { Origen: `Esta iniciativa se originó a partir de una oportunidad detectada en el área de ${ini.area}.`, Problema: "El problema de negocio fue validado mediante entrevistas y análisis de datos.", Solución: "La solución propuesta combina novedad, valor sostenible y foco en las personas.", Equipo: `Responsable: ${ini.responsable}. El equipo integra especialistas de negocio, tecnología y experiencia del cliente.`, Tareas: "Las tareas asociadas se gestionan en el módulo de Tareas.", "Desarrollo / SRS": "El documento SRS se encuentra en elaboración.", Despliegue: "El plan de despliegue contempla gestión del cambio, capacitación y decisión Go / No-Go.", Aprendizajes: "Los aprendizajes se documentan para su reutilización.", Documentos: "Repositorio de documentos con control de versiones y confidencialidad.", Bitácora: "Historial completo de eventos disponible en el módulo de Bitácora." };
  return `<p class="small muted">${esc(generic[tab] || "")}</p>`;
}

function tabs(group, values, active) {
  return `<div class="tabs-list">${values.map(v => { const [id, label] = v.split(":"); return `<button class="tab-btn ${active === id ? "active" : ""}" data-tab-group="${group}" data-tab="${esc(id)}">${esc(label)}</button>`; }).join("")}</div>`;
}

function chartWrap(svg, h = 220) { return `<div class="chart" style="min-height:${h}px">${svg}</div>`; }
function barChart(data, h = 220) {
  const w = 620, pad = 34, max = Math.max(...data.map(d => d.value), 1), bw = (w - pad*2) / data.length - 18;
  const bars = data.map((d, i) => {
    const x = pad + i*((w-pad*2)/data.length) + 9, bh = (h-60)*d.value/max, y = h-30-bh;
    return `<rect class="chart-bar" data-tip="${esc(d.name)}: ${d.value}" x="${x}" y="${y}" width="${bw}" height="${bh}" rx="6" fill="${d.color || "var(--madrid)"}"/><text x="${x+bw/2}" y="${h-10}" text-anchor="middle">${d.name}</text><text x="${x+bw/2}" y="${y-6}" text-anchor="middle">${d.value}</text>`;
  }).join("");
  return chartWrap(`<svg viewBox="0 0 ${w} ${h}"><line class="chart-grid" x1="${pad}" y1="${h-30}" x2="${w-pad}" y2="${h-30}"/>${bars}</svg>`, h);
}
function hBarChart(data) {
  const max = Math.max(...data.map(d => d.value), 1);
  return `<div>${data.map(d => `<div class="actions small" style="margin:10px 0"><span style="width:70px">${d.name}</span><div class="progress" style="flex:1;height:18px"><span style="width:${d.value/max*100}%;background:var(--g2)"></span></div><b>${d.value}</b></div>`).join("")}</div>`;
}
function groupBar(data) {
  const max = Math.max(...data.map(d => Math.max(d.esperado, d.realizado)), 1), w = 620, h = 220, pad = 38, group = (w-pad*2)/data.length, bw = 22;
  const bars = data.map((d, i) => {
    const x = pad + i*group + group/2 - bw - 2;
    const eh = (h-58)*d.esperado/max, rh = (h-58)*d.realizado/max;
    return `<rect class="chart-bar" data-tip="${d.name} esperado: S/ ${d.esperado}k" x="${x}" y="${h-30-eh}" width="${bw}" height="${eh}" rx="4" fill="var(--madrid)"/><rect class="chart-bar" data-tip="${d.name} realizado: S/ ${d.realizado}k" x="${x+bw+5}" y="${h-30-rh}" width="${bw}" height="${rh}" rx="4" fill="var(--g5)"/><text x="${x+bw}" y="${h-10}" text-anchor="middle">${d.name}</text>`;
  }).join("");
  return chartWrap(`<svg viewBox="0 0 ${w} ${h}"><line class="chart-grid" x1="${pad}" y1="${h-30}" x2="${w-pad}" y2="${h-30}"/>${bars}</svg><div class="chart-legend"><span><i class="legend-dot" style="background:var(--madrid)"></i>Esperado</span><span><i class="legend-dot" style="background:var(--g5)"></i>Realizado</span></div>`, h);
}
function lineChart(data) {
  const w = 360, h = 190, pad = 28, max = Math.max(...data.map(d => d.value), 1), pts = data.map((d, i) => [pad+i*(w-pad*2)/(data.length-1), h-30-(h-60)*d.value/max]);
  return chartWrap(`<svg viewBox="0 0 ${w} ${h}"><polyline class="chart-line" points="${pts.map(p=>p.join(",")).join(" ")}" fill="none" stroke="var(--madrid)" stroke-width="3"/><line class="chart-grid" x1="${pad}" y1="${h-30}" x2="${w-pad}" y2="${h-30}"/>${pts.map((p,i)=>`<circle class="chart-point" data-tip="${data[i].name}: ${data[i].value} transiciones" cx="${p[0]}" cy="${p[1]}" r="5" fill="var(--madrid)"/><text x="${p[0]}" y="${h-10}" text-anchor="middle">${data[i].name}</text>`).join("")}</svg>`, h);
}
function donutChart(data) {
  const total = sum(data, d => d.value) || 1;
  let acc = 0;
  const circles = data.map((d, i) => {
    const dash = d.value / total * 100;
    const el = `<circle class="donut-seg" data-tip="${esc(d.name)}: ${d.value}" cx="90" cy="90" r="58" fill="none" stroke="${d.color}" stroke-width="24" stroke-dasharray="${dash} ${100-dash}" stroke-dashoffset="${-acc}" pathLength="100" style="animation-delay:${i * 70}ms"/>`;
    acc += dash;
    return el;
  }).join("");
  return chartWrap(`<svg viewBox="0 0 180 180">${circles}<circle class="donut-center" cx="90" cy="90" r="40" fill="var(--card)"/><text x="90" y="94" text-anchor="middle" style="font-weight:800;fill:var(--foreground)">${total}</text></svg><div class="chart-legend">${data.map(d => `<span><i class="legend-dot" style="background:${d.color}"></i>${d.name}</span>`).join("")}</div>`, 240);
}
function scatterChart(data) {
  const w = 620, h = 360, pad = 42;
  const dots = data.map((d, i) => {
    const x = pad + (w-pad*2)*d.x/5, y = h-pad-(h-pad*2)*d.y/5, r = Math.max(5, Math.min(18, d.z/75));
    return `<circle class="scatter-dot" data-tip="${esc(d.name)} · prioridad ${d.x.toFixed(1)} · madurez ${d.y.toFixed(1)}" cx="${x}" cy="${y}" r="${r}" fill="var(--madrid)" opacity=".6" style="animation-delay:${i * 45}ms"/>`;
  }).join("");
  return chartWrap(`<svg viewBox="0 0 ${w} ${h}"><line class="chart-grid" x1="${pad}" y1="${h/2}" x2="${w-pad}" y2="${h/2}"/><line class="chart-grid" x1="${w/2}" y1="${pad}" x2="${w/2}" y2="${h-pad}"/><rect x="${pad}" y="${pad}" width="${w-pad*2}" height="${h-pad*2}" fill="none" stroke="var(--border)"/>${dots}<text x="${w/2}" y="${h-8}" text-anchor="middle">Prioridad</text><text x="12" y="${h/2}" transform="rotate(-90 12 ${h/2})" text-anchor="middle">Madurez</text></svg>`, h);
}
function radarChart(data) {
  const cx=150, cy=130, r=90, pts = data.map((d,i)=>{ const a = -Math.PI/2 + i*2*Math.PI/data.length; const rr = r*d.value/5; return [cx+Math.cos(a)*rr, cy+Math.sin(a)*rr]; });
  const axes = data.map((d,i)=>{ const a=-Math.PI/2+i*2*Math.PI/data.length; return `<line x1="${cx}" y1="${cy}" x2="${cx+Math.cos(a)*r}" y2="${cy+Math.sin(a)*r}" stroke="var(--border)"/><text x="${cx+Math.cos(a)*(r+24)}" y="${cy+Math.sin(a)*(r+24)}" text-anchor="middle">${d.name}</text>`; }).join("");
  return chartWrap(`<svg viewBox="0 0 300 270">${[.2,.4,.6,.8,1].map(s=>`<polygon points="${data.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/data.length;return `${cx+Math.cos(a)*r*s},${cy+Math.sin(a)*r*s}`}).join(" ")}" fill="none" stroke="var(--border)"/>`).join("")}${axes}<polygon class="radar-fill" data-tip="Madurez promedio del gate" points="${pts.map(p=>p.join(",")).join(" ")}" fill="var(--madrid)" opacity=".25" stroke="var(--madrid)" stroke-width="2"/>${pts.map((p, i) => `<circle class="chart-point" data-tip="${data[i].name}: ${data[i].value.toFixed(1)} / 5" cx="${p[0]}" cy="${p[1]}" r="4" fill="var(--madrid)"/>`).join("")}</svg>`, 270);
}

function bind() {
  $$("[data-page]").forEach(b => b.addEventListener("click", () => setPage(b.dataset.page)));
  $$("[data-detail]").forEach(b => b.addEventListener("click", () => { state.detailId = b.dataset.detail; state.page = "detalle"; render(); }));
  $$("[data-action='login']").forEach(f => f.addEventListener("submit", e => { e.preventDefault(); state.authed = true; render(); }));
  $$("[data-login-role]").forEach(b => b.addEventListener("click", () => { state.role = b.dataset.loginRole; state.usuario = b.dataset.user; state.authed = true; render(); }));
  $$("[data-action='logout']").forEach(b => b.addEventListener("click", () => { state.authed = false; render(); }));
  $$("[data-role]").forEach(b => b.addEventListener("click", () => { state.role = b.dataset.role; state.usuario = ROLES.find(r => r[0] === state.role)?.[1] === "Líder de Innovación" ? "Carlos Bustamante" : state.usuario; render(); }));
  $$("[data-toggle]").forEach(b => b.addEventListener("click", () => { const p = $(`#${b.dataset.toggle}-panel`); if (p) p.classList.toggle("hidden"); }));
  $$("[data-action='open-drawer']").forEach(b => b.addEventListener("click", () => { state.mobileOpen = true; render(); }));
  $$("[data-action='close-drawer']").forEach(b => b.addEventListener("click", () => { state.mobileOpen = false; render(); }));
  $$("[data-tab-group]").forEach(b => b.addEventListener("click", () => { state.tabs[b.dataset.tabGroup] = b.dataset.tab; render(); }));
  $$("[data-q]").forEach(i => i.addEventListener("input", () => { state.q[i.dataset.q] = i.value; render(); }));
  $("[data-filter-gate]")?.addEventListener("change", e => { state.q.gate = e.target.value; render(); });
  $$("[data-toast]").forEach(b => b.addEventListener("click", () => toast(b.dataset.toast, b.dataset.desc || "")));
  $("[data-action='paso-next']")?.addEventListener("click", () => { state.oportunidadPaso++; render(); });
  $("[data-action='paso-prev']")?.addEventListener("click", () => { state.oportunidadPaso--; render(); });
  $("[data-action='oportunidad-send']")?.addEventListener("click", () => { state.oportunidadEnviada = true; toast("La oportunidad fue enviada a triaje."); render(); });
  $("[data-action='oportunidad-reset']")?.addEventListener("click", () => { state.oportunidadEnviada = false; state.oportunidadPaso = 0; toast("Continuando como nueva oportunidad"); render(); });
  $("[data-action='save-idea']")?.addEventListener("click", () => { state.ideaTexto = ""; toast("Idea registrada en el banco", "Podrás promoverla a oportunidad cuando quieras."); render(); });
  $("[data-idea-text]")?.addEventListener("input", e => { state.ideaTexto = e.target.value; });
  $("[data-action='comite-start']")?.addEventListener("click", () => { state.comiteSesion = true; state.comiteIdx = 0; render(); });
  $("[data-action='comite-exit']")?.addEventListener("click", () => { state.comiteSesion = false; render(); });
  $("[data-action='comite-prev']")?.addEventListener("click", () => { state.comiteIdx = Math.max(0, state.comiteIdx - 1); render(); });
  $("[data-action='comite-next']")?.addEventListener("click", () => { const max = state.iniciativas.filter(i => i.estado === "En comité" || i.estado === "En evaluación").slice(0,4).length - 1; if (state.comiteIdx < max) state.comiteIdx++; else { state.comiteSesion = false; toast("Sesión del comité finalizada"); } render(); });
  $$("[data-switch]").forEach(b => b.addEventListener("click", () => b.classList.toggle("off")));
  $("[data-action='open-decision']")?.addEventListener("click", openDecisionModal);
  setupChartTooltips();
  animateCounters();
}
function setupChartTooltips() {
  let tip = $(".chart-tooltip");
  if (!tip) {
    tip = document.createElement("div");
    tip.className = "chart-tooltip";
    document.body.appendChild(tip);
  }
  $$("[data-tip]").forEach(el => {
    el.addEventListener("pointerenter", () => {
      tip.textContent = el.dataset.tip;
      tip.classList.add("visible");
    });
    el.addEventListener("pointermove", (event) => {
      tip.style.left = `${event.clientX + 14}px`;
      tip.style.top = `${event.clientY + 14}px`;
    });
    el.addEventListener("pointerleave", () => tip.classList.remove("visible"));
  });
}
function animateCounters() {
  $$("[data-count]").forEach(el => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const start = performance.now();
    const duration = 700;
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
function openDecisionModal() {
  const ini = state.iniciativas.find(i => i.id === state.detailId);
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<div class="modal"><h3>Decisión del Líder de Innovación</h3><p>El comité recomienda avanzar con ajustes. La decisión final es responsabilidad del líder.</p><label class="label">Resultado de la decisión</label><select class="select" id="decision-select">${DECISIONES.map(d => `<option>${d}</option>`).join("")}</select><label class="label" style="margin-top:12px">Justificación y criterios aplicados</label><textarea class="textarea" rows="3" placeholder="Fundamenta la decisión considerando evidencia, madurez, prioridad y riesgo..."></textarea><div class="actions" style="justify-content:flex-end;margin-top:16px"><button class="btn outline" data-modal-close>Cancelar</button><button class="btn" data-modal-confirm>Confirmar decisión</button></div></div>`;
  document.body.appendChild(modal);
  $("[data-modal-close]", modal).onclick = () => modal.remove();
  $("[data-modal-confirm]", modal).onclick = () => {
    const decision = $("#decision-select", modal).value;
    if (decision.startsWith("Avanzar")) {
      const idx = GATES.indexOf(ini.gate);
      if (idx < GATES.length - 1) {
        const old = ini.gate, next = GATES[idx + 1];
        ini.gate = next; ini.estado = "Activa"; ini.gateEstados[old] = "Completado"; ini.gateEstados[next] = "Actual";
      }
    }
    modal.remove();
    toast("La decisión final fue registrada correctamente.", "La iniciativa avanzó y quedó registrada en la bitácora.");
    render();
  };
}
function initials(name) { return name.split(/\s+/).map(w => w[0]).slice(0,2).join("").toUpperCase(); }

initData();
render();
