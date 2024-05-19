import { Box, Button, Divider, Grid, Slide, Typography } from '@mui/material';
import { useRef } from 'react';
import styles from './index.style';
import InputField from '../../common/InputField';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

const propTypes = {
	loginFlag: PropTypes.bool.isRequired,
	handleLoginFlag: PropTypes.func.isRequired,
	validationSchema: PropTypes.object.isRequired,
};

function Login({ loginFlag, handleLoginFlag, validationSchema }) {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			console.log(values);
		},
		validateOnChange: true,
	});

	const containerRef = useRef(null);

	return (
		// TODO: Add logo on top of the card
		<>
			<Grid
				container
				columns={2}
				columnGap={7}
				sx={styles.rootContainer}
				ref={containerRef}
			>
				<Slide
					in={loginFlag}
					direction="left"
					container={containerRef.current}
					timeout={900}
				>
					<Box sx={styles.primaryCard}>
						<Box sx={styles.gapY}>
							<Typography
								id="cardHeading"
								sx={styles.cardHeading}
								color="text.primary"
								gutterBottom
							>
								Login
							</Typography>

							<Typography
								id="cardHeading"
								sx={styles.subHeading}
								color="text.primary"
								gutterBottom
							>
								Get back on track with your Jots.
							</Typography>
						</Box>

						<Grid container spacing={2} sx={styles.gapY}>
							<Grid item xs={12} md={6}>
								<Button
									id="loginWithGoogleBtn"
									variant="outlined"
									sx={styles.secondaryBtn}
									color="inherit"
									startIcon={<GoogleIcon />}
								>
									Google
								</Button>
							</Grid>
							<Grid item xs={12} md={6}>
								<Button
									id="loginWithGoogleBtn"
									variant="outlined"
									sx={styles.secondaryBtn}
									color="inherit"
									startIcon={<GitHubIcon />}
								>
									GitHub
								</Button>
							</Grid>
						</Grid>

						<Divider sx={styles.gapY} textAlign="center" color="#A8A29E">
							Or continue with
						</Divider>

						<Box
							component="form"
							sx={styles.gapY}
							onSubmit={formik.handleSubmit}
							noValidate
						>
							<InputField
								label="Email Address"
								type="email"
								name="email"
								placeholder="demo@example.com"
								value={formik.values.email}
								onChange={formik.handleChange}
								errorFlag={formik.touched.email && Boolean(formik.errors.email)}
								errMessage={formik.touched.email && formik.errors.email}
							/>

							<InputField
								label="Password"
								type="password"
								name="password"
								placeholder="At least 8 characters"
								value={formik.values.password}
								onChange={formik.handleChange}
								errorFlag={formik.touched.password && Boolean(formik.errors.password)}
								errMessage={formik.touched.password && formik.errors.password}
							/>

							<Box sx={styles.gapY}>
								<Button
									id="loginBtn"
									variant="contained"
									sx={styles.primaryBtn}
									type="submit"
								>
									Login
								</Button>
							</Box>
						</Box>
					</Box>
				</Slide>

				<Slide
					in={loginFlag}
					direction="right"
					container={containerRef.current}
					timeout={900}
				>
					<Box sx={styles.secondaryCard}>
						<Box>
							<Typography
								id="cardHeading"
								sx={styles.cardHeading}
								color="text.primary"
								gutterBottom
							>
								Create an account
							</Typography>

							<Typography
								id="cardHeading"
								sx={styles.subHeading}
								color="text.primary"
								gutterBottom
							>
								Ready to create your customised notes?
							</Typography>
						</Box>

						<Box sx={styles.gapY}>
							<Button
								id="signupBtn"
								variant="contained"
								sx={styles.primaryBtn}
								onClick={() => handleLoginFlag(false)}
							>
								Create your account
							</Button>
						</Box>
					</Box>
				</Slide>
			</Grid>
		</>
	);
}

Login.propTypes = propTypes;
export default Login;
