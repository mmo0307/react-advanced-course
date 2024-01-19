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
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { AppLink, AppLinkThemes } from './AppLink';
var meta = {
    title: 'shared/AppLink',
    component: AppLink
};
export default meta;
export var Template = {
    args: {
        children: 'Text',
        theme: AppLinkThemes.PRIMARY,
        to: '/about'
    },
    decorators: [RouterDecorator]
};
export var SECONDARY = __assign(__assign({}, Template), { args: __assign(__assign({}, Template.args), { theme: AppLinkThemes.SECONDARY }) });
//# sourceMappingURL=AppLink.stories.js.map