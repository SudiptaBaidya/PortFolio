import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section className={styles.experienceSection} id="experience">
            <div className="section-container">
                <h2 className="section-title">Experience</h2>

                <div className={styles.timeline}>
                    <div className={`glass-panel ${styles.timelineItem}`}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineContent}>
                            <div className={styles.header}>
                                <div>
                                    <h3>Software Engineering Intern / Freelancer</h3>
                                    <h4>Actively Seeking Opportunities</h4>
                                </div>
                                <span className={styles.date}>Present</span>
                            </div>

                            <p className={styles.description}>
                                I am currently looking for internship roles and freelance projects where I can apply my skills in front-end and back-end development. I am passionate about building scalable web applications and continuously learning new modern technologies.
                            </p>

                            <div className={styles.skills}>
                                <span className={styles.skillTag}>Full-Stack Development</span>
                                <span className={styles.skillTag}>Next.js</span>
                                <span className={styles.skillTag}>React</span>
                                <span className={styles.skillTag}>Node.js</span>
                                <span className={styles.skillTag}>Problem Solving</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
