import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../../styles/Nav.module.scss'

const Nav = () => {
  const {pathname} = useRouter()
  const chapters = ['01','02','03','04','05','06','07','08','09','10']
  console.log(pathname);
  // function isActive() {
  //   console.log(href, path)
  // } 
  
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

export default React.memo(Nav)

