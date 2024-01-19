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
import { Theme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
var meta = {
    title: 'page/AboutPage',
    component: AboutPage
};
export default meta;
export var About = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
export var About_DARK = __assign(__assign({}, About), { decorators: [ThemeDecorator(Theme.DARK)] });
//# sourceMappingURL=AboutPage.stories.js.map