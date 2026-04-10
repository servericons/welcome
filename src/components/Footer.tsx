export function Footer() {
  return (
    <footer className="relative bg-black border-t border-yellow-500/20 py-12 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://i.imgur.com/YFMxj0s.png"
            alt="ICONS COMMUNITY"
            className="h-16 w-16 rounded-full ring-2 ring-yellow-500/50 shadow-lg shadow-yellow-500/30 mb-4"
          />
          <h3 className="text-2xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300">
            ICONS COMMUNITY
          </h3>
          <div className="mt-3 h-px w-64 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        </div>

        {/* Rights Text */}
        <div className="text-center mb-8 space-y-3">
          <p className="text-gray-300 text-sm leading-relaxed" dir="rtl">
            كافة الحقوق القانونية والملكية الفكرية محفوظة لـ{" "}
            <span className="text-yellow-400 font-bold">ICONS COMMUNITY 2026</span>
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto" dir="rtl">
            المنصة الرسمية تدار وبشكل كامل تحت إشراف الإدارة العليا للمجتمع، ونهدف من خلالها إلى تقديم تجربة رقمية استثنائية تليق بنخبة الأعضاء. إن الالتزام بالمعايير المذكورة في ميثاق القوانين هو ما يمنح هذا المجتمع خصوصيته وفخامته.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-8" />

        {/* Credits */}
        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm font-semibold tracking-wider">
            Project Development and Infrastructure by:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Lead Developer:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 font-black text-sm tracking-widest drop-shadow-lg"
                style={{ filter: "drop-shadow(0 0 8px rgba(234, 179, 8, 0.6))" }}>
                ABDULAZIZ
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-yellow-500/30" />
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Thinker:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 font-black text-sm tracking-widest drop-shadow-lg"
                style={{ filter: "drop-shadow(0 0 8px rgba(234, 179, 8, 0.6))" }}>
                AETHELRED
              </span>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs tracking-wider">
            All rights reserved to ICONS COMMUNITY Official Platform. Designed with precision to meet the highest standards of digital communities.
          </p>
        </div>

        {/* Discord link */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://discord.gg/ico1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/40 hover:bg-[#5865F2]/30 hover:border-[#5865F2]/60 transition-all duration-300 text-[#7289DA] font-semibold text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            discord.gg/ico1
          </a>
        </div>
      </div>
    </footer>
  );
}
