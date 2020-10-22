import React from 'react';
import { PiletApi } from 'foodies';

function useSharedData(name) {
    const [state, setState] = React.useState(() => PiletApi.getData(name));
    React.useEffect(() => {
      const handler = (e) => {
        if (e.name === name) {
          setState(e.value);
        }
      };
      PiletApi.on('store-data', handler);
      return PiletApi.off('store-data', handler);
    }, []);
    return state;
  }

