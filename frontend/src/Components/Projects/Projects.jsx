import styles from './ProjectsStyles.module.css'
import Zdark from '../../assets/Z-dark.png'
import ProjectsCard from '../../Common/ProjectsCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectsCard 
            src={Zdark} 
            href='https://z-x-clone.onrender.com'
            h3="Z(X-Clone)"
            p="Socialmedia app"
            />
        </div>
    </section>
  )
}

export default Projects