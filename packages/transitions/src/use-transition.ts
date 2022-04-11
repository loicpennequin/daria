import { useStyleProps } from '@daria/core';
import { computed, unref, Transition, TransitionGroup } from 'vue';
import { MaybeRef } from '@daria/utils';

type Props = {
  direction?: 'horizontal' | 'vertical';
  invertOnOut?: boolean;
  duration: string | number;
  easing: string;
  isGroup?: boolean;
};

type Options = {
  transitions: string[];
  baseName: string;
  value?: MaybeRef<string | number>;
};
export const useTransition = (props: Props, options: Options) => {
  const rawStyles = computed(() => ({
    transition: Object.fromEntries(
      options.transitions.map(property => [property, props.duration])
    ),
    easing: props.easing
  }));

  const styles = useStyleProps(rawStyles);

  return {
    styles,
    value: options.value,
    outValue: computed(() =>
      props.invertOnOut
        ? `calc(-1 * ${unref(options.value)})`
        : unref(options.value)
    ),
    is: computed(() => (props.isGroup ? TransitionGroup : Transition)),
    name: computed(() =>
      props.direction
        ? `${options.baseName}-${props.direction}`
        : options.baseName
    )
  };
};
