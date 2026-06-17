import React from 'react';

const WhatsAppButton = ({ productName, price, className, style }) => {
    const message = `Hi, I am interested in ${productName} - ₹${price}.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "919014192002";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-premium ${className || ''}`}
            style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                ...style
            }}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.013 13.237C14.682 13.142 14.441 13.095 14.2 13.455C13.959 13.815 13.272 14.63 13.062 14.885C12.852 15.14 12.642 15.17 12.282 14.99C11.922 14.81 10.762 14.43 9.387 13.205C8.307 12.242 7.579 11.055 7.369 10.695C7.159 10.335 7.346 10.138 7.527 9.958C7.688 9.797 7.886 9.542 8.066 9.332C8.246 9.122 8.306 8.972 8.426 8.732C8.546 8.492 8.486 8.282 8.396 8.102C8.306 7.922 7.625 6.242 7.346 5.567C7.073 4.909 6.797 4.997 6.602 5.002C6.421 5.006 6.212 5.002 6.002 5.002C5.792 5.002 5.451 5.084 5.166 5.394C4.881 5.704 4.07 6.464 4.07 8.009C4.07 9.554 5.196 11.05 5.361 11.275C5.526 11.5 7.628 14.735 10.849 16.126C11.615 16.457 12.213 16.654 12.684 16.804C13.566 17.085 14.372 17.042 15.011 16.947C15.727 16.84 17.218 16.045 17.533 15.16C17.848 14.275 17.848 13.51 17.758 13.36C17.668 13.21 17.472 13.12 17.112 12.94V14.382ZM12.043 21.729L12.039 21.73C10.354 21.73 8.705 21.278 7.257 20.419L6.914 20.216L3.414 21.134L4.348 17.72L4.126 17.367C3.208 15.908 2.724 14.207 2.724 12.463C2.724 7.325 6.905 3.144 12.047 3.144C14.537 3.144 16.877 4.114 18.636 5.875C20.395 7.636 21.363 9.974 21.363 12.466C21.363 17.601 17.185 21.729 12.043 21.729Z" />
            </svg>
            <span>INQUIRE ON WHATSAPP</span>
        </a>
    );
};

export default WhatsAppButton;
