import '@dzhosts/components';
import { html } from 'lit';

const meta = {
  title: 'Feedback/Spinner'
};

export default meta;

export const Small = {
  render: () => html`<dzt-spinner size="sm"></dzt-spinner>`
};

export const Medium = {
  render: () => html`<dzt-spinner size="md"></dzt-spinner>`
};
