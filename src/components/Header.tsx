export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm shadow-purple-900/5">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high">
            <img
              alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY-B-id94UO21QlNZtNpUA7-MV9Cl_TNdNqyp-FfkODHz_hC7ac4eNxjBHZxcX16QokQWIIcJz5KiBKbeqUptt91qijurWQddn2FiMCGejyJG8II-rMzbNEcVjVuRMmMY66zRV-I_Q0RVG5nFlUf15ATEm2Ri3BDmfafU9CTTDRVeucHFEoolN0cZlWebvgzPk8BGCrmn5TuFMXrZGCDFMrCTxKA1b9wAs5TuUkl_egwM1dpSlDr6Gwdlb4jXszmFU3L2XWCAtMg"
            />
          </div>
          <span className="font-headline font-black text-xl tracking-tight italic text-purple-900">
            MyFave
          </span>
        </div>
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-full bg-surface-container-high border-none rounded-full py-2 pl-12 pr-4 focus:ring-2 focus:ring-surface-tint/40 font-body text-sm"
              placeholder="Search films, friends, or genres..."
              type="text"
            />
          </div>
        </div>
        <button className="text-purple-900 hover:opacity-80 transition-opacity active:scale-95 duration-200">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </header>
  );
}
