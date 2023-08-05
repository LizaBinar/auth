import okSVG from "../../assets/svg/ok.svg";

import css from "./Ok.module.css"

const Ok = ({className}) => {
    return (
        <div className={`${css.ok} ${className}`}>
            <img className={css.okSVG} src={okSVG} alt='ok'/>
        </div>
    );
};

export default Ok;
