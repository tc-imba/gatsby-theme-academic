import {
  wrapPageElement as _wrapPageElement,
} from './src/utils/providers';

import 'rsuite/dist/rsuite.min.css';
import './src/styles/global.less';
import './src/styles/github-markdown.less';
// import './src/styles/github-gist.less';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/command-line/prism-command-line.css';
import './src/styles/prismjs.less';
import 'typeface-jetbrains-mono';
import 'katex/dist/katex.min.css';

export const wrapPageElement = _wrapPageElement;
