import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n/i18n';
var container = document.getElementById('root');
var root = createRoot(container);
root.render(_jsx(StoreProvider, { children: _jsx(BrowserRouter, { children: _jsx(ErrorBoundary, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }) }) }));
//# sourceMappingURL=index.js.map