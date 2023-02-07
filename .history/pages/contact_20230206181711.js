import styles from '/styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from "next/router"

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta name="viewport" property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta name="program" property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.mainContact}>

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
                <div>
                <div className={styles.separatorContact}>
                    <span className={styles.spanContact}></span>
                    <h1 className={styles.contactHeader}>Contact Us</h1>
                    <span className={styles.spanContact}></span>
                </div>

                    <p>Want to discuss? Lets chat!</p>

                    <div className={styles.formContainer}>
                        <form>
                            {/* Count fieldsets in form */}
                            <fieldset >

                                {/* Count table in form */}
                                <table>

                                    {/* Count thead in form */}
                                    <thead>

                                        {/* Count tr in first thead */}
                                        <tr>
                                            <th scope="col">First Name:</th>
                                            <th scope="col">Last Name:</th>
                                        </tr>
                                        
                                        
                                    
                                        <th scope="row"><input type="text" id="firstName" placeholder="First Name Here"></input></th>
                                        <th scope="row"><input type="text" id="lastName" placeholder="Last Name Here"></input></th>

                                        
                                    </thead>


                                    <thead>

                                        <tr>
                                            <th scope="col">Email:</th>
                                        </tr>
                                        
                                        <th scope="row"> <input type="email" id="email" placeholder="Email Here"></input></th>
                                    
                                    </thead>

                                </table>
                            </fieldset>
                        </form>

                    </div>

                    {/* Submit Button */}
                    <div className={styles.submitBtn}>
                        <button>Submit</button>
                    </div>

                    <div className={styles.arrow}>
                        <a href="http://localhost:3000/about">
                            <span>
                                <img src="/icons/upwardArrow.png" width="40rem" />
                            </span>
                        </a>
                    </div>


                </div>


            </main>
        </div>
    )
}