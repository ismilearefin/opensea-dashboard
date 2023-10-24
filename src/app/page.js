import Navbar from '@/components/navbar/Navbar'
import styles from './page.module.css'
import { MdOutlineFilterList } from 'react-icons/md'


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      {/* filter-toggle Button */}
      <div className={styles.buttonDivFilter}>
        <button className={styles.filterToggle}>
          <MdOutlineFilterList></MdOutlineFilterList>
        </button>
      </div>
    </main>
  )
}
