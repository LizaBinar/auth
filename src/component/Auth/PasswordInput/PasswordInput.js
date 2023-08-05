import Input from "../../../UI/Input/Input";
import {memo} from "react";

const PasswordInput = ({password, isLoading, isError, onChange, info}) => {
    return (
        <>
            <Input
                onChange={onChange}
                value={password}
                type="password"
                label="password"
                required
                placeholder="password123"
                autoComplete="current-password"
                minLength={6}
                disabled={isLoading}
                isError={isError}
                info={info}
            />
        </>
    );
};

export default memo(PasswordInput)
