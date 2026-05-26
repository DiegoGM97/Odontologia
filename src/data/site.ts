import type { IconName } from "../types/icons";

export const specialties: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "sparkles",
    title: "Estética Dental",
    description:
      "Diseño de sonrisa personalizado con tecnología digital y materiales de alta gama para resultados naturales.",
  },
  {
    icon: "smile",
    title: "Ortodoncia Invisible",
    description:
      "Alineadores transparentes Invisalign con planificación 3D. Corrige tu sonrisa sin que nadie lo note.",
  },
  {
    icon: "scan",
    title: "Implantes Dentales",
    description:
      "Implantes de titanio con cirugía guiada por computadora. Recupera tu sonrisa de forma permanente.",
  },
  {
    icon: "baby",
    title: "Odontopediatría",
    description:
      "Atención especializada para los más pequeños en un ambiente amigable y sin estrés.",
  },
];

export const technologies: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "activity",
    title: "Escáner Intraoral 3D",
    description:
      "Eliminamos las incómodas impresiones tradicionales con escaneo digital de alta precisión.",
  },
  {
    icon: "zap",
    title: "Radiografía Digital",
    description:
      "90% menos radiación que rayos X tradicionales con imágenes instantáneas en alta definición.",
  },
  {
    icon: "shield",
    title: "Sedación Consciente",
    description:
      "Para procedimientos extensos, ofrecemos sedación segura que elimina completamente la ansiedad.",
  },
];

export const beforeAfterCases = [
  {
    before: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=800",
    after: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=800",
    alt: "Diseño de sonrisa",
  },
  {
    before: "https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?w=800",
    after: "https://images.unsplash.com/photo-1656894592570-7c3af33e1477?w=800",
    alt: "Blanqueamiento dental",
  },
];

export const testimonials = [
  {
    name: "María González",
    treatment: "Diseño de Sonrisa",
    testimonial:
      "Increíble experiencia. El equipo es muy profesional y la tecnología que usan hizo que el proceso fuera completamente indoloro. ¡Mi sonrisa luce espectacular!",
    image: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=200",
  },
  {
    name: "Carlos Ramírez",
    treatment: "Implantes Dentales",
    testimonial:
      "Estaba nervioso por el procedimiento, pero la sedación consciente hizo que no sintiera absolutamente nada. El resultado superó mis expectativas.",
    image: "https://images.unsplash.com/photo-1598911642263-b81130ed8ce8?w=200",
  },
  {
    name: "Laura Martínez",
    treatment: "Ortodoncia Invisible",
    testimonial:
      "El escáner 3D me permitió ver el resultado final antes de empezar. Todo el proceso fue cómodo y discreto. ¡100% recomendado!",
    image: "https://images.unsplash.com/photo-1611166819595-ac34987dfa57?w=200",
  },
];

export const contact = {
  address: {
    line1: "Carrera 11 #83-53",
    line2: "Chapinero, Bogotá D.C.",
    country: "Colombia",
  },
  phone: "+57 (601) 000 0000",
  email: "contacto@smilelux.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2489216787!2d-74.054688!3d4.669332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f983dca7c8b6b%3A0x91a8eaa617d69ff5!2sChapinero%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!5m2!1ses!2sco",
  mapTitle: "SmileLux · Chapinero, Bogotá",
};

export const instagram = {
  username: "smileluxco",
  profileUrl: "https://www.instagram.com/smileluxco/",
};

export const social = {
  whatsapp: "https://wa.me/573000000000?text=Hola,%20me%20gustaría%20agendar%20una%20cita",
  instagram: instagram.profileUrl,
  facebook: "https://www.facebook.com/smileluxco",
};

export const instagramPosts = [
  {
    id: "1",
    permalink: "https://www.instagram.com/smileluxco/",
    caption:
      "✨ Transformación completa con diseño de sonrisa digital. Resultados naturales en solo 2 sesiones.",
    imageUrl:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop",
    likes: 1247,
    comments: 89,
    timeAgo: "Hace 2 días",
  },
  {
    id: "2",
    permalink: "https://www.instagram.com/smileluxco/",
    caption:
      "😁 La tecnología 3D nos permite planificar tu sonrisa antes de empezar. ¿Agendamos tu valoración?",
    imageUrl:
      "https://images.unsplash.com/photo-1642844771937-23accb161a3d?w=600&h=600&fit=crop&q=80",
    likes: 892,
    comments: 54,
    timeAgo: "Hace 4 días",
  },
  {
    id: "3",
    permalink: "https://www.instagram.com/smileluxco/",
    caption:
      "🇨🇴 Nuestro consultorio premium en Chapinero, Bogotá. Ambiente cómodo y tratamientos sin dolor.",
    imageUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=600&fit=crop",
    likes: 2103,
    comments: 142,
    timeAgo: "Hace 1 semana",
  },
];

export const WHATSAPP_URL = social.whatsapp;

const heroImageBase =
  "https://images.unsplash.com/photo-1629909613654-28e377b87cc6";

export const heroMedia = {
  alt: "Consultorio dental premium SmileLux",
  image: `${heroImageBase}?auto=format&fit=crop&w=1920&q=85`,
  imageSrcSet: [
    `${heroImageBase}?auto=format&fit=crop&w=640&q=80 640w`,
    `${heroImageBase}?auto=format&fit=crop&w=1024&q=82 1024w`,
    `${heroImageBase}?auto=format&fit=crop&w=1920&q=85 1920w`,
  ].join(", "),
  video:
    "https://assets.mixkit.co/videos/preview/mixkit-dentist-checking-a-patients-teeth-with-a-tool-28558-large.mp4",
};
