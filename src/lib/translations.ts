export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      catalog: "Catálogo",
      process: "Proceso",
      clients: "Clientes",
      publicContracting: "Contratación Pública",
      contact: "Contacto",
      cta: "Solicitar cotización",
    },
    hero: {
      headline: "Vestimos a Ecuador con calidad y orgullo",
      subheadline:
        "Uniformes corporativos, industriales, médicos y educativos — bordado, sublimación, DTF y serigrafía",
      btnCatalog: "Ver catálogo",
      btnQuote: "Cotiza ahora →",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Técnicas de personalización textil de alta calidad para tu empresa o institución",
      items: [
        {
          name: "Bordado Computarizado",
          desc: "Diseños de alta precisión aplicados directamente sobre la prenda con hilo resistente y duradero.",
        },
        {
          name: "Sublimación",
          desc: "Colores vibrantes e imágenes fotográficas en telas sintéticas con acabado profesional.",
        },
        {
          name: "Serigrafía",
          desc: "Técnica clásica de estampado para grandes volúmenes con tintas de alta cobertura.",
        },
        {
          name: "DTF (Direct to Film)",
          desc: "Transferencia directa al film para diseños detallados sobre cualquier tipo de tela.",
        },
        {
          name: "Confección a Medida",
          desc: "Prendas elaboradas con medidas exactas para uniformes corporativos e industriales.",
        },
        {
          name: "Diseño Gráfico Textil",
          desc: "Creamos o adaptamos tu logo y diseños para la técnica de estampado más adecuada.",
        },
      ],
    },
    catalog: {
      title: "Catálogo de Productos",
      subtitle: "Explora nuestra línea completa de uniformes y prendas personalizadas",
      filters: ["Todos", "Corporativo", "Industrial", "Médico/Salud", "Educativo", "Deportivo", "Especial"],
      quoteBtn: "Cotizar",
      quoteMsg: "Hola, me interesa cotizar: ",
    },
    process: {
      title: "Nuestro Proceso de Compra",
      subtitle: "Simple, transparente y orientado a tu satisfacción",
      closingPhrase: "Transformamos tus ideas en uniformes de calidad mediante un proceso ágil, personalizado y orientado al cumplimiento.",
      steps: [
        { title: "Cotización", desc: "Contáctanos y recibe una propuesta personalizada sin costo ni compromiso." },
        { title: "Diseño Personalizado", desc: "Nuestro equipo diseña tus prendas a medida según tu identidad corporativa." },
        { title: "Aprobación", desc: "Revisas y apruebas el diseño antes de iniciar la producción." },
        { title: "Producción", desc: "Elaboramos tu pedido con los más altos estándares de calidad textil." },
        { title: "Entrega", desc: "Cumplimos los plazos acordados y entregamos en toda la zona central del país." },
      ],
    },
    clients: {
      title: "Clientes Destacados",
      subtitle: "Más de 50 instituciones confían en Isantex",
      logos: [
        "GAD Latacunga",
        "Municipio de Latacunga",
        "CELEC EP",
        "Empresa Privada 1",
        "Empresa Privada 2",
        "Empresa Privada 3",
        "Empresa Privada 4",
      ],
    },
    publicContracting: {
      title: "Proveedores del Estado ecuatoriano",
      text: "Isantex está registrada en el portal de compras públicas del Ecuador (SERCOP). Atendemos a GADs, municipios, ministerios y empresas públicas con procesos de contratación transparentes y dentro del marco legal vigente.",
      btn: "Consultar en SERCOP",
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle: "Testimonios reales de instituciones que confían en nuestra calidad",
      items: [
        {
          quote:
            "Isantex entregó los uniformes del personal municipal en tiempo récord y con una calidad excepcional. El bordado quedó perfecto y el equipo fue muy profesional durante todo el proceso.",
          name: "Ing. Carlos Medina",
          role: "Director Administrativo",
          org: "GAD Municipal de Latacunga",
        },
        {
          quote:
            "Llevamos tres años trabajando con Isantex para los uniformes de nuestro personal técnico. Siempre cumplen con los estándares industriales requeridos y los plazos de entrega.",
          name: "Lcda. Patricia Ramos",
          role: "Jefa de Talento Humano",
          org: "CELEC EP — Central Hidráulica",
        },
        {
          quote:
            "Los scrubs y uniformes médicos que elaboraron para nuestra clínica son de excelente calidad. El diseño personalizado con nuestro logo quedó impecable. Totalmente recomendados.",
          name: "Dr. Andrés Villacís",
          role: "Director Médico",
          org: "Clínica MedCenter Cotopaxi",
        },
      ],
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Estamos listos para ayudarte a vestir a tu equipo con excelencia",
      form: {
        name: "Nombre completo",
        company: "Empresa / Institución",
        phone: "Teléfono / WhatsApp",
        productType: "Tipo de producto",
        productOptions: [
          "Selecciona un tipo...",
          "Uniformes corporativos",
          "Uniformes industriales",
          "Uniformes médicos / salud",
          "Uniformes educativos",
          "Uniformes deportivos",
          "Prendas especiales / eventos",
          "Otro",
        ],
        message: "Mensaje o descripción de tu pedido",
        send: "Enviar mensaje",
      },
      info: {
        email: "isantex2013@gmail.com",
        wa1: "+593 99 909 7067",
        wa2: "+593 958 942 433",
        city: "Latacunga, Cotopaxi, Ecuador",
      },
    },
    footer: {
      slogan: "Amamos vestirte bien!",
      links: "Enlaces rápidos",
      social: "Síguenos",
      rights: "© 2025 ISANTEX. Todos los derechos reservados.",
      city: "Latacunga, Cotopaxi, Ecuador",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      catalog: "Catalog",
      process: "Process",
      clients: "Clients",
      publicContracting: "Public Contracting",
      contact: "Contact",
      cta: "Request a quote",
    },
    hero: {
      headline: "Dressing Ecuador with quality and pride",
      subheadline:
        "Corporate, industrial, medical and educational uniforms — embroidery, sublimation, DTF and screen printing",
      btnCatalog: "View catalog",
      btnQuote: "Get a quote →",
    },
    services: {
      title: "Our Services",
      subtitle:
        "High-quality textile customization techniques for your company or institution",
      items: [
        {
          name: "Computerized Embroidery",
          desc: "High-precision designs applied directly onto the garment with resistant and durable thread.",
        },
        {
          name: "Sublimation",
          desc: "Vibrant colors and photographic images on synthetic fabrics with a professional finish.",
        },
        {
          name: "Screen Printing",
          desc: "Classic printing technique for large volumes with high-coverage inks.",
        },
        {
          name: "DTF (Direct to Film)",
          desc: "Direct film transfer for detailed designs on any type of fabric.",
        },
        {
          name: "Custom Tailoring",
          desc: "Garments made to exact measurements for corporate and industrial uniforms.",
        },
        {
          name: "Textile Graphic Design",
          desc: "We create or adapt your logo and designs for the most suitable printing technique.",
        },
      ],
    },
    catalog: {
      title: "Product Catalog",
      subtitle: "Explore our complete line of uniforms and custom garments",
      filters: ["All", "Corporate", "Industrial", "Medical/Health", "Educational", "Sports", "Special"],
      quoteBtn: "Quote",
      quoteMsg: "Hello, I'm interested in quoting: ",
    },
    process: {
      title: "Our Purchase Process",
      subtitle: "Simple, transparent and focused on your satisfaction",
      closingPhrase: "We transform your ideas into quality uniforms through an agile, personalized process focused on fulfillment.",
      steps: [
        { title: "Quote", desc: "Contact us and receive a personalized proposal at no cost or commitment." },
        { title: "Custom Design", desc: "Our team designs your garments tailored to your corporate identity." },
        { title: "Approval", desc: "You review and approve the design before we start production." },
        { title: "Production", desc: "We produce your order with the highest textile quality standards." },
        { title: "Delivery", desc: "We meet agreed deadlines and deliver throughout the central region." },
      ],
    },
    clients: {
      title: "Featured Clients",
      subtitle: "More than 50 institutions trust Isantex",
      logos: [
        "GAD Latacunga",
        "Municipality of Latacunga",
        "CELEC EP",
        "Private Company 1",
        "Private Company 2",
        "Private Company 3",
        "Private Company 4",
      ],
    },
    publicContracting: {
      title: "Ecuadorian State Suppliers",
      text: "Isantex is registered on Ecuador's public procurement portal (SERCOP). We serve GADs, municipalities, ministries and public companies with transparent contracting processes within the current legal framework.",
      btn: "Check on SERCOP",
    },
    testimonials: {
      title: "What our clients say",
      subtitle: "Real testimonials from institutions that trust our quality",
      items: [
        {
          quote:
            "Isantex delivered the municipal staff uniforms in record time and with exceptional quality. The embroidery was perfect and the team was very professional throughout the entire process.",
          name: "Eng. Carlos Medina",
          role: "Administrative Director",
          org: "GAD Municipality of Latacunga",
        },
        {
          quote:
            "We have been working with Isantex for three years for our technical staff uniforms. They always meet the required industrial standards and delivery deadlines.",
          name: "Ms. Patricia Ramos",
          role: "Human Resources Manager",
          org: "CELEC EP — Hydraulic Power Plant",
        },
        {
          quote:
            "The scrubs and medical uniforms they made for our clinic are of excellent quality. The custom design with our logo was impeccable. Totally recommended.",
          name: "Dr. Andrés Villacís",
          role: "Medical Director",
          org: "MedCenter Cotopaxi Clinic",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are ready to help you dress your team with excellence",
      form: {
        name: "Full name",
        company: "Company / Institution",
        phone: "Phone / WhatsApp",
        productType: "Product type",
        productOptions: [
          "Select a type...",
          "Corporate uniforms",
          "Industrial uniforms",
          "Medical / health uniforms",
          "Educational uniforms",
          "Sports uniforms",
          "Special garments / events",
          "Other",
        ],
        message: "Message or description of your order",
        send: "Send message",
      },
      info: {
        email: "isantex2013@gmail.com",
        wa1: "+593 99 909 7067",
        wa2: "+593 958 942 433",
        city: "Latacunga, Cotopaxi, Ecuador",
      },
    },
    footer: {
      slogan: "We love dressing you well!",
      links: "Quick links",
      social: "Follow us",
      rights: "© 2025 ISANTEX. All rights reserved.",
      city: "Latacunga, Cotopaxi, Ecuador",
    },
  },
};

export type Translations = typeof translations.es;
