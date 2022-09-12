import React from 'react'
import { useTranslation } from 'react-i18next';

interface TransText <C extends React.ElementType> {
  textKey: string;
  as?: C;
}

const Text = ({ textKey, as }: TransText) => {
  const { t, i18n } = useTranslation();
  const Component = as || "span";

  return <Component>{t(textKey)}</Component>
}

export default Text