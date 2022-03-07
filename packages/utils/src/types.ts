import { Ref } from 'vue';

export type Nil = null | undefined;

export type Maybe<T> = T | null;

export type MaybeAsync<T> = Promise<T> | null;

export type MaybeRef<T> = Ref<T> | T;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type CssVar = `var(--${string})`;

export type ArrayWithProps<T> = T[] & { [key: string]: any };
