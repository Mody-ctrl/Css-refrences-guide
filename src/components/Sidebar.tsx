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
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Categories</h2>
        <nav className="space-y-1">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as ComponentType<{ className?: string }>;
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
                <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-full">
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
