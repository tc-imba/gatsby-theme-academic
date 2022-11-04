import React from 'react';
import {useSiteMetadata, useTheme} from '@/utils/hooks';
import Utils from '@/utils/pageUtils';


const Gist = (props) => {
  const { id, file } = props;
  const [themeMode, setThemeMode] = useTheme();
  const siteMetadata = useSiteMetadata();

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
    const darkCssUrl = Utils.generateFullUrl(siteMetadata, 'github-gist-dark.css');
    const darkCssScript = themeMode !== 'dark' ? '' : `
      var styleNode = document.createElement("link");
      styleNode.setAttribute("rel", "stylesheet");
      styleNode.setAttribute("href", "${darkCssUrl}");
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
