import * as React from 'react';
import { InitialMenuItem } from 'piral';
import { Link } from 'react-router-dom';

function attach(element: React.ReactElement): InitialMenuItem {
  return {
    settings: {
      type: 'general',
    },
    component: () => element,
  };
}

export function setupMenu() {
  return [];
}
