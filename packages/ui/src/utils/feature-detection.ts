import { isBoolean } from './assertions';

let isFlexboxGapSupported: boolean;

export const checkFlexGap = () => {
  if (isBoolean(isFlexboxGapSupported)) return isFlexboxGapSupported;

  // create flex container with row-gap set
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  isFlexboxGapSupported = flex.scrollHeight >= 1;
  flex.parentNode?.removeChild?.(flex);

  return isFlexboxGapSupported;
};
