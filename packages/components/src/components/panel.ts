import '../internal/setup';

import { LitElement, css, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { hostStyles, resolveSpace, surfaceStyles } from '../internal/styles';

export class DztPanel extends LitElement {
  static properties = {
    padding: { type: String }
  };

  static styles = [
    hostStyles,
    surfaceStyles,
    css`
      .surface {
        padding: var(--panel-padding);
      }
    `
  ];

  padding = '4';

  render() {
    return html`
      <div class="surface" part="base" style=${styleMap({ '--panel-padding': resolveSpace(this.padding) })}>
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('dzt-panel')) {
  customElements.define('dzt-panel', DztPanel);
}
