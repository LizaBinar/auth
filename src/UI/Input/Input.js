import css from './Input.module.css'

const Input = ({label, isError, info, ...props}) => {
    const styleColor = isError ? 'red' : null;
    const aria = isError ? {"aria-invalid": true, "aria-errormessage": label} : null

    return (
        <div className={css.inputContainer}>
            <label className={css.label} htmlFor={label}>
                {label}:
            </label>
            <input id={label} style={{borderColor: styleColor}} className={css.input} {...aria} {...props} />
            {
                info ?
                    <p id={label} style={{color: styleColor}} className={css.info}>{info}</p> :
                    null
            }
        </div>
    );
};

export default Input;
