import React from 'react';
import './AnimatedButton.css';

interface AnimatedButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, children, className }) => {
    return (
        <button className={`animated-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default AnimatedButton;