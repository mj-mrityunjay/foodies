import * as React from 'react';
import { InitialMenuItem } from 'piral';

function attach(element: React.ReactElement): InitialMenuItem {
  return {
    settings: {
      type: 'footer',
    },
    component: () => element,
  };
}

export function setupFooter() {
  return [
 
  ];
}
