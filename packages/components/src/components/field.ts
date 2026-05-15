import '../internal/setup';

import { LitElement, css, html } from 'lit';

import { fieldTextStyles, hostStyles } from '../internal/styles';

export class DztField extends LitElement {
  static properties = {
    label: { type: String },
    hint: { type: String },
    error: { type: String }
  };

  static styles = [
    hostStyles,
    fieldTextStyles,
    css`
      :host {
        display: block;
      }

      .field {
        display: grid;
      }
    `
  ];

  label = '';

  hint = '';

  error = '';

  render() {
    return html`
      <div class="field" part="base">
        ${this.label ? html`<span class="label" part="label">${this.label}</span>` : null}
        <slot></slot>
        ${this.error
          ? html`<span class="error" part="error">${this.error}</span>`
          : this.hint
            ? html`<span class="hint" part="hint">${this.hint}</span>`
            : null}
      </div>
    `;
  }
}

if (!customElements.get('dzt-field')) {
  customElements.define('dzt-field', DztField);
}
