import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
var Condition = function (_a) {
    var condition = _a.if, children = _a.children;
    if (condition) {
        return _jsx(_Fragment, { children: children });
    }
    return null;
};
var View = {
    Condition: Condition
};
export { View };
//# sourceMappingURL=View.js.map