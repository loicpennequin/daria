import { Component, markRaw } from 'vue';
import { isString } from './assertions';

export const compose = (...components: string[]) => {
  return components.reduceRight<Component>((acc, current, index) => {
    console.log(current, index);
    return {
      name: `composed-${current}`,
      data: () => ({ child: isString(acc) ? acc : markRaw(acc) }),
      template: `<${current} :is="child" :is-composer-provider="${
        index < components.length - 1
      }"
      ><slot/></${current}>`
    };
  }, markRaw({ template: `<div><slot/></div>` }));
};
