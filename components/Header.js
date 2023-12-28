
import { Inter } from 'next/font/google'
// import styles from './Footer.module.css'
import Link from 'next/link'
import style from './Header.module.css'
const inter = Inter({ subsets: ['latin'] })

export function Header() {
    return (
      <header className={style.header}>
          <Link href="/" legacyBehavior>
              <a className={style.anchor}>Index</a>
          </Link>
          <Link href="/about" legacyBehavior>
              <a className={style.anchor}>About</a>
          </Link>
      </header>
    )
  }
  
