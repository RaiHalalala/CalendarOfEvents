import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import ErrorBoundary from 'components/ErrorBoundary';
import App from 'components/App';
import 'styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ErrorBoundary>
        <HashRouter>
          <React.Suspense fallback={<div>Loading...</div>}>
            <App />
          </React.Suspense>
        </HashRouter>
      </ErrorBoundary>
    </RecoilRoot>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
