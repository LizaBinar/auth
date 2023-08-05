import css from "./Btn.module.css"

const Btn = ({children, ...props}) => {
    const className = `${css.btn} ${props.className}`
    delete props.className
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export default Btn;
