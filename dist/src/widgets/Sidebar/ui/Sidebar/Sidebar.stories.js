import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from 'widgets/Sidebar';
var meta = {
    title: 'widgets/Sidebar',
    component: Sidebar
};
export default meta;
export var Light = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
export var DARK = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
//# sourceMappingURL=Sidebar.stories.js.map