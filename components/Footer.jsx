import styles from "../styles/Footer.module.css"


export default function Footer() {
    return (

        <div className="">
        <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/">Bosh Sahifa</a>
          <a href="/problem">Muammo Tahlili</a>
          <a href="/solutions">Yechimlar</a>
          <a href="/events">Tadbirlar</a>
          <a href="/resources">Resurslar</a>
          <a href="/collaboration">Hamkorlik</a>
          <a href="/contact">Aloqa</a>

        <div>


        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Suvni Saqlash. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>

    </div>
    );
}