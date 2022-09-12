import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18n from 'Translation/Config';

import App from './App';


ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root'),
);