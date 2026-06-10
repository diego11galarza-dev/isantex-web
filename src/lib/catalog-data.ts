export type Category =
  | "Corporativo"
  | "Industrial"
  | "Médico/Salud"
  | "Educativo"
  | "Deportivo"
  | "Especial";

export type CategoryEN =
  | "Corporate"
  | "Industrial"
  | "Medical/Health"
  | "Educational"
  | "Sports"
  | "Special";

export interface ProductSpecs {
  sizes?: string;                // "36 - 38 - 40 - 42 - 44 - 46"
  descriptionEs?: string[];      // viñetas descripción en español
  descriptionEn?: string[];      // viñetas descripción en inglés
  compositionEs?: string[];      // composición en español
  compositionEn?: string[];      // composición en inglés
  colors?: string;               // texto libre de colores disponibles
}

export interface Product {
  id: number;
  nameEs: string;
  nameEn: string;
  categoryEs: Category;
  categoryEn: CategoryEN;
  image?: string;
  specs?: ProductSpecs;
}

export const products: Product[] = [
  // ── Corporativo ────────────────────────────────────────────────────────────
  {
    id: 1,
    nameEs: "Camisas Corporativas",
    nameEn: "Corporate Shirts",
    categoryEs: "Corporativo",
    categoryEn: "Corporate",
  },
  {
    id: 2,
    nameEs: "Chalecos con Logo",
    nameEn: "Logo Vests",
    categoryEs: "Corporativo",
    categoryEn: "Corporate",
  },
  {
    id: 3,
    nameEs: "Uniformes Ejecutivos",
    nameEn: "Executive Uniforms",
    categoryEs: "Corporativo",
    categoryEn: "Corporate",
  },

  // ── Industrial ─────────────────────────────────────────────────────────────
  {
    id: 4,
    nameEs: "Overoles Industriales",
    nameEn: "Industrial Overalls",
    categoryEs: "Industrial",
    categoryEn: "Industrial",
  },
  {
    id: 5,
    nameEs: "Ropa de Trabajo Resistente",
    nameEn: "Heavy-Duty Workwear",
    categoryEs: "Industrial",
    categoryEn: "Industrial",
  },
  {
    id: 6,
    nameEs: "Trajes de Seguridad",
    nameEn: "Safety Suits",
    categoryEs: "Industrial",
    categoryEn: "Industrial",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781045438/Gemini_Generated_Image_im09t0im09t0im09_pxnqfi.png",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Reflectiva AAA mangas, pecho y espalda",
        "Bordados personalizados mangas y espalda",
        "Alta visibilidad certificada",
      ],
      descriptionEn: [
        "AAA reflective strips on sleeves, chest and back",
        "Custom embroidery on sleeves and back",
        "Certified high visibility",
      ],
      compositionEs: [
        "100% Poliéster",
        "Peso 223g (+/- 13 g/m2)",
        "+ Protección Solar / UV Protection",
        "+ Control de Humedad / BREATHABLE",
      ],
      compositionEn: [
        "100% Polyester",
        "Weight 223g (+/- 13 g/m2)",
        "+ Sun Protection / UV Protection",
        "+ Moisture Control / BREATHABLE",
      ],
      colors: "20+ colores Pantone disponibles",
    },
  },

  // ── Médico/Salud ───────────────────────────────────────────────────────────
  {
    id: 7,
    nameEs: "Scrubs Médicos",
    nameEn: "Medical Scrubs",
    categoryEs: "Médico/Salud",
    categoryEn: "Medical/Health",
  },
  {
    id: 8,
    nameEs: "Batas de Laboratorio",
    nameEn: "Lab Coats",
    categoryEs: "Médico/Salud",
    categoryEn: "Medical/Health",
  },
  {
    id: 9,
    nameEs: "Uniformes de Enfermería",
    nameEn: "Nursing Uniforms",
    categoryEs: "Médico/Salud",
    categoryEn: "Medical/Health",
  },

  // ── Educativo ──────────────────────────────────────────────────────────────
  {
    id: 10,
    nameEs: "Uniformes Escolares",
    nameEn: "School Uniforms",
    categoryEs: "Educativo",
    categoryEn: "Educational",
  },
  {
    id: 11,
    nameEs: "Buzos Institucionales",
    nameEn: "Institutional Sweaters",
    categoryEs: "Educativo",
    categoryEn: "Educational",
  },
  {
    id: 12,
    nameEs: "Camisetas Estudiantiles",
    nameEn: "Student T-Shirts",
    categoryEs: "Educativo",
    categoryEn: "Educational",
  },

  // ── Deportivo ──────────────────────────────────────────────────────────────
  {
    id: 13,
    nameEs: "Camisetas Deportivas",
    nameEn: "Sports T-Shirts",
    categoryEs: "Deportivo",
    categoryEn: "Sports",
  },
  {
    id: 14,
    nameEs: "Shorts Atléticos",
    nameEn: "Athletic Shorts",
    categoryEs: "Deportivo",
    categoryEn: "Sports",
  },
  {
    id: 15,
    nameEs: "Uniformes de Equipo",
    nameEn: "Team Uniforms",
    categoryEs: "Deportivo",
    categoryEn: "Sports",
  },

  // ── Especial ───────────────────────────────────────────────────────────────
  {
    id: 16,
    nameEs: "Prendas para Eventos",
    nameEn: "Event Garments",
    categoryEs: "Especial",
    categoryEn: "Special",
  },
  {
    id: 17,
    nameEs: "Ropa Personalizada",
    nameEn: "Custom Clothing",
    categoryEs: "Especial",
    categoryEn: "Special",
  },
  {
    id: 18,
    nameEs: "Colecciones Institucionales",
    nameEn: "Institutional Collections",
    categoryEs: "Especial",
    categoryEn: "Special",
  },
];
