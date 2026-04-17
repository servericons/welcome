import { useState, useEffect } from 'react';

const roleColors = {
  "SERVER OWNER": "from-yellow-400 to-yellow-600",
  "SERVER CO OWNER": "from-yellow-300 to-yellow-500",
  "SENIOR": "from-yellow-400 to-yellow-600",
  "MANAGER": "from-yellow-400 to-yellow-600",
  "DIPLOMATIC": "from-yellow-400 to-yellow-600",
};

const roleBadgeColors = {
  "SERVER OWNER": "bg-yellow-500/20 border-yellow-500/50 text-yellow-400",
  "SERVER CO OWNER": "bg-yellow-400/15 border-yellow-400/40 text-yellow-300",
  "SENIOR": "bg-yellow-500/20 border-yellow-500/50 text-yellow-400",
  "MANAGER": "bg-yellow-500/20 border-yellow-500/50 text-yellow-400",
  "DIPLOMATIC": "bg-yellow-500/20 border-yellow-500/50 text-yellow-400",
};

const ownersConfig = [
  { id: "1117120711358681128", role: "SERVER OWNER", size: "large" },
  { id: "738379711033376799", role: "SERVER CO OWNER" },
  { id: "863189127079395338", role: "SERVER CO OWNER" },
];

const adminsConfig = [
  { id: "1132395760567193663", role: "SENIOR", size: "large" },
  { id: "914829146708934698", role: "MANAGER" },
  { id: "1002326007312814170", role: "DIPLOMATIC" },
];

function MemberCard({ name, role, avatarUrl, status = "offline", size = "normal" }) {
  const gradient = roleColors[role] || "from-gray-400 to-gray-600";
  const badge = roleBadgeColors[role] || "bg-gray-500/20 border-gray-500/50 text-gray-400";
  const statusColor = status === "online" ? "bg-green-500" : status === "idle" ? "bg-yellow-500" : status === "dnd" ? "bg-red-500" : "bg-gray-500";

  return (
    <div className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-b from-gray-900/90 to-black/90 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-1 group ${size === "large" ? "scale-110" : ""}`}>
      <div className={`relative ${size === "large" ? "w-28 h-28" : "w-24 h-24"}`}>
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-md group-hover:opacity-50 transition-opacity`} />
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 ring-2 ring-offset-2 ring-offset-black ring-yellow-500">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-black rounded-full border-2 border-gray-900 flex items-center justify-center z-10">
          <div className={`w-5 h-5 rounded-full ${statusColor}`} />
        </div>
        {role === "SERVER OWNER" && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl"></div>}
      </div>
      <h4 className={`font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${gradient} ${size === "large" ? "text-xl" : "text-lg"}`}>
        {name}
      </h4>
      <span className={`px-3 py-1 rounded-full text-xs font-bold border tracking-wider ${badge}`}>
        {role}
      </span>
    </div>
  );
}

export function AdminSection() {
  const [ownersData, setOwnersData] = useState({});
  const [adminsData, setAdminsData] = useState({});
  const [loading, setLoading] = useState(true);

  const API_URL = "/proxy-api/staff";

  useEffect(() => {
    fetch(API_URL + "?t=" + Date.now())
      .then(res => res.json())
      .then(data => {
        setOwnersData(data.ownersData || {});
        setAdminsData(data.adminsData || {});
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getMemberProps = (config, dataMap) => {
    const data = dataMap[config.id] || {};
    return {
      name: data.name || "Loading...",
      avatarUrl: data.avatarUrl || "",
      status: data.status || "offline",
      role: config.role,
      size: config.size || "normal",
    };
  };

  if (loading) return <section className="py-24 text-center"><p className="text-yellow-400 text-xl">جاري تحميل بيانات الإدارة...</p></section>;

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/8 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
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
          <div className="bg-gradient-to-b from-yellow-900/10 to-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 tracking-widest mb-2">⚜️ THE OWNERS</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-[200px]"><MemberCard {...getMemberProps(ownersConfig[0], ownersData)} /></div>
              <div className="flex gap-4 w-full justify-center">
                <div className="flex-1 max-w-[180px]"><MemberCard {...getMemberProps(ownersConfig[1], ownersData)} /></div>
                <div className="flex-1 max-w-[180px]"><MemberCard {...getMemberProps(ownersConfig[2], ownersData)} /></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-yellow-900/10 to-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 tracking-widest mb-2">🛡️ THE ADMINS</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-[200px]"><MemberCard {...getMemberProps(adminsConfig[0], adminsData)} /></div>
              <div className="flex gap-4 w-full justify-center">
                <div className="flex-1 max-w-[180px]"><MemberCard {...getMemberProps(adminsConfig[1], adminsData)} /></div>
                <div className="flex-1 max-w-[180px]"><MemberCard {...getMemberProps(adminsConfig[2], adminsData)} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
