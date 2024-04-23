import { formErrorHandler } from '@/packages/api';
import { FormEvent } from 'react';
import {
  useGetTasks,
  usePostTasks,
} from '@/packages/api/endpoints/tasks/tasks';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

const TASK_SCHEMA = z.object({
  description: z.string(),
});

type TaskSchemaType = z.infer<typeof TASK_SCHEMA>;

export const useTaskForm = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<TaskSchemaType>({
    resolver: zodResolver(TASK_SCHEMA),
  });
  const { refetch: refetchTasks } = useGetTasks({
    query: {
      enabled: false,
    },
  });
  const { mutate: createTaskMutate, isPending: isCreateTaskLoading } =
    usePostTasks({
      mutation: {
        onSuccess: () => {
          toast.success('Task Created Successfully!');
          refetchTasks();
        },
        onError: (err) => {
          formErrorHandler({
            err,
            setError,
          });
        },
      },
    });

  const onSubmitTaskCreation = (_event: FormEvent) => {
    return handleSubmit((data) => {
      createTaskMutate({
        data: {
          ...data,
        },
      });
    })(_event);
  };

  return { onSubmitTaskCreation, register, errors, isCreateTaskLoading };
};
