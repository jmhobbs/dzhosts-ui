import "@dzhosts/components";
import { html } from "lit";

const meta = {
  title: "Inputs/Icon Button",
};

export default meta;

export const Default = {
  render: () => html`<dzt-icon-button label="Add command"></dzt-icon-button>`,
};

export const Disabled = {
  render: () => html`<dzt-icon-button disabled label="Add command"></dzt-icon-button>`,
};
