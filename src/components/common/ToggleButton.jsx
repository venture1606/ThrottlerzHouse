import React from 'react'
import { useEffect } from 'react'
import { Icon } from '@iconify/react'
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../redux/reducer/commonSlicer';

import '../../assests/styles/common.css'

function ToggleButton() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.message.mode);

    const handleToggle = () => {
        dispatch(setMode({ mode: !mode }));
    };

    useEffect(() => {
        document.documentElement.setAttribute(
          "data-theme",
          mode ? "dark" : "light"
        );
    }, [mode]);

    return (
        <button className="ToggleButton" onClick={handleToggle}>
            <Icon
                icon={mode ? "line-md:moon-rising-alt-loop" : "line-md:sun-rising-loop"}
                className={`ToggleIcon ${mode ? "dark" : "light"}`}
            />
        </button>
    )
}

export default ToggleButton