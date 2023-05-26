import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    user_name: Yup.string()
        .min(2, "Please provide a valid name of atleast 2 characters")
        .required('Please provide a name'),
    user_email: Yup.string()
        .email('Please provide a valid email address')
        .required('Please provide an email address'),
    message: Yup.string().min(10, "Please provide a valid message of atleast 10 characters").required('Please provide a message'),
});