"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyRenderer = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var actions_1 = require("../state/actions");
var useDocumentLoader_1 = require("../utils/useDocumentLoader");
var useWindowSize_1 = require("../utils/useWindowSize");
var common_1 = require("./common");
var icons_1 = require("./icons");
exports.ProxyRenderer = function () {
    var _a, _b;
    var _c = useDocumentLoader_1.useDocumentLoader(), state = _c.state, dispatch = _c.dispatch, CurrentRenderer = _c.CurrentRenderer;
    var documents = state.documents, documentLoading = state.documentLoading, currentDocument = state.currentDocument, config = state.config;
    var size = useWindowSize_1.useWindowSize();
    var containerRef = react_1.useCallback(function (node) {
        node && dispatch(actions_1.setRendererRect(node === null || node === void 0 ? void 0 : node.getBoundingClientRect()));
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size]);
    var overrideNoRender = (_b = (_a = config === null || config === void 0 ? void 0 : config.noRenderer) === null || _a === void 0 ? void 0 : _a.overrideComponent) === null || _b === void 0 ? void 0 : _b.call(_a, state);
    var Contents = function () {
        if (!documents.length) {
            return react_1.default.createElement("div", { id: "no-documents" });
        }
        else if (documentLoading) {
            return (react_1.default.createElement(LoadingContainer, { id: "loading-renderer", "data-testid": "loading-renderer" },
                react_1.default.createElement(LoadingIconContainer, null,
                    react_1.default.createElement(icons_1.LoadingIcon, { color: "#444", size: 40 }))));
        }
        else {
            if (CurrentRenderer) {
                return react_1.default.createElement(CurrentRenderer, { mainState: state });
            }
            else if (CurrentRenderer === undefined) {
                return null;
            }
            else {
                if (overrideNoRender) {
                    return overrideNoRender;
                }
                return (react_1.default.createElement("div", { id: "no-renderer", "data-testid": "no-renderer" },
                    "No Renderer for file type ", currentDocument === null || currentDocument === void 0 ? void 0 :
                    currentDocument.fileType,
                    react_1.default.createElement(DownloadButton, { id: "no-renderer-download", href: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri, download: currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.uri }, "Download File")));
            }
        }
    };
    return (react_1.default.createElement(Container, { id: "proxy-renderer", ref: containerRef },
        react_1.default.createElement(Contents, null)));
};
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex: 1;\n\toverflow-y: auto;\n"], ["\n\tdisplay: flex;\n\tflex: 1;\n\toverflow-y: auto;\n"])));
var LoadingContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex: 1;\n\theight: 75px;\n\talign-items: center;\n\tjustify-content: center;\n"], ["\n\tdisplay: flex;\n\tflex: 1;\n\theight: 75px;\n\talign-items: center;\n\tjustify-content: center;\n"])));
var spinAnim = styled_components_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var LoadingIconContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tanimation-name: ", ";\n\tanimation-duration: 4s;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n"], ["\n\tanimation-name: ", ";\n\tanimation-duration: 4s;\n\tanimation-timing-function: linear;\n\tanimation-iteration-count: infinite;\n"])), spinAnim);
var DownloadButton = styled_components_1.default(common_1.LinkButton)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\twidth: 130px;\n\theight: 30px;\n\tbackground-color: ", ";\n\t@media (max-width: 768px) {\n\t\twidth: 125px;\n\t\theight: 25px;\n\t}\n"], ["\n\twidth: 130px;\n\theight: 30px;\n\tbackground-color: ", ";\n\t@media (max-width: 768px) {\n\t\twidth: 125px;\n\t\theight: 25px;\n\t}\n"])), function (props) { return props.theme.primary; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
