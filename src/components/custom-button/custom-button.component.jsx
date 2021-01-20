import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherSectionProps }) => (
    <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherSectionProps}>{children}</button>
);

export default CustomButton;