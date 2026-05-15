import '@dzhosts/components';
import { html } from 'lit';

const meta = {
  title: 'Inputs/Textarea'
};

export default meta;

export const Placeholder = {
  render: () => html`
    <dzt-textarea
      label="Description"
      hint="Keep the note short and useful."
      placeholder="Describe what this workspace is for."
    ></dzt-textarea>
  `
};

export const Filled = {
  render: () => html`
    <dzt-textarea
      label="Description"
      hint="Keep the note short and useful."
      value="Shared workspace for local tooling experiments."
    ></dzt-textarea>
  `
};

export const Invalid = {
  render: () => html`
    <dzt-textarea
      invalid
      error="A description is required."
      label="Description"
      placeholder="Describe what this workspace is for."
    ></dzt-textarea>
  `
};

export const Disabled = {
  render: () => html`
    <dzt-textarea
      disabled
      label="Description"
      hint="This field is managed by the selected profile."
      value="Shared workspace for local tooling experiments."
    ></dzt-textarea>
  `
};
