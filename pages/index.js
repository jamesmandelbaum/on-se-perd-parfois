/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h2 sx={{color: 'secondary', fontSize: 36}}>Nicholas Mandelbaum</h2>
      <h1 sx={{color: 'primary', fontSize: 92}}>On se perd parfois</h1>
      <Link href='/lire/chapitre-01'><a>Commencer la lecture →</a></Link>
    </>
  )
}