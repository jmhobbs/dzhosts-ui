import "../internal/setup";

import { LitElement, css, html } from "lit";

import { hostStyles } from "../internal/styles";

export class DztBadge extends LitElement {
  static properties = {
    tone: { reflect: true },
  };

  static styles = [
    hostStyles,
    css`
      :host {
        display: inline-block;
      }

      .badge {
        align-items: center;
        background: var(--dzt-color-bg-subtle);
        border: 1px solid var(--dzt-color-border-default);
        border-radius: var(--dzt-radius-round);
        color: var(--dzt-color-text-secondary);
        display: inline-flex;
        font-size: var(--dzt-font-size-100);
        font-weight: 600;
        gap: var(--dzt-space-2);
        letter-spacing: 0.01em;
        min-height: 1.5rem;
        padding: 0 var(--dzt-space-3);
        text-transform: uppercase;
      }

      :host([tone="info"]) .badge {
        background: var(--dzt-color-bg-accent-muted);
        border-color: var(--dzt-color-border-accent);
        color: var(--dzt-color-text-accent);
      }

      :host([tone="danger"]) .badge {
        background: var(--dzt-color-bg-danger-muted);
        border-color: var(--dzt-color-border-danger);
        color: var(--dzt-color-text-danger);
      }

      :host([tone="success"]) .badge {
        background: var(--dzt-color-bg-success-muted);
        color: var(--dzt-color-text-success);
      }
    `,
  ];

  tone = "neutral";

  render() {
    return html`
      <span class="badge" part="base">
        <slot></slot>
      </span>
    `;
  }
}

if (!customElements.get("dzt-badge")) {
  customElements.define("dzt-badge", DztBadge);
}
