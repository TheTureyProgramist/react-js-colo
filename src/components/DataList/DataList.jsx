import data from "../../data/data.json";
import { DataItem } from "../DataItem/DataItem";

export const DataList = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map((item, idx) => (
          <DataItem key={idx} item={item} />
        ))}
      </ul>
    </section>
  );
};