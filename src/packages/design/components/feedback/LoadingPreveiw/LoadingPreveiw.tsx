import { Box } from '@design';

export const LoadingPreveiw = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 100,
        top: 0,
        right: 0,
        background: (theme) => theme.palette.common.black,
        width: '100vw',
        height: '100vh',
        opacity: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    ></Box>
  );
};
