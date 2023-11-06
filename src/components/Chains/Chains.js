import { useEffect, useState } from 'react';
import styles from './Chains.module.css';
import Image from 'next/image';

export default function Chains() {
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
       
      {CollectionData &&
        CollectionData.map((data) => (
            <div key={data.id} className={`${styles.checkbox} d-flex w-100 align-items-center p-2`}>

         <input  type='checkbox' value={data.name} className={styles.checkMark}/>
         <div className='d-flex w-100 justify-content-between align-items-center'>
            <div className='d-flex align-items-center w-100'>
            <Image src={data.img} alt='img' width={35} height={35} className={`${styles.checkBoxImg} me-4`}/>
            <p className={styles.noMargin}>{data.name}</p>
                </div>
            
         </div>
            </div>
        ))}
    </div>
  )
}
