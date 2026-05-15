import '../internal/setup';

import plusIcon from 'iconoir/icons/regular/plus.svg?raw';
import { LitElement, css, html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { buttonResetStyles, hostStyles } from '../internal/styles';

export class DztIconButton extends LitElement {
  static properties = {
    disabled: { type: Boolean, reflect: true },
    label: { type: String },
    useDefaultIcon: { type: Boolean }
  };

  static styles = [
    hostStyles,
    buttonResetStyles,
    css`
      :host {
        display: inline-flex;
      }

      button {
        align-items: center;
        background: var(--dzt-color-bg-subtle);
        border: 1px solid var(--dzt-color-border-default);
        border-radius: var(--dzt-radius-1);
        color: var(--dzt-color-text-secondary);
        cursor: pointer;
        display: inline-flex;
        height: 2rem;
        justify-content: center;
        padding: 0;
        width: 2rem;
      }

      button:hover:enabled {
        border-color: var(--dzt-color-border-strong);
        color: var(--dzt-color-text-primary);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.55;
      }

      .icon {
        display: inline-flex;
        height: 1rem;
        width: 1rem;
      }

      .icon svg {
        height: 100%;
        width: 100%;
      }
    `
  ];

  disabled = false;

  label = 'Icon action';

  useDefaultIcon = true;

  render() {
    return html`
      <button
        aria-label=${this.label}
        part="base"
        ?disabled=${this.disabled}
        type="button"
      >
        <slot>
          ${this.useDefaultIcon
            ? html`<span class="icon" part="icon">${unsafeHTML(plusIcon)}</span>`
            : nothing}
        </slot>
      </button>
    `;
  }
}

if (!customElements.get('dzt-icon-button')) {
  customElements.define('dzt-icon-button', DztIconButton);
}
