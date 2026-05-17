import "@dzhosts/components";
import { html } from "lit";

const meta = {
  title: "Layout/Panel",
};

export default meta;

export const DefaultPadding = {
  render: () => html`
    <dzt-panel>
      <div>Primary panel content for tool configuration.</div>
    </dzt-panel>
  `,
};

export const CompactPadding = {
  render: () => html`
    <dzt-panel padding="2">
      <div>Secondary panel content with compact spacing.</div>
    </dzt-panel>
  `,
};
