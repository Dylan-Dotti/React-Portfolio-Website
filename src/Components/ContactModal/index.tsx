import * as React from 'react';
import './contact-modal.scss';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../ContactForm';

interface IContactModalProps {
    isOpen: boolean
    toggle: () => void
}

const ContactModal: React.FC<IContactModalProps> = (props) => {

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
                <ContactForm />
            </ModalBody>
        </Modal>
    );
}

export default ContactModal;