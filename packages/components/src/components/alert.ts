import "../internal/setup";

import { LitElement, css, html } from "lit";

import { hostStyles } from "../internal/styles";

export class DztAlert extends LitElement {
  static properties = {
    tone: { reflect: true },
    title: { type: String },
  };

  static styles = [
    hostStyles,
    css`
      :host {
        display: block;
      }

      .alert {
        align-items: flex-start;
        background: var(--dzt-color-bg-subtle);
        border: 1px solid var(--dzt-color-border-default);
        border-radius: var(--dzt-radius-2);
        color: var(--dzt-color-text-secondary);
        display: grid;
        gap: var(--dzt-space-2);
        padding: var(--dzt-space-4);
      }

      :host([tone="info"]) .alert {
        background: var(--dzt-color-bg-info-muted);
        border-color: var(--dzt-color-border-info);
        color: var(--dzt-color-text-info);
      }

      :host([tone="danger"]) .alert {
        background: var(--dzt-color-bg-danger-muted);
        border-color: var(--dzt-color-border-danger);
        color: var(--dzt-color-text-danger);
      }

      :host([tone="success"]) .alert {
        background: var(--dzt-color-bg-success-muted);
        border-color: var(--dzt-color-border-success);
        color: var(--dzt-color-text-success);
      }

      :host([tone="warning"]) .alert {
        background: var(--dzt-color-bg-warning-muted);
        color: var(--dzt-color-text-warning);
      }

      .title {
        font-size: var(--dzt-font-size-300);
        font-weight: 600;
      }

      .body {
        color: inherit;
      }
    `,
  ];

  tone = "info";

  title = "";

  render() {
    return html`
      <div class="alert" part="base" role="status">
        ${this.title ? html`<div class="title" part="title">${this.title}</div>` : null}
        <div class="body" part="body">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

if (!customElements.get("dzt-alert")) {
  customElements.define("dzt-alert", DztAlert);
}
