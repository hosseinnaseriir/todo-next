import { useGetTasks } from '@/packages/api/endpoints/tasks/tasks';
import { Box, List, Skeleton } from '@packages/design';
import { TaskCard } from './partials';

export const TasksList = () => {
  const { data: taksList, isLoading: isTaksLoading } = useGetTasks();

  if (isTaksLoading)
    return (
      <Box
        sx={{
          display: 'grid',
          gap: 1,
        }}
      >
        <Skeleton variant='rectangular' width='100%' height={100} />
        <Skeleton variant='rectangular' width='100%' height={100} />
      </Box>
    );

  return (
    <List sx={{ my: 2 }}>
      {taksList?.data?.map((task) => (
        <TaskCard
          id={task.id as string}
          key={task.id}
          created_at={task.created_at}
          completed={!!task.completed}
        >
          {task.description}
        </TaskCard>
      ))}
    </List>
  );
};
