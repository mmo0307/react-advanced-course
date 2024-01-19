import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
var TranslationDecorator = function (StoryComponent) { return (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(I18nextProvider, { i18n: i18n, children: _jsx(StoryComponent, {}) }) })); };
export { TranslationDecorator };
//# sourceMappingURL=TranslationDecorator.js.map