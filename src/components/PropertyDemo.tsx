import { CSSProperty } from '../data/cssReference';

interface PropertyDemoProps {
  property: CSSProperty;
}

// Syntax highlighting function for CSS
const highlightCSS = (code: string): JSX.Element[] => {
  // Split by property: value pattern
  const propertyMatch = code.match(/^([a-zA-Z-]+)\s*:\s*(.+)$/);
  
  if (propertyMatch) {
    const [, property, value] = propertyMatch;
    const parts: JSX.Element[] = [];
    
    // Highlight property name
    parts.push(
      <span key="prop" className="text-blue-400">{property}</span>
    );
    parts.push(
      <span key="colon" className="text-gray-400">: </span>
    );
    
    // Process value - highlight colors, numbers, keywords
    let valueIndex = 0;
    const valueStr = value.trim();
    
    // Color patterns (rgba, rgb, hex, hsl)
    const colorPattern = /(rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}|hsl\([^)]+\)|hsla\([^)]+\))/gi;
    const colorMatches: Array<{start: number; end: number; text: string}> = [];
    let match;
    
    while ((match = colorPattern.exec(valueStr)) !== null) {
      colorMatches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
      });
    }
    
    // Number patterns
    const numberPattern = /\b(\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|deg|s|ms)?)\b/g;
    const numberMatches: Array<{start: number; end: number; text: string}> = [];
    numberPattern.lastIndex = 0;
    
    while ((match = numberPattern.exec(valueStr)) !== null) {
      // Check if not already matched as color
      const isInColor = colorMatches.some(c => match!.index >= c.start && match!.index < c.end);
      if (!isInColor) {
        numberMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0],
        });
      }
    }
    
    // Keyword patterns
    const keywordPattern = /\b(none|auto|inherit|initial|unset|static|relative|absolute|fixed|sticky|block|inline|flex|grid|normal|bold|italic|center|left|right|top|bottom)\b/gi;
    const keywordMatches: Array<{start: number; end: number; text: string}> = [];
    keywordPattern.lastIndex = 0;
    
    while ((match = keywordPattern.exec(valueStr)) !== null) {
      const isInColor = colorMatches.some(c => match!.index >= c.start && match!.index < c.end);
      const isInNumber = numberMatches.some(n => match!.index >= n.start && match!.index < n.end);
      if (!isInColor && !isInNumber) {
        keywordMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0],
        });
      }
    }
    
    // Combine all matches
    const allMatches = [
      ...colorMatches.map(m => ({...m, type: 'color' as const})),
      ...numberMatches.map(m => ({...m, type: 'number' as const})),
      ...keywordMatches.map(m => ({...m, type: 'keyword' as const})),
    ].sort((a, b) => a.start - b.start);
    
    // Remove overlaps (prioritize colors > numbers > keywords)
    const nonOverlapping: typeof allMatches = [];
    for (const match of allMatches) {
      const overlaps = nonOverlapping.find(m => 
        (match.start < m.end && match.end > m.start)
      );
      if (!overlaps) {
        nonOverlapping.push(match);
      }
    }
    
    // Build value parts
    let currentIdx = 0;
    for (const match of nonOverlapping) {
      if (match.start > currentIdx) {
        parts.push(
          <span key={`val-${currentIdx}`} className="text-green-400">
            {valueStr.substring(currentIdx, match.start)}
          </span>
        );
      }
      
      const className = 
        match.type === 'color' ? 'text-purple-400' :
        match.type === 'number' ? 'text-yellow-400' :
        'text-pink-400';
      
      parts.push(
        <span key={`match-${match.start}`} className={className}>
          {match.text}
        </span>
      );
      currentIdx = match.end;
    }
    
    if (currentIdx < valueStr.length) {
      parts.push(
        <span key={`val-${currentIdx}`} className="text-green-400">
          {valueStr.substring(currentIdx)}
        </span>
      );
    }
    
    // Add semicolon if present
    if (valueStr.endsWith(';')) {
      const lastPart = parts[parts.length - 1];
      if (lastPart && typeof lastPart === 'object' && 'props' in lastPart) {
        const lastPartProps = lastPart.props as { children?: React.ReactNode; className?: string };
        if (lastPartProps.children) {
          const text = String(lastPartProps.children);
          if (text.endsWith(';')) {
            parts[parts.length - 1] = (
              <span key={String(lastPart.key || 'last')} className={lastPartProps.className || 'text-green-400'}>
                {text.slice(0, -1)}
              </span>
            );
            parts.push(<span key="semicolon" className="text-gray-400">;</span>);
          }
        }
      }
    }
    
    return parts;
  }
  
  // Fallback: no highlighting
  return [<span key="code" className="text-gray-300">{code}</span>];
};

export default function PropertyDemo({ property }: PropertyDemoProps) {
  return (
    <div className="glass-strong rounded-lg p-6 mb-6 border-red-500/10 hover:border-red-500/20 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-2">{property.name}</h3>
      <p className="text-gray-200 mb-4">{property.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-200 mb-2">Syntax:</h4>
        <code className="block glass glass-red rounded px-3 py-2 text-sm font-mono">
          {highlightCSS(property.syntax)}
        </code>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-200 mb-2">Common Values:</h4>
        <div className="flex flex-wrap gap-2">
          {property.values.map((value) => (
            <span
              key={value}
              className="glass text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30"
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-200 mb-3">Live Examples:</h4>
        <div className="space-y-4">
          {property.examples.map((example, index) => (
            <div key={index} className="glass rounded-lg overflow-hidden border border-red-500/10 hover:border-red-500/20 transition-all duration-300">
              <div className="glass glass-red px-4 py-2 border-b border-red-500/10">
                <code className="text-sm font-mono">{highlightCSS(example.code)}</code>
              </div>
              <div className="p-6 glass flex items-center justify-center min-h-[120px]">
                {property.id === 'box-shadow' ? (
                  <div 
                    style={{
                      ...example.styles,
                      background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '2rem',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontWeight: '500',
                      minWidth: '200px',
                      textAlign: 'center',
                    }}
                  >
                    Shadow Demo Box
                  </div>
                ) : property.id === 'flexbox' || property.id === 'grid' ? (
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
                    <p className="text-gray-300">
                      This is a long text that will overflow the container. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                ) : property.id === 'text-overflow' ? (
                  <div style={example.styles} className="w-full text-gray-300">
                    This is a very long text that will be truncated with ellipsis
                  </div>
                ) : (
                  <div style={example.styles} className="text-gray-300">
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
