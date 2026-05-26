export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  paragraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "diseno-de-sonrisa-guia",
    title: "Diseño de sonrisa: qué es y qué debes saber antes de empezar",
    excerpt:
      "Descubre cómo la planificación digital permite ver tu resultado antes del tratamiento.",
    date: "12 mayo 2026",
    readTime: "5 min",
    category: "Estética Dental",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop",
    paragraphs: [
      "El diseño de sonrisa es un tratamiento estético que combina salud bucal y armonía facial. No se trata solo de blanquear dientes, sino de analizar proporciones, encía, labios y forma dental.",
      "Con escaneo intraoral 3D y software de simulación, puedes previsualizar el resultado final antes de iniciar. Esto reduce incertidumbre y permite decisiones informadas.",
      "Cada caso es único. Por eso la valoración inicial es clave: el especialista evalúa si necesitas carillas, blanqueamiento, ortodoncia o una combinación de tratamientos.",
      "Si buscas un cambio natural y duradero, agenda una valoración y lleva tus expectativas. Un buen plan personalizado marca la diferencia.",
    ],
  },
  {
    slug: "cuidados-blanqueamiento",
    title: "5 cuidados después de un blanqueamiento dental",
    excerpt:
      "Mantén tu sonrisa brillante por más tiempo con estos hábitos simples.",
    date: "3 mayo 2026",
    readTime: "4 min",
    category: "Consejos",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377b87cc6?w=800&h=500&fit=crop&q=80",
    paragraphs: [
      "Las primeras 48 horas son decisivas. Evita alimentos y bebidas con pigmentos fuertes: café, vino tinto, salsas oscuras y tabaco.",
      "Usa pasta dental recomendada por tu odontólogo y no abuses de productos abrasivos sin supervisión profesional.",
      "El hilo dental y el cepillado correcto siguen siendo esenciales. El blanqueamiento no reemplaza la higiene diaria.",
      "Programa controles periódicos. Un mantenimiento profesional ayuda a conservar el tono y la salud de tus encías.",
      "Hidrátate y reduce hábitos que manchan el esmalte. Pequeños cambios diarios prolongan notablemente los resultados.",
    ],
  },
  {
    slug: "ortodoncia-invisible",
    title: "Ortodoncia invisible vs brackets: ¿cuál te conviene?",
    excerpt:
      "Comparamos comodidad, estética y tiempos de tratamiento para ayudarte a decidir.",
    date: "25 abril 2026",
    readTime: "6 min",
    category: "Ortodoncia",
    image:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=800&h=500&fit=crop",
    paragraphs: [
      "Los alineadores invisibles son ideales para quienes buscan discreción y comodidad. Se pueden retirar para comer y cepillarse, lo que facilita la higiene.",
      "Los brackets tradicionales siguen siendo muy efectivos en casos complejos de mordida o rotaciones severas.",
      "La duración del tratamiento depende de la complejidad del caso, no solo del sistema elegido. Un diagnóstico 3D permite estimar tiempos con mayor precisión.",
      "La clave está en la evaluación profesional. Lo importante no es la moda, sino el plan que mejor se adapte a tu salud y estilo de vida.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
