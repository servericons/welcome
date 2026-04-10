const ruleCategories = [
  {
    title: "القوانين العامة",
    icon: "📜",
    rules: [
      "الاحترام المتبادل بين جميع الأعضاء في كافة القنوات والمحادثات.",
      "يُمنع منعاً باتاً استخدام أي ألفاظ نابية أو مسيئة تجاه أي عضو.",
      "لا يُسمح بنشر أي محتوى يتعلق بالعنصرية أو التمييز بأي شكل من الأشكال.",
      "يُحظر الإعلان عن أي سيرفرات أخرى أو روابط خارجية دون إذن مسبق من الإدارة.",
      "يجب الالتزام بتعليمات وتوجيهات فريق الإدارة في جميع الأوقات.",
      "يُمنع انتحال شخصية أي عضو أو عضو إداري داخل السيرفر.",
      "لا يُسمح بمشاركة أي معلومات شخصية لأعضاء آخرين دون موافقتهم.",
      "يُحظر استخدام البوتات أو الأدوات الخارجية للتلاعب بنظام السيرفر.",
      "يجب أن يكون اسم المستخدم لائقاً ولا يحتوي على ألفاظ مسيئة.",
      "الإدارة تحتفظ بحق تعديل القوانين في أي وقت مع إشعار الأعضاء.",
    ],
  },
  {
    title: "قوانين الروومات الصوتية",
    icon: "🎙️",
    rules: [
      "يُمنع إزعاج الآخرين بالضوضاء المفرطة أو الموسيقى الصاخبة.",
      "لا يُسمح بالصراخ أو رفع الصوت بشكل مبالغ فيه داخل القنوات الصوتية.",
      "يُحظر استخدام برامج تغيير الصوت بطريقة مزعجة أو مسيئة.",
      "يجب احترام المتحدث وعدم مقاطعته أثناء حديثه.",
      "لا يُسمح بالدخول إلى قنوات صوتية خاصة دون إذن أصحابها.",
      "يُمنع بث أي محتوى صوتي مسيء أو غير لائق عبر القنوات.",
      "يجب استخدام ميكروفون بجودة مقبولة لتجنب إزعاج الآخرين.",
      "لا يُسمح بالتسجيل الصوتي لأي عضو دون الحصول على موافقته المسبقة.",
      "يُحظر الانضمام إلى القنوات الصوتية بهدف الإزعاج أو التشويش.",
      "يجب الالتزام بالهدوء في القنوات المخصصة للدراسة أو العمل.",
    ],
  },
  {
    title: "قوانين الروومات النصية",
    icon: "💬",
    rules: [
      "يجب استخدام كل قناة نصية للغرض المخصصة له فقط.",
      "يُمنع الفلود أو إرسال رسائل متكررة بشكل مزعج.",
      "لا يُسمح بنشر الروابط المشبوهة أو الضارة في أي قناة.",
      "يُحظر نشر المحتوى الإباحي أو المسيء في أي قناة نصية.",
      "يجب استخدام اللغة المناسبة لكل قناة حسب تعليمات الإدارة.",
      "لا يُسمح بالسبام أو إرسال رسائل فارغة أو رموز تعبيرية مفرطة.",
      "يُمنع نشر أي معلومات كاذبة أو مضللة داخل السيرفر.",
      "يجب احترام مواضيع النقاش وعدم الخروج عن الموضوع المطروح.",
      "لا يُسمح بالترويج لأي منتجات أو خدمات تجارية دون إذن.",
      "يُحظر استخدام الرسائل الخاصة لإزعاج الأعضاء أو مضايقتهم.",
    ],
  },
];

function RuleCard({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-black/60 border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 group">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center text-black font-black text-xs shadow-lg shadow-yellow-500/30">
        {number}
      </span>
      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors" dir="rtl">
        {text}
      </p>
    </div>
  );
}

function CategoryCard({ category }: { category: typeof ruleCategories[0] }) {
  return (
    <div className="bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 shadow-xl shadow-black/50 hover:border-yellow-500/40 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 tracking-wide" dir="rtl">
          {category.title}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {category.rules.map((rule, i) => (
          <RuleCard key={i} number={i + 1} text={rule} />
        ))}
      </div>
    </div>
  );
}

export function Rules() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
            <span className="text-yellow-400 text-sm font-bold tracking-widest">⚖️ COMMUNITY CHARTER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 mb-4">
            القوانين والميثاق
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full" />
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ruleCategories.map((cat, i) => (
            <CategoryCard key={i} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
