"use client";

import { useLanguage } from "@/context/LanguageContext";

// Ilustraciones SVG únicas para cada paso del proceso
const stepIllustrations = [
  // 1. Cotización — globo de chat con documento
  <svg key="cot" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="60" cy="46" r="32" fill="white" fillOpacity="0.12"/>
    {/* Documento */}
    <rect x="38" y="26" width="32" height="40" rx="4" fill="white" fillOpacity="0.9"/>
    <rect x="44" y="34" width="20" height="2.5" rx="1.25" fill="#2B2FB8" fillOpacity="0.5"/>
    <rect x="44" y="40" width="20" height="2.5" rx="1.25" fill="#2B2FB8" fillOpacity="0.5"/>
    <rect x="44" y="46" width="13" height="2.5" rx="1.25" fill="#2B2FB8" fillOpacity="0.5"/>
    {/* Lápiz */}
    <rect x="64" y="52" width="7" height="18" rx="1.5" transform="rotate(-35 64 52)" fill="#7EC8E3"/>
    <polygon points="67,68 70,72 63,70" fill="#B39DDB"/>
    {/* Dólar badge */}
    <circle cx="78" cy="30" r="10" fill="#B39DDB"/>
    <text x="78" y="34.5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">$</text>
  </svg>,

  // 2. Diseño Personalizado — tableta + lápiz + regla
  <svg key="dis" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="60" cy="46" r="32" fill="white" fillOpacity="0.12"/>
    {/* Tableta */}
    <rect x="32" y="22" width="40" height="52" rx="5" fill="white" fillOpacity="0.9"/>
    <rect x="36" y="28" width="32" height="32" rx="2" fill="#7EC8E3" fillOpacity="0.3"/>
    {/* Boceto camiseta */}
    <path d="M44 36 L48 32 L52 35 L56 32 L60 36 L57 39 L57 52 L47 52 L47 39 Z" stroke="#2B2FB8" strokeWidth="1.5" fill="white" fillOpacity="0.7"/>
    {/* Lápiz diagonal */}
    <rect x="70" y="24" width="6" height="22" rx="1.5" transform="rotate(30 70 24)" fill="#B39DDB"/>
    <polygon points="76,58 79,61 73,61" fill="#7EC8E3"/>
    {/* Punto de toque */}
    <circle cx="53" cy="64" r="3" fill="#2B2FB8" fillOpacity="0.6"/>
  </svg>,

  // 3. Aprobación — sello de check / aprobado
  <svg key="apr" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="60" cy="46" r="32" fill="white" fillOpacity="0.12"/>
    {/* Documento base */}
    <rect x="36" y="22" width="36" height="48" rx="4" fill="white" fillOpacity="0.9"/>
    <rect x="42" y="30" width="24" height="2.5" rx="1.25" fill="#2B2FB8" fillOpacity="0.4"/>
    <rect x="42" y="36" width="24" height="2.5" rx="1.25" fill="#2B2FB8" fillOpacity="0.4"/>
    <rect x="42" y="42" width="16" height="2.5" rx="1.25" fill="#2B2FB8" fillOpacity="0.4"/>
    {/* Sello circular */}
    <circle cx="68" cy="58" r="14" fill="#7EC8E3" fillOpacity="0.15" stroke="#7EC8E3" strokeWidth="2"/>
    <circle cx="68" cy="58" r="10" fill="#7EC8E3"/>
    {/* Check */}
    <path d="M62 58 L66 62 L75 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // 4. Producción — máquina de coser industrial
  <svg key="pro" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="60" cy="46" r="32" fill="white" fillOpacity="0.12"/>
    {/* Cuerpo máquina */}
    <rect x="28" y="38" width="50" height="28" rx="6" fill="white" fillOpacity="0.9"/>
    {/* Brazo superior */}
    <path d="M40 38 L40 26 Q40 22 46 22 L74 22 Q80 22 80 28 L80 38" stroke="white" strokeOpacity="0.9" strokeWidth="8" strokeLinecap="round" fill="none"/>
    {/* Aguja */}
    <rect x="58" y="38" width="3" height="18" rx="1.5" fill="#2B2FB8" fillOpacity="0.7"/>
    <circle cx="59.5" cy="57" r="2" fill="#7EC8E3"/>
    {/* Bobina */}
    <circle cx="72" cy="48" r="7" fill="#B39DDB" fillOpacity="0.3" stroke="#B39DDB" strokeWidth="1.5"/>
    <circle cx="72" cy="48" r="3" fill="#B39DDB"/>
    {/* Tela */}
    <path d="M28 66 Q40 62 60 64 Q75 66 92 62" stroke="#7EC8E3" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Detalles */}
    <circle cx="38" cy="48" r="4" fill="#7EC8E3" fillOpacity="0.4"/>
    <circle cx="38" cy="48" r="2" fill="#7EC8E3"/>
  </svg>,

  // 5. Entrega — caja con camión / flecha
  <svg key="ent" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="60" cy="46" r="32" fill="white" fillOpacity="0.12"/>
    {/* Camión */}
    <rect x="24" y="44" width="46" height="24" rx="3" fill="white" fillOpacity="0.9"/>
    <rect x="70" y="50" width="22" height="18" rx="3" fill="white" fillOpacity="0.8"/>
    <path d="M70 50 L78 44 L92 44 L92 50" fill="white" fillOpacity="0.7"/>
    {/* Ventana cabina */}
    <rect x="73" y="46" width="14" height="8" rx="1.5" fill="#7EC8E3" fillOpacity="0.5"/>
    {/* Ruedas */}
    <circle cx="40" cy="68" r="6" fill="#2B2FB8" fillOpacity="0.7"/>
    <circle cx="40" cy="68" r="3" fill="white" fillOpacity="0.6"/>
    <circle cx="80" cy="68" r="6" fill="#2B2FB8" fillOpacity="0.7"/>
    <circle cx="80" cy="68" r="3" fill="white" fillOpacity="0.6"/>
    {/* Caja encima */}
    <rect x="34" y="28" width="26" height="20" rx="3" fill="#B39DDB" fillOpacity="0.8"/>
    <path d="M34 38 L60 38" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
    <path d="M47 28 L47 48" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
    {/* Flecha velocidad */}
    <path d="M96 52 L106 52 M102 46 L108 52 L102 58" stroke="#7EC8E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

const stepAccents = [
  { from: "#7EC8E3", to: "#5BB8D4" },
  { from: "#8EC8DE", to: "#7AB8D0" },
  { from: "#9FBBD8", to: "#8AAFC8" },
  { from: "#B0AED3", to: "#9EA2C8" },
  { from: "#B39DDB", to: "#9F88CC" },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="py-20 lg:py-28 bg-[#F5F6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#7EC8E3]/15 text-[#2B2FB8] font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {t.nav.process}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            {t.process.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        {/* Desktop connector line */}
        <div className="hidden xl:block relative h-0 mb-0">
          <div
            className="absolute h-0.5 z-0"
            style={{
              background: "linear-gradient(90deg, #7EC8E3, #B39DDB)",
              top: "72px",
              left: "calc(10% + 60px)",
              right: "calc(10% + 60px)",
            }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-4">
          {t.process.steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center group">

              {/* Number bubble */}
              <div className="relative z-10 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg ring-4 ring-[#F5F6FF]"
                  style={{ background: `linear-gradient(135deg, ${stepAccents[i].from}, ${stepAccents[i].to})` }}
                >
                  <span className="text-white font-black text-xl">{i + 1}</span>
                </div>
              </div>

              {/* Card */}
              <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 flex flex-col">

                {/* Illustration area */}
                <div
                  className="relative w-full h-40 flex items-center justify-center p-4"
                  style={{ background: `linear-gradient(135deg, ${stepAccents[i].from}CC, ${stepAccents[i].to}EE)` }}
                >
                  <div className="w-36 h-28">
                    {stepIllustrations[i]}
                  </div>

                  {/* Arrow connector — desktop */}
                  {i < 4 && (
                    <div className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center">
                      <svg className="w-4 h-4" style={{ color: stepAccents[i].from }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="p-4 flex flex-col flex-1">
                  <div
                    className="w-8 h-1 rounded-full mb-2"
                    style={{ background: `linear-gradient(90deg, ${stepAccents[i].from}, ${stepAccents[i].to})` }}
                  />
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 group-hover:text-[#2B2FB8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing phrase */}
        <div className="mt-14">
          <div className="relative bg-[#2B2FB8] rounded-2xl px-8 py-8 text-center max-w-3xl mx-auto overflow-hidden shadow-lg">
            {/* Background decoration */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#B39DDB]/20 rounded-full" />

            {/* Quote icon */}
            <div className="relative flex justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#7EC8E3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            <p className="relative text-white text-base sm:text-lg font-medium italic leading-relaxed">
              &ldquo;{t.process.closingPhrase}&rdquo;
            </p>

            <div className="relative mt-5 flex justify-center">
              <div
                className="w-20 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, #7EC8E3, #B39DDB)" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
