import type { CSSProperties } from 'react';

export interface CSSProperty {
  id: string;
  name: string;
  description: string;
  syntax: string;
  values: string[];
  examples: Array<{
    code: string;
    styles: CSSProperties;
  }>;
}

export interface CSSCategory {
  id: string;
  name: string;
  icon: string;
  properties: CSSProperty[];
}

export const cssReference: CSSCategory[] = [
  {
    id: 'layout',
    name: 'Layout',
    icon: 'Layout',
    properties: [
      {
        id: 'display',
        name: 'display',
        description: 'Defines how an element is displayed on the page.',
        syntax: 'display: value;',
        values: ['block', 'inline', 'inline-block', 'flex', 'grid', 'none'],
        examples: [
          { code: 'display: block', styles: { display: 'block', backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'display: inline', styles: { display: 'inline', backgroundColor: '#10b981', color: 'white', padding: '0.5rem' } },
          { code: 'display: flex', styles: { display: 'flex', gap: '0.5rem', backgroundColor: '#f59e0b', padding: '1rem' } },
        ],
      },
      {
        id: 'position',
        name: 'position',
        description: 'Specifies the positioning method for an element.',
        syntax: 'position: value;',
        values: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
        examples: [
          { code: 'position: relative', styles: { position: 'relative', top: '10px', left: '20px', backgroundColor: '#8b5cf6', color: 'white', padding: '1rem' } },
          { code: 'position: absolute', styles: { position: 'absolute', top: '0', right: '0', backgroundColor: '#ec4899', color: 'white', padding: '0.5rem' } },
        ],
      },
      {
        id: 'flexbox',
        name: 'flexbox',
        description: 'Flexible box layout for arranging items in rows or columns.',
        syntax: 'display: flex; flex-direction: value;',
        values: ['row', 'column', 'row-reverse', 'column-reverse'],
        examples: [
          { code: 'flex-direction: row', styles: { display: 'flex', flexDirection: 'row', gap: '0.5rem', backgroundColor: '#f3f4f6', padding: '1rem' } },
          { code: 'flex-direction: column', styles: { display: 'flex', flexDirection: 'column', gap: '0.5rem', backgroundColor: '#f3f4f6', padding: '1rem' } },
        ],
      },
      {
        id: 'grid',
        name: 'grid',
        description: 'Grid layout for creating two-dimensional layouts.',
        syntax: 'display: grid; grid-template-columns: value;',
        values: ['repeat()', 'auto', 'fr', 'px', '%'],
        examples: [
          { code: 'grid-template-columns: repeat(3, 1fr)', styles: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', backgroundColor: '#f3f4f6', padding: '1rem' } },
        ],
      },
    ],
  },
  {
    id: 'typography',
    name: 'Typography',
    icon: 'Type',
    properties: [
      {
        id: 'font-size',
        name: 'font-size',
        description: 'Sets the size of the font.',
        syntax: 'font-size: value;',
        values: ['px', 'em', 'rem', '%', 'small', 'medium', 'large'],
        examples: [
          { code: 'font-size: 12px', styles: { fontSize: '12px' } },
          { code: 'font-size: 24px', styles: { fontSize: '24px' } },
          { code: 'font-size: 36px', styles: { fontSize: '36px' } },
        ],
      },
      {
        id: 'font-weight',
        name: 'font-weight',
        description: 'Sets the weight (boldness) of the font.',
        syntax: 'font-weight: value;',
        values: ['normal', 'bold', '100-900'],
        examples: [
          { code: 'font-weight: 300', styles: { fontWeight: '300' } },
          { code: 'font-weight: 500', styles: { fontWeight: '500' } },
          { code: 'font-weight: 700', styles: { fontWeight: '700' } },
        ],
      },
      {
        id: 'text-align',
        name: 'text-align',
        description: 'Sets the horizontal alignment of text.',
        syntax: 'text-align: value;',
        values: ['left', 'right', 'center', 'justify'],
        examples: [
          { code: 'text-align: left', styles: { textAlign: 'left', backgroundColor: '#f3f4f6', padding: '0.5rem' } },
          { code: 'text-align: center', styles: { textAlign: 'center', backgroundColor: '#f3f4f6', padding: '0.5rem' } },
          { code: 'text-align: right', styles: { textAlign: 'right', backgroundColor: '#f3f4f6', padding: '0.5rem' } },
        ],
      },
      {
        id: 'text-decoration',
        name: 'text-decoration',
        description: 'Adds decoration to text.',
        syntax: 'text-decoration: value;',
        values: ['none', 'underline', 'overline', 'line-through'],
        examples: [
          { code: 'text-decoration: underline', styles: { textDecoration: 'underline' } },
          { code: 'text-decoration: line-through', styles: { textDecoration: 'line-through' } },
          { code: 'text-decoration: overline', styles: { textDecoration: 'overline' } },
        ],
      },
      {
        id: 'text-transform',
        name: 'text-transform',
        description: 'Controls text capitalization.',
        syntax: 'text-transform: value;',
        values: ['none', 'uppercase', 'lowercase', 'capitalize'],
        examples: [
          { code: 'text-transform: uppercase', styles: { textTransform: 'uppercase' } },
          { code: 'text-transform: lowercase', styles: { textTransform: 'lowercase' } },
          { code: 'text-transform: capitalize', styles: { textTransform: 'capitalize' } },
        ],
      },
      {
        id: 'letter-spacing',
        name: 'letter-spacing',
        description: 'Controls the space between characters.',
        syntax: 'letter-spacing: value;',
        values: ['normal', 'px', 'em'],
        examples: [
          { code: 'letter-spacing: 1px', styles: { letterSpacing: '1px' } },
          { code: 'letter-spacing: 3px', styles: { letterSpacing: '3px' } },
          { code: 'letter-spacing: 5px', styles: { letterSpacing: '5px' } },
        ],
      },
      {
        id: 'line-height',
        name: 'line-height',
        description: 'Sets the height of a line of text.',
        syntax: 'line-height: value;',
        values: ['normal', 'number', 'px', '%'],
        examples: [
          { code: 'line-height: 1', styles: { lineHeight: '1', backgroundColor: '#f3f4f6', padding: '0.5rem' } },
          { code: 'line-height: 1.5', styles: { lineHeight: '1.5', backgroundColor: '#f3f4f6', padding: '0.5rem' } },
          { code: 'line-height: 2', styles: { lineHeight: '2', backgroundColor: '#f3f4f6', padding: '0.5rem' } },
        ],
      },
    ],
  },
  {
    id: 'colors',
    name: 'Colors & Backgrounds',
    icon: 'Palette',
    properties: [
      {
        id: 'color',
        name: 'color',
        description: 'Sets the color of text.',
        syntax: 'color: value;',
        values: ['named colors', 'hex', 'rgb', 'hsl'],
        examples: [
          { code: 'color: #3b82f6', styles: { color: '#3b82f6', fontSize: '1.5rem', fontWeight: 'bold' } },
          { code: 'color: #10b981', styles: { color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' } },
          { code: 'color: #f59e0b', styles: { color: '#f59e0b', fontSize: '1.5rem', fontWeight: 'bold' } },
        ],
      },
      {
        id: 'background-color',
        name: 'background-color',
        description: 'Sets the background color of an element.',
        syntax: 'background-color: value;',
        values: ['named colors', 'hex', 'rgb', 'hsl', 'transparent'],
        examples: [
          { code: 'background-color: #3b82f6', styles: { backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'background-color: #10b981', styles: { backgroundColor: '#10b981', color: 'white', padding: '1rem' } },
          { code: 'background-color: #f59e0b', styles: { backgroundColor: '#f59e0b', color: 'white', padding: '1rem' } },
        ],
      },
      {
        id: 'opacity',
        name: 'opacity',
        description: 'Sets the transparency level of an element.',
        syntax: 'opacity: value;',
        values: ['0-1'],
        examples: [
          { code: 'opacity: 1', styles: { opacity: 1, backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'opacity: 0.5', styles: { opacity: 0.5, backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'opacity: 0.25', styles: { opacity: 0.25, backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
        ],
      },
      {
        id: 'background-gradient',
        name: 'background (gradient)',
        description: 'Creates a gradient background.',
        syntax: 'background: linear-gradient(direction, color1, color2);',
        values: ['linear-gradient', 'radial-gradient'],
        examples: [
          { code: 'linear-gradient(to right, #3b82f6, #10b981)', styles: { background: 'linear-gradient(to right, #3b82f6, #10b981)', color: 'white', padding: '1rem' } },
          { code: 'linear-gradient(to bottom, #f59e0b, #ef4444)', styles: { background: 'linear-gradient(to bottom, #f59e0b, #ef4444)', color: 'white', padding: '1rem' } },
        ],
      },
    ],
  },
  {
    id: 'borders',
    name: 'Borders & Outlines',
    icon: 'Square',
    properties: [
      {
        id: 'border',
        name: 'border',
        description: 'Sets the border around an element.',
        syntax: 'border: width style color;',
        values: ['solid', 'dashed', 'dotted', 'double', 'none'],
        examples: [
          { code: 'border: 2px solid #3b82f6', styles: { border: '2px solid #3b82f6', padding: '1rem' } },
          { code: 'border: 3px dashed #10b981', styles: { border: '3px dashed #10b981', padding: '1rem' } },
          { code: 'border: 4px dotted #f59e0b', styles: { border: '4px dotted #f59e0b', padding: '1rem' } },
        ],
      },
      {
        id: 'border-radius',
        name: 'border-radius',
        description: 'Rounds the corners of an element.',
        syntax: 'border-radius: value;',
        values: ['px', '%', 'em'],
        examples: [
          { code: 'border-radius: 4px', styles: { borderRadius: '4px', backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'border-radius: 12px', styles: { borderRadius: '12px', backgroundColor: '#10b981', color: 'white', padding: '1rem' } },
          { code: 'border-radius: 50%', styles: { borderRadius: '50%', backgroundColor: '#f59e0b', color: 'white', padding: '1rem', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
        ],
      },
      {
        id: 'outline',
        name: 'outline',
        description: 'Draws a line around an element (outside border).',
        syntax: 'outline: width style color;',
        values: ['solid', 'dashed', 'dotted', 'double'],
        examples: [
          { code: 'outline: 2px solid #3b82f6', styles: { outline: '2px solid #3b82f6', padding: '1rem' } },
          { code: 'outline: 3px dashed #10b981', styles: { outline: '3px dashed #10b981', padding: '1rem' } },
        ],
      },
    ],
  },
  {
    id: 'spacing',
    name: 'Spacing',
    icon: 'Space',
    properties: [
      {
        id: 'margin',
        name: 'margin',
        description: 'Sets the outer spacing around an element.',
        syntax: 'margin: value;',
        values: ['auto', 'px', 'em', 'rem', '%'],
        examples: [
          { code: 'margin: 10px', styles: { margin: '10px', backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'margin: 20px', styles: { margin: '20px', backgroundColor: '#10b981', color: 'white', padding: '1rem' } },
        ],
      },
      {
        id: 'padding',
        name: 'padding',
        description: 'Sets the inner spacing inside an element.',
        syntax: 'padding: value;',
        values: ['px', 'em', 'rem', '%'],
        examples: [
          { code: 'padding: 8px', styles: { padding: '8px', backgroundColor: '#3b82f6', color: 'white' } },
          { code: 'padding: 16px', styles: { padding: '16px', backgroundColor: '#10b981', color: 'white' } },
          { code: 'padding: 32px', styles: { padding: '32px', backgroundColor: '#f59e0b', color: 'white' } },
        ],
      },
      {
        id: 'gap',
        name: 'gap',
        description: 'Sets the spacing between flex or grid items.',
        syntax: 'gap: value;',
        values: ['px', 'em', 'rem'],
        examples: [
          { code: 'gap: 8px', styles: { display: 'flex', gap: '8px', backgroundColor: '#f3f4f6', padding: '1rem' } },
          { code: 'gap: 16px', styles: { display: 'flex', gap: '16px', backgroundColor: '#f3f4f6', padding: '1rem' } },
        ],
      },
    ],
  },
  {
    id: 'sizing',
    name: 'Sizing',
    icon: 'Maximize2',
    properties: [
      {
        id: 'width',
        name: 'width',
        description: 'Sets the width of an element.',
        syntax: 'width: value;',
        values: ['auto', 'px', '%', 'vw', 'em', 'rem'],
        examples: [
          { code: 'width: 100px', styles: { width: '100px', backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'width: 200px', styles: { width: '200px', backgroundColor: '#10b981', color: 'white', padding: '1rem' } },
          { code: 'width: 100%', styles: { width: '100%', backgroundColor: '#f59e0b', color: 'white', padding: '1rem' } },
        ],
      },
      {
        id: 'height',
        name: 'height',
        description: 'Sets the height of an element.',
        syntax: 'height: value;',
        values: ['auto', 'px', '%', 'vh', 'em', 'rem'],
        examples: [
          { code: 'height: 50px', styles: { height: '50px', backgroundColor: '#3b82f6', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center' } },
          { code: 'height: 100px', styles: { height: '100px', backgroundColor: '#10b981', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center' } },
        ],
      },
      {
        id: 'max-width',
        name: 'max-width',
        description: 'Sets the maximum width of an element.',
        syntax: 'max-width: value;',
        values: ['none', 'px', '%', 'vw'],
        examples: [
          { code: 'max-width: 200px', styles: { maxWidth: '200px', backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
        ],
      },
    ],
  },
  {
    id: 'transforms',
    name: 'Transforms',
    icon: 'Move',
    properties: [
      {
        id: 'transform-rotate',
        name: 'transform: rotate',
        description: 'Rotates an element.',
        syntax: 'transform: rotate(angle);',
        values: ['deg', 'rad', 'turn'],
        examples: [
          { code: 'transform: rotate(15deg)', styles: { transform: 'rotate(15deg)', backgroundColor: '#3b82f6', color: 'white', padding: '1rem', display: 'inline-block' } },
          { code: 'transform: rotate(45deg)', styles: { transform: 'rotate(45deg)', backgroundColor: '#10b981', color: 'white', padding: '1rem', display: 'inline-block' } },
        ],
      },
      {
        id: 'transform-scale',
        name: 'transform: scale',
        description: 'Scales an element.',
        syntax: 'transform: scale(value);',
        values: ['number'],
        examples: [
          { code: 'transform: scale(0.8)', styles: { transform: 'scale(0.8)', backgroundColor: '#3b82f6', color: 'white', padding: '1rem', display: 'inline-block' } },
          { code: 'transform: scale(1.2)', styles: { transform: 'scale(1.2)', backgroundColor: '#10b981', color: 'white', padding: '1rem', display: 'inline-block' } },
        ],
      },
      {
        id: 'transform-translate',
        name: 'transform: translate',
        description: 'Moves an element from its current position.',
        syntax: 'transform: translate(x, y);',
        values: ['px', '%', 'em'],
        examples: [
          { code: 'transform: translate(20px, 10px)', styles: { transform: 'translate(20px, 10px)', backgroundColor: '#3b82f6', color: 'white', padding: '1rem', display: 'inline-block' } },
        ],
      },
      {
        id: 'transform-skew',
        name: 'transform: skew',
        description: 'Skews an element.',
        syntax: 'transform: skew(x-angle, y-angle);',
        values: ['deg'],
        examples: [
          { code: 'transform: skew(10deg, 5deg)', styles: { transform: 'skew(10deg, 5deg)', backgroundColor: '#f59e0b', color: 'white', padding: '1rem', display: 'inline-block' } },
        ],
      },
    ],
  },
  {
    id: 'transitions',
    name: 'Transitions',
    icon: 'Zap',
    properties: [
      {
        id: 'transition',
        name: 'transition',
        description: 'Creates smooth transitions between property changes.',
        syntax: 'transition: property duration timing-function;',
        values: ['all', 'property name', 'duration', 'ease', 'linear'],
        examples: [
          { code: 'transition: all 0.3s ease', styles: { transition: 'all 0.3s ease', backgroundColor: '#3b82f6', color: 'white', padding: '1rem', cursor: 'pointer' } },
        ],
      },
      {
        id: 'transition-duration',
        name: 'transition-duration',
        description: 'Sets the duration of the transition.',
        syntax: 'transition-duration: time;',
        values: ['s', 'ms'],
        examples: [
          { code: 'transition-duration: 0.5s', styles: { transitionDuration: '0.5s', backgroundColor: '#10b981', color: 'white', padding: '1rem' } },
        ],
      },
    ],
  },
  {
    id: 'effects',
    name: 'Effects',
    icon: 'Sparkles',
    properties: [
      {
        id: 'box-shadow',
        name: 'box-shadow',
        description: 'Adds shadow effects around an element.',
        syntax: 'box-shadow: x y blur spread color;',
        values: ['px', 'color'],
        examples: [
          { code: 'box-shadow: 0 2px 4px rgba(0,0,0,0.1)', styles: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: 'white', padding: '1rem' } },
          { code: 'box-shadow: 0 4px 6px rgba(0,0,0,0.2)', styles: { boxShadow: '0 4px 6px rgba(0,0,0,0.2)', backgroundColor: 'white', padding: '1rem' } },
          { code: 'box-shadow: 0 10px 25px rgba(0,0,0,0.3)', styles: { boxShadow: '0 10px 25px rgba(0,0,0,0.3)', backgroundColor: 'white', padding: '1rem' } },
        ],
      },
      {
        id: 'text-shadow',
        name: 'text-shadow',
        description: 'Adds shadow to text.',
        syntax: 'text-shadow: x y blur color;',
        values: ['px', 'color'],
        examples: [
          { code: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.3)', styles: { textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontSize: '1.5rem', fontWeight: 'bold' } },
          { code: 'text-shadow: 0 0 10px #3b82f6', styles: { textShadow: '0 0 10px #3b82f6', fontSize: '1.5rem', fontWeight: 'bold' } },
        ],
      },
      {
        id: 'filter',
        name: 'filter',
        description: 'Applies visual effects like blur, brightness, etc.',
        syntax: 'filter: function(value);',
        values: ['blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'saturate'],
        examples: [
          { code: 'filter: blur(2px)', styles: { filter: 'blur(2px)', backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'filter: brightness(1.5)', styles: { filter: 'brightness(1.5)', backgroundColor: '#10b981', color: 'white', padding: '1rem' } },
          { code: 'filter: grayscale(100%)', styles: { filter: 'grayscale(100%)', backgroundColor: '#f59e0b', color: 'white', padding: '1rem' } },
        ],
      },
    ],
  },
  {
    id: 'alignment',
    name: 'Alignment',
    icon: 'AlignCenter',
    properties: [
      {
        id: 'justify-content',
        name: 'justify-content',
        description: 'Aligns flex items along the main axis.',
        syntax: 'justify-content: value;',
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
        examples: [
          { code: 'justify-content: flex-start', styles: { display: 'flex', justifyContent: 'flex-start', backgroundColor: '#f3f4f6', padding: '1rem', gap: '0.5rem' } },
          { code: 'justify-content: center', styles: { display: 'flex', justifyContent: 'center', backgroundColor: '#f3f4f6', padding: '1rem', gap: '0.5rem' } },
          { code: 'justify-content: space-between', styles: { display: 'flex', justifyContent: 'space-between', backgroundColor: '#f3f4f6', padding: '1rem', gap: '0.5rem' } },
        ],
      },
      {
        id: 'align-items',
        name: 'align-items',
        description: 'Aligns flex items along the cross axis.',
        syntax: 'align-items: value;',
        values: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
        examples: [
          { code: 'align-items: flex-start', styles: { display: 'flex', alignItems: 'flex-start', backgroundColor: '#f3f4f6', padding: '1rem', height: '100px', gap: '0.5rem' } },
          { code: 'align-items: center', styles: { display: 'flex', alignItems: 'center', backgroundColor: '#f3f4f6', padding: '1rem', height: '100px', gap: '0.5rem' } },
        ],
      },
    ],
  },
  {
    id: 'overflow',
    name: 'Overflow',
    icon: 'Layers',
    properties: [
      {
        id: 'overflow',
        name: 'overflow',
        description: 'Controls what happens to content that overflows.',
        syntax: 'overflow: value;',
        values: ['visible', 'hidden', 'scroll', 'auto'],
        examples: [
          { code: 'overflow: hidden', styles: { overflow: 'hidden', backgroundColor: '#f3f4f6', padding: '1rem', height: '60px' } },
          { code: 'overflow: scroll', styles: { overflow: 'scroll', backgroundColor: '#f3f4f6', padding: '1rem', height: '60px' } },
          { code: 'overflow: auto', styles: { overflow: 'auto', backgroundColor: '#f3f4f6', padding: '1rem', height: '60px' } },
        ],
      },
      {
        id: 'text-overflow',
        name: 'text-overflow',
        description: 'Specifies how overflowed text should be displayed.',
        syntax: 'text-overflow: value;',
        values: ['clip', 'ellipsis'],
        examples: [
          { code: 'text-overflow: ellipsis', styles: { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: '#f3f4f6', padding: '0.5rem', maxWidth: '150px' } },
        ],
      },
    ],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    icon: 'MousePointer',
    properties: [
      {
        id: 'cursor',
        name: 'cursor',
        description: 'Changes the mouse cursor when hovering.',
        syntax: 'cursor: value;',
        values: ['auto', 'pointer', 'move', 'text', 'wait', 'help', 'not-allowed'],
        examples: [
          { code: 'cursor: pointer', styles: { cursor: 'pointer', backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'cursor: move', styles: { cursor: 'move', backgroundColor: '#10b981', color: 'white', padding: '1rem' } },
          { code: 'cursor: not-allowed', styles: { cursor: 'not-allowed', backgroundColor: '#ef4444', color: 'white', padding: '1rem' } },
        ],
      },
    ],
  },
  {
    id: 'zindex',
    name: 'Z-Index',
    icon: 'Layers',
    properties: [
      {
        id: 'z-index',
        name: 'z-index',
        description: 'Controls the stacking order of elements.',
        syntax: 'z-index: value;',
        values: ['auto', 'number'],
        examples: [
          { code: 'z-index: 1', styles: { position: 'relative', zIndex: 1, backgroundColor: '#3b82f6', color: 'white', padding: '1rem' } },
          { code: 'z-index: 10', styles: { position: 'relative', zIndex: 10, backgroundColor: '#10b981', color: 'white', padding: '1rem', marginTop: '-20px', marginLeft: '20px' } },
        ],
      },
    ],
  },
];
