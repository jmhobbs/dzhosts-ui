import { beforeEach, describe, expect, it } from 'vitest';

import './grid';
import './inline';
import './stack';

describe('layout primitives', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('applies configured spacing and alignment styles', async () => {
    const stack = document.createElement('dzt-stack') as HTMLElement & {
      gap: string;
      align: string;
      updateComplete: Promise<boolean>;
    };

    stack.gap = '5';
    stack.align = 'center';
    document.body.append(stack);
    await stack.updateComplete;

    const base = stack.shadowRoot?.querySelector('.stack');
    expect(base?.style.getPropertyValue('--gap')).toBe('var(--dzt-space-5)');
    expect(base?.style.getPropertyValue('--align')).toBe('center');
  });
});
