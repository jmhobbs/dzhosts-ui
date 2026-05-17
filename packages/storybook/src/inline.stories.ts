import "@dzhosts/components";
import { html } from "lit";

const itemStyles =
  "background: var(--dzt-color-bg-subtle); border: 1px solid var(--dzt-color-border-default); border-radius: var(--dzt-radius-1); padding: var(--dzt-space-2) var(--dzt-space-3);";

const meta = {
  title: "Layout/Inline",
};

export default meta;

export const Default = {
  render: () => html`
    <dzt-inline>
      <div style=${itemStyles}>CLI</div>
      <div style=${itemStyles}>Tools</div>
      <div style=${itemStyles}>Ready</div>
    </dzt-inline>
  `,
};

export const EndAligned = {
  render: () => html`
    <dzt-inline justify="flex-end">
      <div style=${itemStyles}>Primary</div>
      <div style=${itemStyles}>Secondary</div>
    </dzt-inline>
  `,
};
