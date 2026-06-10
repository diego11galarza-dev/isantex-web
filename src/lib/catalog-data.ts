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
  /** Tallas para prendas de vestir: "S - M - L - XL - XXL" */
  sizes?: string;
  /** Medidas para artículos sin talla (banderas, cintas, etc.): "90×150 cm" */
  dimensions?: string;
  descriptionEs?: string[];
  descriptionEn?: string[];
  colors?: string;
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
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Alta visibilidad con cintas reflectivas en mangas, pecho y espalda",
        "Confeccionado para cumplir normas de seguridad industrial",
        "Bordado o serigrafía personalizada con logo corporativo",
        "Diseño ergonómico para uso prolongado en campo",
      ],
      descriptionEn: [
        "High visibility with reflective strips on sleeves, chest and back",
        "Manufactured to meet industrial safety standards",
        "Custom embroidery or screen printing with corporate logo",
        "Ergonomic design for extended field use",
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
