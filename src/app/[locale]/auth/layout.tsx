import { AuthenticationLayout } from '@/modules/authentication';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticationLayout>{children}</AuthenticationLayout>;
}
