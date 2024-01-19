import { jsx as _jsx } from "react/jsx-runtime";
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { i18nForTest } from 'shared/config/i18n/i18nForTests';
var renderWithTranslation = function (component) {
    return render(_jsx(I18nextProvider, { i18n: i18nForTest, children: component }));
};
export { renderWithTranslation };
//# sourceMappingURL=renderWithTranslation.js.map