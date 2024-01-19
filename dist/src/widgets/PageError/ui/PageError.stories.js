import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from 'widgets/PageError';
var meta = {
    title: 'widgets/PageError',
    component: PageError
};
export default meta;
export var Light = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
export var DARK = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
//# sourceMappingURL=PageError.stories.js.map