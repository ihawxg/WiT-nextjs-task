import { CloseButtonProps } from '@/app/_types/types';
import React from 'react';

const CloseButton: React.FC<CloseButtonProps> = ({ handleClick }) => {
    return (
        <div className="close-button" onClick={() => handleClick(false)}>
            <i className="fal fa-times"></i>
        </div>
    );
}

export default CloseButton;
