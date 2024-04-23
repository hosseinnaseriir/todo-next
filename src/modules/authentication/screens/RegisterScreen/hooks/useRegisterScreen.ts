'use client';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormEvent } from 'react';
import { formErrorHandler, usePostAuthRegister } from '@/packages/api';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/packages/routes';

const REGISTER_SCHEMA = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  password_confirmation: z.string(),
});

type RegisterSchemaType = z.infer<typeof REGISTER_SCHEMA>;

export const useRegisterScreen = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(REGISTER_SCHEMA),
  });

  const { mutate: authRegisterMutate, isPending: isRegisterLoading } =
    usePostAuthRegister({
      mutation: {
        onSuccess: (res) => {
          if (res.status === 201) {
            router.push(ROUTES.AUTH.LOGIN);
          }
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
      authRegisterMutate({
        data: {
          ...data,
        },
      });
    })(_event);
  };

  return {
    isRegisterLoading,
    register,
    errors,
    onSubmitRegistration,
  };
};
