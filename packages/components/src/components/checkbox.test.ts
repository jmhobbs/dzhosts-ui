import { beforeEach, describe, expect, it, vi } from 'vitest';

import './checkbox';

describe('dzt-checkbox', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('syncs checked state and emits change', async () => {
    const element = document.createElement('dzt-checkbox') as HTMLElement & {
      label: string;
      checked: boolean;
      updateComplete: Promise<boolean>;
    };
    const onChange = vi.fn();

    element.label = 'Enable logs';
    element.addEventListener('change', onChange);
    document.body.append(element);

    await element.updateComplete;

    const checkbox = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change', { bubbles: true }));
    await element.updateComplete;

    expect(element.checked).toBe(true);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

