"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#7EC8E3] font-semibold text-sm uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-2 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, i) => {
            const accentColors = [
              "border-[#7EC8E3]",
              "border-[#B39DDB]",
              "border-[#2B2FB8]",
            ];
            const bgAccents = ["bg-[#7EC8E3]/10", "bg-[#B39DDB]/10", "bg-[#2B2FB8]/10"];

            return (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border-l-4 ${accentColors[i]} transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Quote mark */}
                <div
                  className={`absolute top-6 right-6 w-10 h-10 rounded-xl ${bgAccents[i]} flex items-center justify-center`}
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 pr-8">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#2B2FB8] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {item.name.split(" ").slice(-1)[0][0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">
                      {item.role} — {item.org}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mt-3">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
