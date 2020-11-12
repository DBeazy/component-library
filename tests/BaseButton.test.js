import { describe, expect, test, beforeEach } from '@jest/globals';
import { shallowMount } from '@vue/test-utils';
import BaseButton from '@/BaseButton';

describe('BaseButton test', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(BaseButton, {
      slots: {
        default: '<span class="fake-text"></span>'
      }
    });
  });

  test('Text is inserted in button element', () => {
    const button = cmp.find('.button');
    expect(button.findAll('.fake-text').length).toBe(1);
  });
});
