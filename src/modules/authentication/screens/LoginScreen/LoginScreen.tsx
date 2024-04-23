'use client';
import {
  Container,
  TextField,
  H1,
  Box,
  Button,
  Caption,
} from '@/packages/design';
import { useLoginScreen } from './hooks';
import Link from 'next/link';
import { ROUTES } from '@/packages/routes';
import { useTranslation } from 'react-i18next';

export const LoginScreen = () => {
  const { register, errors, onSubmitRegistration, isLoginLoading } =
    useLoginScreen();
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        py: 4,
      }}
    >
      <H1
        sx={{
          py: 4,
        }}
      >
        {t('login_now')}
      </H1>
      <Box
        onSubmit={onSubmitRegistration}
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
        }}
      >
        <TextField
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          {...register('email')}
          label={t('email')}
        />
        <TextField
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          {...register('password')}
          label={t('password')}
        />
        <Button loading={isLoginLoading} type='submit'>
          {t('login')}
        </Button>
        <Caption>
          {t('dont_have_account')}
          <Link href={ROUTES.AUTH.REGISTER}>{t('register_now')}</Link>
        </Caption>
      </Box>
    </Container>
  );
};
