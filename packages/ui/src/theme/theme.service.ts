import { CSS_VAR_PREFIX } from '@/constants';
import { camelToKebabCase, DeepPartial, Theme } from '@/utils';
import { merge } from 'lodash-es';
import { defaultTheme } from './default-theme';

type FontDefinition = {
  name: string;
  url: string;
  weight: string;
};

export class ThemeService {
  theme: Theme;

  constructor(theme: DeepPartial<Theme>) {
    this.theme = merge({}, defaultTheme, theme);
  }

  init() {
    this.setupFonts();
    const { font, ...theme } = this.theme;
    this.createCustomProperties(theme);
  }

  private setupFonts(): Promise<void[]> {
    return Promise.all(
      Object.entries(this.theme.font).flatMap(([name, fonts]) =>
        Object.entries(fonts).map(([weight, url]) =>
          this.loadFont({ name, url, weight: weight })
        )
      )
    );
  }

  private async loadFont({ name, url, weight }: FontDefinition) {
    const fontName = `Daria ${name}`;
    document.documentElement.style.setProperty(
      `${CSS_VAR_PREFIX}font-${camelToKebabCase(name)}`,
      fontName
    );

    const fontFace = new FontFace(fontName, `url(${url})`, {
      weight,
      display: 'swap'
    });

    (document.fonts as any).add(await fontFace.load());
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
