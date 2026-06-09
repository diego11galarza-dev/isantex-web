"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Imágenes profesionales de Pexels (libres de uso)
const serviceImages = [
  {
    // Bordado computarizado — máquinas industriales bordando tela
    url: "https://images.pexels.com/photos/16430929/pexels-photo-16430929.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop",
    alt: "Bordado computarizado industrial",
  },
  {
    // Sublimación — impresora estampando diseño en tela
    url: "https://images.pexels.com/photos/5727002/pexels-photo-5727002.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop",
    alt: "Sublimación textil profesional",
  },
  {
    // Serigrafía — rasqueta sobre marco de serigrafía
    url: "https://images.pexels.com/photos/1509308/pexels-photo-1509308.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop",
    alt: "Serigrafía profesional",
  },
  {
    // DTF — operario usando máquina de impresión en camisetas
    url: "https://images.pexels.com/photos/9314012/pexels-photo-9314012.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop",
    alt: "Impresión DTF Direct to Film",
  },
  {
    // Confección a medida — dos sastres trabajando juntos
    url: "https://images.pexels.com/photos/7776116/pexels-photo-7776116.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop",
    alt: "Confección a medida profesional",
  },
  {
    // Diseño gráfico textil — diseñadora trabajando en laptop
    url: "https://images.pexels.com/photos/8978436/pexels-photo-8978436.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop",
    alt: "Diseño gráfico textil",
  },
];

const serviceIcons = [
  // Bordado
  <svg key="b" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // Sublimación
  <svg key="s" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // Serigrafía
  <svg key="sg" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>,
  // DTF
  <svg key="dtf" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // Confección
  <svg key="c" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
  </svg>,
  // Diseño
  <svg key="d" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#7EC8E3]/15 text-[#2B2FB8] font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {t.nav.services}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {t.services.items.map((service, i) => (
            <div
              key={service.name}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-default"
            >
              {/* Background image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={serviceImages[i].url}
                  alt={serviceImages[i].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d8a]/80 via-[#2B2FB8]/30 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center text-white">
                  {serviceIcons[i]}
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-5">
                {/* Accent line */}
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-[#7EC8E3] to-[#B39DDB] mb-3" />

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2B2FB8] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Bottom hover bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2B2FB8] to-[#7EC8E3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">¿No encuentras lo que necesitas?</p>
          <a
            href="https://wa.me/593999097067?text=Hola%2C%20necesito%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2B2FB8] hover:bg-[#1e2296] text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar servicio personalizado
          </a>
        </div>

      </div>
    </section>
  );
}
