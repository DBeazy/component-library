// import bulma from '../node_modules/bulma/css/bulma.css'
import { addDecorator } from '@storybook/vue';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

addDecorator(
  withTests({
    results
  })
);
