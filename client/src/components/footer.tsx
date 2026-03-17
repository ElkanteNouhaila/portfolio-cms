export const Footer = () => (
  <footer className="bg-[#0a0a0a] border-t border-white/5 text-white py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 rounded-lg bg-[#b58742] flex items-center justify-center text-black font-bold text-xs">
          N
        </span>
        <span className="text-white font-semibold text-sm">
          Nouhaila<span className="text-[#b58742]">.</span>
        </span>
      </div>

      <p className="text-gray-600 text-xs text-center">
        © {new Date().getFullYear()} Nouhaila El Kante. Crafted with love and coffee
      </p>

      <div className="flex items-center gap-4 text-gray-600 text-xs">
        <a href="#about" className="hover:text-[#b58742] transition-colors">About</a>
        <a href="#projects" className="hover:text-[#b58742] transition-colors">Projects</a>
        <a href="#contact" className="hover:text-[#b58742] transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);
