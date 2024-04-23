'use client';
import { Container, Box } from '@/packages/design';
import { UserProfile, TaskForm, TasksList } from './partials';

export const HomeScreen = () => {
  return (
    <Container
      sx={{
        py: 4,
      }}
    >
      <Box>
        <UserProfile />
        <TaskForm />
        <TasksList />
      </Box>
    </Container>
  );
};
