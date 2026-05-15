import { css, type CSSResultGroup } from 'lit';

export const hostStyles = css`
  :host {
    color: var(--dzt-color-text-primary);
    font-family: var(--dzt-font-sans);
  }
`;

export const surfaceStyles = css`
  :host {
    display: block;
  }

  .surface {
    background: var(--dzt-color-bg-surface);
    border: 1px solid var(--dzt-color-border-default);
    border-radius: var(--dzt-radius-2);
    box-shadow: var(--dzt-shadow-1);
  }
`;

export const buttonResetStyles = css`
  button {
    appearance: none;
    border: none;
    margin: 0;
    background: transparent;
    color: inherit;
    font: inherit;
  }

  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  dialog button:focus-visible {
    outline: none;
    box-shadow: var(--dzt-focus-ring);
  }
`;

export const fieldTextStyles = css`
  .label {
    color: var(--dzt-color-text-secondary);
    display: inline-block;
    font-size: var(--dzt-font-size-200);
    font-weight: 600;
    margin-bottom: var(--dzt-space-2);
  }

  .hint,
  .error {
    font-size: var(--dzt-font-size-200);
    margin-top: var(--dzt-space-2);
  }

  .hint {
    color: var(--dzt-color-text-muted);
  }

  .error {
    color: var(--dzt-color-text-danger);
  }
`;

export const controlStyles = css`
  .control {
    background: var(--dzt-color-bg-subtle);
    border: 1px solid var(--dzt-color-border-default);
    border-radius: var(--dzt-radius-1);
    color: var(--dzt-color-text-primary);
    display: block;
    font: inherit;
    min-height: 2rem;
    padding: 0 var(--dzt-space-3);
    transition: border-color var(--dzt-motion-fast), background var(--dzt-motion-fast);
    width: 100%;
  }

  .control::placeholder {
    color: var(--dzt-color-text-muted);
  }

  .control:hover {
    border-color: var(--dzt-color-border-strong);
  }

  .control[aria-invalid='true'] {
    border-color: var(--dzt-color-border-danger);
  }

  .control:disabled {
    color: var(--dzt-color-text-muted);
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const sharedStyles: CSSResultGroup = [
  hostStyles,
  buttonResetStyles
];

export function resolveSpace(value: string): string {
  return /^\d+$/.test(value) ? `var(--dzt-space-${value})` : value;
}

