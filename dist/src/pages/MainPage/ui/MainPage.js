import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
function MainPage() {
    var t = useTranslation().t;
    return _jsx("div", { children: t('Главная страница') });
}
export default MainPage;
//# sourceMappingURL=MainPage.js.map