import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import {useRouter} from "next/router"
import { NavBar } from '../comp/nav.js'
import React, { useState } from 'react'

// pages/index.js
import Link from 'next/link'

export default function Home() {

  const r = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
      if (isOpen === false) {
        setIsOpen(true)
      } else if (isOpen === true) {
          setIsOpen(false)
      }
      console.log("heeeeeerrrrrr")
  }

  return <>
    <Head>
      {/* <Link href="http://localhost:3000/about">About</Link> */}
      <title>Home</title>
      <meta name="author" content="MDIA 2109"></meta>
      <meta property="og:title" content="Assignment #1 - Home Page"></meta>
      <meta property="og:description" content="BCIT Digital Design and Development Diploma"></meta>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main className={styles.main}>

      {/* <nav>
        <Link href="/about">About</Link>
      </nav> */}

      <div className={styles.hamburgerMenu}>
        <img 
          src="/icons/menu-icon.png" 
          width="15%"
          className={isOpen === false ? 
          styles.hamburger : styles.hamburger + ' ' + styles.active}
          onClick={openMenu} 
        />

        {/* <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active}></ul> */}

        {isOpen ? 
        <NavBar /> : null
        }

      </div>

      <img className={styles.hat} 
        src="/icons/graduation-hat.png" 
        width="8%"
      />


      <h1 className={styles.header}>An investment in <br></br> knowledge pays the best <br></br> interest.</h1>

      <div className={styles.separatorLine}></div>

      <p className={styles.homeContent}>Different than a college or university, the British Columbia <br></br> Institute of Technology offers practical, flexible, applied <br></br> education with instructors who have direct, hands-on <br></br> experience in their field.</p>

      <a className={styles.arrowArea}>
        <span>
          <img />
        </span>

        <button className={styles.aboutButton} onClick={
          ()=>r.push("/about")
        }>
          More About Us
        </button>

        <button className={styles.contactButton} onClick={
          ()=>r.push("/contact")
        }>
          Contact Us
        </button>
      </a>
     
    </main>

  </>;
}