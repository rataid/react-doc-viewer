"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var image_1 = __importDefault(require("../image"));
var StyledImageRenderer = styled_components_1.default(image_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 100%;\n\tbackground-color: transparent;\n\tbackground-size: 20px 20px;\n\tbackground-position: 0 0, 0 10px, 10px -10px, -10px 0px;\n"], ["\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 100%;\n\tbackground-color: transparent;\n\tbackground-size: 20px 20px;\n\tbackground-position: 0 0, 0 10px, 10px -10px, -10px 0px;\n"])));
var PNGRenderer = function (props) { return react_1.default.createElement(StyledImageRenderer, __assign({}, props)); };
PNGRenderer.fileTypes = ['png', 'image/png'];
PNGRenderer.weight = 0;
exports.default = PNGRenderer;
var templateObject_1;
