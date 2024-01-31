import * as React from 'react';
import './contact-form.scss';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleNotch, faEnvelope, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, FormikProps, Field, FormikHelpers, Form } from 'formik';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';

enum ContactFormState {
    Default,
    Sending,
    Success,
    Error,
}

interface IFormValues {
    name   : string
    email  : string
    message: string
}

interface ContactFormProps {
    onSubmitted?: () => void
}

const ContactForm: React.FC<ContactFormProps> = (props) => {

    const [formState, setFormState] = React.useState(ContactFormState.Default);

    const onFormSubmit = async (values: IFormValues, actions: FormikHelpers<IFormValues>) => {
        console.log('Submitting form...', values);
        setFormState(ContactFormState.Sending);
    
        const emailValues = {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
        };
    
        await emailjs.send('service_bn08o8i', 'template_81orv0o', emailValues, 'eRk-nAQezBsPZR03T')
            .then((response) => {  
                console.log('SUCCESS!', response.status, response.text);
                actions.resetForm();
                setFormState(ContactFormState.Success);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setFormState(ContactFormState.Error);
            })
            .finally(() => {
                actions.setSubmitting(false);
            });
    }

    const initialValues: IFormValues = {
        name   : '',
        email  : '',
        message: '',
    }

    const sendButtonClass = classNames("btn", {
        "btn-primary": formState === ContactFormState.Default || formState === ContactFormState.Sending,
        "btn-success": formState === ContactFormState.Success,
        "btn-danger" : formState === ContactFormState.Error,
    }, "send-button")

    return (
        <div className="contact-form">
            <div className="left-column">
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={onFormSubmit}
                        validateOnMount
                    >
                        {(formikProps: FormikProps<IFormValues>) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <Field 
                                        component="textarea"
                                        name="message" 
                                        id="message" 
                                        className="form-control form-control-dark message-area"
                                        spellCheck={false}
                                        autoComplete="off"
                                        rows={6}
                                        validate={validateStringRequired}
                                    />
                                </div>
                                <button type="submit" className={sendButtonClass} disabled={formState !== ContactFormState.Default || !formikProps.isValid}>
                                    {formState === ContactFormState.Default && (
                                        <span>Send</span>
                                    )}
                                    {formState === ContactFormState.Sending && (
                                        <>
                                            <FontAwesomeIcon icon={faCircleNotch} fixedWidth spin />
                                            <span>Sending...</span>
                                        </>
                                    )}
                                    {formState === ContactFormState.Success && (
                                        <>
                                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth />
                                            <span>Sent, thanks!</span>
                                        </>
                                    )}
                                    {formState === ContactFormState.Error && (
                                        <>
                                            <FontAwesomeIcon icon={faCircleXmark} fixedWidth />
                                            <span>Mail service error</span>
                                        </>
                                    )}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="right-column">

                    <div className="contact-methods">
                        <div className="contact-method">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" fixedWidth className="contact-icon" />
                            <a href="mailto:invocation42@yahoo.com">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" fixedWidth className="contact-link-icon" />
                                <span className="contact-link-text">invocation42@yahoo.com</span>
                            </a>
                        </div>
                        <div className="contact-method">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth className="contact-icon"/>
                            <a href="https://www.linkedin.com/in/dylan-j-dotti/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth className="contact-link-icon" />
                                <span className="contact-link-text">linkedin.com/in/dylan-j-dotti</span>
                            </a>
                        </div>
                        <div className="contact-method location">
                            <FontAwesomeIcon icon={faLocationDot} size="2x" fixedWidth/>
                            Newport News, VA
                        </div>
                    </div>
                </div>
        </div>
    );
}

const validateStringRequired = (value: string) => {
    if (!value || value.length === 0) {
        return 'Required';
    }
}

export default ContactForm;