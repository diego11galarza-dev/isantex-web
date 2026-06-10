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
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125229/Pantalon_Jean_reflectivo_kg0aig.jpg",
    specs: {
      sizes: "28 - 30 - 32 - 34 - 36 - 38 - 40",
      descriptionEs: [
        "Pantalón de trabajo en denim reforzado con cintas reflectivas laterales",
        "Alta resistencia a la abrasión para entornos industriales exigentes",
        "Costuras dobles en zonas de mayor tensión para mayor durabilidad",
        "Reflectivos que aumentan la visibilidad en condiciones de baja luz",
      ],
      descriptionEn: [
        "Reinforced denim work pants with lateral reflective strips",
        "High abrasion resistance for demanding industrial environments",
        "Double-stitched seams at stress points for extra durability",
        "Reflective strips for increased visibility in low-light conditions",
      ],
      colors: "Azul índigo, negro y colores corporativos disponibles",
    },
  },
  {
    id: 5,
    nameEs: "Ropa de Trabajo Resistente",
    nameEn: "Heavy-Duty Workwear",
    categoryEs: "Industrial",
    categoryEn: "Industrial",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125230/Pa%C3%B1oleta_Reflectiva_iuob1r.png",
    specs: {
      descriptionEs: [
        "Pañoleta de seguridad con material reflectivo de alta visibilidad",
        "Uso en cuello, cabeza o muñeca como accesorio de protección vial",
        "Ligera y de fácil colocación para uso rápido en campo",
        "Personalizable con logo o nombre de la empresa",
      ],
      descriptionEn: [
        "Safety bandana with high-visibility reflective material",
        "Worn on neck, head or wrist as a road safety accessory",
        "Lightweight and easy to put on for quick field use",
        "Customizable with company logo or name",
      ],
      colors: "Naranja, amarillo, verde flúor y más",
    },
  },
  {
    id: 6,
    nameEs: "Trajes de Seguridad",
    nameEn: "Safety Suits",
    categoryEs: "Industrial",
    categoryEn: "Industrial",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125231/Polo_Reflectiva_wse3wi.png",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Polo de alta visibilidad con cintas reflectivas AAA en pecho, mangas y espalda",
        "Tejido transpirable de secado rápido para trabajo en campo",
        "Cuello tipo polo con botones reforzados",
        "Bordado o estampado personalizado con logo corporativo",
      ],
      descriptionEn: [
        "High-visibility polo with AAA reflective strips on chest, sleeves and back",
        "Breathable quick-dry fabric for fieldwork",
        "Reinforced button-up polo collar",
        "Custom embroidery or printing with corporate logo",
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
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125230/Traje_Tipico_Mama_Negra_mvoufu.jpg",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Traje típico de la Mama Negra, emblema cultural de Latacunga y Cotopaxi",
        "Confección artesanal con telas de alta calidad y acabados detallados",
        "Incluye traje completo con todos los accesorios del personaje",
        "Ideal para desfiles, festividades y representaciones culturales",
      ],
      descriptionEn: [
        "Traditional Mama Negra costume, cultural emblem of Latacunga and Cotopaxi",
        "Handcrafted with high-quality fabrics and detailed finishes",
        "Includes full costume with all character accessories",
        "Ideal for parades, festivities and cultural representations",
      ],
      colors: "Colores tradicionales y personalizados disponibles",
    },
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
