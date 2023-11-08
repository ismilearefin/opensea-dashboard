"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./tableForDashboard.module.css";

export default function TableForDashboard() {
  const [moreInfo, getMoreInfo] = useState(null);
  const [NFTdata, setNFTData] = useState([]);

  useEffect(() => {
    const getNFTData = async () => {
      const res = await fetch("/sampleData.json");
      const data = await res.json();
      setNFTData(data);
    };
    getNFTData();
  }, []);

  return (
    <div className={styles.mainTable}>
      {/* For Desktop Screen Table [Start] */}
      <div className="d-none d-lg-block">
        <div className={`${styles.tableHead} row justify-content-between`}>
          <p className="col-2"></p>
          <p className="col-3 text-start">Item</p>
          <p className="col-2 col-xl-1 text-end">Price</p>
          <p className="col-1 text-end">Rarity</p>
          <p className="col-1 text-end">Quantity</p>
          <p className="d-none d-xl-block col-xl-1 text-end">From</p>
          <p className="d-none d-xl-block col-xl-1 text-end">To</p>
          <p className="d-none d-xxl-block col-xxl-1 text-end">Time</p>
        </div>
      </div>
      <div className={`${styles.tableBody} `}>
        {NFTdata.map((item) => (
          <>
            {/* /* For Desktop Screen Table [Start] */}
            <div
              key={item.id}
              className={`${styles.tablerow} row align-items-center justify-content-between d-none d-lg-flex`}
            >
              <div className="col-2 d-flex align-items-center justify-content-md-evenly">
                <div className="col d-flex justify-content-center">
                <MdOutlineShoppingCart />
                </div>
                <p className={`${styles.noMargin} col text-center`}>{item.status}</p>
              </div>

              <div className={`${styles.itemDiv} col-3 align-items-center`}>
                <Image
                  src={item.img}
                  alt="image"
                  width={60}
                  height={60}
                  className={styles.img}
                ></Image>
                <div>
                  <p className={`${styles.noMargin} fw-bold`}>{item.name}</p>
                  <p className={`${styles.noMargin} fw-light`}>{item.code}</p>
                </div>
              </div>

              <div className="col-2 col-xl-1  text-end">
                <p className={`${styles.noMargin} fw-bold`}>
                  {item.priceBitcoin} BIT
                </p>
                <p className={`${styles.noMargin} fw-light`}>
                  ${item.priceInDollar}
                </p>
              </div>
              <p className={`${styles.noMargin} col-1 text-end`}>
                {item.rarity ? item.rarity : <span>--</span>}
              </p>
              <p className={`${styles.noMargin} col-1 text-end`}>
                {item.quantity ? item.quantity : <span>--</span>}
              </p>
              <a className="d-none d-xl-block col-xl-1 text-end text-decoration-none">
                {item.from ? item.from : <span>--</span>}
              </a>
              <a className="d-none d-xl-block col-xl-1 text-end text-decoration-none">
                {item.to ? item.to : <span>--</span>}
              </a>
              <a className="d-none d-xxl-block col-xxl-1 text-end text-decoration-none">
                {item.time ? item.time : <span>--</span>}
              </a>
            </div>
            {/* For Desktop Screen Table [End]  */}

            {/* For Tab & Mobile Screen Table [Start] */}
            <div key={item.id}>
              <div className="d-flex d-lg-none py-3 justify-content-between">
                <div className={`${styles.itemDiv}`}>
                  <Image
                    src={item.img}
                    alt="image"
                    width={70}
                    height={70}
                    className={styles.img}
                  ></Image>
                  <div>
                    <p className={`${styles.noMargin} noMargin fw-bold`}>
                      {item.name}
                    </p>
                    <p className={`${styles.noMargin} noMargin fw-light`}>
                      {item.code}
                    </p>

                    {moreInfo === item.id ? (
                      <button
                        className={`border-0 bg-transparent`}
                        onClick={() => getMoreInfo(null)}
                      >
                        - Less
                      </button>
                    ) : (
                      moreInfo !== item.id && (
                        <button
                          className={`border-0 bg-transparent`}
                          onClick={() => getMoreInfo(item.id)}
                        >
                          + More
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p className={`${styles.noMargin} text-end`}>{item.status}</p>
                  <p className={`${styles.noMargin} fw-bold`}>
                    {item.priceBitcoin} BIT
                  </p>
                  <p
                    className={`${styles.noMargin} text-end text-decoration-none`}
                  >
                    {item.time ? item.time : <span>--</span>}
                  </p>
                </div>
              </div>
              {moreInfo === item.id && (
                <table className={`${styles.table} d-lg-none`}>
                  <thead>
                    <tr className={styles.mobiletableRowHeading}>
                      <th>USD Price</th>
                      <th>Rarity</th>
                      <th>Quantity</th>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.mobiletableRowBody}>
                      <th>{item.priceInDollar}</th>
                      <th>{item.rarity ? item.rarity : <span>--</span>}</th>
                      <th>{item.quantity ? item.quantity : <span>--</span>}</th>
                      <th>{item.from ? item.from : <span>--</span>}</th>
                      <th>{item.to ? item.to : <span>--</span>}</th>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
            {/* For Tab & Mobile Screen Table [End] */}
          </>
        ))}
      </div>
    </div>
  );
}
