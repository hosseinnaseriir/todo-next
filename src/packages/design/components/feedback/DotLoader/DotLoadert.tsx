import { FC, HTMLAttributes } from 'react';
import { Box } from '@design';

import './styles.css';

export const DotLoader: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Box className='loader' {...props}>
      <span></span>
      <span></span>
      <span></span>
    </Box>
  );
};
