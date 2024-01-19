import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
var meta = {
    title: 'widgets/Navbar',
    component: Navbar
};
export default meta;
export var Light = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
};
export var DARK = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
export var AuthNavbarLight = {
    decorators: [
        StoreDecorator({
            user: { authData: {} }
        })
    ]
};
export var AuthNavbarDark = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} }
        })
    ]
};
//# sourceMappingURL=Navbar.stories.js.map