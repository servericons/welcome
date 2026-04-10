export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
      style={{
        backgroundImage: "url('https://i.imgur.com/okW9zi4.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      {/* Gold shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-transparent to-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-2xl mb-2 animate-pulse-slow">
            WELCOME TO
          </h1>
          <h1 className="text-5xl md:text-7xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 drop-shadow-2xl">
            ICONS COMMUNITY
          </h1>
          <div className="mt-4 h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full" />
        </div>

        {/* Description */}
        <div className="glass-card max-w-3xl mx-auto p-8 rounded-2xl border border-yellow-500/20 bg-black/40 backdrop-blur-md shadow-2xl shadow-yellow-500/10">
          <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light">
            أهلاً بكم في قلب التميز. هنا تلتقي النخبة لتجربة مجتمعية فريدة تجمع بين شغف الألعاب وروعة التواصل الاجتماعي. إن انضمامكم لـ{" "}
            <span className="text-yellow-400 font-bold">ICONS COMMUNITY</span>{" "}
            ليس مجرد تواجد في سيرفر، بل هو جزء من منظومة تهدف إلى تقديم أعلى معايير الترفيه الرقمي في بيئة يسودها الرقي والتنظيم.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-yellow-400 font-bold mb-1">⚖️ ميثاق المجتمع</div>
              <p className="text-gray-400">نؤمن بأن النظام هو حجر الزاوية لكل مجتمع ناجح</p>
            </div>
            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-yellow-400 font-bold mb-1">👑 الهيكل الإداري</div>
              <p className="text-gray-400">قيادات تعمل لضمان استقرار السيرفر وتقديم الدعم</p>
            </div>
            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-yellow-400 font-bold mb-1">🎮 عالم الألعاب</div>
              <p className="text-gray-400">نصنع معاً مجتمعاً يليق باسمه في عالم الألعاب</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="https://discord.gg/ico1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-black text-lg tracking-widest transition-all duration-300 shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60 hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            JOIN NOW
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-yellow-500/50 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-yellow-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}