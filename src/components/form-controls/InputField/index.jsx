import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = formState.touch[name] && errors[name];
    console.log(errors[name], formState.touched[name]);
    return (
        // này là inputfiels // còn các UI control là TextField gì đó
        //TextField dùng lb bên ngoài MUI
        <Controller
            name={name}
            control={form.control}
            as={TextField}

            fullWidth
            label={label}
            disabled={disabled}

            error={!!hasError}
            helperText={errors[name]?.message}

        />

    );
}

export default InputField;