import "@dzhosts/components";
import { html } from "lit";

const meta = {
  title: "Layout/Divider",
};

export default meta;

export const Default = {
  render: () => html`
    <div>
      <div style="padding-bottom: var(--dzt-space-3);">Section one</div>
      <dzt-divider></dzt-divider>
      <div style="padding-top: var(--dzt-space-3);">Section two</div>
    </div>
  `,
};
