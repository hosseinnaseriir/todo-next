'use client';
import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {
  NextAppDirEmotionCacheProvider,
  theme,
  ThemeProvider,
} from '@packages/design';
import { ROUTES } from '@routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ProvidersRegisteryProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

export const ProvidersRegistery: React.FC<ProvidersRegisteryProps> = ({
  children,
}) => {
  const router = useRouter();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = React.useState<'dark' | 'light'>('light');
  const darkModeCookie = Cookies.get('dark');
  const accessToken = Cookies.get('accessToken');

  React.useEffect(() => {
    if (prefersDarkMode || darkModeCookie) setThemeMode('dark');
  }, [prefersDarkMode, darkModeCookie]);

  React.useEffect(() => {
    if (!accessToken) router.replace(ROUTES.AUTH.REGISTER);
  }, [accessToken, router]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme(themeMode)}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
