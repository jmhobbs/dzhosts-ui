import "../internal/setup";

import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { hostStyles, resolveSpace } from "../internal/styles";

export class DztStack extends LitElement {
  static properties = {
    gap: { type: String },
    align: { type: String },
    justify: { type: String },
  };

  static styles = [
    hostStyles,
    css`
      :host {
        display: block;
      }

      .stack {
        align-items: var(--align);
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        justify-content: var(--justify);
      }
    `,
  ];

  gap = "4";

  align = "stretch";

  justify = "flex-start";

  render() {
    return html`
      <div
        class="stack"
        part="base"
        style=${styleMap({
          "--gap": resolveSpace(this.gap),
          "--align": this.align,
          "--justify": this.justify,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get("dzt-stack")) {
  customElements.define("dzt-stack", DztStack);
}
