import * as React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import ChangeLanguage from './ChangeLang';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
       <h1>Typescript</h1>
      <ChangeLanguage />
      {/* <Trans/> */}
      <h2>{t("Translations")}</h2>
      <p>{t('hw')}</p>
    </div>
  )
};

export default App;
