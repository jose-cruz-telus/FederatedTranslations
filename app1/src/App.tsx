import * as React from 'react';
import { useTranslation } from 'react-i18next';
const RemoteButton = React.lazy(() => import('app2/Button'));
const TranslationSetter = React.lazy(() => import('Translation/ChangeLang'));

const App = () => {
  const { t } = useTranslation();

  return (
  <div>
    <h1>Typescript</h1>
    <h2>{t('hw')}</h2>
    <h2>{t("App1")}</h2>
    <React.Suspense fallback="Loading Button">
      <TranslationSetter />
      <RemoteButton text="From APP1" />
    </React.Suspense>
  </div>
)};

export default App;
