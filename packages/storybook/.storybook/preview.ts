import { installTokens } from "@dzhosts/tokens";

installTokens();

const preview = {
  parameters: {
    backgrounds: {
      default: "canvas",
      values: [
        {
          name: "canvas",
          value: "#0b0b0b",
        },
      ],
    },
    controls: {
      expanded: true,
    },
  },
};

export default preview;
