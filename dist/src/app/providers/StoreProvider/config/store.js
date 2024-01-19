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
import { configureStore } from '@reduxjs/toolkit';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { userReducer } from 'entities/User';
import { loginReducer } from 'feature/AuthByUserName';
function createReduxStore(initialState, asyncReducers, navigate) {
    var reducer = __assign(__assign({}, asyncReducers), { user: userReducer, loginForm: loginReducer });
    var reducerMaganer = createReducerManager(reducer);
    var store = configureStore({
        reducer: reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
    // @ts-ignore
    store.reducerManager = reducerMaganer;
    return store;
}
export { createReduxStore };
//# sourceMappingURL=store.js.map