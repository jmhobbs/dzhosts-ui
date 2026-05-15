import '../internal/setup';

import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { buttonResetStyles, controlStyles, hostStyles } from '../internal/styles';
import './field';

export class DztTextarea extends LitElement {
  static properties = {
    label: { type: String },
    hint: { type: String },
    error: { type: String },
    name: { type: String },
    placeholder: { type: String },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    value: { type: String }
  };

  static styles = [
    hostStyles,
    buttonResetStyles,
    controlStyles,
    css`
      :host {
        display: block;
      }

      textarea.control {
        min-height: 6rem;
        padding-block: var(--dzt-space-3);
        resize: vertical;
      }
    `
  ];

  label = '';

  hint = '';

  error = '';

  name = '';

  placeholder = '';

  disabled = false;

  invalid = false;

  value = '';

  render() {
    return html`
      <dzt-field .label=${this.label} .hint=${this.hint} .error=${this.error}>
        <textarea
          class="control"
          aria-invalid=${this.invalid ? 'true' : 'false'}
          ?disabled=${this.disabled}
          name=${ifDefined(this.name || undefined)}
          placeholder=${ifDefined(this.placeholder || undefined)}
          .value=${this.value}
          @input=${(event: Event) => {
            this.value = (event.currentTarget as HTMLTextAreaElement).value;
            this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
          }}
          @change=${(event: Event) => {
            this.value = (event.currentTarget as HTMLTextAreaElement).value;
            this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
          }}
        ></textarea>
      </dzt-field>
    `;
  }
}

if (!customElements.get('dzt-textarea')) {
  customElements.define('dzt-textarea', DztTextarea);
}
