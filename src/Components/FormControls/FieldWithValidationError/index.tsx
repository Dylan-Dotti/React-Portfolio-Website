import * as React from "react";
import "./field-with-validation-error.scss";
import { Field, FieldAttributes } from "formik";
import classNames from "classnames";

interface IFieldWithValidationErrorProps extends FieldAttributes<any> {
    errorMessage?: string
}

const FieldWithValidationError: React.FC<IFieldWithValidationErrorProps> = (props) => {

    const { errorMessage, ...fieldProps } = props;

    const hasError = errorMessage && errorMessage.length > 0;

    const className = classNames('field-with-validation-error', {
        'has-error': hasError,
    });

    return (
        <div className={className}>
            <Field {...fieldProps} />
            {hasError && (
                <div className="error-message">
                    {props.errorMessage}
                </div>
            )}
        </div>
    );
}

export default FieldWithValidationError;