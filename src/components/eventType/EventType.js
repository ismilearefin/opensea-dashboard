import { useEffect, useState } from "react";
import CustomButton from "../button/CustomButton";
import styles from "./EventType.module.css";

export default function EventType() {
  const [eventFilterData, setEventFilterData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/eventFilterData.json");
      const data = await res.json();
      setEventFilterData(data);
    };
    getData();
  }, []);

  return (
    <div className={styles.filterDataDiv}>
      {eventFilterData &&
        eventFilterData.map((data) => (
          <CustomButton key={data.id} text={data.name}></CustomButton>
        ))}
    </div>
  );
}
