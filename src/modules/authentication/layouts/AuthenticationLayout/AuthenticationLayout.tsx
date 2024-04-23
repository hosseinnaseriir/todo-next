'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/packages/routes';

export function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const accessToken = Cookies.get('accessToken');

  React.useEffect(() => {
    if (accessToken) router.replace(ROUTES.TASKS.HOME);
  }, [accessToken, router]);
  return <>{children}</>;
}
