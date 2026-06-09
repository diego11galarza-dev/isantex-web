"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/lib/catalog-data";

const WA_BASE = "https://wa.me/593999097067?text=";

function ProductPlaceholder({ name }: { name: string }) {
  return (
    <div className="w-full h-48 bg-[#2B2FB8] rounded-t-2xl flex flex-col items-center justify-center p-4">
      <svg
        className="w-12 h-12 text-white/50 mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
      <p className="text-white/70 text-xs text-center font-medium leading-tight">{name}</p>
      <p className="text-white/30 text-xs mt-1">Imagen próximamente</p>
    </div>
  );
}

export default function Catalog() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(0);

  const filterLabels = t.catalog.filters;

  const filteredProducts =
    activeFilter === 0
      ? products
      : products.filter((p) => {
          if (lang === "es") {
            return p.categoryEs === filterLabels[activeFilter];
          } else {
            return p.categoryEn === filterLabels[activeFilter];
          }
        });

  const getCategoryLabel = (p: typeof products[0]) =>
    lang === "es" ? p.categoryEs : p.categoryEn;

  const getProductName = (p: typeof products[0]) =>
    lang === "es" ? p.nameEs : p.nameEn;

  const buildWAUrl = (productName: string) => {
    const msg = encodeURIComponent(
      `${t.catalog.quoteMsg}${productName}. Quisiera más información.`
    );
    return `${WA_BASE}${msg}`;
  };

  const categoryColors: Record<string, string> = {
    Corporativo: "bg-blue-100 text-blue-700",
    Corporate: "bg-blue-100 text-blue-700",
    Industrial: "bg-orange-100 text-orange-700",
    "Médico/Salud": "bg-green-100 text-green-700",
    "Medical/Health": "bg-green-100 text-green-700",
    Educativo: "bg-yellow-100 text-yellow-700",
    Educational: "bg-yellow-100 text-yellow-700",
    Deportivo: "bg-red-100 text-red-700",
    Sports: "bg-red-100 text-red-700",
    Especial: "bg-purple-100 text-purple-700",
    Special: "bg-purple-100 text-purple-700",
  };

  return (
    <section id="catalogo" className="py-20 lg:py-28 bg-[#F5F6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#7EC8E3] font-semibold text-sm uppercase tracking-widest">
            {t.nav.catalog}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">
            {t.catalog.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveFilter(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === i
                  ? "bg-[#2B2FB8] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-[#2B2FB8]/10 hover:text-[#2B2FB8] border border-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Placeholder image — replace src with real image path */}
              <ProductPlaceholder name={getProductName(product)} />

              <div className="p-4">
                {/* Category badge */}
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    categoryColors[getCategoryLabel(product)] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {getCategoryLabel(product)}
                </span>

                <h3 className="font-bold text-gray-900 mt-2 mb-3 text-sm leading-tight">
                  {getProductName(product)}
                </h3>

                <a
                  href={buildWAUrl(getProductName(product))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full bg-[#2B2FB8] hover:bg-[#1e2296] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.catalog.quoteBtn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
