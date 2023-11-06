'use client'
import { useEffect, useState } from 'react';
import styles from './Collections.module.css';
import Image from 'next/image';
import { MdSearch } from 'react-icons/md';


export default function Collections() {
    const [CollectionData, setCollectionData] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/collectionsFakeData.json");
      const data = await res.json();
      setCollectionData(data);
    };
    getData();
  }, []);
  return (
    <div className={styles.collectionDataDiv}>
       <div className={styles.SearchInput}>
       <MdSearch></MdSearch>
        <input type='search' placeholder='Search' className={`${styles.searchBox} border-0`}></input>
       </div>
      {CollectionData &&
        CollectionData.map((data) => (
            <div key={data.id} className={`${styles.checkbox} d-flex w-100 align-items-center p-2`}>

         <input  type='checkbox' value={data.name} className={styles.checkMark}/>
         <div className='d-flex w-100 justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
            <Image src={data.img} alt='img' width={30} height={30} className={`${styles.checkBoxImg} me-2`}/>
            <p className={styles.noMargin}>{data.name}</p>
                </div>
            <p className={styles.noMargin}>{data.value}</p>
         </div>
            </div>
        ))}
    </div>
  )
}
