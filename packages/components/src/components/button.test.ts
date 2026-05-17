import { beforeEach, describe, expect, it, vi } from "vitest";

import "./button";

describe("dzt-button", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("renders the selected variant and disabled state", async () => {
    const element = document.createElement("dzt-button") as HTMLElement & {
      disabled: boolean;
      variant: string;
      updateComplete: Promise<boolean>;
    };

    element.variant = "subtle";
    element.disabled = true;
    element.textContent = "Deploy";
    document.body.append(element);

    await element.updateComplete;

    const button = element.shadowRoot?.querySelector("button");
    expect(button?.className).toContain("subtle");
    expect(button?.disabled).toBe(true);
  });

  it("re-emits click events from the host", async () => {
    const element = document.createElement("dzt-button") as HTMLElement & {
      updateComplete: Promise<boolean>;
    };
    const onClick = vi.fn();

    element.textContent = "Run";
    element.addEventListener("click", onClick);
    document.body.append(element);

    await element.updateComplete;

    element.shadowRoot?.querySelector("button")?.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
