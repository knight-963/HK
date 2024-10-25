import React from 'react'
import Link from 'next/link';
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <>
        <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Suvni Saqlash </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Bosh Sahifa</Link></li>
        <li><Link href="/About">Muammo Tahlili</Link></li>
        <li><Link href="/About">Yechimlar</Link></li>
        <li><Link href="/events">Tadbirlar</Link></li>
        <li><Link href="/resources">Resurslar</Link></li>
        <li><Link href="/collaboration">Hamkorlik</Link></li>
        <li><Link href="/contact">Aloqa</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default About