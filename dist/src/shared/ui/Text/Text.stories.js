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
import { Text, TextTheme } from './Text';
var meta = {
    title: 'shared/Text',
    component: Text
};
export default meta;
export var Title = {
    args: {
        title: 'Title'
    }
};
export var Texts = {
    args: {
        text: 'Texts'
    }
};
export var TitleError = {
    args: __assign(__assign({}, Title.args), { theme: TextTheme.ERROR })
};
export var TitlePrimary = {
    args: __assign(__assign({}, Title.args), { theme: TextTheme.PRIMARY })
};
export var TextsError = {
    args: __assign(__assign({}, Texts.args), { theme: TextTheme.ERROR })
};
export var TextsPrimary = {
    args: __assign(__assign({}, Texts.args), { theme: TextTheme.PRIMARY })
};
//# sourceMappingURL=Text.stories.js.map