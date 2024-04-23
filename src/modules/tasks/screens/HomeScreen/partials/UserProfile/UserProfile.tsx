import { useGetAuthUser } from '@/packages/api';
import { Box, Caption, Body1, Skeleton, Button } from '@/packages/design';
import { FunctionComponent, useCallback, useEffect } from 'react';
import { UserProfileProps } from './UserProfile.types';
import Pusher from 'pusher-js';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/packages/routes';

export const UserProfile: FunctionComponent<UserProfileProps> = (props) => {
  const { data: userData, isLoading: isUserDataLoading } = useGetAuthUser();
  const { t } = useTranslation();
  const router = useRouter();
  useEffect(() => {
    if (userData?.data) {
      const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_URL ?? '', {
        cluster: 'ap3',
        channelAuthorization: {
          customHandler: (
            { socketId, channelName },
            callback: (error: any, data: any) => void
          ) => {
            return fetch(
              process.env.NEXT_PUBLIC_BROADCASTING_URL ?? '',
              {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${Cookies.get('accessToken')}`,
                  Accept: 'application/json',
                },
                body: JSON.stringify({
                  socket_id: socketId,
                  channel_name: channelName,
                }),
              }
            )
              .then((response) => response.json())
              .then((data) => callback(false, data))
              .catch((err) => callback(true, err));
          },
        },
      });

      pusher.connection.bind('connected', function () {
        console.log('Connected!');
      });
      const channel = pusher.subscribe(`private-updates-${userData?.data.id}`);
      channel.bind('taskCreated', () => {
        console.log('New task created:');
      });

      channel.bind('taskUpdated', () => {
        console.log('Task status updated:');
      });

      channel.bind('taskRemoved', () => {
        console.log('Task removed:');
      });
    }
  }, [userData?.data.id]);

  const logout = useCallback(() => {
    Cookies.remove('accessToken');
    router.push(ROUTES.AUTH.REGISTER);
  }, []);

  if (isUserDataLoading)
    return <Skeleton variant='rectangular' height={50} width='100%' />;
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 1,
        }}
      >
        <Body1>{userData?.data?.name}</Body1>
        <Caption sx={{ flex: 1 }} color='textSecondary'>
          {userData?.data?.email}
        </Caption>
        <Button onClick={logout} variant='outlined' sx={{ width: 200 }}>
          {t('logout')}
        </Button>
      </Box>
    </Box>
  );
};
