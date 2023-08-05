import {useState, useCallback, memo} from 'react';
import PasswordToggleBtn from "../PasswordToggleBtn/PasswordToggleBtn";
import Btn from "../../../UI/Btn/Btn";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";
import DynamicHeightComponent from "../../../UI/DynamicContainer/DinamicContainer";
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";

import css from './AuthForm.module.css';

const AuthForm = ({onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputPasswordOpen, setInputPasswordOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [errorObj, setErrorObj] = useState({status: false, general: '', email: '', password: ''});

    const isEmailValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setErrorObj((obj) => {
                obj.email = ''
                return {...obj}
            })
            return true
        } else {
            setErrorObj((obj) => {
                obj.email = 'email is not correct'
                return {...obj}
            })
            return false
        }
    };

    const isPasswordValid = () => {
        if (password.length >= 6) {
            setErrorObj((obj) => {
                obj.password = ''
                return {...obj}
            })
            return true
        } else {
            setErrorObj((obj) => {
                obj.password = 'minimum of 6 characters in the password'
                return {...obj}
            })
            return false
        }
    };

    const onEmailChange = useCallback((e) => setEmail(e.target.value), [setEmail])
    const onPasswordChange = useCallback((e) => setPassword(e.target.value), [setPassword])

    const onToggleInputPassword = useCallback(() => {
        setInputPasswordOpen((prevState) => !prevState);
        setErrorObj({status: false, general: '', email: '', password: ''})
    }, [inputPasswordOpen]);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const emailValid = isEmailValid();
        let passwordValid = inputPasswordOpen;

        const submitData = async () => {
            if (passwordValid) {
                passwordValid = isPasswordValid();
                if (passwordValid) {
                    await onSubmit({email, password});
                }
            } else {
                await onSubmit({email});
            }
        }

        if (emailValid) {
            setLoading(true);
            setErrorObj({status: false, general: '', email: '', password: ''});

            try {
                await submitData()
            } catch (error) {
                setErrorObj((state) => ({...state, status: true, ...error.data}));
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className={css.container}>
            <form onSubmit={onSubmitForm} className={css.form}>
                <DynamicHeightComponent className={css.inputsContainer}>
                    <EmailInput email={email}
                                onChange={onEmailChange}
                                isError={!!errorObj.email || errorObj.status}
                                info={errorObj.email}/>
                    {inputPasswordOpen ? (
                        <PasswordInput
                            password={password}
                            isLoading={loading}
                            isError={!!errorObj.password || errorObj.status}
                            onChange={onPasswordChange}
                            info={errorObj.password}
                        />
                    ) : null}
                    <ErrorDisplay text={errorObj.general}/>
                </DynamicHeightComponent>
                <Btn disabled={loading} className={css.btn} onClick={onSubmitForm}>
                    Login
                </Btn>
            </form>
            <PasswordToggleBtn
                onClick={onToggleInputPassword}
                isOpen={inputPasswordOpen}
                disabled={loading}
            />
        </div>
    );
};

export default memo(AuthForm);

