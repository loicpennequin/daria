import { App } from 'vue';

export * from './components';
export * from './directives';
export * from './composables';

export function makeComponentPlugin(components: Record<string, any>) {
  return {
    install(app: App) {
      Object.entries(components).forEach(([path, module]) => {
        const componentName = path.split('/').at(-1)?.replace('.vue', '');
        if (!componentName) return;

        app.component(componentName, module.default);
      });
    }
  };
}
