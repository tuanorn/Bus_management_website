import { Table_template } from "../Interfaces/index";

const Table: React.FC<Table_template> = ({jsonDB, rec_txt_color, header_txt_color, rec_bg_color, header_bg_color, img_link}) => {
    let htmlContent: JSX.Element[] = [];
    for (let rec in jsonDB) {
        console.log(typeof(rec));
        let record: JSX.Element[] = [];
        let count: number = 0;
        for (let attr of jsonDB[rec]) {
            record.push(<div className={"flex mx-3 hover:opacity-50" + " " + (rec === "header"? rec_txt_color : header_txt_color)}>
                {count === 0? <img className="h-max" src={img_link}/> : <></>}
                <p className="ml-3 whitespace-pre-line text-sm">{attr}</p>
            </div>);
            count += 1;
        }
        htmlContent.push(<div className={`grid grid-cols-${jsonDB[rec].length} h-min py-3 border-b-2 ${rec === "header"? rec_bg_color : header_bg_color}`}>
            {record}
        </div>)
    }
    return <>
        {htmlContent}
    </>;
}

export default Table