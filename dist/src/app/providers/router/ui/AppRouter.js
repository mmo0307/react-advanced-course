import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { Loader } from 'shared/ui/Loader/Loader';
function AppRouter() {
    return (_jsx(Suspense, { fallback: _jsx(Loader, {}), children: _jsx(Routes, { children: Object.values(routeConfig).map(function (_a) {
                var element = _a.element, path = _a.path;
                return (_jsx(Route, { element: _jsx("div", { className: 'page-wrapper', children: element }), path: path }, path));
            }) }) }));
}
export { AppRouter };
//# sourceMappingURL=AppRouter.js.map