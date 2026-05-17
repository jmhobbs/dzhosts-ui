import "../internal/setup";

import { LitElement, css, html } from "lit";

import { buttonResetStyles, hostStyles } from "../internal/styles";

export class DztButton extends LitElement {
  static properties = {
    variant: { reflect: true },
    disabled: { type: Boolean, reflect: true },
    type: { type: String },
  };

  static styles = [
    hostStyles,
    buttonResetStyles,
    css`
      :host {
        display: inline-flex;
      }

      button {
        align-items: center;
        background: var(--dzt-color-bg-accent);
        border: 1px solid transparent;
        border-radius: var(--dzt-radius-1);
        color: var(--dzt-color-text-primary);
        cursor: pointer;
        display: inline-flex;
        font-size: var(--dzt-font-size-200);
        font-weight: 600;
        gap: var(--dzt-space-2);
        justify-content: center;
        min-height: 2rem;
        min-width: 2rem;
        padding: 0 var(--dzt-space-4);
        transition:
          background var(--dzt-motion-fast),
          border-color var(--dzt-motion-fast),
          opacity var(--dzt-motion-fast);
      }

      button:hover:enabled {
        opacity: 0.92;
      }

      button.subtle {
        background: var(--dzt-color-bg-subtle);
        border-color: var(--dzt-color-border-default);
      }

      button.ghost {
        background: transparent;
        border-color: var(--dzt-color-border-default);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.55;
      }

      .label {
        white-space: nowrap;
      }
    `,
  ];

  variant = "solid";

  disabled = false;

  type: "button" | "submit" | "reset" = "button";

  render() {
    return html`
      <button class=${this.variant} part="base" ?disabled=${this.disabled} type=${this.type}>
        <slot name="start"></slot>
        <span class="label" part="label"><slot></slot></span>
        <slot name="end"></slot>
      </button>
    `;
  }
}

if (!customElements.get("dzt-button")) {
  customElements.define("dzt-button", DztButton);
}
