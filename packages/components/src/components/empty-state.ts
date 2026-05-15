import '../internal/setup';

import { LitElement, css, html } from 'lit';

import { hostStyles } from '../internal/styles';

export class DztEmptyState extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String }
  };

  static styles = [
    hostStyles,
    css`
      :host {
        display: block;
      }

      .state {
        align-items: center;
        border: 1px dashed var(--dzt-color-border-default);
        border-radius: var(--dzt-radius-2);
        color: var(--dzt-color-text-secondary);
        display: grid;
        gap: var(--dzt-space-3);
        justify-items: center;
        padding: var(--dzt-space-7);
        text-align: center;
      }

      .title {
        color: var(--dzt-color-text-primary);
        font-size: var(--dzt-font-size-300);
        font-weight: 600;
      }

      .description {
        max-width: 32rem;
      }
    `
  ];

  title = '';

  description = '';

  render() {
    return html`
      <div class="state" part="base">
        ${this.title ? html`<div class="title" part="title">${this.title}</div>` : null}
        ${this.description ? html`<div class="description" part="description">${this.description}</div>` : null}
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('dzt-empty-state')) {
  customElements.define('dzt-empty-state', DztEmptyState);
}
