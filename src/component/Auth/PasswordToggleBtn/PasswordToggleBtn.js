import down from "../../../assets/svg/down.svg";
import {memo} from "react";

import css from "./PasswordToggleBtn.module.css";

const PasswordToggleBtn = ({onClick, isOpen, disabled}) => {

    const classNamesForAnimation = isOpen ? `${css.downSVG} ${css.rotate180}` : css.downSVG
    const textDownBtn = isOpen ? 'Login without a password' : 'Login with a password.'

    return (
        <button className={css.downBtn} onClick={onClick} disabled={disabled}>
            <p>{textDownBtn}</p>
            <img className={classNamesForAnimation} src={down} alt=""/>
        </button>
    );
};


export default memo(PasswordToggleBtn)
