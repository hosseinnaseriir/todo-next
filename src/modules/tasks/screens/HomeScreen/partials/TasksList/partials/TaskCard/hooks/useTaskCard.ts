import { formErrorHandler } from '@/packages/api';
import {
  useDeleteTasksId,
  useGetTasks,
  usePatchTasksId,
} from '@/packages/api/endpoints/tasks/tasks';
import { toast } from 'react-toastify';

export const useTaskCard = () => {
  const { refetch: refetchTasks } = useGetTasks({
    query: {
      enabled: false,
    },
  });
  const { mutate: completeTaskMutate, isPending: isCompleteTaskLoading } =
    usePatchTasksId({
      mutation: {
        onSuccess: () => {
          refetchTasks();
          toast.info('task Updated!');
        },
        onError: (err) => {},
      },
    });
  const { mutate: deleteTaskMutate, isPending: isDeleteTaskLoading } =
    useDeleteTasksId({
      mutation: {
        onSuccess: () => {
          refetchTasks();
          toast.info('task Deleted!');
        },
        onError: (err) => {
          formErrorHandler({ err });
        },
      },
    });

  const onCompleteTask = (id: string, completed: boolean) =>
    completeTaskMutate({
      id,
      data: {
        completed,
      },
    });
  const onDeleteTask = (id: string) =>
    deleteTaskMutate({
      id,
    });

  return {
    onCompleteTask,
    onDeleteTask,
    isCompleteTaskLoading,
    isDeleteTaskLoading,
  };
};
