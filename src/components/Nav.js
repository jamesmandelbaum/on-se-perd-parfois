import Link from 'next/link';
import styles from '../../styles/Nav.module.scss'

const Nav = () => {
return( 
    <div className={styles.nav}>
      <div className={styles.title}>
        <Link href='/'><a>←</a></Link>
        <h1>On se perd parfois </h1>
        <h2>Nicholas Mandelbaum</h2>
      </div>
      <ul className={styles.ul}>
        <li><Link href='/lire/chapitre-01'><a>1</a></Link></li>
        <li><Link href='/lire/chapitre-02'><a>2</a></Link></li>
        <li><Link href='/lire/chapitre-03'><a>3</a></Link></li>
        <li><Link href='/lire/chapitre-04'><a>4</a></Link></li>
        <li><Link href='/lire/chapitre-05'><a>5</a></Link></li>
        <li><Link href='/lire/chapitre-06'><a>6</a></Link></li>
        <li><Link href='/lire/chapitre-07'><a>7</a></Link></li>
        <li><Link href='/lire/chapitre-08'><a>8</a></Link></li>
        <li><Link href='/lire/chapitre-09'><a>9</a></Link></li>
        <li><Link href='/lire/chapitre-10'><a>10</a></Link></li>
      </ul>
    </div>
  )
}

export default Nav