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
  /** Tallas para prendas: "S - M - L - XL - XXL" */
  sizes?: string;
  /** Medidas para artículos sin talla: banderas, cintas, banderines */
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
    nameEs: "Chalecos Corporativos",
    nameEn: "Corporate Vests",
    categoryEs: "Corporativo",
    categoryEn: "Corporate",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125222/Chaleco_Corporativo_kxffxe.jpg",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Chaleco corporativo de corte ejecutivo con bolsillos funcionales",
        "Confeccionado en tela de alta resistencia con acabados premium",
        "Ideal para identificar al personal en eventos, ferias y trabajo en campo",
        "Bordado o estampado personalizado con logo corporativo",
      ],
      descriptionEn: [
        "Executive-cut corporate vest with functional pockets",
        "Made from high-durability fabric with premium-quality finishes",
        "Ideal for identifying staff at events, fairs and fieldwork",
        "Custom embroidery or printing with corporate logo",
      ],
      colors: "20+ colores Pantone disponibles",
    },
  },
  {
    id: 2,
    nameEs: "Chalecos con Logo",
    nameEn: "Logo Vests",
    categoryEs: "Corporativo",
    categoryEn: "Corporate",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125225/Chaleco_Reflectivo_aqd1ld.jpg",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Chaleco reflectivo de alta visibilidad con cintas AAA en frente y espalda",
        "Diseño de múltiples bolsillos con cierres para herramientas y documentos",
        "Uso en obras, logística, eventos y entornos de alto tráfico",
        "Serigrafía, bordado o termofijado del logo corporativo",
      ],
      descriptionEn: [
        "High-visibility reflective vest with AAA strips on front and back",
        "Multi-pocket design with zippers for tools and documents",
        "For construction, logistics, events and high-traffic environments",
        "Screen printing, embroidery or heat-transfer corporate logo",
      ],
      colors: "Naranja, amarillo, verde flúor y colores corporativos",
    },
  },
  {
    id: 3,
    nameEs: "Uniformes Ejecutivos",
    nameEn: "Executive Uniforms",
    categoryEs: "Corporativo",
    categoryEn: "Corporate",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125226/Chompa_Borrego_m45tce.jpg",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Chompa tipo borrego (sherpa) con forro polar interior de alta densidad",
        "Exterior en tela antiestática con tratamiento repelente al agua",
        "Capucha ajustable y bolsillos con cierre para mayor funcionalidad",
        "Bordado corporativo en pecho o manga según requerimiento",
      ],
      descriptionEn: [
        "Sherpa-lined hoodie with high-density polar fleece interior",
        "Antistatic exterior with water-repellent treatment",
        "Adjustable hood and zippered pockets for added functionality",
        "Corporate embroidery on chest or sleeve as required",
      ],
      colors: "Negro, gris, azul marino y colores corporativos",
    },
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
        "Cintas reflectivas que aumentan la visibilidad en condiciones de baja luz",
      ],
      descriptionEn: [
        "Reinforced denim work pants with lateral reflective strips",
        "High abrasion resistance for demanding industrial environments",
        "Double-stitched seams at high-stress points for durability",
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
        "Tejido transpirable de secado rápido para trabajo prolongado en campo",
        "Cuello tipo polo con botones reforzados resistentes al desgaste",
        "Bordado o estampado personalizado con logo corporativo",
      ],
      descriptionEn: [
        "High-visibility polo with AAA reflective strips on chest, sleeves and back",
        "Breathable quick-dry fabric for extended fieldwork",
        "Reinforced button-up polo collar resistant to wear",
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
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125224/Chaleco_Reflectivo_termico_dr4ssq.jpg",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Chaleco térmico reflectivo para personal en entornos de alta demanda",
        "Forro interior polar que mantiene la temperatura corporal en zonas frías",
        "Cintas reflectivas para mayor visibilidad e identificación del personal",
        "Múltiples bolsillos funcionales para equipos y documentos",
      ],
      descriptionEn: [
        "Thermal reflective vest for personnel in high-demand environments",
        "Polar inner lining that maintains body temperature in cold areas",
        "Reflective strips for improved staff visibility and identification",
        "Multiple functional pockets for equipment and documents",
      ],
      colors: "Azul, negro, verde y colores institucionales",
    },
  },
  {
    id: 8,
    nameEs: "Batas de Laboratorio",
    nameEn: "Lab Coats",
    categoryEs: "Médico/Salud",
    categoryEn: "Medical/Health",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125225/Chaqueta_Chef_bz2obv.jpg",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Chaqueta tipo bata de manga larga con cuello estructurado y cierre de botones",
        "Tela de alta resistencia a manchas, grasas y líquidos industriales",
        "Bolsillos internos y externos para herramientas y utensilios de trabajo",
        "Ideal para cocina profesional, laboratorio, salud y servicios especializados",
      ],
      descriptionEn: [
        "Long-sleeve coat-style jacket with structured collar and button closure",
        "High resistance fabric against stains, grease and industrial liquids",
        "Internal and external pockets for tools and work utensils",
        "Ideal for professional kitchen, laboratory, healthcare and specialized services",
      ],
      colors: "Blanco, negro, azul marino y colores institucionales",
    },
  },
  {
    id: 9,
    nameEs: "Uniformes de Enfermería",
    nameEn: "Nursing Uniforms",
    categoryEs: "Médico/Salud",
    categoryEn: "Medical/Health",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125223/chaleco_reflectivo_carnet_nmz8nq.jpg",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Chaleco con portacarnet integrado para identificación del personal de salud",
        "Diseño ergonómico que facilita la movilidad en entornos clínicos y hospitalarios",
        "Bolsillos especializados para equipos de diagnóstico básico",
        "Tela de fácil mantenimiento y desinfección para higiene del personal",
      ],
      descriptionEn: [
        "Vest with integrated badge holder for healthcare staff identification",
        "Ergonomic design for ease of movement in clinical and hospital environments",
        "Specialized pockets for basic diagnostic equipment",
        "Easy-care fabric for staff hygiene and disinfection",
      ],
      colors: "Blanco, celeste, verde clínico y colores institucionales",
    },
  },

  // ── Educativo ──────────────────────────────────────────────────────────────
  {
    id: 10,
    nameEs: "Uniformes Escolares",
    nameEn: "School Uniforms",
    categoryEs: "Educativo",
    categoryEn: "Educational",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125226/Chaqueta_Escolar_nct4iq.jpg",
    specs: {
      sizes: "2 - 4 - 6 - 8 - 10 - 12 - S - M - L - XL",
      descriptionEs: [
        "Chaqueta escolar con diseño institucional en los colores de la unidad educativa",
        "Tejido resistente al uso diario con tratamiento antiestático y antimancha",
        "Escudo o logo institucional bordado en el pecho izquierdo",
        "Disponible en tallas desde niño hasta adulto para toda la comunidad educativa",
      ],
      descriptionEn: [
        "School jacket with institutional design in the school's colors",
        "Fabric resistant to daily use with antistatic and stain-resistant treatment",
        "Institutional coat of arms or logo embroidered on the left chest",
        "Available in sizes from children to adult for the entire school community",
      ],
      colors: "Colores institucionales de cada unidad educativa",
    },
  },
  {
    id: 11,
    nameEs: "Buzos Institucionales",
    nameEn: "Institutional Sweaters",
    categoryEs: "Educativo",
    categoryEn: "Educational",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125220/Buzo_polo_reflectivo_mkfgaa.jpg",
    specs: {
      sizes: "S - M - L - XL - XXL - XXXL",
      descriptionEs: [
        "Buzo tipo polo con cintas reflectivas para uso institucional y educativo",
        "Cuello estructurado con cierre parcial para comodidad en actividades escolares",
        "Tejido de alto gramaje para resistencia y durabilidad en uso diario",
        "Bordado institucional en pecho o personalización con nombre del estudiante",
      ],
      descriptionEn: [
        "Polo-style sweatshirt with reflective strips for institutional and educational use",
        "Structured collar with partial zip for comfort in school activities",
        "High-weight fabric for resistance and durability in daily use",
        "Institutional embroidery on chest or personalization with student name",
      ],
      colors: "Colores institucionales y personalizados disponibles",
    },
  },
  {
    id: 12,
    nameEs: "Camisetas Estudiantiles",
    nameEn: "Student T-Shirts",
    categoryEs: "Educativo",
    categoryEn: "Educational",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125221/Camiseta_polo_reflectiva_qh5qk7.jpg",
    specs: {
      sizes: "2 - 4 - 6 - 8 - 10 - 12 - S - M - L - XL - XXL",
      descriptionEs: [
        "Camiseta polo estudiantil con cintas reflectivas para seguridad vial",
        "Tejido piqué de alta resistencia al lavado frecuente y al desgaste",
        "Cuello tipo polo clásico con botones de nácar resistentes",
        "Ideal para uso escolar, excursiones y actividades al aire libre",
      ],
      descriptionEn: [
        "Student polo shirt with reflective strips for road safety",
        "High wash frequency and wear-resistant piqué fabric",
        "Classic polo collar with durable pearl buttons",
        "Ideal for school use, field trips and outdoor activities",
      ],
      colors: "Colores institucionales y personalizados disponibles",
    },
  },

  // ── Deportivo ──────────────────────────────────────────────────────────────
  {
    id: 13,
    nameEs: "Camisetas Deportivas",
    nameEn: "Sports T-Shirts",
    categoryEs: "Deportivo",
    categoryEn: "Sports",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125229/Gorra_Safari_wbcvml.png",
    specs: {
      sizes: "S - M - L - XL - XXL",
      descriptionEs: [
        "Gorra tipo safari de ala ancha para deporte al aire libre y aventura",
        "Tela con protección solar UPF 50+ que bloquea los rayos UV",
        "Correa de ajuste trasera para adaptación perfecta a cualquier talla de cabeza",
        "Bordado personalizado del logo, nombre o número en el frente",
      ],
      descriptionEn: [
        "Wide-brim safari cap for outdoor sports and adventure",
        "Fabric with UPF 50+ sun protection that blocks UV rays",
        "Rear adjustment strap for a perfect fit for any head size",
        "Custom logo, name or number embroidery on the front",
      ],
      colors: "Caqui, negro, azul, verde oliva y colores personalizados",
    },
  },
  {
    id: 14,
    nameEs: "Cintas y Bandas Deportivas",
    nameEn: "Sports Sashes & Bands",
    categoryEs: "Deportivo",
    categoryEn: "Sports",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125227/Cinta_Srt._Deportes_ulieku.jpg",
    specs: {
      descriptionEs: [
        "Cinta de Señorita Deportes confeccionada en tela satinada de alta calidad",
        "Letras y decoración sublimada con el título, ciudad y año del evento",
        "Acabado brillante que resalta en fotografías y actos oficiales",
        "Personalizable con nombre, título, institución y colores del evento",
      ],
      descriptionEn: [
        "Sports Queen sash made from high-quality satin fabric",
        "Sublimated letters and decoration with event title, city and year",
        "Shiny finish that stands out in photographs and official ceremonies",
        "Customizable with name, title, institution and event colors",
      ],
      colors: "Impresión a todo color — sin límite de colores",
    },
  },
  {
    id: 15,
    nameEs: "Banderas y Pancartas",
    nameEn: "Flags & Banners",
    categoryEs: "Deportivo",
    categoryEn: "Sports",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125220/Bandera_Sublimada_msjgu5.jpg",
    specs: {
      descriptionEs: [
        "Bandera sublimada a todo color con diseño personalizado de alta definición",
        "Impresión permanente que no se decolora ni desprende con el uso",
        "Tela de poliéster antidesgarro de alta resistencia a la intemperie",
        "Ojales reforzados y costura perimetral para mayor durabilidad",
      ],
      descriptionEn: [
        "Full-color sublimated flag with high-definition custom design",
        "Permanent printing that does not fade or peel with use",
        "Anti-tear polyester fabric with high weather resistance",
        "Reinforced eyelets and perimeter stitching for durability",
      ],
      colors: "Impresión a todo color — sin límite de colores",
    },
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
        "Confección artesanal con telas de alta calidad y acabados detallados a mano",
        "Incluye traje completo con todos los accesorios del personaje",
        "Ideal para desfiles, festividades y representaciones culturales del Ecuador",
      ],
      descriptionEn: [
        "Traditional Mama Negra costume, cultural emblem of Latacunga and Cotopaxi",
        "Handcrafted with high-quality fabrics and hand-detailed finishes",
        "Includes full costume with all character accessories",
        "Ideal for parades, Ecuadorian festivities and cultural representations",
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
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125219/Bandera_Ecuador_nozolk.jpg",
    specs: {
      descriptionEs: [
        "Bandera del Ecuador confeccionada con técnica de sublimación total",
        "Colores nacionales amarillo, azul y rojo en tela de poliéster de alta densidad",
        "Impresión permanente que mantiene el brillo y nitidez de los colores",
        "Disponible en distintos formatos: interior, exterior, institucional y de protocolo",
      ],
      descriptionEn: [
        "Ecuadorian flag made with full sublimation technique",
        "National colors yellow, blue and red on high-density polyester fabric",
        "Permanent printing that maintains color brightness and sharpness",
        "Available in different formats: indoor, outdoor, institutional and protocol",
      ],
      colors: "Amarillo, azul y rojo — colores nacionales oficiales",
    },
  },
  {
    id: 18,
    nameEs: "Colecciones Institucionales",
    nameEn: "Institutional Collections",
    categoryEs: "Especial",
    categoryEn: "Special",
    image: "https://res.cloudinary.com/dvamlxoy7/image/upload/v1781125220/Banderin_Dtf_fgsz6h.jpg",
    specs: {
      descriptionEs: [
        "Banderín impreso con técnica DTF (Direct to Film) de máxima definición",
        "Transferencia directa al tejido con colores vibrantes y bordes perfectamente nítidos",
        "Ideal para colecciones institucionales, equipos deportivos y eventos especiales",
        "Disponible en forma triangular o rectangular según especificación del cliente",
      ],
      descriptionEn: [
        "Pennant printed with high-definition DTF (Direct to Film) technique",
        "Direct fabric transfer with vibrant colors and perfectly sharp edges",
        "Ideal for institutional collections, sports teams and special events",
        "Available in triangular or rectangular shape as per client specification",
      ],
      colors: "Impresión a todo color — sin límite de colores",
    },
  },
];
