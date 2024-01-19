var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export function classNames(cls, mods, additional) {
    return __spreadArray(__spreadArray([
        cls
    ], Object.entries(mods)
        .filter(function (_a) {
        var value = _a[1];
        return !!value;
    })
        .map(function (_a) {
        var key = _a[0];
        return key;
    }), true), additional.filter(Boolean), true).join(' ');
}
//# sourceMappingURL=classNames.js.map