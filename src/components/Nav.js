import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../../styles/Nav.module.scss'


const chapters = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']


export const Header = () => {
const { pathname } = useRouter()
return( 
  <ul className={styles.ul}>
        <li><Link href='/'><a>←</a></Link></li>
      {chapters.map(
        (chapter) => 
        <li key={chapter}><Link href={`/lire/chapitre-${chapter}`}>
          <a className={pathname === `/lire/chapitre-${chapter}` ? styles.active : undefined}>{chapter}</a>       
          </Link>
          </li >
      )}
      </ul>
    )
  }
  
export const Footer = () => {
  const { pathname } = useRouter()
  const index = pathname.slice(-2);
  const next = chapters.indexOf(index) + 1
  const linkToNext = chapters[next];
  return (
    <div className={styles.footer}>
      { linkToNext && <Link href={`/lire/chapitre-${linkToNext}`}><a>→ Chapitre suivant</a></Link>}
    </div>
  )

}

