import styles from '/styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from "next/router"
import { caroselImage } from '../comp/carosel'

// const inter = Inter({ subsets: ['latin'] })

// pages/about.js
export default function About() {
  return (
    <>
      <Head>
        {/* <div>
          <h1>About Page</h1>
        </div> */}
     
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="viewport" property="og:title" content="Assignment #1 - About Us Page" />
        <meta name="program" property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />  
      </Head>


    <main className={styles.mainContainer}>

        <div className={styles.separator}>
          <h1 className={styles.aboutHeader}>About Us</h1>
          <span className={styles.spanLine}></span>
        </div>
          

        {/* first content area */}
          <div className={styles.aboutContent}>
            <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
            
            <p>Our students gain the technical skills, real-world experience, and problem-solving ability
                  needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
            
            <p>Through close collaboration with industry, our network of alumni and partners continue
                  to achieve global success.</p>

            <h2>Information Sessions</h2>
            
            <p>Information Sessions are a simple way to learn more about a program, related careers,
                  and to get your questions answered by faculty and staff. Learn more about upcoming
                  sessions below.</p>

            <h3>Big Info</h3>
            
            <p>Big Info is the largest program expo and information session at BCIT. It	&#39;s your chance
                  to find out about all our programs &#8211; from business, computing, and health to engineering,
                  trades, and applied sciences.</p>
            
            <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
            
            <h2>Campus Tours</h2>

            <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and
                  get a tst of campus life.</p>
          </div>

        {/* Carousel area */}
        <div className={styles.caroselContainer}>


           {/* Carousel IMGs */}

           <div id="carouselImage">
              <img />

            </div>
            {/* <!-- Slider container --> */}
            <div className={styles.sliderContainer}>

              {/* <!-- slide 1 --> */}
              <div className={styles.slide}>
                <img src="/carousel-images/0.jpg" alt="" />
              </div>

              {/* <!-- slide 2 --> */}
              <div className={styles.slide}>
                <img src="/carousel-images/1.jpg" alt="" />
              </div>

              {/* <!-- slide 3 --> */}
              <div className={styles.slide}>
                <img src="/carousel-images/2.jpg" alt="" />
              </div>

              {/* <!-- slide 4 --> */}
              <div className={styles.slide}>
                <img src="/carousel-images/3.jpg" alt="" />
              </div>

              {/* <!-- slide 5 --> */}
              <div className={styles.slide}>
                <img src="/carousel-images/4.jpg" alt="" />
              </div>

              {/* <!-- slide 6 --> */}
              <div className={styles.slider}>
                <img src="/carousel-images/5.jpg" alt="" />
              </div>

            </div>


            {/* Carousel Arrows */}
            <div className={styles.controlBtns}>
              <img className={styles.preBtn} src="/icons/leftArrow.png" alt="" 
              onClick={() => caroselImage()} 
              />

              <img className={styles.nextBtn} src="/icons/rightArrow.png" alt="" />
            </div>
          </div>

          <div className={styles.departmentsContainer}>

            {/* Departments Title */}
              <div className={styles.separator}>
                <h1 className={styles.depHeader}>Departments</h1>
                <span className={styles.spanLine}></span>
              </div>

            {/* an unordered list of information */}
              <div className={styles.departmentsList}>
                  <ul className={styles.departmentsItems}>
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineerin</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                  </ul>
              </div>

          </div>


          {/* The Arrow Area */}
            <div className={styles.arrowArea}>

            {/* The Upward Arrow */}
              <a href="http://localhost:3000">
                <span>
                  <img src="/icons/upwardArrow.png" width="40rem" />
                </span>
              </a>

            {/* The Downward Arrow */}
              <a href="http://localhost:3000/contact">
                <span>
                  <img src="/icons/downwardArrow.png" width="40rem" />
                </span>
              </a>
          </div>

    </main>

    </>
  )
}
