import React from 'react'
import styles from './Footer.module.css'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




function Footer() {
  return (
    <div className={styles.footerContainer}>
    <div className={styles.footerInner}>
        <div className={styles.footerColumn}>
        <h3 className={styles.headingColumn}>EDYODA</h3>
        <a>Conatct Us</a>
        <a>Term of Use</a>
        <a>Privacy Policy</a>
        </div>
        <div className={styles.footerColumn}>
        <h3 className={styles.headingColumn}>RESOURCES</h3>
        <a>Learning Paths</a>
        <a>Courses</a>
        <a>Educators</a>
        <a>Edyoda Stories</a>
        <a>University</a>
       
        </div>
        <div className={styles.footerColumn}>
        <h3 className={styles.headingColumn}>FOR ENTERPRISES</h3>
        <a>Train Your Employees</a>
        <h3 className={styles.links}>QUICK LINKS</h3>
        <a>Learn and Earn</a>
        <a>Become a Learning-Enabler</a>
        <a>Tips for Learning-Enabler</a>
        <a>Certification</a>
        <a>Affiliate program</a>
        </div>
        <div className={styles.footerColumn}>
        <h3 className={styles.headingColumn}>CONNECT</h3>
        <a>2nd Floor #188,Survey No.-123/1,</a>
        <a>Incubes Building Next to McDonalds,</a>
        <a>ITPL Main Rd,Brookefield,y</a>
        <a>Bengaluru,Karnataka-560037,</a>
        <a>India</a>
        <a> <EmailIcon/> hello@edyoda.com</a>
        <a> <LocationOnIcon/> <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/> </a>
<a> @2022 <br/> zekeLabs Technologies Private Limited</a>
        </div>
        

    </div>
      
    </div>
  )
}

export default Footer
