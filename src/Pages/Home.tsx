import {Box} from "../Components/index"
import {ProgressBar} from "../Components/index";

function Home() {
    return <div className="grid grid-rows-3 gap-y-10 bg-yellow-50 pt-10">
        <div className="Row1 grid grid-cols-3 gap-x-10 w-full">
            <Box title="Number of active buses" text_value={<p className="text-xl">11/12</p>} remark="+15% from last week"/>
            <Box title="Number of late buses" text_value={<p className="text-xl">2</p>} remark="-10% from last week"/>
            <Box title="Number of absent students" text_value={<p className="text-xl">1</p>} remark="-50% from last week"/>
        </div>
        <div className="Row2 grid grid-cols-2 gap-x-10 w-full">
            <Box title="Number of students on each bus" text_value={
                <ProgressBar progress={11/16} color1="bg-gray-200" color2="bg-green-500" label={
                    <p>11/16</p>
                }/>
            } remark=""/>
        </div>
    </div>
}
 export default Home;