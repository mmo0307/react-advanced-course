import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';
var meta = {
    title: 'feature/LoginForm',
    component: LoginForm
};
export default meta;
export var Template = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: '123' }
        })
    ]
};
export var WithError = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: 'asd', error: 'ERROR' }
        })
    ]
};
export var Loading = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true }
        })
    ]
};
//# sourceMappingURL=LoginForm.stories.js.map