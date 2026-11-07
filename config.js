/* =====================================================================
   CONFIGURACIÓN DE LA CLIENTA — Beatriz C Studio
   Este es el único archivo que cambia entre clientas.
   ===================================================================== */
const CONFIG = {
  // Supabase > Project Settings > API Keys (URL sin /rest/v1/ al final)
  SUPABASE_URL: "https://xbklboohltwnmotbemoz.supabase.co",
  SUPABASE_KEY: "sb_publishable_vAtAqwm1mwAlFJcSo78ATg_I5gBeJh3",

  VAPID_PUBLIC:
    "BPtJiyzQu4UsHf_jt7iTKbpL3jNJtRrgOGNrLfIqcizZu9RtW_VJlbwyQCDe0HYeiHpNDwf30Z1-kFx61X5xZ6Y",
  minutosAviso: 15,

  negocio: "Beatriz C Studio",
  marca: {
    nombre: "Beatriz C", // texto grande de la cabecera
    sub: "STUDIO · AGENDA", // texto pequeño debajo
    subLogin: "AGENDA", // texto bajo el logo en la pantalla de inicio de sesión
    tituloApp: "Agenda BC", // nombre del ícono en el celular
  },

  // Colores: beige, negro y café (cobre del logo)
  colores: {
    fondo: "#F5EFE8",
    tarjeta: "#FFFFFF",
    tinta: "#2B2523",
    suave: "#6B5F57",
    borde: "#E5D9CD",
    principal: "#2B2523", // botones y citas confirmadas
    principalOscuro: "#000000",
    principalClaro: "#EEE3D8", // fondo de opciones elegidas
    acento: "#B98A70", // detalles en cobre/café
  },

  abono: 5, // abono por reserva (aunque ocupe varios turnos)
  horasLimite: 3, // horas que tiene la clienta para enviar el abono

  reglas: {
    llegarAntes: 10, // minutos antes que debe llegar
    tolerancia: 15, // minutos de retraso tras los que se pierde la cita
  },

  banco: "Banco Pichincha",
  tipoCuenta: "Ahorros",
  cuenta: "2211447533",
  cedula: "0923459597",
  titular: "Beatriz Carrión Sellán", // nombre completo del titular de la cuenta (si se deja vacío, no aparece)

  // Cada servicio u opción elegida ocupa 1 turno.
  // Los que tienen "opciones" se muestran como desplegable.
  servicios: [
    { nombre: "Uñas", opciones: ["Manos", "Pies"] },
    { nombre: "Cejas" },
    { nombre: "Pestañas" },
    { nombre: "Cabello" },
  ],

  // Turnos del día: [inicio, fin] en formato 24 h
  horarios: [
    ["06:00", "07:30"],
    ["07:30", "09:00"],
    ["09:00", "10:30"],
    ["10:30", "12:00"],
    ["12:00", "13:30"],
    ["13:30", "15:00"],
    ["15:00", "16:30"],
    ["16:30", "18:00"],
    ["18:00", "19:30"],
    ["19:30", "21:00"],
    ["21:00", "22:30"],
  ],
};
