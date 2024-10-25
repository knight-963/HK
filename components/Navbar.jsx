import Link from "next/link";
import styles from "../styles/Navbar.module.css"
<<<<<<< HEAD
=======

>>>>>>> 4fcd18e8999bca181c7158eb3cf3f9543556bf75

export default function Navbar() {
    return (
      <div>
<<<<<<< HEAD
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/"><img src="logo.png" className="h-[60px]" alt="" /></Link>
=======
        <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Suvni Saqlash </Link>
>>>>>>> 4fcd18e8999bca181c7158eb3cf3f9543556bf75
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
<<<<<<< HEAD

    <div>
    <img src="p1.jpg" className="w-[100%] h-[600px]" alt="" />
    <h1 className="text-5xl text-center text-sky-200 mt-[-330px]">Suvni Tejang</h1>
    </div>    

=======
>>>>>>> 4fcd18e8999bca181c7158eb3cf3f9543556bf75
      </div>
    );
  }
  