import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import ErrorBoundary from 'components/ErrorBoundary';
import App from 'components/App';
import 'styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ErrorBoundary>
        <HashRouter>
          <App />
        </HashRouter>
      </ErrorBoundary>
    </RecoilRoot>
  </React.StrictMode>,
);

reportWebVitals();
