"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.css";
import { MdOutlineFilterList,MdExpandLess,MdExpandMore } from "react-icons/md";
import CustomButton from "@/components/button/CustomButton";
import { useState, useEffect } from "react";
import TableForDashboard from "@/components/tableForDashboard/TableForDashboard";

export default function Home() {
  const storedToggle = localStorage.getItem("toggle");
  const [toggle, setToggle] = useState(
    storedToggle ? JSON.parse(storedToggle) : false
  );

  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      {/* filter-toggle Button */}
      <div className={styles.buttonDivFilter}>
        <CustomButton
          icon={<MdOutlineFilterList />}
          click={() => setToggle(!toggle)}
        />
      </div>
      {/* Table & filter Section */}
      <div className={styles.tableSection}>
        {/* filter-toggle Section */}
        {toggle && (
          <aside className={styles.filterOptions}>
            <button>Event Type <MdExpandMore className={styles.icons} /></button>
            <button>Collections <MdExpandMore className={styles.icons}/></button>
            <button>Chains <MdExpandMore className={styles.icons}/></button>
          </aside>
        )}
        {/* Table Section Design */}

        <TableForDashboard></TableForDashboard>
      </div>
    </main>
  );
}
