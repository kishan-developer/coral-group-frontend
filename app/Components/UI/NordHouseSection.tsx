"use client";

export default function NordHouseSection() {
  return (
    <section className="relative bg-[#0b0e0f] py-24 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT – IMAGES */}
        <div className="relative">
            
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/Products/p6.jpeg"
              alt="Nord House Building"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Overlapping Image */}
          <div className="absolute -bottom-14 right-0 md:right-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-[260px]">
            <img
              src="/Products/p5.jpeg"
              alt="Nord House Side View"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h3 className="text-sm tracking-widest text-white/50 mb-4">
            О КОМПЛЕКСЕ
          </h3>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            A NORD HOUSE
          </h2>

          <p className="text-white/70 max-w-lg mb-8 leading-relaxed text-sm">
            A Nord House — это современный клубный многоквартирный дом в Киеве.
            Мы позаботились о каждой мелочи, чтобы обеспечить комфорт проживания
            на высшем уровне.
          </p>

          {/* FEATURES */}
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <span className="text-white/40">+</span>
              современный архитектурный дизайн
            </li>
            <li className="flex gap-3">
              <span className="text-white/40">+</span>
              продуманная планировка квартир
            </li>
            <li className="flex gap-3">
              <span className="text-white/40">+</span>
              обслуживание высокого класса
            </li>
            <li className="flex gap-3">
              <span className="text-white/40">+</span>
              расположение в 5 минутах от метро
            </li>
            <li className="flex gap-3">
              <span className="text-white/40">+</span>
              пешая доступность парков и сервисов
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
