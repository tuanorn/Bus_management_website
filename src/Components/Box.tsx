import { Box_template } from "../Interfaces/index";

const Box: React.FC<Box_template> = ({title, text_value, remark}) => {
    return (<div className="w-full mx-3 px-3 bg-white rounded-md drop-shadow-lg">
        <p className="whitespace-nowrap font-bold">{title}</p>
        {text_value}
        <p className="text-sm">{remark}</p>
    </div>)
}

export default Box;