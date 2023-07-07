import { useState } from "react";

export default function Switch({ isToggled: initalState = false, onChange }) {
    let [isToggled, setIsToggled] = useState(initalState);

    function handleClick() {
        setIsToggled((it) => !it);
        if (onChange) onChange(!isToggled);
    }

    return (
        <button
            className="w-10 h-5 rounded-full bg-[#03265C] relative block"
            type="button"
            role="switch"
            aria-checked={isToggled}
            onClick={handleClick}
        >
            <span
                className={`top-1 absolute w-3 h-3 bg-white rounded-full transition-[left] duration-75 ${
                    isToggled ? "left-6" : "left-1"
                }`}
                aria-hidden="true"
            ></span>
        </button>
    );
}
