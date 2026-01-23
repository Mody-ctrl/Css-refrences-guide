import { useState, useMemo } from 'react';
import { cssReference } from './data/cssReference';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PropertyDemo from './components/PropertyDemo';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(cssReference[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const filteredProperties = useMemo(() => {
    const category = cssReference.find((cat) => cat.id === selectedCategory);
    if (!category) return [];

    if (!searchQuery.trim()) {
      return category.properties;
    }

    const query = searchQuery.toLowerCase();
    return category.properties.filter(
      (property) =>
        property.name.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query) ||
        property.values.some((value) => value.toLowerCase().includes(query))
    );
  }, [selectedCategory, searchQuery]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;

    const query = searchQuery.toLowerCase();
    const results: Array<{
      category: string;
      property: (typeof cssReference)[number]['properties'][number];
    }> = [];

    cssReference.forEach((category) => {
      category.properties.forEach((property) => {
        if (
          property.name.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query) ||
          property.values.some((value) => value.toLowerCase().includes(query))
        ) {
          results.push({ category: category.name, property });
        }
      });
    });

    return results;
  }, [searchQuery]);

  const currentCategory = cssReference.find((cat) => cat.id === selectedCategory);
  const totalProperties = searchResults
    ? searchResults.length
    : currentCategory?.properties.length || 0;

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header - full width at top */}
      <Header 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar
        categories={cssReference}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 pt-4 pb-6">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gradient mb-1">
                {searchQuery.trim() ? 'Search Results' : currentCategory?.name}
              </h2>
              <p className="text-gray-300 text-sm">
                {totalProperties} {totalProperties === 1 ? 'property' : 'properties'} found
              </p>
            </div>

            {searchQuery.trim() && searchResults ? (
              <div className="space-y-4">
                {searchResults.length > 0 ? (
                  searchResults.map(({ category, property }) => (
                    <div key={`${category}-${property.id}`}>
                      <div className="text-sm text-gray-300 mb-2">
                        From: <span className="font-semibold text-violet-400">{category}</span>
                      </div>
                      <PropertyDemo property={property} />
                    </div>
                  ))
                ) : (
                  <div className="glass glass-accent rounded-lg p-12 text-center">
                    <p className="text-gray-200 text-lg">
                      No properties found matching "{searchQuery}"
                    </p>
                    <p className="text-gray-400 mt-2">Try searching for something else</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <PropertyDemo key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </main>
    </div>
  );
}

export default App;
