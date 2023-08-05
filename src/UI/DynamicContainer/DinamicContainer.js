import { useState, useRef, useEffect } from 'react';

import css from './DynamicContainer.module.css'

const DynamicHeightComponent = ({ className, children }) => {
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        // Обновляем высоту компонента при изменении содержимого
        setContentHeight(contentRef.current.clientHeight);
    }, [children]);

    return (
        <div
            className={css.container}
            style={{ height: contentHeight }}
        >
            <div className={className} ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default DynamicHeightComponent;
