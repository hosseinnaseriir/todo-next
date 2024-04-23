import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormEvent } from 'react';
import { formErrorHandler, usePostAuthLogin } from '@/packages/api';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/packages/routes';
import { BASE_INSTANCE } from '@/packages/api/configs/instances/base_instance';

const LOGIN_SCHEMA = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginSchemaType = z.infer<typeof LOGIN_SCHEMA>;

export const useLoginScreen = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LOGIN_SCHEMA),
  });

  const { mutate: authLoginMutate, isPending: isLoginLoading } =
    usePostAuthLogin({
      mutation: {
        onSuccess: (res) => {
          const accessToken = res.data.token ?? '';
          Cookies.set('accessToken', accessToken);
          BASE_INSTANCE.defaults.headers['Authorization'] =
            `Bearer ${accessToken}`;
          router.push(ROUTES.TASKS.HOME);
        },
        onError: (err) => {
          formErrorHandler({
            err,
            setError,
          });
        },
      },
    });

  const onSubmitRegistration = (_event: FormEvent) => {
    return handleSubmit((data) => {
      authLoginMutate({
        data: {
          ...data,
        },
      });
    })(_event);
  };

  return {
    isLoginLoading,
    register,
    errors,
    onSubmitRegistration,
  };
};
