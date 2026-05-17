import "@dzhosts/components";
import { html } from "lit";

const itemStyles =
  "background: var(--dzt-color-bg-subtle); border: 1px solid var(--dzt-color-border-default); border-radius: var(--dzt-radius-1); padding: var(--dzt-space-3);";

const meta = {
  title: "Layout/Stack",
};

export default meta;

export const DefaultSpacing = {
  render: () => html`
    <dzt-stack>
      <div style=${itemStyles}>Primary content</div>
      <div style=${itemStyles}>Secondary content</div>
      <div style=${itemStyles}>Tertiary content</div>
    </dzt-stack>
  `,
};

export const Centered = {
  render: () => html`
    <dzt-stack align="center" gap="2">
      <div style=${itemStyles}>Step one</div>
      <div style=${itemStyles}>Step two</div>
    </dzt-stack>
  `,
};
