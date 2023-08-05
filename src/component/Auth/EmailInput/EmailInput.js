import Input from "../../../UI/Input/Input";
import {memo} from "react";

const EmailInput = ({onChange, email, isLoading, isError, info}) => {
    return (
        <>
            <Input
                onChange={onChange}
                value={email}
                type="email"
                required
                label="email"
                placeholder="evilmars@gmail.com"
                autoComplete="username"
                disabled={isLoading}
                isError={isError}
                info={info}
            />
        </>
    );
};

export default memo(EmailInput)
