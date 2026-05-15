const tokensCssText = `
:root {
  color-scheme: dark;
  --dzt-font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --dzt-font-mono: ui-monospace, SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  --dzt-font-size-100: 0.75rem;
  --dzt-font-size-200: 0.8125rem;
  --dzt-font-size-300: 0.875rem;
  --dzt-font-size-400: 1rem;
  --dzt-line-height-tight: 1.2;
  --dzt-line-height-base: 1.4;
  --dzt-space-1: 0.125rem;
  --dzt-space-2: 0.25rem;
  --dzt-space-3: 0.5rem;
  --dzt-space-4: 0.75rem;
  --dzt-space-5: 1rem;
  --dzt-space-6: 1.25rem;
  --dzt-space-7: 1.5rem;
  --dzt-space-8: 2rem;
  --dzt-radius-1: 0.375rem;
  --dzt-radius-2: 0.5rem;
  --dzt-radius-round: 999px;
  --dzt-color-bg-canvas: #0b0b0b;
  --dzt-color-bg-surface: #111111;
  --dzt-color-bg-subtle: #181818;
  --dzt-color-bg-overlay: #202020;
  --dzt-color-bg-accent: #ac1b23;
  --dzt-color-bg-accent-muted: rgba(172, 27, 35, 0.18);
  --dzt-color-bg-info-muted: rgba(88, 118, 166, 0.18);
  --dzt-color-bg-danger-muted: rgba(255, 91, 91, 0.18);
  --dzt-color-bg-success-muted: rgba(53, 201, 107, 0.18);
  --dzt-color-bg-warning-muted: rgba(255, 186, 73, 0.18);
  --dzt-color-border-default: #263129;
  --dzt-color-border-strong: #334036;
  --dzt-color-border-accent: #d34851;
  --dzt-color-border-info: #6e8eb6;
  --dzt-color-border-danger: #ff6f6f;
  --dzt-color-border-success: #49b874;
  --dzt-color-text-primary: #f1efef;
  --dzt-color-text-secondary: #c0c0c0;
  --dzt-color-text-muted: #8d8d8d;
  --dzt-color-text-accent: #ffd7da;
  --dzt-color-text-info: #dce8fb;
  --dzt-color-text-danger: #ffd8d8;
  --dzt-color-text-success: #d4ffe2;
  --dzt-color-text-warning: #fff2d5;
  --dzt-shadow-1: 0 12px 30px rgba(0, 0, 0, 0.22);
  --dzt-focus-ring: 0 0 0 2px rgba(172, 27, 35, 0.42);
  --dzt-motion-fast: 120ms ease;
}

body {
  margin: 0;
  background: var(--dzt-color-bg-canvas);
  color: var(--dzt-color-text-primary);
  font-family: var(--dzt-font-sans);
  font-size: var(--dzt-font-size-300);
  line-height: var(--dzt-line-height-base);
}

* {
  box-sizing: border-box;
}
`;

export { tokensCssText };

export function installTokens(target: Document = document): void {
  if (target.head.querySelector('style[data-dzt-tokens="true"]')) {
    return;
  }

  const styleElement = target.createElement('style');
  styleElement.dataset.dztTokens = 'true';
  styleElement.textContent = tokensCssText;
  target.head.append(styleElement);
}
