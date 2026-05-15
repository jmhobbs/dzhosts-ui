import '../internal/setup';

import { LitElement, css, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { hostStyles, resolveSpace } from '../internal/styles';

export class DztGrid extends LitElement {
  static properties = {
    columns: { type: String },
    gap: { type: String }
  };

  static styles = [
    hostStyles,
    css`
      :host {
        display: block;
      }

      .grid {
        display: grid;
        gap: var(--gap);
        grid-template-columns: var(--columns);
      }
    `
  ];

  columns = 'repeat(auto-fit, minmax(12rem, 1fr))';

  gap = '4';

  render() {
    return html`
      <div
        class="grid"
        part="base"
        style=${styleMap({
          '--columns': this.columns,
          '--gap': resolveSpace(this.gap)
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('dzt-grid')) {
  customElements.define('dzt-grid', DztGrid);
}
