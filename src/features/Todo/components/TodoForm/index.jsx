import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

// dùng yup để làm validation form
//SchemaValidation
function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string()
            .required('Pls enter title')
            .min(5, 'Title is too  short'),
    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log("Todo form: ", values);
        const { onSubmit } = props;

        if (onSubmit) {
            onSubmit(values);
        }

        // reset khi người dùng nhập xong
        form.reset();
    };

    return (

        // này là todoForm
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;
