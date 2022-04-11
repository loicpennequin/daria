import { makeComponentPlugin } from '@daria/core';

export default makeComponentPlugin(import.meta.globEager('./**/*.vue'));
