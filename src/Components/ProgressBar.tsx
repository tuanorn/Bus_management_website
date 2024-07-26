import { ProgressBar_template } from "../Interfaces"

const ProgressBar: React.FC<ProgressBar_template> = ({progress, color1, color2, label}) => {
    return <div className="flex">
        <div className={color1 + " rounded-full w-full mr-3"}>
            <div className={color2 + " rounded-full h-full"} style={{width: `${Math.round((progress as number)*100)}%`}}></div>
        </div>
        {label}
    </div>
}

export default ProgressBar