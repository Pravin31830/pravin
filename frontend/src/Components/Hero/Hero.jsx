import styles from './HeroStyles.module.css'
import heroimg from '../../assets/heroimg.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import TwitterLight from '../../assets/twitter-light.svg'
import GithubLight from '../../assets/github-light.svg'
import LinkedinLight from '../../assets/linkedin-light.svg'
import TwitterDark from '../../assets/twitter-dark.svg'
import GithubDark from '../../assets/github-dark.svg'
import LinkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../Common/ThemeContext'
import checkMarkLight from '../../assets/checkmark-light.svg'

function Hero() {
    const { theme , toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const TwitterIcon = theme === 'light' ? TwitterLight : TwitterDark;
    const GithubIcon = theme === 'light' ? GithubLight : GithubDark;
    const LinkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;


  return (
    <section id='hero' className={styles.container}>
<div className={styles.colorModeContainer}>
   <img className={styles.hero} src={heroimg} alt='Profile-Pic-Pravin'/>
    <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme} alt='color modeicon'/>
</div>
<div className={styles.info}>
    <h1>Pravin
        <br/>
        Arulraj
    </h1>
    <h2>Full Stack Developer</h2>
    <span>
        <a href='https://x.com/Pravin3183' target='_blank'>
            <img src={TwitterIcon} alt='Twitter'/>
        </a>
        <a href='https://github.com/Pravin31830' target='_blank'>
            <img src={GithubIcon} alt='github'/>
        </a>
        <a href='https://www.linkedin.com/in/pravin-arulraj-70373b318/' target='_blank'>
            <img src={LinkedinIcon} alt='Linkedin'/>
        </a>
    </span>
    <p className={styles.description}>Newly graduated MERN stack developer, equipped with the latest front-end and back-end technologies, seeking an opportunity to contribute to innovative software projects.</p>
    <a href={CV} download>
    <button className='hover' >Resume</button>
    </a>
</div>
    </section>
  )
}

export default Hero;