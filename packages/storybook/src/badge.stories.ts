import "@dzhosts/components";
import { html } from "lit";

const meta = {
  title: "Feedback/Badge",
};

export default meta;

export const Neutral = {
  render: () => html`<dzt-badge>CLI</dzt-badge>`,
};

export const Info = {
  render: () => html`<dzt-badge tone="info">Active</dzt-badge>`,
};

export const Success = {
  render: () => html`<dzt-badge tone="success">Healthy</dzt-badge>`,
};

export const Danger = {
  render: () => html`<dzt-badge tone="danger">Blocked</dzt-badge>`,
};
