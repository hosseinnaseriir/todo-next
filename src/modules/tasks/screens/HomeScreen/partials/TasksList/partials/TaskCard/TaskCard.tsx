import { Body1, Button, ListItem } from '@packages/design';
import { FunctionComponent } from 'react';
import { TaskCardProps } from './TaskCard.types';
import { useTaskCard } from './hooks';
import { useTranslation } from 'react-i18next';

export const TaskCard: FunctionComponent<TaskCardProps> = (props) => {
  const { t } = useTranslation();

  const {
    onCompleteTask,
    onDeleteTask,
    isCompleteTaskLoading,
    isDeleteTaskLoading,
  } = useTaskCard();
  return (
    <ListItem
      sx={{
        my: 1,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'flex-start',
        border: '1px solid',
        gap: 0.5,
        borderColor: (theme) =>
          props.completed
            ? theme.palette.success.dark
            : theme.palette.primary.main,
      }}
    >
      <Body1 sx={{ flex: 1 }}>{props.children}</Body1>
      <Button
        loading={isDeleteTaskLoading}
        onClick={() => onDeleteTask(props.id)}
        sx={{
          maxWidth: 100,
        }}
        variant='outlined'
      >
        {t('delete')}
      </Button>
      <Button
        loading={isCompleteTaskLoading}
        onClick={() => onCompleteTask(props.id, !props.completed)}
        sx={{
          maxWidth: 100,
        }}
        variant='outlined'
      >
        {t('done')}
      </Button>
    </ListItem>
  );
};
