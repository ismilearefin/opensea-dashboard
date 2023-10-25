"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.css";
import {
  MdOutlineFilterList,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";
import CustomButton from "@/components/button/CustomButton";
import { useState, useEffect } from "react";
import TableForDashboard from "@/components/tableForDashboard/TableForDashboard";
import EventType from "@/components/eventType/EventType";

export default function Home() {
  const storedToggle = localStorage.getItem("toggle");
  const [filterToggle, setFilterToggle] = useState(false);
  const [CollectionToggle, setCollectionToggle] = useState(false);
  const [ChainToggle, setChainToggle] = useState(false);
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
            <div>
              {/* const [filterToggle, setFilterToggle] = useState(false); */}
              <div
                className={styles.filterButton}
                onClick={() => setFilterToggle(!filterToggle)}
              >
                <p>Event Type</p>
                {filterToggle ? (
                  <MdExpandLess className={styles.icons} />
                ) : (
                  <MdExpandMore className={styles.icons} />
                )}
              </div>
              {filterToggle && <EventType></EventType>}
            </div>
            <div>
              {/* const [CollectionToggle, setCollectionToggle] = useState(false); */}
              <div
                className={styles.filterButton}
                onClick={() => setCollectionToggle(!CollectionToggle)}
              >
                <p>Collections</p>
                {CollectionToggle ? (
                  <MdExpandLess className={styles.icons} />
                ) : (
                  <MdExpandMore className={styles.icons} />
                )}
              </div>
            </div>
            <div>
              {/* const [ChainToggle, setChainToggle] = useState(false); */}
              <div
                className={styles.filterButton}
                onClick={() => setChainToggle(!ChainToggle)}
              >
                <p>Chains</p>
                {ChainToggle ? (
                  <MdExpandLess className={styles.icons} />
                ) : (
                  <MdExpandMore className={styles.icons} />
                )}
              </div>
            </div>
          </aside>
        )}

        {/* Table Section Design */}
        <TableForDashboard></TableForDashboard>
      </div>
    </main>
  );
}
