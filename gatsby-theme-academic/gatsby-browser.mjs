import {
  wrapPageElement as _wrapPageElement,
} from './src/utils/providers';

export const wrapPageElement = _wrapPageElement;

// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => {
  console.log('update found, reload the page');
  window.location.reload();
};
