import { Box, Button, useTranslations } from '@/packages';
import { ROUTES } from '@/packages/routes';
import Link from 'next/link';

const Home = async ({ params: { locale } }: any) => {
  const { options, t } = await useTranslations(locale, ['default']);
  return (
    <Box
      sx-={{
        my: 5,
      }}
    >
      <Link href={ROUTES.AUTH.REGISTER}>
        <Button>{t('start')}</Button>
      </Link>
    </Box>
  );
};

export default Home;
