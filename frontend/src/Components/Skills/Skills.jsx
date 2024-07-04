import SkillList from '../../Common/SkillList'
import styles from './SkillsStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../Common/ThemeContext'

function Skills() {
  const { theme , toggleTheme} = useTheme();

  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;
  return (
    <section className={styles.container}>
<h1 className={styles.sectionTitle}>Skills</h1>
<div className={styles.SkillList}>
    <SkillList src={checkMarkIcon} skill="HTML"/>
    <SkillList src={checkMarkIcon} skill="CSS"/>
    <SkillList src={checkMarkIcon} skill="JavaScript"/>
    <SkillList src={checkMarkIcon} skill="Node"/>
</div>
<hr/>
<div className={styles.SkillList}>
    <SkillList src={checkMarkIcon} skill="React"/>
    <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
    <SkillList src={checkMarkIcon} skill="Vite"/>
    <SkillList src={checkMarkIcon} skill="Daisy UI"/>
    </div>
    <hr/>
    <div className={styles.SkillList}>
    <SkillList src={checkMarkIcon} skill="React Query"/>
    <SkillList src={checkMarkIcon} skill="Webkit"/>
    <SkillList src={checkMarkIcon} skill="Git"/>
    <SkillList src={checkMarkIcon} skill="Bootstrap"/>
    </div>
    <hr/>
    <div className={styles.SkillList}>
    <SkillList src={checkMarkIcon} skill="Mongo DB"/>
    <SkillList src={checkMarkIcon} skill="Firebase"/>
    <SkillList src={checkMarkIcon} skill="NoSQL"/>
    <SkillList src={checkMarkIcon} skill="AWS"/>
    </div>
    <hr/>
    </section>
  )
}

export default Skills