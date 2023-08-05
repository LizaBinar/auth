import AuthForm from "./AuthForm/AuthForm";
import {loginEmail, loginEmailPassword} from "../../api/mockApi";
import {useCallback, useState} from "react";
import Ok from "../../UI/Ok/Ok";

import css from './Auth.module.css'

const Auth = () => {
    const [isLoginWithEmail, setIsLoginWithEmail] = useState(false);
    const [isLoginWithPassword, setIsLoginWithPassword] = useState(false);

    const onSubmit = useCallback(async (loginData) => {
        setIsLoginWithPassword(false);
        setIsLoginWithEmail(false);
        if (loginData.password) {
            await loginEmailPassword(loginData.email, loginData.password);
            setIsLoginWithPassword(true);
        } else {
            await loginEmail(loginData.email); // it is supposed to send a letter
            setIsLoginWithEmail(true);
        }
    }, []);

    return (
        <div className={css.container}>
            <h1 className={css.h1}>Auth App</h1>
            {isLoginWithEmail || isLoginWithPassword ? <Ok className={css.ok} /> : null}
            <AuthForm onSubmit={onSubmit} />
        </div>
    );
};


export default Auth;

