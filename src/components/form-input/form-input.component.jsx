import React from 'react';
import './form-input.style.scss';

const FormInput = ({handleChange, label, ...otherSectionProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherSectionProps} />
        {
            label ? (<label className={`${otherSectionProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null
        }
    </div>
);

export default FormInput;