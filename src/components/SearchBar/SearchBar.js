'use client'

import styles from './SearchBar.module.css'


import { MdSearch } from "react-icons/md";
export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
        <MdSearch></MdSearch>
        <input type='search' placeholder='Search' className={styles.SearchInput}></input>
        <div className={styles.Slash}>/</div>
    </div>
  )
}
