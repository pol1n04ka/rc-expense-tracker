import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
