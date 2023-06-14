import ChatBar from "./ChatBar";
import "./Chart.css";


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChatBar value = {dataPoint.value} maxValue = {totalMaximum} label = {dataPoint.label} key={dataPoint.label} />)}
        </div>
    );
};

export default Chart;