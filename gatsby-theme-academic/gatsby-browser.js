import {
  wrapPageElement as _wrapPageElement,
} from './src/utils/providers';

export const wrapPageElement = _wrapPageElement;

export function onServiceWorkerUpdateReady() {
  window.location.reload(true);
};
