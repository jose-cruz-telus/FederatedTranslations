import React, { useContext } from 'react'
import { I18nContext } from 'react-i18next';
import ChangeLanguage from './ChangeLang';

console.log('I18nContext: ', I18nContext)

const Content = () => {
  const { i18n: { t } } = useContext(I18nContext);

  console.log('t: ', t);

  return (
    <div>
      <h1>Typescript</h1>
      <ChangeLanguage />
      <h2>{t("Translations")}</h2>
      <p>{t('hw')}</p>
    </div>
  )
}

export default Content;
