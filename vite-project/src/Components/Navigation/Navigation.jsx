import React from 'react'
import styles from './Nevigation.module.css'

function Navigation() {
  console.log(styles)
  return (
    <nav className={`${styles.navigation} container ` }>
        <div className='logo'>
        <img src="./Images/Frame 2 1.png" alt="" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navigation