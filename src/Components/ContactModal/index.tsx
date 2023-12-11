import * as React from 'react';
import './contact-modal.scss';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import { FormikHelpers, FormikProps } from 'formik/dist/types';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEnvelope, faMobileScreen, faTimes } from '@fortawesome/free-solid-svg-icons';
import FieldWithValidationError from '../FormControls/FieldWithValidationError';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface IFormValues {
    name   : string
    email  : string
    message: string
}

interface IContactModalProps {
    isOpen: boolean
    toggle: () => void
}

const ContactModal: React.FC<IContactModalProps> = (props) => {

    const initialValues: IFormValues = {
        name   : '',
        email  : '',
        message: '',
    }

    return (
        <Modal
            isOpen={props.isOpen}
            toggle={props.toggle}
            className="contact-modal modal-dark"
            centered
            scrollable={true}
            size='lg'
        >
            <ModalHeader>
                <div className="title">
                    <h3>Contact Dylan</h3>
                </div>
                <button type="button" className="btn btn-dark" onClick={props.toggle}>
                    <FontAwesomeIcon icon={faTimes} fixedWidth />
                </button>
            </ModalHeader>
            <ModalBody>
                <div className="left-column">
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={onFormSubmit}
                        validateOnBlur
                        validateOnChange={false}
                    >
                        {(formikProps: FormikProps<IFormValues>) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Field
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        className="form-control form-control-dark"
                                        spellCheck={false}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="form-control form-control-dark"
                                        spellCheck={false}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <FieldWithValidationError 
                                        component="textarea"
                                        name="message" 
                                        id="message" 
                                        className="form-control form-control-dark message-area"
                                        spellCheck={false}
                                        autoComplete="off"
                                        rows={5}
                                        validate={validateStringRequired}
                                        errorMessage={formikProps.errors.message}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={formikProps.isSubmitting}>
                                    {formikProps.isSubmitting && (
                                        <FontAwesomeIcon icon={faCircleNotch} spin />
                                    )}
                                    Send
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="right-column">
                    <h5 className="text-center">
                        I can also be reached via the following methods:
                    </h5>

                    <div className="contact-methods">
                        <div className="contact-method">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" fixedWidth/>
                            <a href="mailto:invocation42@yahoo.com">invocation42@yahoo.com</a>
                        </div>
                        <div className="contact-method">
                            <FontAwesomeIcon icon={faMobileScreen} size="2x" fixedWidth />
                            <a href="tel:1-555-555-5555">(555) 555-5555</a>
                        </div>
                        <div className="contact-method">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth/>
                            <a href="https://www.linkedin.com/in/dylan-j-dotti/" target="_blank" rel="noopener noreferrer">linkedin.com/in/dylan-j-dotti</a>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}

const onFormSubmit = async (values: IFormValues, actions: FormikHelpers<IFormValues>) => {
    console.log('Submitting form...', values);

    const emailValues = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
    };

    await emailjs.send('service_bn08o8i', 'template_81orv0o', emailValues, 'eRk-nAQezBsPZR03T')
        .then((response) => { 
            console.log('SUCCESS!', response.status, response.text);
            actions.resetForm();
        })
        .catch((err) => {
            console.log('FAILED...', err);
        })
        .finally(() => {
            actions.setSubmitting(false);
        });
}

const validateStringRequired = (value: string) => {
    if (!value || value.length === 0) {
        return 'Required';
    }
}

export default ContactModal;