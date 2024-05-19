export default {
	formLabel: {
		color: 'white',
		fontSize: '0.875rem',
		fontWeight: '500',
		lineHeight: 1,
	},
	gapY: {
		marginTop: 3,
	},
	textField: {
		width: '100%',
		marginY: 0.5,
		'& .MuiOutlinedInput-root': {
			color: '#A8A29E',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#292524',
			borderWidth: '1px',
			borderRadius: '0.5rem',
		},
		'&:hover:not(.Mui-focused)': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: '#1976d2',
			},
		},
	},
};
