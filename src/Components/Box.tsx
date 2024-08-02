import { Box_template } from "../Interfaces/index";

const Box: React.FC<Box_template> = ({title, text_value, remark}) => {
    return (<div className="w-full px-3 py-2 bg-white rounded-md drop-shadow-lg h-full">
        <p className="whitespace-nowrap font-bold sm:text-sm">{title}</p>
        {text_value}
        <p className="text-sm">{remark}</p>
    </div>)
}

export default Box;