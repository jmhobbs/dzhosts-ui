import { beforeEach, describe, expect, it, vi } from "vitest";

import "./input";

describe("dzt-input", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("renders field metadata and invalid state", async () => {
    const element = document.createElement("dzt-input") as HTMLElement & {
      label: string;
      hint: string;
      invalid: boolean;
      updateComplete: Promise<boolean>;
    };

    element.label = "Name";
    element.hint = "Shown in the CLI header";
    element.invalid = true;
    document.body.append(element);

    await element.updateComplete;

    const field = element.shadowRoot?.querySelector("dzt-field");
    const input = element.shadowRoot?.querySelector("input");

    expect(field?.getAttribute("label")).toBeNull();
    expect(field?.shadowRoot?.textContent).toContain("Name");
    expect(field?.shadowRoot?.textContent).toContain("Shown in the CLI header");
    expect(input?.getAttribute("aria-invalid")).toBe("true");
  });

  it("emits input events and updates value", async () => {
    const element = document.createElement("dzt-input") as HTMLElement & {
      value: string;
      updateComplete: Promise<boolean>;
    };
    const onInput = vi.fn();

    element.addEventListener("input", onInput);
    document.body.append(element);
    await element.updateComplete;

    const input = element.shadowRoot?.querySelector("input") as HTMLInputElement;
    input.value = "dayz";
    input.dispatchEvent(new Event("input", { bubbles: true }));
    await element.updateComplete;

    expect(element.value).toBe("dayz");
    expect(onInput).toHaveBeenCalledTimes(1);
  });
});
