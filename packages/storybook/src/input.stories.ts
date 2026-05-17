import "@dzhosts/components";
import { html } from "lit";

const meta = {
  title: "Inputs/Input",
};

export default meta;

export const Filled = {
  render: () => html`
    <dzt-input
      label="Workspace name"
      hint="Used across command output and saved profiles."
      placeholder="dzhosts-tools"
      value="dzhosts-tools"
    ></dzt-input>
  `,
};

export const Placeholder = {
  render: () => html`
    <dzt-input
      label="Workspace name"
      hint="Used across command output and saved profiles."
      placeholder="dzhosts-tools"
    ></dzt-input>
  `,
};

export const Invalid = {
  render: () => html`
    <dzt-input
      invalid
      error="A workspace name is required."
      label="Workspace name"
      placeholder="dzhosts-tools"
    ></dzt-input>
  `,
};

export const Disabled = {
  render: () => html`
    <dzt-input
      disabled
      label="Workspace name"
      hint="This field is controlled by the selected profile."
      value="dzhosts-tools"
    ></dzt-input>
  `,
};
