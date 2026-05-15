import '../internal/setup';

import { LitElement, css, html } from 'lit';

import { buttonResetStyles, fieldTextStyles, hostStyles } from '../internal/styles';

export class DztCheckbox extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    label: { type: String },
    hint: { type: String }
  };

  static styles = [
    hostStyles,
    buttonResetStyles,
    fieldTextStyles,
    css`
      :host {
        display: block;
      }

      label {
        align-items: flex-start;
        color: var(--dzt-color-text-primary);
        cursor: pointer;
        display: grid;
        gap: var(--dzt-space-2);
        grid-template-columns: auto 1fr;
      }

      input {
        accent-color: var(--dzt-color-bg-accent);
        height: 1rem;
        margin: 0.1rem 0 0;
        width: 1rem;
      }

      input:focus-visible {
        outline: none;
        box-shadow: var(--dzt-focus-ring);
      }

      input:disabled {
        cursor: not-allowed;
      }

      .copy {
        display: grid;
      }

      .text {
        color: var(--dzt-color-text-primary);
        font-size: var(--dzt-font-size-300);
      }
    `
  ];

  checked = false;

  disabled = false;

  invalid = false;

  label = '';

  hint = '';

  private handleChange(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    this.checked = target.checked;
    this.dispatchEvent(
      new Event('change', {
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    return html`
      <label part="base">
        <input
          aria-invalid=${this.invalid ? 'true' : 'false'}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.handleChange}
        />
        <span class="copy">
          <span class="text" part="label">${this.label}<slot></slot></span>
          ${this.hint ? html`<span class="hint" part="hint">${this.hint}</span>` : null}
        </span>
      </label>
    `;
  }
}

if (!customElements.get('dzt-checkbox')) {
  customElements.define('dzt-checkbox', DztCheckbox);
}
