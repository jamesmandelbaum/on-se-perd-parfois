import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../../styles/Nav.module.scss'


const chapters = ['01','02','03','04','05','06','07','08','09','10']

export const Header = () => {
const {pathname} = useRouter()
return( 
      <ul className={styles.ul}>
        <li><Link href='/'><a>←</a></Link></li>
      {chapters.map(
        (chapter) => 
          <li key={chapter}><Link href={`/lire/chapitre-${chapter}`}>
          <a className={pathname === `/lire/chapitre-${chapter}` && styles.active}>{chapter}</a>
          
          </Link>
          </li >
      )}
      </ul>
    
  )
}

export const Footer = () => {
  return(
    <br />
  )
}

