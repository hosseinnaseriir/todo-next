import { ReactNode } from 'react';

export type TranslationsProviderProps = {
  children: ReactNode;
  locale: string;
  namespaces: Array<string>;
};
