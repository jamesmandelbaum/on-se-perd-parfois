import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <h1>On se perd parfois</h1>
      <h2>Nicholas Mandelbum</h2>
      <ul>
        <li><Link href='/lire/chapitre-01'><a>Chapitre 1</a></Link></li>
        <li><Link href='/lire/chapitre-02'><a>Chapitre 2</a></Link></li>
        <li><Link href='/lire/chapitre-03'><a>Chapitre 3</a></Link></li>
        <li><Link href='/lire/chapitre-04'><a>Chapitre 4</a></Link></li>
        <li><Link href='/lire/chapitre-05'><a>Chapitre 5</a></Link></li>
        <li><Link href='/lire/chapitre-06'><a>Chapitre 6</a></Link></li>
        <li><Link href='/lire/chapitre-07'><a>Chapitre 7</a></Link></li>
        <li><Link href='/lire/chapitre-08'><a>Chapitre 8</a></Link></li>
        <li><Link href='/lire/chapitre-09'><a>Chapitre 9</a></Link></li>
        <li><Link href='/lire/chapitre-10'><a>Chapitre 10</a></Link></li>
      </ul>
    </>
  )
}
