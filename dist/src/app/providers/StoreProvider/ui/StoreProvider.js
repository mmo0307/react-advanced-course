import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
var StoreProvider = function (_a) {
    var children = _a.children, initialState = _a.initialState, asyncReducers = _a.asyncReducers;
    var navigate = useNavigate();
    var store = createReduxStore(initialState, asyncReducers, navigate);
    return _jsx(Provider, { store: store, children: children });
};
export { StoreProvider };
//# sourceMappingURL=StoreProvider.js.map