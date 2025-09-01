import {Component} from "react";

class FloatingShape extends Component<{ className?: string, delay?: number, duration?: number }> {
    static defaultProps = {delay: 0, duration: 3}

    render() {
        const {className = '', delay = 0, duration = 3} = this.props;
        return (
            <div
                className={`absolute rounded-full opacity-20 animate-pulse ${className}`}
                style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                }}
            />
        );
    }
}

export default FloatingShape;