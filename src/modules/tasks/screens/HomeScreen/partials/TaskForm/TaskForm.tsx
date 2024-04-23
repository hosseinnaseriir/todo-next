import { Box, TextField, H1, Button } from '@/packages/design';
import { FunctionComponent } from 'react';
import { TaskFormProps } from './TaskForm.types';
import { z } from 'zod';
import { useTaskForm } from './hooks';
import { useTranslation } from 'react-i18next';

const TASK_SCHEMA = z.object({
  description: z.string(),
});

type TaskSchemaType = z.infer<typeof TASK_SCHEMA>;

export const TaskForm: FunctionComponent<TaskFormProps> = (props) => {
  const { errors, register, onSubmitTaskCreation, isCreateTaskLoading } =
    useTaskForm();

  const { t } = useTranslation();

  return (
    <Box>
      <Box
        onSubmit={onSubmitTaskCreation}
        sx={{
          py: 2,
          display: 'grid',
          gap: 2,
        }}
        component='form'
      >
        <H1>{t('what_is_task')}</H1>
        <TextField
          helperText={errors.description?.message}
          error={!!errors.description?.message}
          {...register('description')}
          multiline
          rows={5}
        />
        <Button loading={isCreateTaskLoading} type='submit'>
          {t('create')}
        </Button>
      </Box>
    </Box>
  );
};
