import css from './ErrorDisplay.module.css'

const ErrorDisplay = ({text}) => {
    if (text) {
        return <p className={`${css.errorInfo}`}>{text}</p>;
    } else {
        return null;
    }
};

export default ErrorDisplay
