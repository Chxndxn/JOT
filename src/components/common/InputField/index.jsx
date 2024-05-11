/* Imports */
import styles from "./index.style";
import PropTypes from "prop-types";
import { Box, TextField, Typography } from "@mui/material";

const propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  errorFlag: PropTypes.bool,
  errMessage: PropTypes.string,
};

const InputField = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  errorFlag,
  errMessage,
}) => {
  return (
    <Box sx={styles.gapY}>
      <Typography sx={styles.formLabel} color="text.secondary" gutterBottom>
        {label}
      </Typography>

      <TextField
        placeholder={placeholder}
        variant="outlined"
        sx={styles.textField}
        size="small"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        error={errorFlag}
        helperText={errMessage}
      />
    </Box>
  );
};

InputField.propTypes = propTypes;
export default InputField;
