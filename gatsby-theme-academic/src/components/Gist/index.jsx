import React from 'react';
import {useTheme} from '@/utils/hooks';

/*
class Gist extends React.PureComponent {
  componentDidMount() {
    this._updateIframeContent();
  }

  componentDidUpdate(_prevProps, _prevState) {
    this._updateIframeContent();
  }

  _defineUrl() {
    const { id, file } = this.props;

    const fileArg = file ? `?file=${file}` : '';

    return `https://gist.github.com/${id}.js${fileArg}`;
  }

  _updateIframeContent() {
    const { id, file, styles } = this.props;
    const iframe = this.iframeNode;

    let doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;
    const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;

    const gistLink = this._defineUrl();
    const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
    const onloadScript = `<script>function init(){
      parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px';
      var styleNode = document.createElement("style");
      var styleContent = document.createTextNode(\`${styles || ''}\`);
      styleNode.appendChild(styleContent);
      document.body.appendChild(styleNode);
    }</script>`;
    const headStyles = '<style>*{font-size:12px;}</style>';
    const resizeScript = 'onload="init()"';
    const iframeHtml = `<html><head><base target="_parent">${headStyles}</head><body ${resizeScript}>${gistScript}${onloadScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }

  render() {
    const { id, file } = this.props;
    const uniqueId = file ? `gist-${id}-${file}` : `gist-${id}`;

    return (
      <iframe
        title={uniqueId}
        ref={(n) => {
          this.iframeNode = n;
        }}
        width="100%"
        frameBorder={0}
        id={uniqueId}
      />
    );
  }
}

*/

const Gist = (props) => {
  const { id, file } = props;
  const [themeMode, setThemeMode] = useTheme();

  const uniqueId = file ? `gist-${id}-${file}` : `gist-${id}`;
  const iframeNode = React.useRef(null);

  const defineUrl = () => {
    const fileArg = file ? `?file=${file}` : '';
    return `https://gist.github.com/${id}.js${fileArg}`;
  };

  const updateIframeContent = () => {
    const iframe = iframeNode.current;

    let doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;
    const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;

    const gistLink = defineUrl();
    const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
    const darkCssScript = themeMode !== 'dark' ? '' : `
      var styleNode = document.createElement("link");
      styleNode.setAttribute("rel", "stylesheet");
      styleNode.setAttribute("href", "/github-gist-dark.css");
      document.body.appendChild(styleNode);
    `;
    const onloadScript = `<script>function init(){
      parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px';
      ${darkCssScript}
    }</script>`;
    const headStyles = '<style>*{font-size:12px;} body{margin: 0;} </style>';
    const resizeScript = 'onload="init()"';
    const iframeHtml = `<html><head><base target="_parent">${headStyles}</head><body ${resizeScript}>${gistScript}${onloadScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  };

  React.useEffect(updateIframeContent, [themeMode]);

  return (
    <iframe
      title={uniqueId}
      ref={iframeNode}
      width="100%"
      frameBorder={0}
      id={uniqueId}
    />
  );
};

export default Gist;
