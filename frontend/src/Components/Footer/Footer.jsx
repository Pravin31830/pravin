import styles from './FooterStyle.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&#169; 2024 Pravin Arulraj.
            <br/>
            All Rights Reserved.
        </p>
    </section>
  )
}

export default Footer