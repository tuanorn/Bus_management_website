import { ChangeEventHandler } from "react";

export interface Input_template {
    eid: string,
    placeholder: string,
    input_type: string,
    on_change: ChangeEventHandler,
    on_focus: ChangeEventHandler,
    error_display: JSX.Element
}