"use client";
// import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.css";
import {
  MdOutlineFilterList,
  MdExpandLess,
  MdExpandMore,
  MdClose,
} from "react-icons/md";
import CustomButton from "@/components/button/CustomButton";
import { useState } from "react";
import TableForDashboard from "@/components/tableForDashboard/TableForDashboard";
import EventType from "@/components/eventType/EventType";
import Collections from "@/components/Collections/Collections";
import Chains from "@/components/Chains/Chains";


export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);
  const [CollectionToggle, setCollectionToggle] = useState(false);
  const [ChainToggle, setChainToggle] = useState(false);

  return (
    <main className={styles.main}>
      {/* <Navbar></Navbar> */}

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
          <>
          <aside className={`${styles.filterOptions}`}>
            <div className="d-flex justify-content-between align-items-center pb-2 mb-2 d-block d-lg-none">
              <p></p>
              <p className="fs-4">Filters</p>
              <button className="border-0 bg-transparent fs-4 me-1" onClick={()=> setToggle(false)}><MdClose /></button>
            </div>
            <div>
              {/* const [filterToggle, setFilterToggle] = useState(false); */}
              <div
                className={styles.filterButton}
                onClick={() => setFilterToggle(!filterToggle)}
              >
                <p className={styles.noMargin}>Event Type</p>
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
                <p className={styles.noMargin}>Collections</p>
                {CollectionToggle ? (
                  <MdExpandLess className={styles.icons} />
                ) : (
                  <MdExpandMore className={styles.icons} />
                )}
              </div>
              {CollectionToggle && <Collections></Collections>}
            </div>
            <div>
              {/* const [ChainToggle, setChainToggle] = useState(false); */}
              <div
                className={styles.filterButton}
                onClick={() => setChainToggle(!ChainToggle)}
              >
                <p className={styles.noMargin}>Chains</p>
                {ChainToggle ? (
                  <MdExpandLess className={styles.icons} />
                ) : (
                  <MdExpandMore className={styles.icons} />
                )}
              </div>
              {ChainToggle && <Chains></Chains>}
            </div>
            <div className={`${styles.darwerButtonDiv} bg-white row px-4 py-3 position-absolute z-10 w-100 bottom-0 d-flex d-lg-none`}>
              <button className={`${styles.darwerButton} col border-0 py-2`}>Clear all</button>
              <button className={`${styles.darwerButton} col text-white py-2 bg-primary border-0 `} onClick={()=> setToggle(false)}>Done</button>
            </div>
          </aside>
          </>
        )}

        {/* Table Section Design */}
        <TableForDashboard></TableForDashboard>
      </div>
    </main>
  );
}
