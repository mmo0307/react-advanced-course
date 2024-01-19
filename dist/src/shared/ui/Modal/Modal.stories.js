import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
var meta = {
    title: 'shared/Modal',
    component: Modal
};
export default meta;
export var Light = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        isOpen: true,
        lazy: true
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
export var DARK = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        isOpen: true,
        lazy: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
//# sourceMappingURL=Modal.stories.js.map