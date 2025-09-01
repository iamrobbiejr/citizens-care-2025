import React from 'react';

class FloatingElement extends React.Component<{ children?: React.ReactNode, className?: string, delay?: number }> {
    static defaultProps = {delay: 0}

    render() {
        const {children, className = '', delay = 0} = this.props;
        return (
            <div className={`absolute ${className}`}
                 style={{
                     animation: `float 6s ease-in-out infinite`,
                     animationDelay: `${delay}s`
                 }}
            >
                {children}
            </div>
        );
    }
}

export default FloatingElement;