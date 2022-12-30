import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
