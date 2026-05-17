import "../internal/setup";

import { LitElement, css, html } from "lit";

import { hostStyles } from "../internal/styles";

export class DztDivider extends LitElement {
  static styles = [
    hostStyles,
    css`
      :host {
        display: block;
      }

      .divider {
        border: none;
        border-top: 1px solid var(--dzt-color-border-default);
        margin: 0;
      }
    `,
  ];

  render() {
    return html`<hr class="divider" part="base" />`;
  }
}

if (!customElements.get("dzt-divider")) {
  customElements.define("dzt-divider", DztDivider);
}
