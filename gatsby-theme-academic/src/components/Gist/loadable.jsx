import Loadable from '@loadable/component';

const LoadableGist = Loadable(() => import('./index'));
export default LoadableGist;
