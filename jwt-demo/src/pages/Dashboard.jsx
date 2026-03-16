import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/auth";
import { useEffect, useState } from "react";
import { LogOut, LayoutDashboard, User, Settings } from "lucide-react"; // Optional: lucide-react for icons

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard size={18} />
            </div>
            <span>Pulse</span>
          </div>

          {userData && (
            <div className="flex items-center gap-4 group cursor-pointer p-1 pr-4 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/5">
              <img
                src={userData.image}
                alt={userData.firstName}
                className="w-8 h-8 rounded-full object-cover border border-indigo-500/50"
              />
              <span className="text-sm font-medium hidden sm:block">
                {userData.firstName} {userData.lastName}
              </span>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-12 px-6 max-w-5xl mx-auto">
        {/* Welcome Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
            Welcome back, <span className="text-indigo-500">{userData?.firstName || 'User'}</span>!
          </h1>
          <p className="text-slate-400 text-lg">Here's what's happening with your account today.</p>
        </header>

        {/* Stats Grid Example */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Activity', value: 'Active', color: 'bg-emerald-500/10 text-emerald-500' },
            { label: 'Role', value: 'Administrator', color: 'bg-indigo-500/10 text-indigo-500' },
            { label: 'Status', value: 'Verified', color: 'bg-amber-500/10 text-amber-500' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
              <p className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex flex-col items-center justify-center p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
            <User className="text-indigo-400" size={32} />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">Ready to leave?</h2>
          <p className="text-slate-400 mb-8 text-center max-w-xs">
            Make sure you've saved all your progress before logging out.
          </p>

          <button
            onClick={handleLogout}
            className="group flex items-center gap-2 py-3 px-10 bg-white text-black text-sm font-bold rounded-full transition-all hover:bg-indigo-500 hover:text-white active:scale-95"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;