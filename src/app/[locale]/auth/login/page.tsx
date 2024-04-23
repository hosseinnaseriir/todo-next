import { LoginScreen } from '@/modules';
import { useTranslations } from '@configs';
import { TranslationsProvider } from '@system';

const LoginPage = async ({ params: { locale } }: any) => {
  const { options } = await useTranslations(locale, [
    'default',
    'authentication',
  ]);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={options.ns as Array<string>}
    >
      <LoginScreen />
    </TranslationsProvider>
  );
};

export default LoginPage;
