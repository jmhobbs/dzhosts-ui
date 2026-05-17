import "../internal/setup";

import { LitElement, css, html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { buttonResetStyles, controlStyles, hostStyles } from "../internal/styles";
import "./field";

export class DztInput extends LitElement {
  static properties = {
    label: { type: String },
    hint: { type: String },
    error: { type: String },
    name: { type: String },
    placeholder: { type: String },
    type: { type: String },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    value: { type: String },
  };

  static styles = [
    hostStyles,
    buttonResetStyles,
    controlStyles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  label = "";

  hint = "";

  error = "";

  name = "";

  placeholder = "";

  type = "text";

  disabled = false;

  invalid = false;

  value = "";

  private emit(type: "input" | "change", value: string) {
    this.value = value;
    this.dispatchEvent(
      new Event(type, {
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <dzt-field .label=${this.label} .hint=${this.hint} .error=${this.error}>
        <input
          class="control"
          aria-invalid=${this.invalid ? "true" : "false"}
          ?disabled=${this.disabled}
          name=${ifDefined(this.name || undefined)}
          placeholder=${ifDefined(this.placeholder || undefined)}
          type=${this.type}
          .value=${this.value}
          @input=${(event: Event) =>
            this.emit("input", (event.currentTarget as HTMLInputElement).value)}
          @change=${(event: Event) =>
            this.emit("change", (event.currentTarget as HTMLInputElement).value)}
        />
      </dzt-field>
    `;
  }
}

if (!customElements.get("dzt-input")) {
  customElements.define("dzt-input", DztInput);
}
