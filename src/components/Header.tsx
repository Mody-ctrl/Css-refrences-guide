import { Search, BookOpen, Menu } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onMenuClick: () => void;
}

export default function Header({ searchQuery, onSearchChange, onMenuClick }: HeaderProps) {
  return (
    <header className="glass-strong border-b border-violet-500/20 sticky top-0 z-30 w-full transition-all duration-300">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={onMenuClick}
              className="menu-toggle-btn glass glass-hover p-1.5 rounded-lg text-gray-400 hover:text-violet-400 hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <BookOpen className="w-6 h-6 text-violet-500 transition-all duration-500 ease-out hover:scale-110 hover:rotate-6 hover:text-pink-500" />
            <div>
              <h1 className="text-xl font-bold text-gradient">CSS Reference Guide</h1>
              <p className="text-xs text-gray-300 transition-colors duration-300">Complete CSS properties with live examples</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-all duration-300 group-focus-within:text-violet-400 group-focus-within:scale-110" />
          <input
            type="text"
            placeholder="Search CSS properties..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-sm glass rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/30 focus:shadow-lg focus:shadow-violet-500/20 text-white placeholder-gray-400 transition-all duration-300 ease-out"
          />
        </div>
      </div>
    </header>
  );
}
