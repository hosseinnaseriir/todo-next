'use client';
import {
  Container,
  TextField,
  H1,
  Box,
  Button,
  Caption,
} from '@/packages/design';
import { useRegisterScreen } from './hooks';
import Link from 'next/link';
import { ROUTES } from '@/packages/routes';
import { useTranslation } from 'react-i18next';

export const RegisterScreen = () => {
  const { t } = useTranslation();
  const { register, errors, onSubmitRegistration, isRegisterLoading } =
    useRegisterScreen();

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
        {t('register_now')}
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
          helperText={errors.name?.message}
          error={!!errors.name?.message}
          {...register('name')}
          label={t('name')}
        />
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
        <TextField
          helperText={errors.password_confirmation?.message}
          error={!!errors.password_confirmation?.message}
          {...register('password_confirmation')}
          label={t('repeat_password')}
        />
        <Button loading={isRegisterLoading} type='submit'>
          {t('register')}
        </Button>
        <Caption>
          {t('already_have_account')}{' '}
          <Link href={ROUTES.AUTH.LOGIN}>{t('login_now')}</Link>
        </Caption>
      </Box>
    </Container>
  );
};
