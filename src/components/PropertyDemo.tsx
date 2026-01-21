import { CSSProperty } from '../data/cssReference';

interface PropertyDemoProps {
  property: CSSProperty;
}

export default function PropertyDemo({ property }: PropertyDemoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.name}</h3>
      <p className="text-gray-600 mb-4">{property.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Syntax:</h4>
        <code className="block bg-gray-50 rounded px-3 py-2 text-sm font-mono text-gray-800">
          {property.syntax}
        </code>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Common Values:</h4>
        <div className="flex flex-wrap gap-2">
          {property.values.map((value) => (
            <span
              key={value}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-mono"
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Live Examples:</h4>
        <div className="space-y-4">
          {property.examples.map((example, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                <code className="text-sm font-mono text-gray-700">{example.code}</code>
              </div>
              <div className="p-6 bg-white flex items-center justify-center min-h-[120px]">
                {property.id === 'flexbox' || property.id === 'grid' ? (
                  <div style={example.styles} className="w-full">
                    <div className="bg-blue-500 text-white p-3 rounded">Item 1</div>
                    <div className="bg-green-500 text-white p-3 rounded">Item 2</div>
                    <div className="bg-orange-500 text-white p-3 rounded">Item 3</div>
                  </div>
                ) : property.id === 'gap' ? (
                  <div style={example.styles} className="w-full">
                    <div className="bg-blue-500 text-white p-3 rounded flex-1">Item 1</div>
                    <div className="bg-green-500 text-white p-3 rounded flex-1">Item 2</div>
                    <div className="bg-orange-500 text-white p-3 rounded flex-1">Item 3</div>
                  </div>
                ) : property.id === 'justify-content' || property.id === 'align-items' ? (
                  <div style={example.styles} className="w-full">
                    <div className="bg-blue-500 text-white p-3 rounded w-16 h-12 flex items-center justify-center">1</div>
                    <div className="bg-green-500 text-white p-3 rounded w-16 h-16 flex items-center justify-center">2</div>
                    <div className="bg-orange-500 text-white p-3 rounded w-16 h-20 flex items-center justify-center">3</div>
                  </div>
                ) : property.id === 'overflow' ? (
                  <div style={example.styles} className="w-full">
                    <p>
                      This is a long text that will overflow the container. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                ) : property.id === 'text-overflow' ? (
                  <div style={example.styles} className="w-full">
                    This is a very long text that will be truncated with ellipsis
                  </div>
                ) : (
                  <div style={example.styles}>
                    {property.id.includes('text') || property.id === 'letter-spacing' || property.id === 'line-height'
                      ? 'Sample Text'
                      : property.id === 'color' || property.id.includes('shadow')
                      ? 'CSS Demo Text'
                      : property.id === 'border-radius' && example.code.includes('50%')
                      ? 'Circle'
                      : 'Demo Box'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
