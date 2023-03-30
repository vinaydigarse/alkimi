import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Services from './Services'
import Faq from './faq'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Services/>
    <Faq/>
    </>
  )
}
