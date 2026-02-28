import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.about} id="about">
            <div className="section-container">
                <h2 className="section-title">About Me</h2>

                <div className={styles.content}>
                    <div className={`glass-panel ${styles.card}`}>
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/godavari-logo.png"
                                alt="Godavari Global University Logo"
                                width={60}
                                height={60}
                                style={{ borderRadius: '50%', objectFit: 'cover' }}
                            />
                        </div>
                        <h3>Education</h3>
                        <p>B.Tech Computer Science Engineering (2nd Year)</p>
                        <p className={styles.highlight}>Godavari Global University</p>
                    </div>

                    <div className={styles.textContent}>
                        <p>
                            I am a passionate Computer Science Engineering student currently in my second year,
                            specializing in full-stack web development.
                        </p>
                        <p>
                            With hands-on experience in Java, Python, SQL, Docker, and MongoDB Atlas, I
                            continuously explore new technologies and AI tools to enhance my development workflow.
                        </p>
                        <p>
                            I am currently focused on improving backend architecture, deployment strategies, and
                            building real-world projects to prepare myself for professional software engineering roles.
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>10+</span>
                                <span className={styles.statLabel}>Projects<br />Completed</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>Technologies<br />Mastered</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>24/7</span>
                                <span className={styles.statLabel}>Passion for<br />Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
