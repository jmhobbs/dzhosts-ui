import '@dzhosts/components';
import { html } from 'lit';

const meta = {
  title: 'Feedback/Empty State'
};

export default meta;

export const DescriptionOnly = {
  render: () => html`
    <dzt-empty-state
      title="No saved commands"
      description="Create your first command preset to speed up repeated local runs."
    ></dzt-empty-state>
  `
};

export const WithAction = {
  render: () => html`
    <dzt-empty-state
      title="No saved commands"
      description="Create your first command preset to speed up repeated local runs."
    >
      <button type="button">Create preset</button>
    </dzt-empty-state>
  `
};
