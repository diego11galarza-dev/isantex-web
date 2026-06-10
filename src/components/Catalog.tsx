"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { products, Product } from "@/lib/catalog-data";

const WA_BASE = "https://wa.me/593999097067?text=";

function ProductPlaceholder({ name }: { name: string }) {
  return (
    <div className="w-full h-48 bg-[#2B2FB8] rounded-t-2xl flex flex-col items-center justify-center p-4">
      <svg className="w-12 h-12 text-white/50 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
      <p className="text-white/70 text-xs text-center font-medium leading-tight">{name}</p>
      <p className="text-white/30 text-xs mt-1">Imagen próximamente</p>
    </div>
  );
}

function WAIcon({ size = 4 }: { size?: number }) {
  return (
    <svg className={`w-${size} h-${size}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Modal de detalle del producto ──────────────────────────────────────────────
function ProductModal({
  product,
  lang,
  onClose,
  getProductName,
  getCategoryLabel,
  buildWAUrl,
  categoryColors,
  quoteBtn,
}: {
  product: Product;
  lang: string;
  onClose: () => void;
  getProductName: (p: Product) => string;
  getCategoryLabel: (p: Product) => string;
  buildWAUrl: (name: string) => string;
  categoryColors: Record<string, string>;
  quoteBtn: string;
}) {
  const name = getProductName(product);
  const category = getCategoryLabel(product);
  const specs = product.specs;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Imagen grande */}
        {product.image ? (
          <div className="relative w-full h-64 sm:h-80">
            <Image
              src={product.image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 512px"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ) : (
          <div className="w-full h-48 bg-[#2B2FB8] flex flex-col items-center justify-center gap-3">
            <svg className="w-14 h-14 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <p className="text-white/60 text-sm">Imagen próximamente</p>
          </div>
        )}

        {/* Contenido con scroll si es largo */}
        <div className="p-6 max-h-[55vh] overflow-y-auto">
          {/* Badge */}
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category] ?? "bg-gray-100 text-gray-600"}`}>
            {category}
          </span>

          {/* Nombre */}
          <h3 className="text-2xl font-black text-gray-900 mt-3 mb-4">{name}</h3>

          {specs ? (
            /* ── Specs reales del catálogo físico ── */
            <div className="space-y-3 mb-5">

              {/* Descripción */}
              {(lang === "es" ? specs.descriptionEs : specs.descriptionEn) && (
                <div className="bg-[#F5F6FF] rounded-2xl p-4">
                  <p className="text-xs font-bold text-[#2B2FB8] uppercase tracking-wider mb-2">
                    {lang === "es" ? "Descripción" : "Description"}
                  </p>
                  <ul className="space-y-1.5">
                    {(lang === "es" ? specs.descriptionEs! : specs.descriptionEn!).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2B2FB8] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tallas (prendas) */}
              {specs.sizes && (
                <div className="bg-[#F5F6FF] rounded-2xl p-4">
                  <p className="text-xs font-bold text-[#2B2FB8] uppercase tracking-wider mb-1.5">
                    {lang === "es" ? "Tallas disponibles" : "Available sizes"}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 tracking-wide">{specs.sizes}</p>
                </div>
              )}

              {/* Medidas (artículos sin talla: banderas, cintas, etc.) */}
              {specs.dimensions && (
                <div className="bg-[#F5F6FF] rounded-2xl p-4">
                  <p className="text-xs font-bold text-[#2B2FB8] uppercase tracking-wider mb-1.5">
                    {lang === "es" ? "Medidas" : "Dimensions"}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">{specs.dimensions}</p>
                </div>
              )}

              {/* Colores */}
              {specs.colors && (
                <div className="bg-[#F5F6FF] rounded-2xl p-4 flex items-center gap-3">
                  <div className="flex gap-1">
                    {["#E8421C","#F5A623","#18A047","#4A90D9","#2B2FB8","#1A1A1A","#8B2FC9","#C0C0C0"].map(c => (
                      <span key={c} className="w-4 h-4 rounded-full border border-white/60 shadow-sm" style={{ background: c }} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{specs.colors}</p>
                </div>
              )}

              {/* Origen — fijo */}
              <div className="bg-[#F5F6FF] rounded-2xl p-4">
                <p className="text-xs font-bold text-[#2B2FB8] uppercase tracking-wider mb-1">
                  {lang === "es" ? "Origen" : "Origin"}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  🇪🇨 {lang === "es" ? "Hecho en Ecuador · 100% personalizado" : "Made in Ecuador · 100% custom"}
                </p>
              </div>
            </div>
          ) : (
            /* ── Info genérica mientras no hay specs ── */
            <div className="bg-[#F5F6FF] rounded-2xl p-4 mb-5 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  {lang === "es" ? "Categoría" : "Category"}
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">{category}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  {lang === "es" ? "Personalización" : "Customization"}
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">100% {lang === "es" ? "a medida" : "custom"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  {lang === "es" ? "Técnica" : "Technique"}
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">Bordado / Sublimación / DTF</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  {lang === "es" ? "Origen" : "Origin"}
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">🇪🇨 {lang === "es" ? "Hecho en Ecuador" : "Made in Ecuador"}</p>
              </div>
            </div>
          )}

          {/* Botón cotizar */}
          <a
            href={buildWAUrl(name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#2B2FB8] hover:bg-[#1e2296] text-white font-bold py-3.5 rounded-2xl transition-colors text-base"
          >
            <WAIcon size={5} />
            {quoteBtn}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────────
export default function Catalog() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filterLabels = t.catalog.filters;

  const filteredProducts =
    activeFilter === 0
      ? products
      : products.filter((p) =>
          lang === "es"
            ? p.categoryEs === filterLabels[activeFilter]
            : p.categoryEn === filterLabels[activeFilter]
        );

  const getCategoryLabel = (p: Product) => (lang === "es" ? p.categoryEs : p.categoryEn);
  const getProductName   = (p: Product) => (lang === "es" ? p.nameEs    : p.nameEn);

  const buildWAUrl = (productName: string) => {
    const msg = encodeURIComponent(`${t.catalog.quoteMsg}${productName}. Quisiera más información.`);
    return `${WA_BASE}${msg}`;
  };

  const categoryColors: Record<string, string> = {
    Corporativo: "bg-blue-100 text-blue-700",
    Corporate:   "bg-blue-100 text-blue-700",
    Industrial:  "bg-orange-100 text-orange-700",
    "Médico/Salud":   "bg-green-100 text-green-700",
    "Medical/Health": "bg-green-100 text-green-700",
    Educativo:    "bg-yellow-100 text-yellow-700",
    Educational:  "bg-yellow-100 text-yellow-700",
    Deportivo:    "bg-red-100 text-red-700",
    Sports:       "bg-red-100 text-red-700",
    Especial:     "bg-purple-100 text-purple-700",
    Special:      "bg-purple-100 text-purple-700",
  };

  return (
    <>
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Imagen */}
                {product.image ? (
                  <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={getProductName(product)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Lupa al hacer hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-2.5 shadow-lg">
                        <svg className="w-5 h-5 text-[#2B2FB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ProductPlaceholder name={getProductName(product)} />
                )}

                <div className="p-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[getCategoryLabel(product)] ?? "bg-gray-100 text-gray-600"}`}>
                    {getCategoryLabel(product)}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-3 text-sm leading-tight">
                    {getProductName(product)}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(buildWAUrl(getProductName(product)), "_blank");
                    }}
                    className="flex items-center justify-center gap-1.5 w-full bg-[#2B2FB8] hover:bg-[#1e2296] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                  >
                    <WAIcon size={4} />
                    {t.catalog.quoteBtn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          lang={lang}
          onClose={() => setSelectedProduct(null)}
          getProductName={getProductName}
          getCategoryLabel={getCategoryLabel}
          buildWAUrl={buildWAUrl}
          categoryColors={categoryColors}
          quoteBtn={t.catalog.quoteBtn}
        />
      )}
    </>
  );
}
