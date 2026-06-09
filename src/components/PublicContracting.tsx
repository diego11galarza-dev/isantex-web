"use client";

import { useLanguage } from "@/context/LanguageContext";

const SERCOP_URL = "https://www.compraspublicas.gob.ec";

export default function PublicContracting() {
  const { t } = useLanguage();

  return (
    <section
      id="contratacion"
      className="py-20 lg:py-28 bg-[#2B2FB8] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#7EC8E3]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B39DDB]/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-[#7EC8E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-[#7EC8E3]">Proveedor Oficial SERCOP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              {t.publicContracting.title}
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {t.publicContracting.text}
            </p>

            <a
              href={SERCOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#2B2FB8] font-bold px-6 py-3 rounded-xl hover:bg-[#F5F6FF] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t.publicContracting.btn}
            </a>
          </div>

          {/* Right — stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏛️", title: "GADs", desc: "Gobiernos autónomos descentralizados" },
              { icon: "🏢", title: "Ministerios", desc: "Cartera del estado ecuatoriano" },
              { icon: "🌊", title: "Empresas Públicas", desc: "CELEC, CNT, EP Petroecuador" },
              { icon: "📋", title: "Proceso Transparente", desc: "Cumplimiento del marco legal SERCOP" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm"
              >
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
