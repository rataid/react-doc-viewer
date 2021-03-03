import React, { CSSProperties } from 'react';
import BMPRenderer from './plugins/bmp';
import HTMLRenderer from './plugins/html';
import ImageProxyRenderer from './plugins/image';
import JPGRenderer from './plugins/jpg';
import MSDocRenderer from './plugins/msdoc';
import MSGRenderer from './plugins/msg';
import PDFRenderer from './plugins/pdf';
import PNGRenderer from './plugins/png';
import TIFFRenderer from './plugins/tiff';
import TXTRenderer from './plugins/txt';
import { DocRenderer, IConfig, IDocument, ITheme } from './types';
export interface DocViewerProps {
    documents: IDocument[];
    className?: string;
    style?: CSSProperties;
    config?: IConfig;
    theme?: ITheme;
    pluginRenderers?: DocRenderer[];
    initialFileNo?: number;
}
declare const _default: React.NamedExoticComponent<DocViewerProps>;
export default _default;
export { DocViewerRenderers } from './plugins';
export * from './types';
export * from './utils/fileLoaders';
export { BMPRenderer, HTMLRenderer, ImageProxyRenderer, JPGRenderer, MSDocRenderer, MSGRenderer, PDFRenderer, PNGRenderer, TIFFRenderer, TXTRenderer, };
