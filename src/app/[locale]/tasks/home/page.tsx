import { HomeScreen } from '@/modules/tasks';
import { TranslationsProvider, useTranslations } from '@/packages';

const HomePage = async ({ params: { locale } }: any) => {
  const { options } = await useTranslations(locale, ['default']);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={options.ns as Array<string>}
    >
      <HomeScreen />
    </TranslationsProvider>
  );
};

export default HomePage;
