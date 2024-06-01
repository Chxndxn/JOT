/* eslint-disable react/no-unknown-property */
import { Box, Button, Grid, Typography } from '@mui/material';
import './index.style.js';
import NotFoundGif from '../../components/NotFoundGif/index.jsx';
import styles from './index.style.js';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Link } from 'react-router-dom';
import { pages } from '../../routes/paths.js';

// ToDo: Hide header component
const NotFound = () => {
	return (
		<>
			<Grid container columns={2} sx={styles.rootContainer}>
				<Box>
					<NotFoundGif />
				</Box>

				<Box>
					<Typography variant="h2" gutterBottom>
						Oops, Wrong Turn....
					</Typography>

					<Typography variant="h6" gutterBottom sx={styles.subHeading}>
						{`Sorry, we couldn't find the page you're looking for`}
					</Typography>

					<Link to={pages.root}>
						<Button
							id="loginWithGoogleBtn"
							variant="outlined"
							sx={styles.btn}
							color="inherit"
							startIcon={<ArrowLeftIcon />}
						>
							Go back home
						</Button>
					</Link>
				</Box>
			</Grid>
		</>
	);
};

export default NotFound;
