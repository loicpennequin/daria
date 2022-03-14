import { app } from '@storybook/vue3';
import * as daria from '../packages/ui/src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {}
};
app.use(daria.createDariaUi());

export const decorators = [
  story => ({
    components: { story },
    template: '<div style="margin: 2em;"><story /></div>'
  })
];
