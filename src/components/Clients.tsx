"use client";

import { useLanguage } from "@/context/LanguageContext";

function ClientLogoPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 min-h-[100px] group">
      <div className="w-14 h-14 rounded-xl bg-[#2B2FB8]/10 flex items-center justify-center mb-2 group-hover:bg-[#2B2FB8]/20 transition-colors">
        <span className="text-[#2B2FB8] font-black text-lg">{initials}</span>
      </div>
      <span className="text-xs text-gray-500 text-center font-medium leading-tight">{name}</span>
    </div>
  );
}

export default function Clients() {
  const { t } = useLanguage();

  return (
    <section id="clientes" className="py-20 lg:py-28 bg-[#F5F6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#7EC8E3] font-semibold text-sm uppercase tracking-widest">
            {t.nav.clients}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">
            {t.clients.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.clients.logos.map((name) => (
            <ClientLogoPlaceholder key={name} name={name} />
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🏛️", label: "GADs y Municipios" },
            { icon: "🏭", label: "Empresas Industriales" },
            { icon: "🏥", label: "Centros de Salud" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
