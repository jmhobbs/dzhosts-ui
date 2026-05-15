import '@dzhosts/components';
import { html } from 'lit';

const cellStyles = 'background: var(--dzt-color-bg-subtle); border: 1px solid var(--dzt-color-border-default); border-radius: var(--dzt-radius-2); padding: var(--dzt-space-4);';

const meta = {
  title: 'Layout/Grid'
};

export default meta;

export const AutoFit = {
  render: () => html`
    <dzt-grid>
      <div style=${cellStyles}>One</div>
      <div style=${cellStyles}>Two</div>
      <div style=${cellStyles}>Three</div>
    </dzt-grid>
  `
};

export const TwoColumns = {
  render: () => html`
    <dzt-grid gap="4" columns="repeat(2, minmax(0, 1fr))">
      <div style=${cellStyles}>Primary panel content</div>
      <div style=${cellStyles}>Secondary panel content</div>
    </dzt-grid>
  `
};
