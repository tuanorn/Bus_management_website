import {Box} from "../Components/index"
import {ProgressBar} from "../Components/index";
import Table from "../Components/Table";

function Dashboard() {
    let busList: {[key: string]: string[]} = {
        Bus1: ["Bus 1\nClick to see more"],
        Bus2: ["Bus 2\nClick to see more"],
        Bus3: ["Bus 3\nClick to see more"],
        Bus4: ["Bus 4\nClick to see more"],
        Bus5: ["Bus 5\nClick to see more"],
    }
    return <div className="bg-yellow-50 pt-10">
        <div className="Row1 grid grid-cols-3 gap-x-10 mb-10 mx-5">
            <Box title="Number of active buses" text_value={<p className="text-xl">11/12</p>} remark="+15% from last week"/>
            <Box title="Number of late buses" text_value={<p className="text-xl">2</p>} remark="-10% from last week"/>
            <Box title="Number of absent students" text_value={<p className="text-xl">1</p>} remark="-50% from last week"/>
        </div>
        <div className="Row2 grid grid-cols-2 gap-x-10 mb-10 mx-5">
            <Box title="Number of students on each bus" text_value={<>
                <ProgressBar title={
                    <p className="indent-1 font-light">Bus 1</p>
                } progress={11/16} color1="bg-gray-200" color2="bg-green-500" label={<p>11/16</p>}/>
                <ProgressBar title={
                    <p className="indent-1 font-light">Bus 2</p>
                } progress={15/16} color1="bg-gray-200" color2="bg-green-500" label={<p>15/16</p>}/>
                <ProgressBar title={
                    <p className="indent-1 font-light">Bus 3</p>
                } progress={9/16} color1="bg-gray-200" color2="bg-green-500" label={<p>9/16</p>}/>
                <ProgressBar title={
                    <p className="indent-1 font-light">Bus 4</p>
                } progress={16/16} color1="bg-gray-200" color2="bg-green-500" label={<p>16/16</p>}/>
                <ProgressBar title={
                    <p className="indent-1 font-light">Bus 5</p>
                } progress={15/16} color1="bg-gray-200" color2="bg-green-500" label={<p>15/16</p>}/>
                <ProgressBar title={
                    <p className="indent-1 font-light">Bus 6</p>
                } progress={0/16} color1="bg-gray-200" color2="bg-green-500" label={<p>0/16</p>}/>
            </>} remark=""/>
            <Box title="Buses" text_value={
                <Table jsonDB={busList} rec_txt_color="text-black" rec_bg_color="bg-transparent" header_txt_color="" header_bg_color="" img_link={require("../Images/Bus_icon.png")}/>
            } remark=""/>
        </div>
        <div className="Row3 grid grid-cols-2 gap-x-10 mb-10 mx-5">
            
        </div>
    </div>
}
 export default Dashboard;