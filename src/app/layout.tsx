import { ProvidersRegistery } from '@system';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Cookies from 'js-cookie';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo App.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!ProvidersRegistery) return null;
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ProvidersRegistery>{children}</ProvidersRegistery>
      </body>
    </html>
  );
}
