import { RegisterScreen } from '@/modules';
import { useTranslations } from '@configs';
import { TranslationsProvider } from '@system';

const RegisterPage = async ({ params: { locale } }: any) => {
  const { options } = await useTranslations(locale, [
    'default',
    'authentication',
  ]);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={options.ns as Array<string>}
    >
      <RegisterScreen />
    </TranslationsProvider>
  );
};

export default RegisterPage;
