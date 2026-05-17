import "@dzhosts/components";
import { html } from "lit";

const meta = {
  title: "Inputs/Button",
};

export default meta;

export const Solid = {
  render: () => html`<dzt-button>Run build</dzt-button>`,
};

export const Subtle = {
  render: () => html`<dzt-button variant="subtle">Preview</dzt-button>`,
};

export const Ghost = {
  render: () => html`<dzt-button variant="ghost">Cancel</dzt-button>`,
};

export const Disabled = {
  render: () => html`<dzt-button ?disabled=${true}>Run build</dzt-button>`,
};
