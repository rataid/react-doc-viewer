"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var fileLoaders_1 = require("../../utils/fileLoaders");
var TXTRenderer = function (_a) {
    var currentDocument = _a.mainState.currentDocument;
    return (react_1.default.createElement(Container, { id: "txt-renderer" },
        react_1.default.createElement(TextWrapper, { id: "txt-wrapper" }, currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.fileData)));
};
exports.default = TXTRenderer;
TXTRenderer.fileTypes = ['txt', 'text/plain'];
TXTRenderer.weight = 0;
TXTRenderer.fileLoader = fileLoaders_1.textFileLoader;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n"])));
var TextWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tflex: 1;\n\tpadding: 30px;\n"], ["\n\tflex: 1;\n\tpadding: 30px;\n"])));
var templateObject_1, templateObject_2;
