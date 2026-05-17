import "../internal/setup";

import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { hostStyles } from "../internal/styles";

export class DztContainer extends LitElement {
  static properties = {
    width: { type: String },
  };

  static styles = [
    hostStyles,
    css`
      :host {
        display: block;
      }

      .container {
        margin-inline: auto;
        width: min(100%, var(--container-width));
      }
    `,
  ];

  width = "72rem";

  render() {
    return html`
      <div class="container" part="base" style=${styleMap({ "--container-width": this.width })}>
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get("dzt-container")) {
  customElements.define("dzt-container", DztContainer);
}
