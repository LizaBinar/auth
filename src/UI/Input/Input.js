import css from './Input.module.css'

const Input = ({ label, isError, info, ...props }) => {
    const styleColor = isError ? 'red' : null;
    return (
        <div className={css.inputContainer}>
            <label className={css.label} htmlFor={label}>
                {label}:
            </label>
            <input id={label} style={{borderColor: styleColor}} className={css.input} {...props} />
            {info ? <p style={{color: styleColor}} className={css.info}>{info}</p> : null}
        </div>
    );
};

export default Input;
