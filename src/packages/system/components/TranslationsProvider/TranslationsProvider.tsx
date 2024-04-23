'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { I18nextProvider, I18nextProviderProps } from 'react-i18next';
import { useTranslations as UseTranslations } from '@configs';

import type { TranslationsProviderProps } from './types';

let i18n: I18nextProviderProps['i18n'];

export const TranslationsProvider: FC<TranslationsProviderProps> = ({
  children,
  locale,
  namespaces,
}) => {
  const [instance, setInstance] = useState(i18n);

  useEffect(() => {
    const init = async () => {
      if (!i18n) {
        const newInstance = (await UseTranslations(
          locale,
          namespaces
        )) as I18nextProviderProps['i18n'];
        i18n = newInstance;
        setInstance(newInstance);
      } else {
        if (i18n.language !== locale) {
          i18n.changeLanguage(locale);
        }
      }
    };

    init();
  }, [locale, namespaces]);

  if (!instance) {
    return null;
  }

  return (
    <I18nextProvider i18n={instance} defaultNS={namespaces[0]}>
      {children}
    </I18nextProvider>
  );
};
