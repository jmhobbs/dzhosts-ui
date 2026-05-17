import "@dzhosts/components";
import { html } from "lit";

const meta = {
  title: "Inputs/Checkbox",
};

export default meta;

export const Unchecked = {
  render: () => html`
    <dzt-checkbox
      label="Enable verbose logging"
      hint="Add extra output during local runs."
    ></dzt-checkbox>
  `,
};

export const Checked = {
  render: () => html`
    <dzt-checkbox
      checked
      label="Enable verbose logging"
      hint="Add extra output during local runs."
    ></dzt-checkbox>
  `,
};

export const Disabled = {
  render: () => html`
    <dzt-checkbox
      disabled
      label="Enable verbose logging"
      hint="Logging is managed by the current workspace."
    ></dzt-checkbox>
  `,
};

export const Invalid = {
  render: () => html`
    <dzt-checkbox
      invalid
      label="Accept deployment risk"
      hint="You must confirm before continuing."
    ></dzt-checkbox>
  `,
};
