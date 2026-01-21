import type { ComponentType } from 'react';
import { CSSCategory } from '../data/cssReference';
import * as Icons from 'lucide-react';

interface SidebarProps {
  categories: CSSCategory[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export default function Sidebar({ categories, selectedCategory, onCategorySelect }: SidebarProps) {
  return (
    <aside className="w-64 glass-strong border-r border-red-500/20 h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
        <nav className="space-y-1">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as ComponentType<{ className?: string }>;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                  isActive
                    ? 'glass-active text-red-400 font-semibold'
                    : 'text-gray-200 glass glass-hover'
                }`}
              >
                <IconComponent className={`w-5 h-5 transition-colors ${isActive ? 'text-red-500' : 'text-gray-400'}`} />
                <span className={isActive ? 'text-red-300' : ''}>{category.name}</span>
                <span className={`ml-auto text-xs px-2 py-1 rounded-full transition-colors ${
                  isActive 
                    ? 'glass-red text-red-300 border border-red-500/30' 
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
