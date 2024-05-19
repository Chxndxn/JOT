/* Imports */
import { Box, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import styles from './index.style';

const propTypes = {
 pageName: PropTypes.string.isRequired,
};

const defaultProps = {
 pageName: 'This',
};

const WorkInProgress = ({ pageName }) => {
 return (
  <Stack sx={styles.rootContainer}>
   <Box
    component="img"
    sx={styles.imageContainer}
    src="/src/assets/DummyImages/project_wip.svg"
   />
   <Typography variant="h4" sx={styles.statusText}>
    {`${pageName} Page is being built at the moment`}
   </Typography>
  </Stack>
 );
};

WorkInProgress.propTypes = propTypes;
WorkInProgress.defaultProps = defaultProps;
export default WorkInProgress;
