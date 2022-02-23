import { app } from '@storybook/vue3';
import { createDariaUi } from '../src/plugin';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

app.use(createDariaUi());

export const decorators = [
  story => ({
    components: { story },
    template: '<div style="margin: 2em;"><story /></div>'
  })
];
