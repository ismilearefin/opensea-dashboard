import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'
import { MdWallet,MdOutlineAccountCircle,MdOutlineShoppingCart } from "react-icons/md";


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarBox}>
        <div className={styles.logo}>
            <Image src='/logo/opensea-logo.svg' alt='logo' width={50} height={50}></Image>
            <h1>OpenSea</h1>
        </div>
        <div className={styles.menu}>
            <div className={styles.verticalLine}></div>
            <Link href='/'>Drops</Link>
            <Link href='/'>Stats</Link>
            <Link href='/'>Create</Link>
        </div>
        </div>
        <div className={styles.SearchBarDiv}>
        <SearchBar></SearchBar>
        </div>
        <div className={styles.buttonBox}>
            <button className={styles.buttons}>
                <MdWallet></MdWallet>
                <p>Login</p>
            </button>
            <button className={styles.buttons}>
                <MdOutlineAccountCircle></MdOutlineAccountCircle>
            </button>
            <button className={styles.buttons}>
                <MdOutlineShoppingCart></MdOutlineShoppingCart>
            </button>
        </div>
    </nav>
  )
}
