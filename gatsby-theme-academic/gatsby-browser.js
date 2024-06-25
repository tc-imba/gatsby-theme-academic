import {
  wrapPageElement as _wrapPageElement,
} from './src/utils/providers';

export const wrapPageElement = _wrapPageElement;

// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
  console.log('update found, reload the page');
};
