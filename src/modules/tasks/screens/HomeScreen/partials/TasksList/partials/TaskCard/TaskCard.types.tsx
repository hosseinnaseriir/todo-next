import { ReactNode } from 'react';

export type TaskCardProps = {
  children: ReactNode;
  completed: Boolean;
  created_at?: string;
  id: string;
};
