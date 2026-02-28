import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: 'CineVerse',
        description: 'A comprehensive movie platform providing the latest movie information. Built with the MERN stack with complete API integration and secure Google authentication.',
        image: '/cineverse-screenshot.png',
        tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Google Auth', 'REST API'],
        liveLink: 'https://cine-verse-omega-seven.vercel.app/',
        githubLink: 'https://github.com/SudiptaBaidya/CineVerse'
    }
];

export default function Projects() {
    return (
        <section className={styles.projectsSection} id="projects">
            <div className="section-container">
                <h2 className="section-title">Featured Projects</h2>

                <div className={styles.projectGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={`glass-panel ${styles.projectCard}`}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.projectImage}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.imageOverlay}>
                                    <div className={styles.projectLinks}>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.linkBtn} aria-label="Live Demo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.linkBtn} aria-label="GitHub Repository">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.projectContent}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.techTags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.techTag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
