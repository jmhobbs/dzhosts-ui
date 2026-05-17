import "@dzhosts/components";
import { html } from "lit";

const meta = {
  title: "Feedback/Alert",
};

export default meta;

export const Info = {
  render: () => html`
    <dzt-alert tone="info" title="Sync in progress">
      Pulling the latest component previews for local testing.
    </dzt-alert>
  `,
};

export const Success = {
  render: () => html`
    <dzt-alert tone="success" title="Deploy complete">
      The latest tool bundle was published and is ready for internal use.
    </dzt-alert>
  `,
};

export const Warning = {
  render: () => html`
    <dzt-alert tone="warning" title="Attention needed">
      Review the generated preview before promoting it to the shared environment.
    </dzt-alert>
  `,
};

export const Danger = {
  render: () => html`
    <dzt-alert tone="danger" title="Build failed">
      One or more stories did not compile after the last token update.
    </dzt-alert>
  `,
};
