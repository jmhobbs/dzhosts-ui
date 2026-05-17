import { beforeEach, describe, expect, it } from "vitest";

import "./dialog";

describe("dzt-dialog", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("reflects the open state on the native dialog element", async () => {
    const element = document.createElement("dzt-dialog") as HTMLElement & {
      open: boolean;
      updateComplete: Promise<boolean>;
    };

    element.open = true;
    document.body.append(element);
    await element.updateComplete;

    const dialog = element.shadowRoot?.querySelector("dialog");
    expect(dialog?.hasAttribute("open")).toBe(true);

    element.open = false;
    await element.updateComplete;

    expect(dialog?.hasAttribute("open")).toBe(false);
  });
});
