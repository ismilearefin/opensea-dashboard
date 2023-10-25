'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './tableForDashboard.module.css'

export default  function  TableForDashboard() {
  const [NFTdata, setNFTData] = useState([]);

  useEffect(() => {
    const getNFTData = async () => {
      const res = await fetch('/sampleData.json');
      const data = await res.json();
      setNFTData(data);
    };
    getNFTData();
  }, []);

  console.log(NFTdata);
  return (
    <table className={styles.mainTable}>
    <thead>
      <tr className={styles.tableHead}>
        <th></th>
        <th>Item</th>
        <th>Price</th>
        <th>Rarity</th>
        <th>Quantity</th>
        <th>From</th>
        <th>To</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody className={styles.tableBody}>
     
        {
          NFTdata.map(item => (
            <tr key={item.id} className={styles.tablerow}>
                <td>{item.status}</td>
                <td>
                  <div className={styles.itemDiv}>
                    <Image src={item.img} alt="image" width={50} height={50} className={styles.img}></Image>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.code}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h3>{item.priceBitcoin} BIT</h3>
                  <p>${item.priceInDollar}</p>
                </td>
                <td>{item.rarity}</td>
                <td>{item.quantity}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.time}</td>
            </tr>
          ))
        }
        
      
      
    </tbody>
  </table>
  )
}

