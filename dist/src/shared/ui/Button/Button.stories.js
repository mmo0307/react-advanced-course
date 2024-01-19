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
import { Button, ButtonSize, ButtonThemes } from './Button';
var meta = {
    title: 'shared/Button',
    component: Button
};
export default meta;
export var Template = {
    args: {
        children: 'Text'
    }
};
export var Clear = {
    args: __assign(__assign({}, Template.args), { theme: ButtonThemes.CLEAR })
};
export var ClearInverted = {
    args: __assign(__assign({}, Template.args), { theme: ButtonThemes.CLEAR_INVERTED })
};
export var Outline = {
    args: __assign(__assign({}, Template.args), { theme: ButtonThemes.OUTLINE })
};
export var Background = {
    args: __assign(__assign({}, Template.args), { theme: ButtonThemes.BACKGROUND })
};
export var BackgroundInverted = {
    args: __assign(__assign({}, Template.args), { theme: ButtonThemes.BACKGROUND_INVERTED })
};
export var Square = {
    args: __assign(__assign({}, Template.args), { children: '>>', theme: ButtonThemes.BACKGROUND, square: true })
};
export var ClearSizeM = {
    args: __assign(__assign({}, Clear.args), { size: ButtonSize.M })
};
export var ClearSizeL = {
    args: __assign(__assign({}, Clear.args), { size: ButtonSize.L })
};
export var ClearSizeXl = {
    args: __assign(__assign({}, Clear.args), { size: ButtonSize.XL })
};
export var ClearInvertedSizeM = {
    args: __assign(__assign({}, ClearInverted.args), { size: ButtonSize.M })
};
export var ClearInvertedSizeL = {
    args: __assign(__assign({}, ClearInverted.args), { size: ButtonSize.L })
};
export var ClearInvertedSizeXl = {
    args: __assign(__assign({}, ClearInverted.args), { size: ButtonSize.XL })
};
export var OutlineSizeM = {
    args: __assign(__assign({}, Outline.args), { size: ButtonSize.M })
};
export var OutlineSizeL = {
    args: __assign(__assign({}, Outline.args), { size: ButtonSize.L })
};
export var OutlineSizeXl = {
    args: __assign(__assign({}, Outline.args), { size: ButtonSize.XL })
};
export var BackgroundSizeM = {
    args: __assign(__assign({}, Background.args), { size: ButtonSize.M })
};
export var BackgroundSizeL = {
    args: __assign(__assign({}, Background.args), { size: ButtonSize.L })
};
export var BackgroundSizeXl = {
    args: __assign(__assign({}, Background.args), { size: ButtonSize.XL })
};
export var BackgroundInvertedSizeM = {
    args: __assign(__assign({}, BackgroundInverted.args), { size: ButtonSize.M })
};
export var BackgroundInvertedSizeL = {
    args: __assign(__assign({}, BackgroundInverted.args), { size: ButtonSize.L })
};
export var BackgroundInvertedSizeXl = {
    args: __assign(__assign({}, BackgroundInverted.args), { size: ButtonSize.XL })
};
export var SquareSizeM = {
    args: __assign(__assign({}, Square.args), { size: ButtonSize.M })
};
export var SquareSizeL = {
    args: __assign(__assign({}, Square.args), { size: ButtonSize.L })
};
export var SquareSizeXl = {
    args: __assign(__assign({}, Square.args), { size: ButtonSize.XL })
};
//# sourceMappingURL=Button.stories.js.map