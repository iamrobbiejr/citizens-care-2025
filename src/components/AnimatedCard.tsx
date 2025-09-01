import React from 'react';

class AnimatedCard extends React.Component<{ children?: React.ReactNode, delay?: number, className?: string }> {
    static defaultProps = {delay: 0, className: ""}

    render() {
        const {children, delay = 0, className = ""} = this.props;
        return (
            <div
                className={`transform transition-all duration-1000 ease-out ${className}`}
                style={{
                    animationDelay: `${delay}ms`,
                    animation: `slideUpFade 0.8s ease-out ${delay}ms both`
                }}
            >
                {children}
            </div>
        );
    }
}

export default AnimatedCard;