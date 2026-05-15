import '../internal/setup';

import { LitElement, css, html } from 'lit';

import { hostStyles } from '../internal/styles';

export class DztSpinner extends LitElement {
  static properties = {
    size: { reflect: true }
  };

  static styles = [
    hostStyles,
    css`
      :host {
        display: inline-flex;
      }

      .spinner {
        animation: spin 0.8s linear infinite;
        border: 2px solid var(--dzt-color-border-default);
        border-radius: 50%;
        border-top-color: var(--dzt-color-bg-accent);
        height: var(--spinner-size);
        width: var(--spinner-size);
      }

      :host([size='sm']) .spinner {
        --spinner-size: 0.875rem;
      }

      :host([size='md']) .spinner {
        --spinner-size: 1.25rem;
      }

      @media (prefers-reduced-motion: reduce) {
        .spinner {
          animation-duration: 1.6s;
        }
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `
  ];

  size = 'md';

  render() {
    return html`<span class="spinner" part="base" aria-label="Loading" role="status"></span>`;
  }
}

if (!customElements.get('dzt-spinner')) {
  customElements.define('dzt-spinner', DztSpinner);
}
