import React from "react";
import { Input_template } from "../Interfaces/index";

const Input: React.FC<Input_template> = ({eid, placeholder, input_type, on_change, on_focus, error_display}) => {
    return <div className={`${eid} flex flex-col w-9/12 mt-3`}>
        <label htmlFor={`${eid}-input`}>{placeholder}</label>
        <input className=" border-2 border-solid border-black rounded-md" id={`${eid}-input`} type={input_type} placeholder={placeholder} onChange={on_change} onFocus={on_focus}/>
        {error_display}
    </div>
}

export default Input;