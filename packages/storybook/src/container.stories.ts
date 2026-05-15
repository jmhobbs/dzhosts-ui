import '@dzhosts/components';
import { html } from 'lit';

const contentStyles = 'background: var(--dzt-color-bg-subtle); border: 1px solid var(--dzt-color-border-default); border-radius: var(--dzt-radius-2); padding: var(--dzt-space-4);';

const meta = {
  title: 'Layout/Container'
};

export default meta;

export const DefaultWidth = {
  render: () => html`
    <dzt-container>
      <div style=${contentStyles}>Default container width</div>
    </dzt-container>
  `
};

export const NarrowWidth = {
  render: () => html`
    <dzt-container width="48rem">
      <div style=${contentStyles}>Narrow container width</div>
    </dzt-container>
  `
};
