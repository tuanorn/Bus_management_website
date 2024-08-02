export interface Box_template {
    title: string,
    text_value: JSX.Element,
    remark: string
}

export interface ProgressBar_template {
    title: JSX.Element,
    progress: number,
    color1: string,
    color2: string,
    label: JSX.Element
}

export interface Table_template {
    jsonDB: {[key: string]: string[]},
    rec_txt_color: string,
    header_txt_color: string,
    rec_bg_color: string,
    header_bg_color: string,
    img_link: string
}