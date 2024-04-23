import { FieldPath, FieldValues, UseFormSetError } from 'react-hook-form';
import { toast } from 'react-toastify';
import { PostAuthRegister422 } from '@api/models';
import { AxiosError } from 'axios';

export const formErrorHandler = <U extends FieldValues>({
  err,
  setError,
}: {
  err: PostAuthRegister422;
  setError: UseFormSetError<U>;
}) => {
  const errorObject = err as AxiosError<PostAuthRegister422>;
  const fieldErrors = errorObject.response?.data?.errors;
  switch (errorObject.response?.status) {
    case 405:
      return toast.error(
        errorObject.response.data.message ??
          'The server returned a "405 Method Not Allowed"!'
      );
    case 401:
      return toast.error(errorObject.response.data.message ?? 'Unauthorized!');
    case 422:
      toast.error(err.message);
      return Object.keys(fieldErrors ?? {})?.map((error) => {
        if (fieldErrors?.[error][0])
          setError(error as never, {
            message: fieldErrors[error][0],
          });
      });
      break;
    default:
      toast.error(err.message);
      break;
  }
};
