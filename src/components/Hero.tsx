"use client";

import { useLanguage } from "@/context/LanguageContext";

const WA_URL =
  "https://wa.me/593999097067?text=Hola%2C%20me%20interesa%20cotizar%20con%20Isantex";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[#2B2FB8] overflow-hidden pt-16"
    >
      {/* Background geometric decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#7EC8E3] opacity-10 rounded-full" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#B39DDB] opacity-10 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white opacity-5 rounded-full" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#7EC8E3] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#7EC8E3]">
                Latacunga, Cotopaxi, Ecuador
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              {t.hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#catalogo"
                className="bg-white text-[#2B2FB8] font-bold px-7 py-3.5 rounded-xl hover:bg-[#F5F6FF] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.hero.btnCatalog}
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white hover:text-[#2B2FB8] transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.hero.btnQuote}
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/20">
              {[
                { num: "50+", label: "Clientes institucionales" },
                { num: "15+", label: "Años de experiencia" },
                { num: "6", label: "Técnicas de personalización" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-[#7EC8E3]">{stat.num}</div>
                  <div className="text-sm text-white/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#7EC8E3]" />
                  <div className="w-3 h-3 rounded-full bg-[#B39DDB]" />
                  <div className="w-3 h-3 rounded-full bg-white/50" />
                </div>
                {/* Mockup grid of product cards */}
                <div className="grid grid-cols-2 gap-4">
                  {["Corporativo", "Industrial", "Médico", "Educativo"].map((cat, i) => (
                    <div
                      key={cat}
                      className="bg-white/10 rounded-2xl p-4 border border-white/20"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="w-full h-20 rounded-xl bg-white/10 mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#7EC8E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      </div>
                      <p className="text-white text-xs font-semibold">{cat}</p>
                      <p className="text-white/50 text-xs mt-0.5">Ver productos →</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-xs">Personalización desde</p>
                    <p className="text-white font-bold text-lg">Bordado · Sublimación · DTF</p>
                  </div>
                  <div className="bg-[#7EC8E3] text-[#2B2FB8] text-xs font-bold px-3 py-1.5 rounded-full">
                    Ecuador
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#B39DDB] text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg">
                ✓ Hecho en Ecuador
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
