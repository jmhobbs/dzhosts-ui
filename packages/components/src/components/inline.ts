import '../internal/setup';

import { LitElement, css, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { hostStyles, resolveSpace } from '../internal/styles';

export class DztInline extends LitElement {
  static properties = {
    gap: { type: String },
    align: { type: String },
    justify: { type: String }
  };

  static styles = [
    hostStyles,
    css`
      :host {
        display: block;
      }

      .inline {
        align-items: var(--align);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--gap);
        justify-content: var(--justify);
      }
    `
  ];

  gap = '3';

  align = 'center';

  justify = 'flex-start';

  render() {
    return html`
      <div
        class="inline"
        part="base"
        style=${styleMap({
          '--gap': resolveSpace(this.gap),
          '--align': this.align,
          '--justify': this.justify
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('dzt-inline')) {
  customElements.define('dzt-inline', DztInline);
}
