import * as React from 'react'
import { useTranslation } from 'react-i18next';

const ChangeLang = () => {
  const { t, i18n } = useTranslation();

  const setLang = (newLang: string) => {
    i18n.changeLanguage(newLang);
  }

  return (
    <div>
      <button onClick={() => setLang('en')}>EN</button>
      <button onClick={() => setLang('es')}>ES</button>
      current lang: {i18n.language}
    </div>
  )
}

export default ChangeLang;
