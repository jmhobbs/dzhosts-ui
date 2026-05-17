import "../internal/setup";

import { LitElement, css, html, type PropertyValues } from "lit";

import { buttonResetStyles, hostStyles } from "../internal/styles";

export class DztDialog extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    headline: { type: String },
  };

  static styles = [
    hostStyles,
    buttonResetStyles,
    css`
      :host {
        display: contents;
      }

      dialog {
        background: var(--dzt-color-bg-surface);
        border: 1px solid var(--dzt-color-border-strong);
        border-radius: var(--dzt-radius-2);
        box-shadow: var(--dzt-shadow-1);
        color: var(--dzt-color-text-primary);
        min-width: min(32rem, calc(100vw - 2rem));
        padding: 0;
      }

      dialog::backdrop {
        background: rgba(6, 10, 15, 0.68);
      }

      .header,
      .footer {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: var(--dzt-space-4);
      }

      .header {
        border-bottom: 1px solid var(--dzt-color-border-default);
      }

      .footer {
        border-top: 1px solid var(--dzt-color-border-default);
        justify-content: flex-end;
      }

      .body {
        padding: var(--dzt-space-4);
      }

      .title {
        font-size: var(--dzt-font-size-300);
        font-weight: 600;
      }

      .close {
        align-items: center;
        border: 1px solid var(--dzt-color-border-default);
        border-radius: var(--dzt-radius-1);
        color: var(--dzt-color-text-secondary);
        cursor: pointer;
        display: inline-flex;
        height: 2rem;
        justify-content: center;
        width: 2rem;
      }
    `,
  ];

  open = false;

  headline = "";

  updated(changedProperties: PropertyValues<this>) {
    const dialogElement = this.renderRoot.querySelector("dialog");

    if (!changedProperties.has("open") || !dialogElement) {
      return;
    }

    if (this.open) {
      if ("showModal" in dialogElement && !dialogElement.open) {
        dialogElement.showModal();
      } else {
        dialogElement.setAttribute("open", "");
      }
      return;
    }

    if ("close" in dialogElement && dialogElement.open) {
      dialogElement.close();
    } else {
      dialogElement.removeAttribute("open");
    }
  }

  show() {
    this.open = true;
  }

  close() {
    this.open = false;
  }

  private handleClose() {
    this.open = false;
    this.dispatchEvent(
      new Event("close", {
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <dialog part="base" @close=${this.handleClose}>
        <div class="header">
          <div class="title" part="title">${this.headline}</div>
          <button class="close" part="close-button" type="button" @click=${this.close}>
            &times;
          </button>
        </div>
        <div class="body" part="body">
          <slot></slot>
        </div>
        <div class="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </dialog>
    `;
  }
}

if (!customElements.get("dzt-dialog")) {
  customElements.define("dzt-dialog", DztDialog);
}
