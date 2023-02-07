import Link from 'next/link';
import Router, { useRouter } from "next/router"
import React, { useState } from 'react'
import styles from '/styles/Home.module.css'
import Head from 'next/head'

export function NavBar() {


    return <>


    <nav className={styles.navBar}>
        <img className={styles.circleNav}
          src="/background-images/menuBackground.png" 
          width="80%"
        />
     


        <ul className={styles.listContainer}>
            <li className={styles.listItem}>
                <Link href='/' >
                    Home
                </Link>
            </li>

            <li className={styles.listItem}>
                <Link href='/about'>
                    About
                </Link>
            </li>

            <li className={styles.listItem}>
                <Link href='/contact'>
                    Contact
                </Link>
            </li>
        </ul>

    </nav>
    

    </>
    

}

// export default NavBar()


// function NavBar() {
//     const [click, setClick] = React.useState(false);
//     const handleClick = () => setClick(!click);
//     return (
//       <>
//         <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
//           <Icon clicked={click}>&nbsp;</Icon>
//         </MenuLabel>
//         <NavBackground clicked={click}>&nbsp;</NavBackground>
  
//         <Navigation clicked={click}>
//           <List>
//             <li>
//               <ItemLink onClick={handleClick} to="/">
//                 Home
//               </ItemLink>
//             </li>
//             <li>
//               <ItemLink onClick={handleClick} to="/about">
//                 About
//               </ItemLink>
//             </li>
//             <li>
//               <ItemLink onClick={handleClick} to="/contact">
//                 Portfolio
//               </ItemLink>
//             </li>
//           </List>
//         </Navigation>
//       </>
//     );
//   }
  






