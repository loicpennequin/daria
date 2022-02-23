import { set } from 'lodash-es';
import { camelToKebabCase, DeepPartial } from '@/utils';
import { merge } from 'lodash-es';
import { Theme } from 'styled-system';
import { defaultConfig } from './default-config';
import { defaultTheme } from './default-theme';

// type FontDefinition = {
//   name: string;
//   url: string;
//   weight: string;
// };
export const CSS_VAR_PREFIX = '--d-';

export class ThemeService {
  rawTheme: DeepPartial<Theme>;
  theme: DeepPartial<Theme> = {};
  config: Record<string, any>;

  constructor(theme: DeepPartial<Theme>, config: Record<string, any>) {
    this.rawTheme = merge({}, defaultTheme, theme);
    this.config = merge({}, defaultConfig, config);
  }

  init() {
    // this.setupFonts();
    this.createCustomProperties(this.rawTheme);
    const { breakpoints, ...theme } = this.rawTheme;
    this.normalizeTheme(theme);
    this.theme.breakpoints = breakpoints;
    Object.assign(this.theme, this.config);
  }

  // private setupFonts(): Promise<void[]> {
  //   return Promise.all(
  //     Object.entries(this.theme.font).flatMap(([name, fonts]) =>
  //       Object.entries(fonts).map(([weight, url]) =>
  //         this.loadFont({ name, url, weight: weight })
  //       )
  //     )
  //   );
  // }

  // private async loadFont({ name, url, weight }: FontDefinition) {
  //   const fontName = `Daria ${name}`;
  //   document.documentElement.style.setProperty(
  //     `${CSS_VAR_PREFIX}font-${camelToKebabCase(name)}`,
  //     fontName
  //   );

  //   const fontFace = new FontFace(fontName, `url(${url})`, {
  //     weight,
  //     display: 'swap'
  //   });

  //   (document.fonts as any).add(await fontFace.load());
  // }

  private normalizeTheme(obj: object, prefix = '') {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object') {
        this.normalizeTheme(value, `${prefix}${key}.`);
        return;
      }

      const path = `${prefix}${key}`;
      const variable = `var(${CSS_VAR_PREFIX}${path.replaceAll('.', '-')})`;
      set(this.theme, path, variable);
    });
  }

  private createCustomProperties(obj: object, prefix = CSS_VAR_PREFIX): void {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object') {
        this.createCustomProperties(
          value,
          `${prefix}${camelToKebabCase(key)}-`
        );
        return;
      }

      document.documentElement.style.setProperty(
        `${prefix}${camelToKebabCase(key)}`,
        value
      );
    });
  }
}
