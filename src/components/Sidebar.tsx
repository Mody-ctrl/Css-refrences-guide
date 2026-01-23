import type { ComponentType } from 'react';
import { CSSCategory } from '../data/cssReference';
import * as Icons from 'lucide-react';
import { X } from 'lucide-react';

interface SidebarProps {
  categories: CSSCategory[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ categories, selectedCategory, onCategorySelect, isOpen, onToggle }: SidebarProps) {
  return (
    <aside className={`sidebar w-64 glass-strong border-r border-violet-500/20 h-screen overflow-y-auto sticky top-0 ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gradient">Categories</h2>
          <button
            onClick={onToggle}
            className="sidebar-close-btn glass glass-hover p-2 rounded-lg text-gray-400 hover:text-violet-400 hover:rotate-90 transition-all duration-300 ease-out"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="space-y-1">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as ComponentType<{ className?: string }>;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-500 ease-out ${
                  isActive
                    ? 'glass-active text-violet-300 font-semibold scale-[1.02]'
                    : 'text-gray-200 glass glass-hover hover:scale-[1.01]'
                }`}
              >
                <IconComponent className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-violet-400 scale-110' : 'text-gray-400'}`} />
                <span className={`transition-all duration-300 ${isActive ? 'text-gradient' : ''}`}>{category.name}</span>
                <span className={`ml-auto text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'glass-accent text-cyan-300 border border-violet-500/30 scale-105' 
                    : 'glass text-gray-400'
                }`}>
                  {category.properties.length}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
