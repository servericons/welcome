const cartoonAvatars = [
  "https://api.dicebear.com/7.x/adventurer/svg?seed=BLACK&backgroundColor=1a1a2e&hair=short01&skinColor=brown&eyes=variant01",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=MAJED&backgroundColor=1a1a2e&hair=short02&skinColor=tanned&eyes=variant02",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=AHMED&backgroundColor=1a1a2e&hair=short03&skinColor=dark&eyes=variant03",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=ABDULAZIZ&backgroundColor=1a1a2e&hair=short04&skinColor=brown&eyes=variant04",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=AETHELRED&backgroundColor=1a1a2e&hair=short05&skinColor=tanned&eyes=variant05",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=ABDULLAH&backgroundColor=1a1a2e&hair=short06&skinColor=dark&eyes=variant06",
];

const roleColors: Record<string, string> = {
  "SERVER OWNER": "from-yellow-400 to-yellow-600",
  "SERVER CO OWNER": "from-yellow-300 to-yellow-500",
  "SENIOR": "from-purple-400 to-purple-600",
  "MANAGER": "from-blue-400 to-blue-600",
  "DIPLOMATIC": "from-green-400 to-green-600",
};

const roleBadgeColors: Record<string, string> = {
  "SERVER OWNER": "bg-yellow-500/20 border-yellow-500/50 text-yellow-400",
  "SERVER CO OWNER": "bg-yellow-400/15 border-yellow-400/40 text-yellow-300",
  "SENIOR": "bg-purple-500/20 border-purple-500/50 text-purple-400",
  "MANAGER": "bg-blue-500/20 border-blue-500/50 text-blue-400",
  "DIPLOMATIC": "bg-green-500/20 border-green-500/50 text-green-400",
};

function MemberCard({
  name,
  role,
  avatarUrl,
  size = "normal",
}: {
  name: string;
  role: string;
  avatarUrl: string;
  size?: "large" | "normal";
}) {
  const gradient = roleColors[role] || "from-gray-400 to-gray-600";
  const badge = roleBadgeColors[role] || "bg-gray-500/20 border-gray-500/50 text-gray-400";

  return (
    <div
      className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-b from-gray-900/90 to-black/90 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-1 group ${
        size === "large" ? "scale-110" : ""
      }`}
    >
      {/* Avatar */}
      <div className={`relative ${size === "large" ? "w-28 h-28" : "w-24 h-24"}`}>
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-md group-hover:opacity-50 transition-opacity`} />
        <div className={`relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 ring-2 ring-offset-2 ring-offset-black ${gradient.includes("yellow") ? "ring-yellow-500" : gradient.includes("purple") ? "ring-purple-500" : gradient.includes("blue") ? "ring-blue-500" : "ring-green-500"}`}
        >
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-3xl font-black text-yellow-400">${name[0]}</div>`;
            }}
          />
        </div>
        {/* Crown for owner */}
        {role === "SERVER OWNER" && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">👑</div>
        )}
      </div>

      {/* Name */}
      <h4 className={`font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${gradient} ${size === "large" ? "text-xl" : "text-lg"}`}>
        {name}
      </h4>

      {/* Role Badge */}
      <span className={`px-3 py-1 rounded-full text-xs font-bold border tracking-wider ${badge}`}>
        {role}
      </span>
    </div>
  );
}

export function AdminSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/8 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
            <span className="text-yellow-400 text-sm font-bold tracking-widest">👑 LEADERSHIP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 mb-4">
            الهيكل الإداري
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto" dir="rtl">
            القيادات الإدارية التي تعمل خلف الكواليس لضمان استقرار السيرفر وتقديم الدعم للأعضاء
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Owners Section */}
          <div className="bg-gradient-to-b from-yellow-900/10 to-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 tracking-widest mb-2">
                ⚜️ THE OWNERS
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            </div>

            {/* Triangle layout: Owner on top, Co-Owners below */}
            <div className="flex flex-col items-center gap-6">
              {/* Owner - top */}
              <div className="w-full max-w-[200px]">
                <MemberCard
                  name="BLACK"
                  role="SERVER OWNER"
                  avatarUrl={cartoonAvatars[0]}
                  size="large"
                />
              </div>
              {/* Co-Owners - bottom row */}
              <div className="flex gap-4 w-full justify-center">
                <div className="flex-1 max-w-[180px]">
                  <MemberCard
                    name="MAJED"
                    role="SERVER CO OWNER"
                    avatarUrl={cartoonAvatars[1]}
                  />
                </div>
                <div className="flex-1 max-w-[180px]">
                  <MemberCard
                    name="AHMED"
                    role="SERVER CO OWNER"
                    avatarUrl={cartoonAvatars[2]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Admins Section */}
          <div className="bg-gradient-to-b from-purple-900/10 to-black/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 tracking-widest mb-2">
                🛡️ THE ADMINS
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            </div>

            {/* Triangle layout: Senior on top, Manager & Diplomatic below */}
            <div className="flex flex-col items-center gap-6">
              {/* Senior - top */}
              <div className="w-full max-w-[200px]">
                <MemberCard
                  name="ABDULAZIZ"
                  role="SENIOR"
                  avatarUrl={cartoonAvatars[3]}
                  size="large"
                />
              </div>
              {/* Manager & Diplomatic - bottom row */}
              <div className="flex gap-4 w-full justify-center">
                <div className="flex-1 max-w-[180px]">
                  <MemberCard
                    name="AETHELRED"
                    role="MANAGER"
                    avatarUrl={cartoonAvatars[4]}
                  />
                </div>
                <div className="flex-1 max-w-[180px]">
                  <MemberCard
                    name="ABDULLAH"
                    role="DIPLOMATIC"
                    avatarUrl={cartoonAvatars[5]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
