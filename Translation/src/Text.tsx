import React from 'react'
import { useTranslation } from 'react-i18next';

interface TransText {
  textKey: string;
}

const Text = ({ textKey }: TransText) => {
  const { t, i18n } = useTranslation();

  return (
    <div>{t(textKey)}</div>
  )
}

export default Text