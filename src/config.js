import * as addonReducers from './reducers';

export function applyConfig(config) {
  return {
    ...config,
    addonReducers: {
      ...config.addonReducers,
      ...addonReducers,
    },
  };
}
